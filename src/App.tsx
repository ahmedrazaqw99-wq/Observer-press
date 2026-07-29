import { useMemo, useState } from 'react';
import { Masthead } from './components/Masthead';
import { FrontPageGrid } from './components/FrontPageGrid';
import { ArticleReader } from './components/ArticleReader';
import { DEMO_ARTICLES, Article } from './data/news';
import { BRAND } from './lib/brand';

type Lang = 'ro' | 'en';

function App() {
  const [lang, setLang] = useState<Lang>(BRAND.defaultLang as Lang);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const filteredArticles = useMemo(() => {
    if (activeCategory === 'all') return DEMO_ARTICLES;
    return DEMO_ARTICLES.filter((a) => a.category === activeCategory);
  }, [activeCategory]);

  const handleArticleSelect = (article: Article) => {
    setSelectedArticle(article);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setSelectedArticle(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (category: string) => {
    setSelectedArticle(null);
    setActiveCategory(category);
  };

  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col">
      <Masthead
        lang={lang}
        onLangChange={setLang}
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
      />

      {selectedArticle ? (
        <ArticleReader article={selectedArticle} lang={lang} onBack={handleBack} />
      ) : (
        <FrontPageGrid
          articles={filteredArticles}
          lang={lang}
          onArticleSelect={handleArticleSelect}
        />
      )}

      <footer className="news-double-border mt-auto py-8">
        <div className="container-editorial flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p className="font-serif text-lg font-black text-ink uppercase tracking-tight">
            {BRAND.mark}
          </p>
          <p>
            © {new Date().getFullYear()} {BRAND.name}.{' '}
            {lang === 'ro' ? 'Toate drepturile rezervate.' : 'All rights reserved.'}
          </p>
          <p>{BRAND.socialHandle}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
