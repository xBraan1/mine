import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO, Breadcrumbs } from '../components/Layout';
import { services } from '../data/content';
import { ArrowRight, Check } from 'lucide-react';

export default function Services() {
  const { slug } = useParams();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  
  const activeService = slug ? services.find(s => s.slug === slug) : null;

  if (activeService) {
    return (
      <>
        <SEO
          title={`${activeService.title} — Brian Kibet | Services`}
          description={activeService.shortDescription}
        />
        <main className="pt-24 lg:pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: 'Services', path: '/services' }, { label: activeService.title }]} />
            
            <header className="mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
                {activeService.title}
              </h1>
              <p className="text-xl text-neutral-400 leading-relaxed font-light">
                {activeService.shortDescription}
              </p>
            </header>

            <div className="space-y-8">
              <div className="bg-neutral-950 border border-white/5 p-6 lg:p-8">
                <h2 className="text-lg font-medium text-white mb-3">The Problem</h2>
                <p className="text-neutral-400 leading-relaxed font-light">{activeService.problem}</p>
              </div>

              <div>
                <h2 className="text-lg font-medium text-white mb-4">Methods</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {activeService.methods.map(method => (
                    <div key={method} className="flex items-start gap-3 p-4 border border-white/5">
                      <Check size={16} className="text-white mt-0.5 shrink-0" />
                      <span className="text-sm text-neutral-400 font-light">{method}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-lg font-medium text-white mb-4">Deliverables</h2>
                <ul className="space-y-2">
                  {activeService.deliverables.map(d => (
                    <li key={d} className="flex items-start gap-3 text-sm text-neutral-400 font-light">
                      <span className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2 shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border border-white/10 p-6">
                <h2 className="text-lg font-medium text-white mb-3">Quality Assurance</h2>
                <p className="text-neutral-400 leading-relaxed font-light">{activeService.quality}</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-black font-medium tracking-wide hover:bg-neutral-200 transition-colors"
              >
                Discuss This Service <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <SEO
        title="Services — Brian Kibet | AI Evaluation Services"
        description="Comprehensive AI evaluation services including LLM evaluation, RLHF, SFT data creation, prompt evaluation, and more."
      />
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Services' }]} />

          <header className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Services
            </h1>
            <p className="text-xl text-neutral-400 leading-relaxed font-light max-w-3xl">
              Professional AI evaluation services tailored to improve model quality, safety, and alignment.
            </p>
          </header>

          <div className="space-y-4">
            {services.map(service => (
              <div
                key={service.id}
                className="border border-white/5 hover:border-white/20 transition-all bg-neutral-950"
              >
                <button
                  onClick={() => setExpandedId(expandedId === service.id ? null : service.id)}
                  className="w-full text-left p-6 lg:p-8 flex items-start justify-between gap-4"
                >
                  <div>
                    <h3 className="text-lg font-medium text-white tracking-wide mb-2">
                      {service.title}
                    </h3>
                    <p className="text-sm text-neutral-500 font-light leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>
                  <span className={`text-neutral-500 transition-transform ${expandedId === service.id ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                
                {expandedId === service.id && (
                  <div className="px-6 lg:px-8 pb-6 lg:pb-8 border-t border-white/5 pt-6">
                    <p className="text-sm text-neutral-400 font-light mb-4">{service.problem}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.methods.slice(0, 3).map(m => (
                        <span key={m} className="px-3 py-1 border border-white/10 text-neutral-400 text-xs font-light">
                          {m}
                        </span>
                      ))}
                    </div>
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-white text-sm font-light tracking-wide hover:opacity-80 transition-opacity"
                    >
                      View details <ArrowRight size={14} />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
