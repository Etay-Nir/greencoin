import NewsFeed from '@/components/NewsFeed';

export default function NewsPage() {
  return (
    <>
      {/* Header */}
      <section className="py-12 bg-background-card border-b border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-text-primary mb-4">
              Cryptocurrency News & Analysis
            </h1>
            <p className="text-text-secondary text-lg">
              Stay informed with curated news from trusted sources, filtered by your interests and analyzed for market sentiment.
            </p>
          </div>
        </div>
      </section>

      {/* News Feed */}
      <section className="py-8">
        <div className="container">
          <NewsFeed />
        </div>
      </section>
    </>
  );
} 