import Link from 'next/link';

export default function IntermediateGuidePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 bg-background-card border-b border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-text-primary mb-4">
              Intermediate Cryptocurrency Guide
            </h1>
            <p className="text-text-secondary text-lg">
              Deepen your understanding of cryptocurrency markets, trading, and technology.
              Perfect for those who understand the basics and want to learn more.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Types of Cryptocurrencies */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold text-text-primary mb-4">
                Types of Cryptocurrencies
              </h2>
              <p className="text-text-secondary mb-4">
                Understanding the differences between coins, tokens, and various cryptocurrency types.
              </p>
              <Link 
                href="/learn/intermediate/crypto-types"
                className="text-primary hover:text-primary/80"
              >
                Read More →
              </Link>
            </div>

            {/* Market Cycles */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold text-text-primary mb-4">
                Market Cycles
              </h2>
              <p className="text-text-secondary mb-4">
                Learn about cryptocurrency market cycles, bull and bear markets, and market psychology.
              </p>
              <Link 
                href="/learn/intermediate/market-cycles"
                className="text-primary hover:text-primary/80"
              >
                Read More →
              </Link>
            </div>

            {/* Technical Analysis */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold text-text-primary mb-4">
                Technical Analysis Basics
              </h2>
              <p className="text-text-secondary mb-4">
                Introduction to reading charts, identifying patterns, and using technical indicators.
              </p>
              <Link 
                href="/learn/intermediate/technical-analysis"
                className="text-primary hover:text-primary/80"
              >
                Read More →
              </Link>
            </div>

            {/* Risk Management */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold text-text-primary mb-4">
                Risk Management
              </h2>
              <p className="text-text-secondary mb-4">
                Essential strategies for managing risk in cryptocurrency trading and investing.
              </p>
              <Link 
                href="/learn/intermediate/risk-management"
                className="text-primary hover:text-primary/80"
              >
                Read More →
              </Link>
            </div>

            {/* Trading Strategies */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold text-text-primary mb-4">
                Trading Strategies
              </h2>
              <p className="text-text-secondary mb-4">
                Common trading strategies and when to use them in different market conditions.
              </p>
              <Link 
                href="/learn/intermediate/trading-strategies"
                className="text-primary hover:text-primary/80"
              >
                Read More →
              </Link>
            </div>

            {/* Interactive Practice */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold text-text-primary mb-4">
                Practice Trading
              </h2>
              <p className="text-text-secondary mb-4">
                Interactive paper trading simulator to practice your strategies risk-free.
              </p>
              <Link 
                href="/learn/intermediate/practice"
                className="text-primary hover:text-primary/80"
              >
                Start Trading →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 