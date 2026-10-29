import React, { useState, useMemo } from 'react';
import { SEO, Breadcrumbs } from '../components/Layout';
import { expertiseAreas } from '../data/content';
import { Search } from 'lucide-react';

const categories = [...new Set(expertiseAreas.map(a => a.category))];

export default function Expertise() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return expertiseAreas.filter(area => {
      const matchesSearch = !search || 
        area.title.toLowerCase().includes(search.toLowerCase()) ||
        area.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = !activeCategory || area.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <>
      <SEO
        title="Expertise — Brian Kibet | AI Evaluation Capabilities"
        description="Comprehensive expertise in RLHF, SFT, LLM evaluation, prompt engineering, safety assessment, and more."
      />
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Expertise' }]} />

          <header className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Expertise
            </h1>
            <p className="text-xl text-neutral-400 leading-relaxed font-light max-w-3xl">
              Comprehensive capabilities in AI model evaluation, training, and quality assurance.
            </p>
          </header>

          {/* Search & Filter */}
          <div className="mb-10 space-y-4">
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
              <input
                type="text"
                placeholder="Search expertise areas..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-neutral-950 border border-white/10 text-white placeholder-neutral-600 focus:border-white/30 outline-none transition-colors"
              />
            </div>
            <div className="flex flex-wrap gap-2">
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
                  className={`px-4 py-2 text-xs font-light tracking-wider uppercase transition-colors border ${
                    activeCategory === cat ? 'border-white text-white' : 'border-white/10 text-neutral-500 hover:text-white hover:border-white/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Results */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {filtered.map(area => (
              <div key={area.id} className="p-7 bg-black hover:bg-neutral-950 transition-colors group">
                <span className="text-[10px] font-medium text-neutral-500 uppercase tracking-[0.2em]">{area.category}</span>
                <h3 className="font-medium text-white mt-3 mb-3 tracking-wide group-hover:text-neutral-300 transition-colors">
                  {area.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed font-light mb-4">
                  {area.description}
                </p>
                <p className="text-xs text-neutral-600 font-light italic">
                  {area.relevance}
                </p>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-neutral-500 font-light">No expertise areas match your search.</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
