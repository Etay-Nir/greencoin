'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CryptoCurrency, getCachedCryptocurrencies, formatNumber, formatPriceChange } from '@/services/coingecko';

export default function CryptocurrenciesPage() {
  const [cryptocurrencies, setCryptocurrencies] = useState<CryptoCurrency[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState('market_cap_desc');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchCryptoData();
  }, [page, sortBy]);

  const fetchCryptoData = async () => {
    try {
      setLoading(true);
      const data = await getCachedCryptocurrencies(page, 50, sortBy);
      setCryptocurrencies(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch cryptocurrency data. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSort = (newSortBy: string) => {
    setSortBy(newSortBy);
    setPage(1);
  };

  const filteredCryptocurrencies = cryptocurrencies.filter(crypto =>
    crypto.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    crypto.symbol.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-12 bg-background-card border-b border-border">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-text-primary mb-6">
            Cryptocurrencies
          </h1>
          
          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-2/3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search cryptocurrencies..."
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-text-primary"
                  value={searchQuery}
                  onChange={handleSearch}
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex gap-4">
              <button 
                className={`px-4 py-2 border rounded-lg transition-colors ${
                  sortBy === 'market_cap_desc' 
                    ? 'bg-primary text-white border-primary' 
                    : 'bg-background border-border text-text-primary hover:bg-background-card'
                }`}
                onClick={() => handleSort('market_cap_desc')}
              >
                Market Cap
              </button>
              <button 
                className={`px-4 py-2 border rounded-lg transition-colors ${
                  sortBy === 'volume_desc' 
                    ? 'bg-primary text-white border-primary' 
                    : 'bg-background border-border text-text-primary hover:bg-background-card'
                }`}
                onClick={() => handleSort('volume_desc')}
              >
                24h Volume
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cryptocurrency List */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {error ? (
            <div className="text-red-500 text-center py-8">{error}</div>
          ) : loading ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            </div>
          ) : (
            <>
              {/* Table Header */}
              <div className="grid grid-cols-7 gap-4 py-4 px-6 bg-background-card rounded-t-lg border-b border-border text-text-secondary font-medium">
                <div className="col-span-2">Cryptocurrency</div>
                <div className="text-right">Price</div>
                <div className="text-right">24h Change</div>
                <div className="text-right">Market Cap</div>
                <div className="text-right">24h Volume</div>
                <div className="text-right">Circulating Supply</div>
              </div>

              {/* Cryptocurrency Rows */}
              {filteredCryptocurrencies.map((crypto) => {
                const priceChange = formatPriceChange(crypto.price_change_percentage_24h);
                return (
                  <div 
                    key={crypto.id}
                    className="grid grid-cols-7 gap-4 py-4 px-6 border-b border-border hover:bg-background-card transition-colors cursor-pointer"
                  >
                    <div className="col-span-2 flex items-center gap-4">
                      <Image
                        src={crypto.image}
                        alt={crypto.name}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <div>
                        <div className="font-medium text-text-primary">{crypto.name}</div>
                        <div className="text-sm text-text-secondary">{crypto.symbol.toUpperCase()}</div>
                      </div>
                    </div>
                    <div className="text-right self-center text-text-primary">
                      ${crypto.current_price.toLocaleString()}
                    </div>
                    <div className={`text-right self-center ${priceChange.color}`}>
                      {priceChange.text}
                    </div>
                    <div className="text-right self-center text-text-primary">
                      ${formatNumber(crypto.market_cap)}
                    </div>
                    <div className="text-right self-center text-text-primary">
                      ${formatNumber(crypto.total_volume)}
                    </div>
                    <div className="text-right self-center text-text-secondary">
                      {formatNumber(crypto.circulating_supply)} {crypto.symbol.toUpperCase()}
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </section>

      {/* Pagination */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center gap-2">
            <button 
              className="px-4 py-2 border border-border rounded-lg text-text-secondary hover:bg-background-card transition-colors disabled:opacity-50"
              onClick={() => setPage(p => Math.max(1, p - 1))}
              disabled={page === 1 || loading}
            >
              Previous
            </button>
            {[...Array(3)].map((_, i) => (
              <button
                key={i}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  page === i + 1
                    ? 'bg-primary text-white'
                    : 'border border-border text-text-secondary hover:bg-background-card'
                }`}
                onClick={() => setPage(i + 1)}
                disabled={loading}
              >
                {i + 1}
              </button>
            ))}
            <button 
              className="px-4 py-2 border border-border rounded-lg text-text-secondary hover:bg-background-card transition-colors disabled:opacity-50"
              onClick={() => setPage(p => p + 1)}
              disabled={page === 3 || loading}
            >
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 