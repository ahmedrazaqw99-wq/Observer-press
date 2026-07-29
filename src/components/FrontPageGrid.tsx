import React from 'react';
import { Article } from '../data/news';
import { Flame, Clock, ArrowUpRight } from 'lucide-react';

interface FrontPageGridProps {
  articles: Article[];
  lang: 'ro' | 'en';
  onArticleSelect?: (article: Article) => void;
}

const CATEGORY_LABELS: Record<Article['category'], Record<'ro' | 'en', string>> = {
  politics: { ro: 'Politică', en: 'Politics' },
  world: { ro: 'Externe', en: 'World' },
  tech: { ro: 'Tehnologie', en: 'Tech' },
  culture: { ro: 'Cultură', en: 'Culture' },
  opinion: { ro: 'Opinii', en: 'Opinion' },
  investigations: { ro: 'Investigații', en: 'Investigations' },
};

function formatDate(iso: string, lang: 'ro' | 'en') {
  return new Date(iso).toLocaleDateString(lang === 'ro' ? 'ro-RO' : 'en-US', {
    month: 'short',
    day: 'numeric',
  });
}

export const FrontPageGrid: React.FC<FrontPageGridProps> = ({
  articles,
  lang,
  onArticleSelect
}) => {
  const leadStory = articles.find((a) => a.isLeadStory) || articles[0];
  const breakingStory = articles.find((a) => a.isBreaking);
  const secondaryArticles = articles.filter(
    (a) => a.id !== leadStory.id && a.category !== 'opinion'
  );
  const wireArticles = articles.filter((a) => a.id !== leadStory.id);
  const restOfPage = articles.filter(
    (a) => a.id !== leadStory.id && a.id !== breakingStory?.id
  );

  return (
    <main className="container-editorial py-6 space-y-10">
      {breakingStory && (
        <div className="bg-alert/10 border-l-4 border-alert p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="bg-alert text-paper text-[10px] font-black uppercase px-2 py-0.5 rounded tracking-wider flex items-center gap-1 animate-pulse">
              <Flame className="w-3 h-3" />
              {lang === 'ro' ? 'ULTIMA ORĂ' : 'BREAKING'}
            </span>
            <p className="text-xs font-bold text-ink">
              {breakingStory.title[lang]}
            </p>
          </div>
          <button
            onClick={() => onArticleSelect?.(breakingStory)}
            className="text-xs font-bold text-alert hover:underline flex items-center gap-1 cursor-pointer shrink-0"
          >
            {lang === 'ro' ? 'Citește articolul' : 'Read Story'}
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 news-border-b pb-10">
        <div className="lg:col-span-3 space-y-6 lg:border-r border-ink/15 lg:pr-6">
          <h3 className="eyebrow">{lang === 'ro' ? 'Analiză & Context' : 'Analysis & Context'}</h3>
          {secondaryArticles.slice(0, 2).map((article) => (
            <article
              key={article.id}
              onClick={() => onArticleSelect?.(article)}
              className="space-y-2 group cursor-pointer border-b border-ink/10 pb-4 last:border-0"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-alert">
                {CATEGORY_LABELS[article.category][lang]}
              </span>
              <h4 className="font-serif text-lg font-bold group-hover:text-alert transition-colors leading-snug">
                {article.title[lang]}
              </h4>
              <p className="text-xs text-muted line-clamp-2">
                {article.excerpt[lang]}
              </p>
              <div className="flex items-center gap-2 text-[10px] text-muted font-semibold pt-1">
                <Clock className="w-3 h-3" />
                <span>{article.readTimeMinutes} min</span>
              </div>
            </article>
          ))}
        </div>

        <div className="lg:col-span-6 space-y-4 lg:px-2">
          {leadStory && (
            <article
              onClick={() => onArticleSelect?.(leadStory)}
              className="space-y-4 group cursor-pointer"
            >
              <div className="aspect-16/9 overflow-hidden bg-paper-dim border border-ink/10">
                <img
                  src={leadStory.image}
                  alt={leadStory.title[lang]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {leadStory.imageCaption && (
                <p className="text-[11px] text-muted italic border-l-2 border-ink/20 pl-2">
                  {leadStory.imageCaption[lang]}
                </p>
              )}

              <div className="space-y-2">
                <span className="eyebrow text-alert">{CATEGORY_LABELS[leadStory.category][lang]}</span>
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black leading-tight group-hover:text-alert transition-colors">
                  {leadStory.title[lang]}
                </h2>
                <p className="text-sm text-ink/80 font-body leading-relaxed">
                  {leadStory.excerpt[lang]}
                </p>
              </div>

              <div className="flex items-center justify-between text-xs text-muted font-semibold pt-2 border-t border-ink/10">
                <span>
                  {lang === 'ro' ? 'De' : 'By'} {leadStory.author.name} ({leadStory.author.role[lang]})
                </span>
                <span>{leadStory.readTimeMinutes} min read</span>
              </div>
            </article>
          )}
        </div>

        <div className="lg:col-span-3 space-y-4 lg:border-l border-ink/15 lg:pl-6 bg-paper-dim/40 p-4 lg:bg-transparent lg:p-0">
          <div className="flex items-center justify-between news-border-b pb-2">
            <h3 className="eyebrow">{lang === 'ro' ? 'Fluxul Știrilor' : 'The Wire'}</h3>
            <span className="w-2 h-2 rounded-full bg-alert animate-ping" />
          </div>
          <ul className="space-y-4">
            {wireArticles.slice(0, 6).map((article) => (
              <li
                key={article.id}
                onClick={() => onArticleSelect?.(article)}
                className="group cursor-pointer border-b border-ink/10 pb-3 last:border-0 last:pb-0"
              >
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-muted mb-1">
                  <span>{CATEGORY_LABELS[article.category][lang]}</span>
                  <span>{formatDate(article.publishedAt, lang)}</span>
                </div>
                <p className="text-sm font-semibold leading-snug group-hover:text-alert transition-colors">
                  {article.title[lang]}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="space-y-6">
        <h3 className="eyebrow news-border-b pb-2">
          {lang === 'ro' ? 'Mai Mult din Ediția de Astăzi' : 'More From Today’s Edition'}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {restOfPage.map((article) => (
            <article
              key={article.id}
              onClick={() => onArticleSelect?.(article)}
              className="group cursor-pointer space-y-3"
            >
              <div className="aspect-4/3 overflow-hidden bg-paper-dim border border-ink/10">
                <img
                  src={article.image}
                  alt={article.title[lang]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-alert">
                {CATEGORY_LABELS[article.category][lang]}
              </span>
              <h4 className="font-serif text-xl font-bold leading-snug group-hover:text-alert transition-colors">
                {article.title[lang]}
              </h4>
              <p className="text-xs text-muted line-clamp-3">
                {article.excerpt[lang]}
              </p>
              <div className="flex items-center justify-between text-[10px] text-muted font-semibold pt-1 border-t border-ink/10">
                <span>{article.author.name}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.readTimeMinutes} min
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
};
