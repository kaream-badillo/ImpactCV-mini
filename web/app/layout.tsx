// web/app/layout.tsx
import './globals.css'
import { Providers, ConnectButton, ProfileLink } from "../lib/wagmi";
import Link from "next/link";
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <header className="navbar">
            <div className="container h-16 flex items-center justify-between">
              <Link href="/" className="no-underline flex items-center gap-2">
                <div className="h-8 w-8 rounded-xl" style={{ background: "linear-gradient(90deg,var(--accent),var(--accent-alt))" }} />
                <strong>ImpactCV-mini</strong>
              </Link>
              <nav className="flex items-center gap-2">
                <Link className="btn-ghost" href="/scan">Scan</Link>
                <ProfileLink />
                <ConnectButton />
              </nav>
            </div>
          </header>

          <main className="py-10">
            <div className="container">{children}</div>
          </main>

          <footer className="border-t border-zinc-200">
            <div className="container py-6 text-sm flex items-center justify-between" style={{ color: "var(--muted)" }}>
              <span>© {new Date().getFullYear()} ImpactCV-mini</span>
              <div className="flex gap-2">
                <a className="pill no-underline" href="https://lisk.com" target="_blank" rel="noreferrer">Lisk</a>
                <a className="pill no-underline" href="https://ens.domains" target="_blank" rel="noreferrer">ENS</a>
              </div>
            </div>
          </footer>
        </Providers>
      </body>
    </html>
  );
}
