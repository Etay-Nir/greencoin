'use client';

import { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PortfolioEntry {
  id: string;
  crypto: string;
  symbol: string;
  quantity: number;
  purchasePrice: number;
  currentPrice: number;
}

export default function PortfolioTracker() {
  const [portfolio, setPortfolio] = useState<PortfolioEntry[]>([]);
  const [newEntry, setNewEntry] = useState({
    crypto: '',
    symbol: '',
    quantity: '',
    purchasePrice: ''
  });
  const [availableCryptos, setAvailableCryptos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch available cryptocurrencies
  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&sparkline=false'
        );
        const data = await response.json();
        setAvailableCryptos(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cryptocurrencies:', error);
        setLoading(false);
      }
    };

    fetchCryptos();
  }, []);

  // Update current prices every 30 seconds
  useEffect(() => {
    const updatePrices = async () => {
      if (portfolio.length === 0) return;

      try {
        const ids = portfolio.map(entry => entry.id).join(',');
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`
        );
        const data = await response.json();

        setPortfolio(prev =>
          prev.map(entry => ({
            ...entry,
            currentPrice: data[entry.id]?.usd || entry.currentPrice
          }))
        );
      } catch (error) {
        console.error('Error updating prices:', error);
      }
    };

    updatePrices();
    const interval = setInterval(updatePrices, 30000);
    return () => clearInterval(interval);
  }, [portfolio]);

  const handleCryptoSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = availableCryptos.find(crypto => crypto.id === event.target.value);
    if (selected) {
      setNewEntry({
        ...newEntry,
        crypto: selected.id,
        symbol: selected.symbol.toUpperCase()
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selected = availableCryptos.find(crypto => crypto.id === newEntry.crypto);
    if (selected && newEntry.quantity && newEntry.purchasePrice) {
      const entry: PortfolioEntry = {
        id: selected.id,
        crypto: selected.name,
        symbol: selected.symbol.toUpperCase(),
        quantity: parseFloat(newEntry.quantity),
        purchasePrice: parseFloat(newEntry.purchasePrice),
        currentPrice: selected.current_price
      };
      setPortfolio([...portfolio, entry]);
      setNewEntry({ crypto: '', symbol: '', quantity: '', purchasePrice: '' });
    }
  };

  const calculatePortfolioMetrics = () => {
    let totalValue = 0;
    let totalCost = 0;

    portfolio.forEach(entry => {
      const currentValue = entry.quantity * entry.currentPrice;
      const cost = entry.quantity * entry.purchasePrice;
      totalValue += currentValue;
      totalCost += cost;
    });

    const totalProfit = totalValue - totalCost;
    const profitPercentage = totalCost > 0 ? (totalProfit / totalCost) * 100 : 0;

    return {
      totalValue,
      totalCost,
      totalProfit,
      profitPercentage
    };
  };

  const pieChartData = {
    labels: portfolio.map(entry => entry.symbol),
    datasets: [
      {
        data: portfolio.map(entry => entry.quantity * entry.currentPrice),
        backgroundColor: [
          '#4CAF50',
          '#2196F3',
          '#9C27B0',
          '#F44336',
          '#FF9800',
          '#795548',
          '#607D8B'
        ],
        borderColor: '#1A1D23',
        borderWidth: 2
      }
    ]
  };

  const metrics = calculatePortfolioMetrics();

  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Portfolio Summary */}
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="card p-4">
                <h3 className="text-sm text-text-secondary">Portfolio Value</h3>
                <p className="text-xl font-semibold text-text-primary">
                  ${metrics.totalValue.toLocaleString('en-US', { maximumFractionDigits: 2 })}
                </p>
              </div>
              <div className="card p-4">
                <h3 className="text-sm text-text-secondary">Total Cost</h3>
                <p className="text-xl font-semibold text-text-primary">
                  ${metrics.totalCost.toLocaleString('en-US', { maximumFractionDigits: 2 })}
                </p>
              </div>
              <div className="card p-4">
                <h3 className="text-sm text-text-secondary">Total Profit/Loss</h3>
                <p className={`text-xl font-semibold ${metrics.totalProfit >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  ${metrics.totalProfit.toLocaleString('en-US', { maximumFractionDigits: 2 })}
                </p>
              </div>
              <div className="card p-4">
                <h3 className="text-sm text-text-secondary">Profit/Loss %</h3>
                <p className={`text-xl font-semibold ${metrics.profitPercentage >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {metrics.profitPercentage.toFixed(2)}%
                </p>
              </div>
            </div>

            {/* Portfolio Table */}
            <div className="card p-6">
              <h2 className="text-lg font-semibold mb-4">Your Portfolio</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-4 px-6 text-text-secondary font-medium">Asset</th>
                      <th className="text-right py-4 px-6 text-text-secondary font-medium">Holdings</th>
                      <th className="text-right py-4 px-6 text-text-secondary font-medium">Avg. Buy Price</th>
                      <th className="text-right py-4 px-6 text-text-secondary font-medium">Current Price</th>
                      <th className="text-right py-4 px-6 text-text-secondary font-medium">Profit/Loss</th>
                    </tr>
                  </thead>
                  <tbody>
                    {portfolio.map((entry, index) => {
                      const currentValue = entry.quantity * entry.currentPrice;
                      const cost = entry.quantity * entry.purchasePrice;
                      const profit = currentValue - cost;
                      const profitPercentage = (profit / cost) * 100;

                      return (
                        <tr key={index} className="border-b border-border">
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-2">
                              <span className="font-medium text-text-primary">{entry.symbol}</span>
                              <span className="text-text-secondary">{entry.crypto}</span>
                            </div>
                          </td>
                          <td className="text-right py-4 px-6 text-text-primary">
                            {entry.quantity.toLocaleString('en-US', { maximumFractionDigits: 8 })}
                          </td>
                          <td className="text-right py-4 px-6 text-text-primary">
                            ${entry.purchasePrice.toLocaleString('en-US', { maximumFractionDigits: 2 })}
                          </td>
                          <td className="text-right py-4 px-6 text-text-primary">
                            ${entry.currentPrice.toLocaleString('en-US', { maximumFractionDigits: 2 })}
                          </td>
                          <td className="text-right py-4 px-6">
                            <div className={profit >= 0 ? 'text-green-500' : 'text-red-500'}>
                              ${profit.toLocaleString('en-US', { maximumFractionDigits: 2 })}
                              <span className="text-sm ml-1">({profitPercentage.toFixed(2)}%)</span>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Add New Asset */}
            <div className="card p-6">
              <h2 className="text-lg font-semibold mb-4">Add New Asset</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-text-secondary mb-2">Select Cryptocurrency</label>
                  <select
                    className="w-full bg-background-dark border border-border rounded-lg p-2 text-text-primary"
                    value={newEntry.crypto}
                    onChange={handleCryptoSelect}
                    required
                  >
                    <option value="">Select a cryptocurrency</option>
                    {availableCryptos.map(crypto => (
                      <option key={crypto.id} value={crypto.id}>
                        {crypto.symbol.toUpperCase()} - {crypto.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-text-secondary mb-2">Quantity</label>
                  <input
                    type="number"
                    step="any"
                    className="w-full bg-background-dark border border-border rounded-lg p-2 text-text-primary"
                    value={newEntry.quantity}
                    onChange={e => setNewEntry({ ...newEntry, quantity: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-text-secondary mb-2">Purchase Price (USD)</label>
                  <input
                    type="number"
                    step="any"
                    className="w-full bg-background-dark border border-border rounded-lg p-2 text-text-primary"
                    value={newEntry.purchasePrice}
                    onChange={e => setNewEntry({ ...newEntry, purchasePrice: e.target.value })}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full btn btn-primary"
                  disabled={!newEntry.crypto || !newEntry.quantity || !newEntry.purchasePrice}
                >
                  Add to Portfolio
                </button>
              </form>
            </div>

            {/* Portfolio Allocation */}
            {portfolio.length > 0 && (
              <div className="card p-6">
                <h2 className="text-lg font-semibold mb-4">Portfolio Allocation</h2>
                <div className="aspect-square">
                  <Pie
                    data={pieChartData}
                    options={{
                      plugins: {
                        legend: {
                          position: 'bottom',
                          labels: {
                            color: '#A0A3A9',
                            padding: 20,
                            font: {
                              size: 12
                            }
                          }
                        },
                        tooltip: {
                          callbacks: {
                            label: (context) => {
                              const value = context.raw as number;
                              const total = (context.dataset.data as number[]).reduce((a, b) => a + b, 0);
                              const percentage = ((value / total) * 100).toFixed(1);
                              return `${context.label}: $${value.toLocaleString('en-US', { maximumFractionDigits: 2 })} (${percentage}%)`;
                            }
                          }
                        }
                      }
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 