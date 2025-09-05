// web/lib/abi.ts
export const ERC1155_ABI = [
    {
      type: "function",
      name: "mintSelf",
      stateMutability: "nonpayable",
      inputs: [
        { name: "id", type: "uint256" },
        { name: "amount", type: "uint256" }
      ],
      outputs: []
    },
    {
      type: "function",
      name: "balanceOfBatch",
      stateMutability: "view",
      inputs: [
        { name: "accounts", type: "address[]" },
        { name: "ids", type: "uint256[]" }
      ],
      outputs: [{ type: "uint256[]" }]
    }
  ] as const;
  