import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/Layout';
import { profile, expertiseAreas, caseStudies } from '../data/content';
import { SignatureLogo } from '../components/SignatureLogo';
import { Shield, Brain, Target, CheckCircle, ArrowRight } from 'lucide-react';

export default function Home() {
  const keyExpertise = expertiseAreas.slice(0, 6);
  const featuredWork = caseStudies.slice(0, 2);

  return (
    <>
      <SEO
        title="Brian Kibet — AI Trainer & LLM Evaluation Specialist"
        description="AI Trainer & LLM Evaluation Specialist with expertise in RLHF, SFT, Prompt Engineering, and Model Quality. 3+ years of remote experience."
      />

      {/* Hero Section */}
      <section className="relative pt-28 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/10 text-neutral-400 text-xs font-light tracking-[0.15em] uppercase mb-8">
                <span className="w-1.5 h-1.5 bg-white rounded-full" />
                Available for remote engagements
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 tracking-tight">
                {profile.name}
              </h1>

              <p className="text-xl sm:text-2xl text-neutral-400 font-light mb-6 tracking-wide">
                {profile.title}
              </p>

              <p className="text-base text-neutral-500 mb-10 leading-relaxed max-w-xl font-light">
                {profile.summary}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-black font-medium tracking-wide hover:bg-neutral-200 transition-colors"
                >
                  Discuss an Opportunity
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/expertise"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 text-white font-light tracking-wide hover:border-white/50 hover:bg-white/5 transition-all"
                >
                  Explore My Expertise
                </Link>
              </div>
            </div>

            {/* Signature Logo Card */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-square flex items-center justify-center border border-white/5 bg-neutral-950">
                <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/20" />
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/20" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/20" />
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/20" />
                
                <div className="text-center p-8">
                  <SignatureLogo width={200} color="#FFFFFF" />
                  
                  <div className="mt-10 space-y-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <p className="text-3xl font-bold text-white">{profile.stats.yearsExperience}</p>
                        <p className="text-xs text-neutral-500 mt-1 font-light tracking-wide uppercase">Years</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-white">{profile.stats.dataPointsAnnotated}</p>
                        <p className="text-xs text-neutral-500 mt-1 font-light tracking-wide uppercase">Data Points</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-white">{profile.stats.qualityScore}</p>
                        <p className="text-xs text-neutral-500 mt-1 font-light tracking-wide uppercase">Quality</p>
                      </div>
                      <div>
                        <p className="text-3xl font-bold text-white">3</p>
                        <p className="text-xs text-neutral-500 mt-1 font-light tracking-wide uppercase">Modalities</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 justify-center">
                      {['RLHF', 'SFT', 'Prompt Engineering', 'Model Quality', 'AI Safety'].map(tag => (
                        <span key={tag} className="px-3 py-1 border border-white/10 text-neutral-400 text-xs font-light tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="signature-line max-w-7xl mx-auto" />

      {/* Proof Points */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">What I Bring</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Evaluation Excellence
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {[
              { icon: Brain, title: 'Deep Evaluation', desc: 'Multi-dimensional assessment across helpfulness, accuracy, safety, and instruction following.' },
              { icon: Shield, title: 'Safety Focus', desc: 'Systematic identification of harmful, biased, or policy-violating content.' },
              { icon: Target, title: 'Quality Driven', desc: 'Consistent quality scores above 95% through rigorous self-review and calibration.' },
              { icon: CheckCircle, title: 'Reliable Delivery', desc: '3+ years of dependable remote work with structured async collaboration.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-8 lg:p-10 bg-black hover:bg-neutral-950 transition-colors group">
                <Icon size={24} className="text-white mb-6" strokeWidth={1.5} />
                <h3 className="font-medium text-white mb-3 tracking-wide">{title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed font-light">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Overview */}
      <section className="py-20 lg:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">Capabilities</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Core Expertise
              </h2>
            </div>
            <Link
              to="/expertise"
              className="hidden sm:inline-flex items-center gap-2 text-neutral-400 hover:text-white text-sm font-light tracking-wide transition-colors"
            >
              View all <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {keyExpertise.map(area => (
              <div
                key={area.id}
                className="p-7 bg-black hover:bg-neutral-950 transition-colors group"
              >
                <span className="text-[10px] font-medium text-neutral-500 uppercase tracking-[0.2em]">{area.category}</span>
                <h3 className="font-medium text-white mt-3 mb-3 tracking-wide group-hover:text-neutral-300 transition-colors">
                  {area.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed font-light line-clamp-3">
                  {area.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center sm:text-left">
            <Link
              to="/expertise"
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-white text-sm font-light tracking-wide transition-colors sm:hidden"
            >
              View all expertise <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Selected Work Preview */}
      <section className="py-20 lg:py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-14">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 mb-4">Portfolio</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Selected Work
              </h2>
            </div>
            <Link
              to="/work"
              className="hidden sm:inline-flex items-center gap-2 text-neutral-400 hover:text-white text-sm font-light tracking-wide transition-colors"
            >
              View all <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {featuredWork.map(study => (
              <Link
                key={study.id}
                to={`/work#${study.id}`}
                className="block p-8 border border-white/5 hover:border-white/20 transition-all group bg-neutral-950"
              >
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
                <h3 className="text-xl font-medium text-white mb-4 tracking-wide group-hover:text-neutral-300 transition-colors">
                  {study.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed mb-6 font-light">
                  {study.context}
                </p>
                <span className="inline-flex items-center gap-2 text-white text-sm font-light tracking-wide">
                  Read more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="border border-white/10 p-10 lg:p-16">
            <SignatureLogo width={160} color="#FFFFFF" className="mx-auto mb-10 opacity-60" />
            <h2 className="text-3xl font-bold text-white mb-5 tracking-tight">
              Let's Work Together
            </h2>
            <p className="text-neutral-400 mb-10 max-w-lg mx-auto font-light leading-relaxed">
              Whether you need LLM evaluation, RLHF annotation, SFT data creation, or quality assurance — I'm available for remote engagements and contract opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-black font-medium tracking-wide hover:bg-neutral-200 transition-colors"
              >
                Discuss an Opportunity
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 text-white font-light tracking-wide hover:border-white/50 hover:bg-white/5 transition-all"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
