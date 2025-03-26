export default function CryptocurrenciesPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Cryptocurrencies</h1>
      
      {/* Search and Filter Section */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Search cryptocurrencies..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
            <option value="">Sort by</option>
            <option value="price">Price</option>
            <option value="marketCap">Market Cap</option>
            <option value="volume">Volume</option>
          </select>
        </div>
      </div>

      {/* Cryptocurrencies List */}
      <div className="grid gap-4">
        {/* Example cryptocurrency card - will be replaced with dynamic data */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
              <div>
                <h2 className="text-xl font-semibold">Bitcoin</h2>
                <p className="text-gray-600">BTC</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xl font-semibold">$45,000</p>
              <p className="text-green-500">+2.5%</p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4 text-sm text-gray-600">
            <div>
              <p className="font-medium">Market Cap</p>
              <p>$850B</p>
            </div>
            <div>
              <p className="font-medium">24h Volume</p>
              <p>$28B</p>
            </div>
            <div>
              <p className="font-medium">Circulating Supply</p>
              <p>19.5M BTC</p>
            </div>
          </div>
        </div>

        {/* More cryptocurrency cards will be added here */}
      </div>
    </div>
  )
} 