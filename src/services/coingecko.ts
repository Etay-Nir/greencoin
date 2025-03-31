const COINGECKO_API_BASE = 'https://api.coingecko.com/api/v3';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds
const CACHE_KEY_PREFIX = 'coingecko_news_';

export interface CoinGeckoNewsArticle {
  id: string;
  title: string;
  description: string;
  url: string;
  source: string;
  publishedAt: string;
  sentiment: 'positive' | 'negative' | 'neutral';
  category: string;
  cryptocurrency: string;
  imageUrl?: string;
}

interface CacheData {
  timestamp: number;
  data: CoinGeckoNewsArticle[];
}

function getCacheKey(category?: string, cryptocurrency?: string): string {
  return `${CACHE_KEY_PREFIX}${category || 'all'}_${cryptocurrency || 'all'}`;
}

function getCachedData(key: string): CoinGeckoNewsArticle[] | null {
  try {
    const cached = localStorage.getItem(key);
    if (!cached) return null;

    const { timestamp, data }: CacheData = JSON.parse(cached);
    const isExpired = Date.now() - timestamp > CACHE_DURATION;

    if (isExpired) {
      localStorage.removeItem(key);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error reading from cache:', error);
    return null;
  }
}

function setCachedData(key: string, data: CoinGeckoNewsArticle[]): void {
  try {
    const cacheData: CacheData = {
      timestamp: Date.now(),
      data
    };
    localStorage.setItem(key, JSON.stringify(cacheData));
  } catch (error) {
    console.error('Error writing to cache:', error);
  }
}

export async function fetchNews(
  category?: string,
  cryptocurrency?: string
): Promise<CoinGeckoNewsArticle[]> {
  const cacheKey = getCacheKey(category, cryptocurrency);
  const cachedData = getCachedData(cacheKey);

  if (cachedData) {
    console.log('Using cached news data');
    return cachedData;
  }

  try {
    console.log('Fetching fresh news data from API');
    const response = await fetch(
      `${COINGECKO_API_BASE}/news?${new URLSearchParams({
        ...(category && { category }),
        ...(cryptocurrency && { coin: cryptocurrency }),
        per_page: '50',
        page: '1'
      })}`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch news');
    }

    const data = await response.json();
    
    // Transform CoinGecko news format to our format
    const transformedData = data.map((article: any) => ({
      id: article.id,
      title: article.title,
      description: article.description,
      url: article.url,
      source: article.source,
      publishedAt: article.published_at,
      // Simple sentiment analysis based on title and description
      sentiment: analyzeSentiment(article.title + ' ' + article.description),
      category: article.categories[0] || 'general',
      cryptocurrency: article.coins[0]?.id || 'general',
      imageUrl: article.thumb_2x
    }));

    // Cache the transformed data
    setCachedData(cacheKey, transformedData);

    return transformedData;
  } catch (error) {
    console.error('Error fetching news from CoinGecko:', error);
    throw error;
  }
}

// Simple sentiment analysis function
function analyzeSentiment(text: string): 'positive' | 'negative' | 'neutral' {
  const positiveWords = ['surge', 'rise', 'gain', 'up', 'high', 'growth', 'positive', 'bullish', 'success', 'breakthrough'];
  const negativeWords = ['drop', 'fall', 'down', 'low', 'decline', 'negative', 'bearish', 'risk', 'crash', 'loss'];

  const words = text.toLowerCase().split(/\s+/);
  let positiveCount = 0;
  let negativeCount = 0;

  words.forEach(word => {
    if (positiveWords.includes(word)) positiveCount++;
    if (negativeWords.includes(word)) negativeCount++;
  });

  if (positiveCount > negativeCount) return 'positive';
  if (negativeCount > positiveCount) return 'negative';
  return 'neutral';
} 