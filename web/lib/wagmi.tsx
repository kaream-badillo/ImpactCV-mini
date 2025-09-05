// web/lib/wagmi.tsx
"use client";

import React, { useEffect, useState } from "react";
import { WagmiProvider, createConfig, http, useAccount, useConnect, useDisconnect } from "wagmi";
import { injected } from "wagmi/connectors";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Link from "next/link";
import { liskSepolia } from "./chains";

// --- wagmi config ---
export const wagmiConfig = createConfig({
  chains: [liskSepolia],
  connectors: [injected()],
  transports: { [liskSepolia.id]: http(liskSepolia.rpcUrls.default.http[0]) },
});

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}

// --- Botón Connect con anti-mismatch ---
export function ConnectButton() {
  const { address, isConnected } = useAccount();
  const { connect, connectors, status } = useConnect();
  const { disconnect } = useDisconnect();
  const injectedConnector = connectors.find((c) => c.id === "injected");

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Placeholder idéntico durante SSR para evitar mismatch
  if (!mounted) {
    return (
      <button className="btn-ghost" aria-hidden suppressHydrationWarning>
        Connect
      </button>
    );
  }

  if (!injectedConnector) {
    return (
      <a
        className="btn-ghost"
        href="https://metamask.io/download/"
        target="_blank"
        rel="noreferrer"
      >
        Install MetaMask
      </a>
    );
  }

  if (isConnected && address) {
    const short = `${address.slice(0, 6)}…${address.slice(-4)}`;
    return (
      <button className="btn-ghost" onClick={() => disconnect()}>
        <span suppressHydrationWarning>{short}</span>
      </button>
    );
  }

  return (
    <button
      className="btn-ghost"
      onClick={() => connect({ connector: injectedConnector })}
      disabled={status === "pending"}
    >
      {status === "pending" ? "Connecting..." : "Connect"}
    </button>
  );
}

// --- Link al perfil cuando hay address (con anti-mismatch) ---
export function ProfileLink({
  className = "btn-ghost",
  label = "My Profile",
}: {
  className?: string;
  label?: string;
}) {
  const { address } = useAccount();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  if (!address) return null;
  return (
    <Link href={`/profile/${address}`} className={className}>
      {label}
    </Link>
  );
}
