// web/lib/chains.ts
import { defineChain } from "viem";

const RPC =
  process.env.NEXT_PUBLIC_RPC_URL ?? "https://rpc.sepolia-api.lisk.com";
const EXPLORER =
  process.env.NEXT_PUBLIC_EXPLORER_BASE ?? "https://sepolia-blockscout.lisk.com";

export const liskSepolia = defineChain({
  id: 4202,
  name: "Lisk Sepolia",
  nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
  rpcUrls: { default: { http: [RPC] } },
  blockExplorers: { default: { name: "Blockscout", url: EXPLORER } },
  testnet: true
});
