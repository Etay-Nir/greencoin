import Image from 'next/image'
import CryptoTracker from '@/components/CryptoTracker'

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background-card to-background-dark py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
              Your Gateway to Smart Crypto Trading
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              Real-time data, expert analysis, and comprehensive education to help you make informed decisions in the crypto market.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn btn-primary">Start Trading</button>
              <button className="btn btn-secondary">Explore Markets</button>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-12 border-b border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Real-Time Market Data</h3>
              <p className="text-text-secondary">
                Track live prices, market trends, and key metrics for top cryptocurrencies with professional-grade tools.
              </p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Learn & Grow</h3>
              <p className="text-text-secondary">
                Access comprehensive educational resources designed for both beginners and advanced traders.
              </p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Smart Portfolio Management</h3>
              <p className="text-text-secondary">
                Build and track your crypto portfolio with advanced analytics and risk management tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Real-time Crypto Tracking */}
      <section className="py-12 bg-background-dark">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary mb-4">Market Overview</h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Stay informed with real-time cryptocurrency data, detailed analytics, and comprehensive market insights.
            </p>
          </div>
          <CryptoTracker />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background-card border-t border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-text-primary mb-4">Start Your Crypto Journey Today</h2>
            <p className="text-xl text-text-secondary mb-8">
              Join thousands of traders who trust GreenCoin for reliable market data and expert insights.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="btn btn-primary">Create Free Account</button>
              <button className="btn btn-secondary">View Trading Guide</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 