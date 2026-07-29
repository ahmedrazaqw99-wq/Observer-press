import React from 'react';
import { Article } from '../data/news';
import { ArrowLeft, Clock, Share2, Bookmark } from 'lucide-react';

interface ArticleReaderProps {
  article: Article;
  lang: 'ro' | 'en';
  onBack: () => void;
}

const CATEGORY_LABELS: Record<Article['category'], Record<'ro' | 'en', string>> = {
  politics: { ro: 'Politică', en: 'Politics' },
  world: { ro: 'Externe', en: 'World' },
  tech: { ro: 'Tehnologie', en: 'Tech' },
  culture: { ro: 'Cultură', en: 'Culture' },
  opinion: { ro: 'Opinii', en: 'Opinion' },
  investigations: { ro: 'Investigații', en: 'Investigations' },
};

export const ArticleReader: React.FC<ArticleReaderProps> = ({ article, lang, onBack }) => {
  const publishedDate = new Date(article.publishedAt).toLocaleDateString(
    lang === 'ro' ? 'ro-RO' : 'en-US',
    { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
  );

  const publishedTime = new Date(article.publishedAt).toLocaleTimeString(
    lang === 'ro' ? 'ro-RO' : 'en-US',
    { hour: '2-digit', minute: '2-digit' }
  );

  const paragraphs = article.content?.[lang] ?? [article.excerpt[lang]];

  return (
    <article className="container-editorial py-8 max-w-3xl mx-auto">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted hover:text-ink transition-colors cursor-pointer mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        {lang === 'ro' ? 'Înapoi la prima pagină' : 'Back to front page'}
      </button>

      <header className="space-y-4 news-border-b pb-6 mb-8">
        <span className="eyebrow text-alert">{CATEGORY_LABELS[article.category][lang]}</span>
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05]">
          {article.title[lang]}
        </h1>
        <p className="font-body text-lg text-ink/80 leading-relaxed">
          {article.excerpt[lang]}
        </p>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-4">
          <div className="flex items-center gap-3">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="w-10 h-10 rounded-full object-cover border border-ink/10"
            />
            <div className="text-xs">
              <p className="font-bold text-ink">{article.author.name}</p>
              <p className="text-muted">{article.author.role[lang]}</p>
            </div>
          </div>

          <div className="flex items-center gap-4 text-xs text-muted font-semibold">
            <span className="capitalize">{publishedDate} · {publishedTime}</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              {article.readTimeMinutes} min
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 pt-2">
          <button className="btn-editorial gap-2">
            <Share2 className="w-3.5 h-3.5" />
            {lang === 'ro' ? 'Distribuie' : 'Share'}
          </button>
          <button className="btn-editorial gap-2">
            <Bookmark className="w-3.5 h-3.5" />
            {lang === 'ro' ? 'Salvează' : 'Save'}
          </button>
        </div>
      </header>

      <div className="aspect-16/9 overflow-hidden bg-paper-dim border border-ink/10 mb-3">
        <img
          src={article.image}
          alt={article.title[lang]}
          className="w-full h-full object-cover"
        />
      </div>
      {article.imageCaption && (
        <p className="text-[11px] text-muted italic border-l-2 border-ink/20 pl-2 mb-10">
          {article.imageCaption[lang]}
        </p>
      )}

      <div className="font-body text-[17px] leading-[1.8] text-ink/90 space-y-6 first-letter:font-serif first-letter:text-6xl first-letter:font-black first-letter:mr-2 first-letter:float-left first-letter:leading-[0.8]">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <footer className="news-border-b pt-8 mt-10 border-t">
        <p className="text-xs text-muted">
          {lang === 'ro'
            ? 'Ai o sesizare sau un document relevant pentru această investigație?'
            : 'Have a tip or a document relevant to this story?'}{' '}
          <a href="mailto:tips@observer-demo.org" className="font-bold text-ink underline underline-offset-2">
            tips@observer-demo.org
          </a>
        </p>
      </footer>
    </article>
  );
};
