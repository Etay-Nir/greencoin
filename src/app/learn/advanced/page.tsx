import Link from 'next/link';

export default function AdvancedGuidePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 bg-background-card border-b border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-text-primary mb-4">
              Advanced Cryptocurrency Topics
            </h1>
            <p className="text-text-secondary text-lg">
              Deep dive into complex cryptocurrency technologies, advanced trading strategies,
              and emerging blockchain innovations.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* DeFi Deep Dive */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold text-text-primary mb-4">
                DeFi Deep Dive
              </h2>
              <p className="text-text-secondary mb-4">
                Comprehensive analysis of decentralized finance protocols, yield farming, and liquidity provision.
              </p>
              <Link 
                href="/learn/advanced/defi"
                className="text-primary hover:text-primary/80"
              >
                Read More →
              </Link>
            </div>

            {/* NFTs & Digital Assets */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold text-text-primary mb-4">
                NFTs & Digital Assets
              </h2>
              <p className="text-text-secondary mb-4">
                Understanding NFT technology, markets, creation, and advanced trading strategies.
              </p>
              <Link 
                href="/learn/advanced/nfts"
                className="text-primary hover:text-primary/80"
              >
                Read More →
              </Link>
            </div>

            {/* Layer-2 Solutions */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold text-text-primary mb-4">
                Layer-2 Solutions
              </h2>
              <p className="text-text-secondary mb-4">
                Exploring scaling solutions, rollups, sidechains, and state channels.
              </p>
              <Link 
                href="/learn/advanced/layer2"
                className="text-primary hover:text-primary/80"
              >
                Read More →
              </Link>
            </div>

            {/* Advanced Trading */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold text-text-primary mb-4">
                Advanced Trading Strategies
              </h2>
              <p className="text-text-secondary mb-4">
                Complex trading techniques, arbitrage opportunities, and algorithmic trading.
              </p>
              <Link 
                href="/learn/advanced/trading"
                className="text-primary hover:text-primary/80"
              >
                Read More →
              </Link>
            </div>

            {/* On-Chain Analysis */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold text-text-primary mb-4">
                On-Chain Analysis
              </h2>
              <p className="text-text-secondary mb-4">
                Using blockchain data for market analysis and trading decisions.
              </p>
              <Link 
                href="/learn/advanced/onchain-analysis"
                className="text-primary hover:text-primary/80"
              >
                Read More →
              </Link>
            </div>

            {/* Smart Contract Development */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold text-text-primary mb-4">
                Smart Contract Development
              </h2>
              <p className="text-text-secondary mb-4">
                Introduction to writing and auditing smart contracts for various blockchains.
              </p>
              <Link 
                href="/learn/advanced/smart-contracts"
                className="text-primary hover:text-primary/80"
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 