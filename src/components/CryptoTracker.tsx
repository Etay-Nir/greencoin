'use client';

import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
} from 'chart.js';
import 'chartjs-adapter-date-fns';
import CryptoProfile from './CryptoProfile';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

interface CryptoData {
  id: string;
  symbol: string;
  name: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  circulating_supply: number;
  image: string;
}

export default function CryptoTracker() {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([]);
  const [selectedCrypto, setSelectedCrypto] = useState<string>('bitcoin');
  const [timeframe, setTimeframe] = useState<string>('24h');
  const [chartData, setChartData] = useState<any>(null);
  const [watchlist, setWatchlist] = useState<string[]>([]);

  // Fetch top cryptocurrencies data
  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&sparkline=false'
        );
        const data = await response.json();
        setCryptoData(data);
      } catch (error) {
        console.error('Error fetching crypto data:', error);
      }
    };

    fetchCryptoData();
    const interval = setInterval(fetchCryptoData, 30000); // Update every 30 seconds
    return () => clearInterval(interval);
  }, []);

  // Fetch chart data for selected cryptocurrency
  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const days = timeframe === '24h' ? 1 : timeframe === '7d' ? 7 : timeframe === '30d' ? 30 : 365;
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${selectedCrypto}/market_chart?vs_currency=usd&days=${days}`
        );
        const data = await response.json();
        
        setChartData({
          labels: data.prices.map((price: number[]) => new Date(price[0])),
          datasets: [
            {
              label: 'Price (USD)',
              data: data.prices.map((price: number[]) => price[1]),
              borderColor: '#4CAF50',
              backgroundColor: 'rgba(76, 175, 80, 0.1)',
              fill: true,
              tension: 0.4,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching chart data:', error);
      }
    };

    if (selectedCrypto) {
      fetchChartData();
    }
  }, [selectedCrypto, timeframe]);

  const toggleWatchlist = (cryptoId: string) => {
    setWatchlist(prev => 
      prev.includes(cryptoId)
        ? prev.filter(id => id !== cryptoId)
        : [...prev, cryptoId]
    );
  };

  const formatNumber = (num: number) => {
    if (num >= 1e9) return `$${(num / 1e9).toFixed(2)}B`;
    if (num >= 1e6) return `$${(num / 1e6).toFixed(2)}M`;
    return `$${num.toFixed(2)}`;
  };

  return (
    <section className="py-12">
      <div className="container">
        <div className="flex flex-col space-y-8">
          {/* Market Overview */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-6 text-text-secondary font-medium w-[300px]">NAME</th>
                  <th className="text-right py-4 px-6 text-text-secondary font-medium">PRICE</th>
                  <th className="text-right py-4 px-6 text-text-secondary font-medium">24H CHANGE</th>
                  <th className="text-right py-4 px-6 text-text-secondary font-medium">MARKET CAP</th>
                  <th className="text-right py-4 px-6 text-text-secondary font-medium">VOLUME (24H)</th>
                  <th className="text-center py-4 px-6 text-text-secondary font-medium">ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {cryptoData.slice(0, 10).map((crypto) => (
                  <tr 
                    key={crypto.id} 
                    className="border-b border-border hover:bg-background-dark/50 cursor-pointer transition-colors"
                    onClick={() => setSelectedCrypto(crypto.id)}
                  >
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8">
                          <img
                            src={crypto.image}
                            alt={`${crypto.name} logo`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <div className="font-medium text-text-primary">{crypto.name}</div>
                          <div className="text-sm text-text-secondary">{crypto.symbol.toUpperCase()}</div>
                        </div>
                      </div>
                    </td>
                    <td className="text-right py-4 px-6 font-medium text-text-primary">
                      ${crypto.current_price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </td>
                    <td className="text-right py-4 px-6">
                      <span className={crypto.price_change_percentage_24h >= 0 ? 'text-green-500' : 'text-red-500'}>
                        {crypto.price_change_percentage_24h.toFixed(2)}%
                      </span>
                    </td>
                    <td className="text-right py-4 px-6 text-text-primary">
                      ${formatNumber(crypto.market_cap)}
                    </td>
                    <td className="text-right py-4 px-6 text-text-primary">
                      ${formatNumber(crypto.total_volume)}
                    </td>
                    <td className="text-center py-4 px-6">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleWatchlist(crypto.id);
                        }}
                        className={`btn-sm ${
                          watchlist.includes(crypto.id) 
                            ? 'bg-primary/20 text-primary hover:bg-primary/30' 
                            : 'bg-background-dark text-text-secondary hover:text-text-primary'
                        } transition-colors rounded-lg px-4 py-1`}
                      >
                        {watchlist.includes(crypto.id) ? 'Watching' : 'Watch'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Chart Section */}
          {chartData && (
            <div className="card p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">
                  {cryptoData.find(c => c.id === selectedCrypto)?.name} Price Chart
                </h3>
                <div className="flex space-x-2">
                  {['24h', '7d', '30d', '1y'].map((tf) => (
                    <button
                      key={tf}
                      onClick={() => setTimeframe(tf)}
                      className={`btn ${
                        timeframe === tf ? 'btn-primary' : 'btn-secondary'
                      }`}
                    >
                      {tf}
                    </button>
                  ))}
                </div>
              </div>
              <div className="h-[400px]">
                <Line
                  data={chartData}
                  options={{
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                      x: {
                        type: 'time',
                        time: {
                          unit: timeframe === '24h' ? 'hour' : 'day',
                        },
                        grid: {
                          color: 'rgba(42, 45, 53, 0.5)',
                        },
                      },
                      y: {
                        grid: {
                          color: 'rgba(42, 45, 53, 0.5)',
                        },
                      },
                    },
                    plugins: {
                      legend: {
                        display: false,
                      },
                      tooltip: {
                        mode: 'index',
                        intersect: false,
                      },
                    },
                    interaction: {
                      mode: 'nearest',
                      intersect: false,
                    },
                  }}
                />
              </div>
            </div>
          )}

          {/* Crypto Profile Section */}
          <CryptoProfile selectedCrypto={selectedCrypto} />

          {/* Watchlist Section */}
          {watchlist.length > 0 && (
            <div className="card p-6">
              <h3 className="text-lg font-semibold mb-4">Your Watchlist</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {cryptoData
                  .filter((crypto) => watchlist.includes(crypto.id))
                  .map((crypto) => (
                    <div
                      key={crypto.id}
                      className="card p-4 hover:border-primary cursor-pointer transition-colors"
                      onClick={() => setSelectedCrypto(crypto.id)}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">{crypto.name}</h4>
                          <p className="text-text-secondary">{crypto.symbol.toUpperCase()}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-medium">{formatNumber(crypto.current_price)}</p>
                          <p className={crypto.price_change_percentage_24h >= 0 ? 'text-primary' : 'text-red-500'}>
                            {crypto.price_change_percentage_24h.toFixed(2)}%
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 