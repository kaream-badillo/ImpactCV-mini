// web/app/profile/[addr]/page.tsx
import { createPublicClient, http } from "viem";
import { liskSepolia } from "../../../lib/chains";
import { ERC1155_ABI } from "../../../lib/abi";
import { getEnsName } from "../../../lib/ens";

const CONTRACT = process.env.NEXT_PUBLIC_BADGES_CONTRACT as `0x${string}`;

if (!CONTRACT || CONTRACT === '0x...') {
  throw new Error('NEXT_PUBLIC_BADGES_CONTRACT not configured');
}

const short = (a: string) => `${a.slice(0, 6)}…${a.slice(-4)}`;

export default async function Profile({
  params,
}: {
  params: { addr: string };
}) {
  const addr = params.addr as `0x${string}`;
  const name = await getEnsName(addr).catch(() => null);

  const client = createPublicClient({
    chain: liskSepolia,
    transport: http(liskSepolia.rpcUrls.default.http[0]),
  });

  const ids = [1n, 2n, 3n];
  const accounts = Array(ids.length).fill(addr);
  let balances: readonly bigint[] = [];

  try {
    balances = await client.readContract({
      abi: ERC1155_ABI,
      address: CONTRACT,
      functionName: "balanceOfBatch",
      args: [accounts, ids],
    });
  } catch (e: any) {
    return (
      <div className="space-y-4">
        <span className="pill">{name ?? short(addr)}</span>
        <p style={{ color: "var(--danger)" }}>
          Error leyendo balances: {String(e?.shortMessage || e?.message || e)}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <header className="flex items-center justify-between">
        <span className="pill">{name ?? short(addr)}</span>
        <a className="btn-ghost" href="/scan">
          Mint another
        </a>
      </header>

      <div className="grid sm:grid-cols-3 gap-4">
        {ids.map((id, i) => (
          <div key={id.toString()} className="card p-5">
            <div className="font-semibold">Badge #{id.toString()}</div>
            <div className="mt-1" style={{ color: "var(--muted)" }}>
              Balance: {balances[i]?.toString?.() ?? "0"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
