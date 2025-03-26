import Link from 'next/link'

export default function LearnPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Learn About Cryptocurrency</h1>

      {/* Learning Paths */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {/* Beginner Path */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Beginner</h2>
            <p className="text-gray-600 mb-6">
              Start your cryptocurrency journey with the basics. Learn about blockchain,
              wallets, and how to make your first purchase.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                What is Cryptocurrency?
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                What is Blockchain?
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                How to Buy Your First Crypto
              </li>
            </ul>
            <Link href="/learn/beginner" className="btn btn-primary w-full text-center">
              Start Learning
            </Link>
          </div>
        </div>

        {/* Intermediate Path */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Intermediate</h2>
            <p className="text-gray-600 mb-6">
              Deepen your understanding with technical analysis, market cycles,
              and advanced trading strategies.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Technical Analysis
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Market Cycles
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Risk Management
              </li>
            </ul>
            <Link href="/learn/intermediate" className="btn btn-primary w-full text-center">
              Continue Learning
            </Link>
          </div>
        </div>

        {/* Advanced Path */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Advanced</h2>
            <p className="text-gray-600 mb-6">
              Master advanced concepts like DeFi, NFTs, and on-chain analysis
              for professional trading.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                DeFi Deep Dive
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                NFTs Explained
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Layer-2 Solutions
              </li>
            </ul>
            <Link href="/learn/advanced" className="btn btn-primary w-full text-center">
              Master Advanced Topics
            </Link>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-semibold mb-4">Additional Resources</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Glossary</h3>
            <p className="text-gray-600 mb-4">
              Comprehensive dictionary of cryptocurrency and blockchain terms.
            </p>
            <Link href="/learn/resources" className="text-primary hover:text-primary/80">
              Browse Glossary →
            </Link>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Community Forum</h3>
            <p className="text-gray-600 mb-4">
              Connect with other learners and share your knowledge.
            </p>
            <Link href="/community" className="text-primary hover:text-primary/80">
              Join Discussion →
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 