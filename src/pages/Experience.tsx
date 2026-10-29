import React from 'react';
import { Link } from 'react-router-dom';
import { SEO, Breadcrumbs } from '../components/Layout';
import { experience, education } from '../data/content';
import { ArrowRight } from 'lucide-react';

export default function Experience() {
  return (
    <>
      <SEO
        title="Experience — Brian Kibet | Professional Background"
        description="Brian Kibet's professional experience in AI training, evaluation, and data management."
      />
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Experience' }]} />

          <header className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Experience
            </h1>
            <p className="text-xl text-neutral-400 leading-relaxed font-light">
              Professional background in AI evaluation and data management.
            </p>
          </header>

          <div className="space-y-12">
            {experience.map((exp) => (
              <div key={exp.id} className="relative">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 mb-6">
                  <div className="flex-1">
                    <span className="text-xs font-light text-neutral-500 tracking-wide uppercase">{exp.period}</span>
                    <h2 className="text-2xl font-bold text-white mt-1 tracking-tight">{exp.role}</h2>
                    <p className="text-neutral-400 font-light mt-1">{exp.company} · {exp.type}</p>
                  </div>
                </div>
                <p className="text-neutral-400 leading-relaxed font-light mb-6">{exp.description}</p>
                <div className="space-y-3">
                  {exp.responsibilities.map((resp, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-white/40 rounded-full mt-2 shrink-0" />
                      <p className="text-sm text-neutral-500 font-light leading-relaxed">{resp}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Education */}
            <div className="border-t border-white/5 pt-12">
              <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">Education</h2>
              <div className="bg-neutral-950 border border-white/5 p-6 lg:p-8">
                <h3 className="text-lg font-medium text-white tracking-wide">{education.degree}</h3>
                <div className="mt-4">
                  <p className="text-xs font-light text-neutral-500 tracking-wide uppercase mb-3">Relevant Coursework</p>
                  <div className="flex flex-wrap gap-2">
                    {education.relevantCoursework.map(course => (
                      <span key={course} className="px-3 py-1.5 border border-white/10 text-neutral-400 text-xs font-light tracking-wider">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-black font-medium tracking-wide hover:bg-neutral-200 transition-colors"
            >
              Discuss an Opportunity <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
