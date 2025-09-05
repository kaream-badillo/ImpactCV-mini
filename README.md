https://github.com/kaream-badillo/ImpactCV-mini.git# 🎯 ImpactCV-mini

**MVP Web3 Full-Stack** - Sistema de badges/achievements on-chain con integración ENS y multi-chain.

## 🚀 Demo

- **Live Demo:** [impact-cv-mini-git-main-kareams-projects.vercel.app](https://impact-cv-mini-git-main-kareams-projects.vercel.app)
- **Local Development:** [localhost:3000](http://localhost:3000)
- **Blockchain:** Lisk Sepolia Testnet
- **Explorer:** [Blockscout](https://sepolia-blockscout.lisk.com)

## ✨ Features

- 🔗 **Wallet Connection** - MetaMask integration
- 🏆 **Badge Minting** - ERC-1155 tokens on Lisk
- 👤 **Profile System** - Dynamic routes `/profile/[address]`
- 📊 **Transaction Tracking** - Real-time status
- 🌐 **ENS Resolution** - Human-readable names
- 📱 **Responsive Design** - Mobile-first UI

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** (App Router)
- **React 19** + **TypeScript**
- **Tailwind CSS v4**
- **wagmi** + **viem** (Web3)

### Blockchain
- **Solidity 0.8.24**
- **ERC-1155** (Multi-token)
- **OpenZeppelin** (Security)
- **Hardhat** (Development)

### Integrations
- **ENS** (Ethereum Name Service)
- **Lisk Sepolia** (Testnet)
- **Blockscout** (Explorer)

## 🏗️ Architecture

```
impactcv-mini/
├── contracts/          # Smart contracts
│   ├── contracts/      # Solidity files
│   ├── scripts/        # Deploy scripts
│   └── hardhat.config.ts
├── web/               # Next.js frontend
│   ├── app/           # App Router pages
│   ├── lib/           # Utilities & config
│   └── package.json
└── README.md
```

## 🚀 Quick Start

### 1. Install Dependencies

```bash
# Smart contracts
cd contracts
npm install

# Frontend
cd ../web
npm install
```

### 2. Environment Setup

Create `.env.local` in `web/`:
```env
NEXT_PUBLIC_RPC_URL=https://rpc.sepolia-api.lisk.com
NEXT_PUBLIC_CHAIN_ID=4202
NEXT_PUBLIC_BADGES_CONTRACT=0x... # Deploy contract first (see deployment section)
NEXT_PUBLIC_EXPLORER_BASE=https://sepolia-blockscout.lisk.com
```

**📋 Contract Address (after deployment):**
- **Badges Contract:** `0x...` (generated after `npm run deploy:lisk`)
- **Network:** Lisk Sepolia (Chain ID: 4202)
- **Explorer:** [Blockscout](https://sepolia-blockscout.lisk.com)

### 3. Deploy Smart Contract

```bash
cd contracts
npm run deploy:lisk
```

**📝 After deployment, copy the contract address to your `.env.local`:**
```bash
# Example output:
# Badges deployed: 0x1234567890abcdef1234567890abcdef12345678
# Copy this address to NEXT_PUBLIC_BADGES_CONTRACT in web/.env.local
```

### 4. Start Development

```bash
cd web
npm run dev
```

Visit [localhost:3000](http://localhost:3000) or check the [Live Demo](https://impact-cv-mini-git-main-kareams-projects.vercel.app)

## 📋 Usage

1. **Connect Wallet** - Click "Connect" in navbar
2. **Mint Badge** - Go to `/scan` and mint badge #1
3. **View Profile** - Click "Profile" to see your badges
4. **Verify on Explorer** - Click "Open in Blockscout" to verify transaction

## 🔧 Development

### Smart Contracts
```bash
cd contracts
npm run compile    # Compile contracts
npm run test       # Run tests
npm run deploy:lisk # Deploy to Lisk Sepolia
```

### Frontend
```bash
cd web
npm run dev        # Development server
npm run build      # Production build
npm run start      # Production server
```

## 🌐 Blockchain Details

- **Network:** Lisk Sepolia Testnet
- **Chain ID:** 4202
- **RPC:** https://rpc.sepolia-api.lisk.com
- **Explorer:** https://sepolia-blockscout.lisk.com
- **Native Token:** ETH

## 📝 Smart Contract

**Badges.sol** - ERC-1155 Multi-token contract:
- `mintSelf(id, amount)` - Mint badges to your wallet
- `balanceOfBatch(accounts, ids)` - Check multiple balances
- Metadata: IPFS (`ipfs://badge-meta/{id}.json`)

## 🎨 Design System

- **Design Tokens** - CSS custom properties
- **Component Library** - Reusable UI components
- **Accessibility** - WCAG compliance
- **Responsive** - Mobile-first design

## 🔒 Security

- **OpenZeppelin** - Battle-tested contracts
- **Type Safety** - TypeScript end-to-end
- **Error Handling** - Robust error states
- **Environment Variables** - Secure configuration

## 📊 Skills Demonstrated

### Blockchain
- Solidity, ERC-1155, OpenZeppelin, Hardhat, Multi-chain

### Frontend
- Next.js 15, React 19, TypeScript, Tailwind v4, App Router

### Web3
- wagmi, viem, ENS, Block explorers, Error handling

### Architecture
- Monorepo, Type safety, Environment configs, SSR/SSG

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OpenZeppelin](https://openzeppelin.com/) - Smart contract security
- [wagmi](https://wagmi.sh/) - React hooks for Ethereum
- [viem](https://viem.sh/) - TypeScript interface for Ethereum
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS

---

**Built with ❤️ for the Web3 ecosystem**
