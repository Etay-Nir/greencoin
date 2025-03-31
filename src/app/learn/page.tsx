import Link from 'next/link'

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 bg-background-card border-b border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-text-primary mb-4">
              Learn Cryptocurrency
            </h1>
            <p className="text-text-secondary text-lg">
              Comprehensive educational resources for all experience levels.
              Start your journey or advance your knowledge in cryptocurrency and blockchain technology.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Levels */}
      <section className="py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Beginner */}
            <div className="card p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-text-primary mb-2">
                  Beginner
                </h2>
                <p className="text-text-secondary">
                  Start here if you're new to cryptocurrency. Learn the fundamentals and basic concepts.
                </p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-text-secondary">
                  <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  What is Cryptocurrency?
                </li>
                <li className="flex items-center text-text-secondary">
                  <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Blockchain Basics
                </li>
                <li className="flex items-center text-text-secondary">
                  <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Security Best Practices
                </li>
              </ul>
              <Link 
                href="/learn/beginner"
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Start Learning
              </Link>
            </div>

            {/* Intermediate */}
            <div className="card p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-text-primary mb-2">
                  Intermediate
                </h2>
                <p className="text-text-secondary">
                  Deepen your knowledge with trading concepts and market analysis.
                </p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-text-secondary">
                  <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Technical Analysis
                </li>
                <li className="flex items-center text-text-secondary">
                  <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Market Cycles
                </li>
                <li className="flex items-center text-text-secondary">
                  <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Risk Management
                </li>
              </ul>
              <Link 
                href="/learn/intermediate"
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Continue Learning
              </Link>
            </div>

            {/* Advanced */}
            <div className="card p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-text-primary mb-2">
                  Advanced
                </h2>
                <p className="text-text-secondary">
                  Master complex topics in DeFi, smart contracts, and advanced trading.
                </p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center text-text-secondary">
                  <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  DeFi Protocols
                </li>
                <li className="flex items-center text-text-secondary">
                  <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Smart Contracts
                </li>
                <li className="flex items-center text-text-secondary">
                  <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  On-Chain Analysis
                </li>
              </ul>
              <Link 
                href="/learn/advanced"
                className="inline-flex items-center justify-center w-full px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
              >
                Master Crypto
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 