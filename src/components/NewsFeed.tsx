'use client';

import { useState, useEffect } from 'react';
import { NewsCard } from './NewsCard';
import { fetchNews, CoinGeckoNewsArticle } from '@/services/coingecko';

export default function NewsFeed() {
  const [articles, setArticles] = useState<CoinGeckoNewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isCached, setIsCached] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [filters, setFilters] = useState({
    cryptocurrency: '',
    category: '',
    source: ''
  });

  // Fetch news articles
  const loadNews = async (forceRefresh: boolean = false) => {
    try {
      setLoading(true);
      setError(null);
      const news = await fetchNews(
        filters.category || undefined,
        filters.cryptocurrency || undefined,
        forceRefresh
      );
      setArticles(news);
      setIsCached(!forceRefresh);
    } catch (err) {
      setError('Failed to load news. Please try again later.');
      console.error('Error loading news:', err);
    } finally {
      setLoading(false);
    }
  };

  // Initial load and filter changes
  useEffect(() => {
    loadNews();
  }, [filters.category, filters.cryptocurrency]);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await loadNews(true);
    setIsRefreshing(false);
  };

  const filteredArticles = articles.filter(article => {
    if (filters.source && article.source.toLowerCase() !== filters.source.toLowerCase()) return false;
    return true;
  });

  return (
    <div className="space-y-8">
      {/* Filters and Refresh Button */}
      <div className="card p-6">
        <div className="flex justify-between items-start mb-4">
          <h2 className="text-lg font-semibold text-text-primary">News Filters</h2>
          <button
            onClick={handleRefresh}
            disabled={loading || isRefreshing}
            className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isRefreshing ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Refreshing...
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Refresh News
              </>
            )}
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm text-text-secondary mb-2">Cryptocurrency</label>
            <select
              className="w-full bg-background-dark border border-border rounded-lg p-2 text-text-primary"
              value={filters.cryptocurrency}
              onChange={(e) => setFilters({ ...filters, cryptocurrency: e.target.value })}
            >
              <option value="">All Cryptocurrencies</option>
              <option value="bitcoin">Bitcoin</option>
              <option value="ethereum">Ethereum</option>
              <option value="binancecoin">Binance Coin</option>
              <option value="cardano">Cardano</option>
              <option value="solana">Solana</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-text-secondary mb-2">Category</label>
            <select
              className="w-full bg-background-dark border border-border rounded-lg p-2 text-text-primary"
              value={filters.category}
              onChange={(e) => setFilters({ ...filters, category: e.target.value })}
            >
              <option value="">All Categories</option>
              <option value="regulation">Regulation</option>
              <option value="technology">Technology</option>
              <option value="market">Market</option>
              <option value="security">Security</option>
              <option value="mining">Mining</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-text-secondary mb-2">Source</label>
            <select
              className="w-full bg-background-dark border border-border rounded-lg p-2 text-text-primary"
              value={filters.source}
              onChange={(e) => setFilters({ ...filters, source: e.target.value })}
            >
              <option value="">All Sources</option>
              <option value="CoinDesk">CoinDesk</option>
              <option value="CoinTelegraph">CoinTelegraph</option>
              <option value="The Block">The Block</option>
              <option value="Decrypt">Decrypt</option>
              <option value="Reuters">Reuters</option>
              <option value="Bloomberg">Bloomberg</option>
            </select>
          </div>
        </div>
      </div>

      {/* Status Messages */}
      <div className="space-y-4">
        {error && (
          <div className="card p-6 bg-red-500/10 border border-red-500/20">
            <p className="text-red-500">{error}</p>
          </div>
        )}
        
        {isCached && !loading && (
          <div className="card p-4 bg-primary/5 border border-primary/10">
            <p className="text-sm text-text-secondary">
              Showing cached data. News will refresh every 5 minutes.
            </p>
          </div>
        )}
      </div>

      {/* News Grid */}
      {loading ? (
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
        </div>
      ) : filteredArticles.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-text-secondary">No news articles found matching your filters.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
} 