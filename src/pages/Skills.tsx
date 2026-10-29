import React, { useState } from 'react';
import { SEO, Breadcrumbs } from '../components/Layout';
import { skills } from '../data/content';

const categories = Object.keys(skills);

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <>
      <SEO
        title="Skills — Brian Kibet | Technical Capabilities"
        description="Technical skills, tools, and platforms used in AI evaluation and training work."
      />
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Skills' }]} />

          <header className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Skills & Tools
            </h1>
            <p className="text-xl text-neutral-400 leading-relaxed font-light">
              Platforms, tools, and technical capabilities used in daily evaluation work.
            </p>
          </header>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 border-b border-white/5 pb-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-sm font-light tracking-wide transition-all border-b-2 ${
                  activeCategory === cat
                    ? 'text-white border-white'
                    : 'text-neutral-500 border-transparent hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills[activeCategory as keyof typeof skills]?.map((skill) => (
              <div
                key={skill.name}
                className="p-6 border border-white/5 hover:border-white/20 transition-all bg-neutral-950"
              >
                <h3 className="font-medium text-white tracking-wide mb-2">{skill.name}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed font-light">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
