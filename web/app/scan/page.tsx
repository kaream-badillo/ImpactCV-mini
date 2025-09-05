// web/app/scan/page.tsx
"use client";

import { useAccount, useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { liskSepolia } from "../../lib/chains";
import { ERC1155_ABI } from "../../lib/abi";

const CONTRACT = process.env.NEXT_PUBLIC_BADGES_CONTRACT as `0x${string}`;
const EXPLORER =
  process.env.NEXT_PUBLIC_EXPLORER_BASE || "https://sepolia-blockscout.lisk.com";

export default function Scan() {
  const { address } = useAccount();
  const { writeContract, data: txHash, isPending, error } = useWriteContract();
  const receipt = useWaitForTransactionReceipt({
    hash: txHash,
    chainId: liskSepolia.id,
  });

  const mint = () =>
    writeContract({
      abi: ERC1155_ABI,
      address: CONTRACT,
      functionName: "mintSelf",
      chainId: liskSepolia.id,
      args: [1n, 1n], // badge #1, amount 1
    });

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="card p-6 space-y-3">
        <h2 className="text-xl font-semibold">Mint badge #1</h2>
        <button
          disabled={!address || isPending}
          className="btn-primary disabled:opacity-50"
          onClick={mint}
        >
          {isPending ? "Minting..." : "Mint to my wallet"}
        </button>
        {error && (
          <p className="text-sm" style={{ color: "var(--danger)" }}>
            {String((error as any).shortMessage || (error as any).message)}
          </p>
        )}
        {!address && (
          <p className="text-sm" style={{ color: "var(--muted)" }}>Connect your wallet first.</p>
        )}
      </div>

      <div className="card p-6 space-y-3">
        <h3 className="font-semibold">Transaction</h3>
        {!txHash ? (
          <p style={{ color: "var(--muted)" }}>No tx yet.</p>
        ) : (
          <div className="flex items-center gap-3">
            <span className="pill">Tx: {`${txHash.slice(0, 6)}…${txHash.slice(-4)}`}</span>
            <a
              href={`${EXPLORER}/tx/${txHash}`}
              target="_blank"
              className="btn-ghost"
              rel="noreferrer"
            >
              Open in Blockscout
            </a>
          </div>
        )}
        {receipt.data && (
          <p style={{ color: "var(--success)" }}>
            Confirmed in block {receipt.data.blockNumber.toString()}.
          </p>
        )}
      </div>
    </div>
  );
}
