import React, { useState, useMemo } from 'react';
import { SEO, Breadcrumbs } from '../components/Layout';
import { faqItems } from '../data/content';
import { Search, ChevronDown } from 'lucide-react';

const categories = [...new Set(faqItems.map(f => f.category))];

export default function FAQ() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return faqItems.filter(item => {
      const matchesSearch = !search ||
        item.question.toLowerCase().includes(search.toLowerCase()) ||
        item.answer.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = !activeCategory || item.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <>
      <SEO
        title="FAQ — Brian Kibet | Frequently Asked Questions"
        description="Common questions about AI evaluation services, engagement types, and working with Brian Kibet."
      />
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'FAQ' }]} />

          <header className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-neutral-400 leading-relaxed font-light">
              Common questions about evaluation services and collaboration.
            </p>
          </header>

          {/* Search */}
          <div className="relative mb-8">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
            <input
              type="text"
              placeholder="Search questions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-neutral-950 border border-white/10 text-white placeholder-neutral-600 focus:border-white/30 outline-none transition-colors"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-4 py-2 text-xs font-light tracking-wider uppercase transition-colors border ${
                !activeCategory ? 'border-white text-white' : 'border-white/10 text-neutral-500 hover:text-white hover:border-white/30'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                className={`px-4 py-2 text-xs font-light tracking-wider uppercase transition-colors border capitalize ${
                  activeCategory === cat ? 'border-white text-white' : 'border-white/10 text-neutral-500 hover:text-white hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ Items */}
          <div className="space-y-3">
            {filtered.map(item => (
              <div
                key={item.id}
                className="border border-white/5 bg-neutral-950 overflow-hidden"
              >
                <button
                  onClick={() => setOpenId(openId === item.id ? null : item.id)}
                  className="w-full text-left p-5 lg:p-6 flex items-center justify-between gap-4"
                  aria-expanded={openId === item.id}
                >
                  <span className="text-sm lg:text-base font-light text-white tracking-wide">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-neutral-500 shrink-0 transition-transform ${openId === item.id ? 'rotate-180' : ''}`}
                  />
                </button>
                {openId === item.id && (
                  <div className="px-5 lg:px-6 pb-5 lg:pb-6 border-t border-white/5 pt-4">
                    <p className="text-sm text-neutral-400 leading-relaxed font-light">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-neutral-500 font-light">No questions match your search.</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
