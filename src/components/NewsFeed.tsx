'use client';

import { useState, useEffect } from 'react';
import { NewsCard } from './NewsCard';
import { fetchNews, CoinGeckoNewsArticle } from '@/services/coingecko';

export default function NewsFeed() {
  const [articles, setArticles] = useState<CoinGeckoNewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    cryptocurrency: '',
    category: '',
    source: ''
  });

  // Fetch news articles
  useEffect(() => {
    const loadNews = async () => {
      try {
        setLoading(true);
        setError(null);
        const news = await fetchNews(
          filters.category || undefined,
          filters.cryptocurrency || undefined
        );
        setArticles(news);
      } catch (err) {
        setError('Failed to load news. Please try again later.');
        console.error('Error loading news:', err);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, [filters.category, filters.cryptocurrency]);

  const filteredArticles = articles.filter(article => {
    if (filters.source && article.source.toLowerCase() !== filters.source.toLowerCase()) return false;
    return true;
  });

  return (
    <div className="space-y-8">
      {/* Filters */}
      <div className="card p-6">
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

      {/* Error Message */}
      {error && (
        <div className="card p-6 bg-red-500/10 border border-red-500/20">
          <p className="text-red-500">{error}</p>
        </div>
      )}

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