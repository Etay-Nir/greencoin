'use client';

import { useState, useEffect } from 'react';

interface CryptoProfileData {
  id: string;
  name: string;
  symbol: string;
  description: { en: string };
  links: {
    homepage: string[];
    blockchain_site: string[];
    official_forum_url: string[];
    twitter_screen_name: string;
    telegram_channel_identifier: string;
    subreddit_url: string;
  };
  image: {
    large: string;
  };
  market_data: {
    current_price: { usd: number };
    market_cap: { usd: number };
    total_volume: { usd: number };
  };
  genesis_date: string;
  developer_data: {
    forks: number;
    stars: number;
    subscribers: number;
    total_issues: number;
    closed_issues: number;
    pull_requests_merged: number;
    pull_request_contributors: number;
    commit_count_4_weeks: number;
  };
  community_data: {
    twitter_followers: number;
    reddit_subscribers: number;
    telegram_channel_user_count: number;
  };
}

interface NewsItem {
  title: string;
  url: string;
  published_at: string;
  source: string;
}

export default function CryptoProfile({ selectedCrypto }: { selectedCrypto: string }) {
  const [profileData, setProfileData] = useState<CryptoProfileData | null>(null);
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${selectedCrypto}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=true&sparkline=false`
        );
        const data = await response.json();
        setProfileData(data);

        // Fetch news data
        const newsResponse = await fetch(
          `https://api.coingecko.com/api/v3/news/${selectedCrypto}`
        );
        const newsData = await newsResponse.json();
        setNews(newsData.slice(0, 5)); // Show latest 5 news items
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
      setLoading(false);
    };

    if (selectedCrypto) {
      fetchProfileData();
    }
  }, [selectedCrypto]);

  if (loading || !profileData) {
    return (
      <div className="card p-6 animate-pulse">
        <div className="h-8 bg-background-dark rounded w-1/4 mb-4"></div>
        <div className="h-4 bg-background-dark rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-background-dark rounded w-2/3"></div>
      </div>
    );
  }

  return (
    <div className="card p-6">
      <div className="grid md:grid-cols-3 gap-8">
        {/* Main Info */}
        <div className="md:col-span-2">
          <div className="flex items-center space-x-4 mb-6">
            {profileData.image?.large && (
              <img
                src={profileData.image.large}
                alt={`${profileData.name} logo`}
                className="w-16 h-16 rounded-full"
              />
            )}
            <div>
              <h2 className="text-2xl font-bold text-text-primary">
                {profileData.name} ({profileData.symbol.toUpperCase()})
              </h2>
              <p className="text-text-secondary">
                Created: {profileData.genesis_date || 'N/A'}
              </p>
            </div>
          </div>

          <div className="prose prose-invert max-w-none mb-8">
            <h3 className="text-lg font-semibold mb-2">Overview</h3>
            <p className="text-text-secondary">
              {profileData.description?.en || 'No description available.'}
            </p>
          </div>

          {/* Links Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Official Links</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {profileData.links.homepage[0] && (
                <a
                  href={profileData.links.homepage[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Website
                </a>
              )}
              {profileData.links.blockchain_site[0] && (
                <a
                  href={profileData.links.blockchain_site[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Explorer
                </a>
              )}
              {profileData.links.subreddit_url && (
                <a
                  href={profileData.links.subreddit_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Reddit
                </a>
              )}
              {profileData.links.twitter_screen_name && (
                <a
                  href={`https://twitter.com/${profileData.links.twitter_screen_name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Twitter
                </a>
              )}
            </div>
          </div>

          {/* Development Stats */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4">Development Activity</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="card p-4">
                <p className="text-text-secondary text-sm">GitHub Stars</p>
                <p className="text-xl font-semibold text-text-primary">
                  {profileData.developer_data?.stars || 'N/A'}
                </p>
              </div>
              <div className="card p-4">
                <p className="text-text-secondary text-sm">Total Issues</p>
                <p className="text-xl font-semibold text-text-primary">
                  {profileData.developer_data?.total_issues || 'N/A'}
                </p>
              </div>
              <div className="card p-4">
                <p className="text-text-secondary text-sm">Merged PRs</p>
                <p className="text-xl font-semibold text-text-primary">
                  {profileData.developer_data?.pull_requests_merged || 'N/A'}
                </p>
              </div>
              <div className="card p-4">
                <p className="text-text-secondary text-sm">Contributors</p>
                <p className="text-xl font-semibold text-text-primary">
                  {profileData.developer_data?.pull_request_contributors || 'N/A'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div>
          {/* Community Stats */}
          <div className="card p-4 mb-6">
            <h3 className="text-lg font-semibold mb-4">Community</h3>
            <div className="space-y-4">
              {profileData.community_data?.twitter_followers > 0 && (
                <div>
                  <p className="text-text-secondary text-sm">Twitter Followers</p>
                  <p className="text-lg font-semibold text-text-primary">
                    {(profileData.community_data.twitter_followers || 0).toLocaleString()}
                  </p>
                </div>
              )}
              {profileData.community_data?.reddit_subscribers > 0 && (
                <div>
                  <p className="text-text-secondary text-sm">Reddit Subscribers</p>
                  <p className="text-lg font-semibold text-text-primary">
                    {(profileData.community_data.reddit_subscribers || 0).toLocaleString()}
                  </p>
                </div>
              )}
              {profileData.community_data?.telegram_channel_user_count > 0 && (
                <div>
                  <p className="text-text-secondary text-sm">Telegram Members</p>
                  <p className="text-lg font-semibold text-text-primary">
                    {(profileData.community_data.telegram_channel_user_count || 0).toLocaleString()}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Latest News */}
          {news.length > 0 && (
            <div className="card p-4">
              <h3 className="text-lg font-semibold mb-4">Latest News</h3>
              <div className="space-y-4">
                {news.map((item, index) => (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:bg-background-dark p-2 rounded transition-colors"
                  >
                    <h4 className="font-medium text-text-primary mb-1">{item.title}</h4>
                    <div className="flex justify-between text-sm text-text-secondary">
                      <span>{item.source}</span>
                      <span>{new Date(item.published_at).toLocaleDateString()}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 