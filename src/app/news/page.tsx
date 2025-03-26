export default function NewsPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">News & Analysis</h1>

      {/* Filters */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-4">
          <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
            <option value="">All Cryptocurrencies</option>
            <option value="bitcoin">Bitcoin</option>
            <option value="ethereum">Ethereum</option>
            <option value="greencoin">GreenCoin</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
            <option value="">All Topics</option>
            <option value="regulation">Regulation</option>
            <option value="technology">Technology</option>
            <option value="market">Market</option>
            <option value="security">Security</option>
          </select>
          <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
            <option value="">All Sources</option>
            <option value="reuters">Reuters</option>
            <option value="bloomberg">Bloomberg</option>
            <option value="coindesk">CoinDesk</option>
            <option value="cointelegraph">CoinTelegraph</option>
          </select>
        </div>
      </div>

      {/* News Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example news card - will be replaced with dynamic data */}
        <article className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="aspect-video bg-gray-200"></div>
          <div className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-gray-500">Reuters</span>
              <span className="text-sm text-gray-500">•</span>
              <span className="text-sm text-gray-500">2 hours ago</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">
              Bitcoin Surges Past $45,000 as Institutional Interest Grows
            </h2>
            <p className="text-gray-600 mb-4">
              Major financial institutions are showing increased interest in cryptocurrency investments,
              driving Bitcoin's price to new heights.
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-green-500">Positive</span>
                <span className="text-sm text-gray-500">Sentiment</span>
              </div>
              <button className="text-primary hover:text-primary/80">Read More</button>
            </div>
          </div>
        </article>

        {/* More news cards will be added here */}
      </div>
    </div>
  )
} 