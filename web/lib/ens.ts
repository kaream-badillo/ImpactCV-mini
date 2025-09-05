// impactcv-mini/web/lib/ens.ts
import { createPublicClient, http } from "viem";
import { mainnet } from "viem/chains";

// Cliente público a Ethereum mainnet (para resolver ENS)
const eth = createPublicClient({
  chain: mainnet,
  transport: http(), // usa RPC público por defecto
});

// Devuelve el nombre ENS para una address (o null si no hay)
export async function getEnsName(address: `0x${string}`): Promise<string | null> {
  try {
    return await eth.getEnsName({ address });
  } catch {
    return null;
  }
}

// Devuelve la address para un nombre ENS (ej: "vitalik.eth"), o null
export async function resolveEns(name: string): Promise<`0x${string}` | null> {
  try {
    const addr = await eth.getEnsAddress({ name });
    return addr ?? null;
  } catch {
    return null;
  }
}

// Avatar ENS (si el nombre tiene uno configurado), o null
export async function getEnsAvatar(name: string): Promise<string | null> {
  try {
    return await eth.getEnsAvatar({ name });
  } catch {
    return null;
  }
}

// Helper para acortar direcciones 0x
export const short = (a: string) => `${a.slice(0, 6)}…${a.slice(-4)}`;
