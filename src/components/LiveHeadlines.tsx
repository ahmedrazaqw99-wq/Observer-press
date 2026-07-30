import React, { useEffect, useState } from 'react';
import { ExternalLink, RadioTower } from 'lucide-react';

interface LiveArticle {
  id: string;
  title: string;
  description: string | null;
  url: string;
  source: string;
  image: string | null;
  publishedAt: string;
}

interface LiveHeadlinesProps {
  lang: 'ro' | 'en';
}

export const LiveHeadlines: React.FC<LiveHeadlinesProps> = ({ lang }) => {
  const [articles, setArticles] = useState<LiveArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('/api/news')
      .then((res) => res.json())
      .then((data) => {
        if (data.articles) {
          setArticles(data.articles);
        } else {
          setError(true);
        }
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="container-editorial py-6">
        <p className="text-xs text-muted">
          {lang === 'ro' ? 'Se încarcă știrile live...' : 'Loading live headlines...'}
        </p>
      </div>
    );
  }

  if (error || articles.length === 0) {
    return null;
  }

  return (
    <section className="container-editorial py-8 news-border-b">
      <div className="flex items-center gap-2 mb-6">
        <RadioTower className="w-4 h-4 text-alert" />
        <h3 className="eyebrow">
          {lang === 'ro' ? 'Știri Live din Lume' : 'Live World Headlines'}
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {articles.map((article) => (
          <a
            key={article.id}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group space-y-2 block"
          >
            {article.image && (
              <div className="aspect-4/3 overflow-hidden bg-paper-dim border border-ink/10">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
            )}
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted">
              {article.source}
            </span>
            <h4 className="font-serif text-base font-bold leading-snug group-hover:text-alert transition-colors flex items-start gap-1">
              {article.title}
              <ExternalLink className="w-3 h-3 mt-1.5 shrink-0 opacity-50" />
            </h4>
          </a>
        ))}
      </div>
    </section>
  );
};
