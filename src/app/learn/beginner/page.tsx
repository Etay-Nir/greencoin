import Link from 'next/link';

export default function BeginnerGuidePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 bg-background-card border-b border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-text-primary mb-4">
              Beginner's Guide to Cryptocurrency
            </h1>
            <p className="text-text-secondary text-lg mb-6">
              Start your cryptocurrency journey with our comprehensive guide for beginners.
              Learn the basics of blockchain technology and digital currencies.
            </p>
            <div className="flex justify-center space-x-4">
              <Link 
                href="#getting-started"
                className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
              >
                Get Started
              </Link>
              <Link 
                href="#checklist"
                className="px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10"
              >
                Beginner's Checklist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Core Concepts */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold text-text-primary mb-4">
                Core Concepts
              </h2>
              <p className="text-text-secondary mb-4">
                Essential concepts every beginner should understand about cryptocurrency.
              </p>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-secondary">What is cryptocurrency and how does it work?</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-secondary">Digital wallets and private keys</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-secondary">Understanding blockchain technology</span>
                </li>
              </ul>
              <Link 
                href="/learn/beginner/core-concepts"
                className="text-primary hover:text-primary/80"
              >
                Learn More →
              </Link>
            </div>

            {/* Getting Started */}
            <div className="card p-6" id="getting-started">
              <h2 className="text-xl font-semibold text-text-primary mb-4">
                Getting Started
              </h2>
              <p className="text-text-secondary mb-4">
                Your step-by-step guide to entering the world of cryptocurrency safely.
              </p>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-secondary">Choosing your first cryptocurrency</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-secondary">Setting up a secure wallet</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-secondary">Making your first purchase</span>
                </li>
              </ul>
              <Link 
                href="/learn/beginner/getting-started"
                className="text-primary hover:text-primary/80"
              >
                Get Started →
              </Link>
            </div>

            {/* Security Essentials */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold text-text-primary mb-4">
                Security Essentials
              </h2>
              <p className="text-text-secondary mb-4">
                Critical security practices to protect your cryptocurrency investments.
              </p>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-secondary">Protecting your private keys</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-secondary">Common scams to avoid</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-secondary">Best practices for safe storage</span>
                </li>
              </ul>
              <Link 
                href="/learn/beginner/security"
                className="text-primary hover:text-primary/80"
              >
                Learn More →
              </Link>
            </div>

            {/* Market Basics */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold text-text-primary mb-4">
                Market Basics
              </h2>
              <p className="text-text-secondary mb-4">
                Understanding cryptocurrency markets and basic trading concepts.
              </p>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-secondary">Understanding market prices</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-secondary">Types of orders</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-2 mt-1 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-secondary">Basic market terminology</span>
                </li>
              </ul>
              <Link 
                href="/learn/beginner/market-basics"
                className="text-primary hover:text-primary/80"
              >
                Learn More →
              </Link>
            </div>

            {/* Beginner's Checklist */}
            <div className="card p-6" id="checklist">
              <h2 className="text-xl font-semibold text-text-primary mb-4">
                Beginner's Checklist
              </h2>
              <p className="text-text-secondary mb-4">
                Track your progress through essential cryptocurrency concepts.
              </p>
              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="form-checkbox text-primary" />
                  <span className="text-text-secondary">Understand what cryptocurrency is</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="form-checkbox text-primary" />
                  <span className="text-text-secondary">Set up a secure wallet</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="form-checkbox text-primary" />
                  <span className="text-text-secondary">Learn about private keys</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="form-checkbox text-primary" />
                  <span className="text-text-secondary">Make first purchase</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input type="checkbox" className="form-checkbox text-primary" />
                  <span className="text-text-secondary">Understand basic security</span>
                </label>
              </div>
            </div>

            {/* Glossary */}
            <div className="card p-6">
              <h2 className="text-xl font-semibold text-text-primary mb-4">
                Cryptocurrency Glossary
              </h2>
              <p className="text-text-secondary mb-4">
                Essential terms and definitions for beginners in the cryptocurrency space.
              </p>
              <div className="space-y-3 mb-4">
                <div>
                  <h3 className="font-medium text-text-primary">Blockchain</h3>
                  <p className="text-sm text-text-secondary">A decentralized digital ledger that records all transactions.</p>
                </div>
                <div>
                  <h3 className="font-medium text-text-primary">Wallet</h3>
                  <p className="text-sm text-text-secondary">Software or hardware that stores your cryptocurrency.</p>
                </div>
                <div>
                  <h3 className="font-medium text-text-primary">Private Key</h3>
                  <p className="text-sm text-text-secondary">Secret code that gives you access to your cryptocurrency.</p>
                </div>
              </div>
              <Link 
                href="/learn/beginner/glossary"
                className="text-primary hover:text-primary/80"
              >
                View Full Glossary →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 