const COINGECKO_API_BASE = 'https://api.coingecko.com/api/v3';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds
const CACHE_KEY_PREFIX = 'crypto_news_';

// Using CryptoCompare News API as it provides free news data
const CRYPTOCOMPARE_API_KEY = ''; // You'll need to add your API key here
const CRYPTOCOMPARE_API_BASE = 'https://min-api.cryptocompare.com/data/v2';

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
  cryptocurrency?: string,
  forceRefresh: boolean = false
): Promise<CoinGeckoNewsArticle[]> {
  const cacheKey = getCacheKey(category, cryptocurrency);
  
  // Only check cache if not forcing refresh
  if (!forceRefresh) {
    const cachedData = getCachedData(cacheKey);
    if (cachedData) {
      console.log('Using cached news data');
      return cachedData;
    }
  }

  try {
    console.log('Fetching fresh news data from API');
    
    // Using CryptoCompare's news endpoint
    const response = await fetch(
      `${CRYPTOCOMPARE_API_BASE}/news/?lang=EN${cryptocurrency ? `&categories=${cryptocurrency}` : ''}`,
      {
        headers: CRYPTOCOMPARE_API_KEY ? {
          'authorization': `Apikey ${CRYPTOCOMPARE_API_KEY}`
        } : undefined
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch news');
    }

    const data = await response.json();
    
    if (!data.Data) {
      throw new Error('Invalid response format');
    }

    // Transform CryptoCompare news format to our format
    const transformedData: CoinGeckoNewsArticle[] = data.Data.map((article: any) => ({
      id: article.id.toString(),
      title: article.title,
      description: article.body,
      url: article.url,
      source: article.source,
      publishedAt: new Date(article.published_on * 1000).toISOString(),
      sentiment: analyzeSentiment(article.title + ' ' + article.body),
      category: article.categories || 'general',
      cryptocurrency: cryptocurrency || 'general',
      imageUrl: article.imageurl
    }));

    // Cache the transformed data
    setCachedData(cacheKey, transformedData);

    return transformedData;
  } catch (error) {
    console.error('Error fetching news:', error);
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

const COINGECKO_API_URL = 'https://api.coingecko.com/api/v3';

export interface CryptoCurrency {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  total_volume: number;
  price_change_percentage_24h: number;
  circulating_supply: number;
}

export async function fetchCryptocurrencies(
  page: number = 1,
  perPage: number = 50,
  sortBy: string = 'market_cap_desc'
): Promise<CryptoCurrency[]> {
  try {
    const response = await fetch(
      `${COINGECKO_API_URL}/coins/markets?vs_currency=usd&order=${sortBy}&per_page=${perPage}&page=${page}&sparkline=false`
    );

    if (!response.ok) {
      throw new Error('Failed to fetch cryptocurrencies');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching cryptocurrencies:', error);
    return [];
  }
}

export async function searchCryptocurrencies(query: string): Promise<CryptoCurrency[]> {
  try {
    const response = await fetch(
      `${COINGECKO_API_URL}/search?query=${encodeURIComponent(query)}`
    );

    if (!response.ok) {
      throw new Error('Failed to search cryptocurrencies');
    }

    const data = await response.json();
    return data.coins;
  } catch (error) {
    console.error('Error searching cryptocurrencies:', error);
    return [];
  }
}

// Format large numbers with appropriate suffixes (K, M, B, T)
export function formatNumber(num: number): string {
  if (num >= 1e12) {
    return (num / 1e12).toFixed(2) + 'T';
  }
  if (num >= 1e9) {
    return (num / 1e9).toFixed(2) + 'B';
  }
  if (num >= 1e6) {
    return (num / 1e6).toFixed(2) + 'M';
  }
  if (num >= 1e3) {
    return (num / 1e3).toFixed(2) + 'K';
  }
  return num.toFixed(2);
}

// Format price changes with appropriate color and sign
export function formatPriceChange(change: number): { text: string; color: string } {
  const formattedChange = change.toFixed(2);
  return {
    text: `${change >= 0 ? '+' : ''}${formattedChange}%`,
    color: change >= 0 ? 'text-green-500' : 'text-red-500'
  };
}

// Cache cryptocurrency data to avoid excessive API calls
const cache = new Map<string, { data: any; timestamp: number }>();

export async function getCachedCryptocurrencies(
  page: number = 1,
  perPage: number = 50,
  sortBy: string = 'market_cap_desc'
): Promise<CryptoCurrency[]> {
  const cacheKey = `crypto_${page}_${perPage}_${sortBy}`;
  const cached = cache.get(cacheKey);

  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }

  const data = await fetchCryptocurrencies(page, perPage, sortBy);
  cache.set(cacheKey, { data, timestamp: Date.now() });
  return data;
} 