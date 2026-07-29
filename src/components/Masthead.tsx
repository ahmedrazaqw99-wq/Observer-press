import React, { useState } from 'react';
import { BRAND } from '../lib/brand';
import { CloudSun, Menu, X, Search, Bell } from 'lucide-react';

interface MastheadProps {
  lang: 'ro' | 'en';
  onLangChange: (lang: 'ro' | 'en') => void;
  activeCategory?: string;
  onSelectCategory?: (category: string) => void;
}

export const Masthead: React.FC<MastheadProps> = ({
  lang,
  onLangChange,
  activeCategory = 'all',
  onSelectCategory
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    { id: 'all', label: { ro: 'Ediția zilei', en: 'Today’s Edition' } },
    { id: 'politics', label: { ro: 'Politica', en: 'Politics' } },
    { id: 'world', label: { ro: 'Externe', en: 'World' } },
    { id: 'tech', label: { ro: 'Tehnologie', en: 'Tech' } },
    { id: 'culture', label: { ro: 'Cultură', en: 'Culture' } },
    { id: 'opinion', label: { ro: 'Opinii', en: 'Opinion' } },
    { id: 'investigations', label: { ro: 'Investigații', en: 'Investigations' } },
  ];

  const todayDate = new Date().toLocaleDateString(lang === 'ro' ? 'ro-RO' : 'en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <header className="w-full bg-paper text-ink">
      <div className="news-border-b py-2 text-xs">
        <div className="container-editorial flex items-center justify-between">
          <div className="flex items-center gap-4 text-muted">
            <span className="capitalize font-medium">{todayDate}</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">{BRAND.city}</span>
            <span className="hidden md:inline">•</span>
            <span className="hidden md:flex items-center gap-1">
              <CloudSun className="w-3.5 h-3.5" /> 24°C
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:inline-flex items-center gap-1.5 font-bold uppercase tracking-wider text-[10px] text-alert hover:underline cursor-pointer">
              <Bell className="w-3 h-3" />
              {lang === 'ro' ? 'Abonare Buletin' : 'Newsletter'}
            </button>

            <div className="flex items-center border border-ink/20 rounded-full p-0.5">
              <button
                onClick={() => onLangChange('ro')}
                className={`px-2 py-0.5 text-[10px] font-bold rounded-full transition-all cursor-pointer ${
                  lang === 'ro' ? 'bg-ink text-paper' : 'text-muted hover:text-ink'
                }`}
              >
                RO
              </button>
              <button
                onClick={() => onLangChange('en')}
                className={`px-2 py-0.5 text-[10px] font-bold rounded-full transition-all cursor-pointer ${
                  lang === 'en' ? 'bg-ink text-paper' : 'text-muted hover:text-ink'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="py-6 sm:py-8 container-editorial text-center relative">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden absolute left-4 top-1/2 -translate-y-1/2 p-2 text-ink hover:opacity-75"
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        <p className="eyebrow mb-2 hidden sm:block">{BRAND.tagline}</p>

        <a href="/" className="inline-block">
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight uppercase leading-none">
            {BRAND.mark}
          </h1>
        </a>

        <div className="mt-2 text-[11px] font-semibold tracking-widest text-muted uppercase flex items-center justify-center gap-3">
          <span>{lang === 'ro' ? 'Jurnalism Independent' : 'Independent Journal'}</span>
          <span>•</span>
          <span>{lang === 'ro' ? 'Ediția Digitală' : 'Digital Edition'}</span>
        </div>
      </div>

      <nav className="news-double-border bg-paper sticky top-0 z-40">
        <div className="container-editorial flex items-center justify-between">
          <div className="hidden lg:flex items-center space-x-8 py-3 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => onSelectCategory?.(cat.id)}
                className={`text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'text-alert underline underline-offset-8 decoration-2'
                    : 'text-ink/80 hover:text-ink'
                }`}
              >
                {cat.label[lang]}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between lg:justify-end w-full lg:w-auto py-3">
            <span className="lg:hidden font-bold text-xs uppercase tracking-wider">
              {categories.find(c => c.id === activeCategory)?.label[lang]}
            </span>
            <button className="flex items-center gap-2 text-xs font-semibold text-muted hover:text-ink cursor-pointer">
              <Search className="w-4 h-4" />
              <span className="hidden sm:inline">{lang === 'ro' ? 'Căutare' : 'Search'}</span>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-ink/10 bg-paper px-4 py-6 space-y-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  onSelectCategory?.(cat.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left text-sm font-bold uppercase tracking-wider py-1.5 ${
                  activeCategory === cat.id ? 'text-alert' : 'text-ink'
                }`}
              >
                {cat.label[lang]}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};
