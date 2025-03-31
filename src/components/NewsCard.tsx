interface NewsArticle {
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

interface NewsCardProps {
  article: NewsArticle;
}

export function NewsCard({ article }: NewsCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 24) {
      return `${diffInHours}h ago`;
    }
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive':
        return 'text-green-500';
      case 'negative':
        return 'text-red-500';
      default:
        return 'text-yellow-500';
    }
  };

  return (
    <article className="card overflow-hidden">
      {/* Image */}
      <div className="aspect-video bg-background-dark relative">
        {article.imageUrl ? (
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-12 h-12 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Source and Date */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm text-text-secondary">{article.source}</span>
          <span className="text-sm text-text-secondary">•</span>
          <span className="text-sm text-text-secondary">{formatDate(article.publishedAt)}</span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-text-primary mb-2 line-clamp-2">
          {article.title}
        </h2>

        {/* Description */}
        <p className="text-text-secondary mb-4 line-clamp-3">
          {article.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`text-sm font-medium ${getSentimentColor(article.sentiment)}`}>
              {article.sentiment.charAt(0).toUpperCase() + article.sentiment.slice(1)}
            </span>
            <span className="text-sm text-text-secondary">Sentiment</span>
          </div>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 text-sm font-medium"
          >
            Read More
          </a>
        </div>
      </div>
    </article>
  );
} 