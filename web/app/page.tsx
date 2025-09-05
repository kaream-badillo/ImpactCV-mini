// web/app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="space-y-6">
        <h1 className="h1">
          Your invisible actions, now <span className="grad">verifiable onchain</span>
        </h1>
        <p className="lead max-w-3xl">
          Mini demo: mint a badge on Lisk Sepolia and view it in your profile.
        </p>
        <div className="flex gap-3">
          <Link href="/scan" className="btn-primary">Scan & Mint Badge</Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-5">
        <div className="card p-6">
          <div className="font-semibold">Badges</div>
          <p className="mt-2" style={{ color: "var(--muted)" }}>ERC-1155 on Lisk.</p>
        </div>
        <div className="card p-6">
          <div className="font-semibold">Transactions</div>
          <p className="mt-2" style={{ color: "var(--muted)" }}>Show tx hash + open Blockscout.</p>
        </div>
        <div className="card p-6">
          <div className="font-semibold">ENS</div>
          <p className="mt-2" style={{ color: "var(--muted)" }}>Read-only name on profile.</p>
        </div>
      </section>
    </div>
  );
}
