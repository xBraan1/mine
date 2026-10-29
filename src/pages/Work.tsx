import React, { useState } from 'react';
import { SEO, Breadcrumbs } from '../components/Layout';
import { caseStudies } from '../data/content';

const allTags = [...new Set(caseStudies.flatMap(s => s.tags))];

export default function Work() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? caseStudies.filter(s => s.tags.includes(activeTag))
    : caseStudies;

  return (
    <>
      <SEO
        title="Work — Brian Kibet | Case Studies & Portfolio"
        description="Illustrative case studies demonstrating AI evaluation methodologies and approaches."
      />
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Work' }]} />

          <header className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Selected Work
            </h1>
            <p className="text-xl text-neutral-400 leading-relaxed font-light max-w-3xl">
              Illustrative exercises demonstrating evaluation methodologies. These represent the types of work performed, not confidential client materials.
            </p>
          </header>

          {/* Tag Filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            <button
              onClick={() => setActiveTag(null)}
              className={`px-4 py-2 text-xs font-light tracking-wider uppercase transition-colors border ${
                !activeTag ? 'border-white text-white' : 'border-white/10 text-neutral-500 hover:text-white hover:border-white/30'
              }`}
            >
              All
            </button>
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                className={`px-4 py-2 text-xs font-light tracking-wider uppercase transition-colors border ${
                  activeTag === tag ? 'border-white text-white' : 'border-white/10 text-neutral-500 hover:text-white hover:border-white/30'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Case Studies */}
          <div className="space-y-8">
            {filtered.map(study => (
              <article key={study.id} id={study.id} className="border border-white/5 bg-neutral-950 p-6 lg:p-10">
                <div className="flex flex-wrap gap-2 mb-6">
                  {study.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 border border-white/10 text-neutral-400 text-xs font-light tracking-wider">
                      {tag}
                    </span>
                  ))}
                  <span className="px-2.5 py-1 border border-white/5 text-neutral-600 text-xs font-light tracking-wider">
                    Illustrative
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">{study.title}</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xs font-medium text-neutral-500 uppercase tracking-[0.2em] mb-2">Context</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed font-light">{study.context}</p>
                  </div>

                  <div>
                    <h3 className="text-xs font-medium text-neutral-500 uppercase tracking-[0.2em] mb-2">Problem</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed font-light">{study.problem}</p>
                  </div>

                  <div>
                    <h3 className="text-xs font-medium text-neutral-500 uppercase tracking-[0.2em] mb-2">Methodology</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed font-light">{study.methodology}</p>
                  </div>

                  <div>
                    <h3 className="text-xs font-medium text-neutral-500 uppercase tracking-[0.2em] mb-2">Evaluation Criteria</h3>
                    <ul className="space-y-1">
                      {study.criteria.map(c => (
                        <li key={c} className="flex items-start gap-2 text-sm text-neutral-500 font-light">
                          <span className="w-1 h-1 bg-white/30 rounded-full mt-2 shrink-0" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xs font-medium text-neutral-500 uppercase tracking-[0.2em] mb-2">Key Findings</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed font-light">{study.findings}</p>
                  </div>

                  <div>
                    <h3 className="text-xs font-medium text-neutral-500 uppercase tracking-[0.2em] mb-2">Skills Demonstrated</h3>
                    <div className="flex flex-wrap gap-2">
                      {study.skills.map(skill => (
                        <span key={skill} className="px-3 py-1 bg-white/5 text-neutral-400 text-xs font-light">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
