import PortfolioTracker from '@/components/PortfolioTracker';

export default function PortfolioPage() {
  return (
    <>
      {/* Header */}
      <section className="py-12 bg-background-card border-b border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-text-primary mb-4">
              Cryptocurrency Portfolio Tracker
            </h1>
            <p className="text-text-secondary text-lg">
              Track your cryptocurrency investments, monitor performance, and analyze your portfolio allocation
              in real-time.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Tracker */}
      <PortfolioTracker />

      {/* Features Section */}
      <section className="py-12 bg-background-card border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Manual Entry</h3>
              <p className="text-text-secondary">
                Easily add your cryptocurrency holdings with purchase prices and quantities for accurate tracking.
              </p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Real-Time Updates</h3>
              <p className="text-text-secondary">
                Monitor your portfolio value with real-time price updates from reliable data sources.
              </p>
            </div>
            <div className="card p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">Portfolio Analysis</h3>
              <p className="text-text-secondary">
                Visualize your portfolio allocation and track performance metrics with intuitive charts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 