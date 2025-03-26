export default function PortfolioPage() {
  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Portfolio</h1>
        <button className="btn btn-primary">Add Holding</button>
      </div>

      {/* Portfolio Summary */}
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-600 text-sm mb-2">Total Value</h3>
          <p className="text-2xl font-bold">$25,000</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-600 text-sm mb-2">24h Change</h3>
          <p className="text-2xl font-bold text-green-500">+$1,250</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-600 text-sm mb-2">Total Profit/Loss</h3>
          <p className="text-2xl font-bold text-green-500">+$5,000</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-gray-600 text-sm mb-2">Number of Holdings</h3>
          <p className="text-2xl font-bold">5</p>
        </div>
      </div>

      {/* Holdings Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Asset
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Value
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                24h Change
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* Example holding - will be replaced with dynamic data */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full mr-3"></div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">Bitcoin</div>
                    <div className="text-sm text-gray-500">BTC</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">0.5</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">$22,500</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-sm text-green-500">+2.5%</span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                <button className="text-primary hover:text-primary/80 mr-3">Edit</button>
                <button className="text-red-500 hover:text-red-600">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
} 