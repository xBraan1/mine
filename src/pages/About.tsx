import React from 'react';
import { Link } from 'react-router-dom';
import { SEO, Breadcrumbs } from '../components/Layout';
import { profile, experience, education } from '../data/content';
import { ArrowRight, Award, BookOpen, Users, Target } from 'lucide-react';

export default function About() {
  return (
    <>
      <SEO
        title="About — Brian Kibet | AI Trainer & LLM Evaluation Specialist"
        description="Learn about Brian Kibet's background, approach to AI evaluation, and professional philosophy."
      />
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'About' }]} />

          <header className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              About Me
            </h1>
            <p className="text-xl text-neutral-400 leading-relaxed font-light">
              AI evaluation specialist with a focus on making language models more helpful, honest, and harmless.
            </p>
          </header>

          <section className="mb-16">
            <div className="bg-neutral-950 border border-white/5 p-6 lg:p-8">
              <p className="text-lg leading-relaxed text-neutral-300 font-light">
                I'm Brian Kibet, an AI Trainer and LLM Evaluation Specialist with over three years of experience in remote AI training and evaluation. My work focuses on providing the structured human feedback that helps language models become more aligned with human values and expectations.
              </p>
              <p className="text-lg leading-relaxed text-neutral-300 font-light mt-4">
                Through platforms like Scale AI, I evaluate model outputs across text, image, and audio modalities — performing pairwise preference ranking, rubric-based scoring, safety labeling, and detailed quality assessment. I've annotated and quality-checked over 10,000 data points while maintaining quality scores consistently above 95%.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">
              My Approach to AI Evaluation
            </h2>
            <div className="grid sm:grid-cols-2 gap-px bg-white/5">
              {[
                {
                  icon: Target,
                  title: 'Precision & Thoroughness',
                  description: 'Every evaluation follows a structured methodology. I decompose complex judgments into measurable dimensions, verify claims against reliable sources, and document reasoning clearly.',
                },
                {
                  icon: Award,
                  title: 'Quality Standards',
                  description: 'I maintain quality through regular calibration exercises, systematic self-review, and careful attention to guideline updates. Consistency and reliability are non-negotiable.',
                },
                {
                  icon: BookOpen,
                  title: 'Continuous Learning',
                  description: 'AI evaluation is a rapidly evolving field. I stay current with emerging evaluation methodologies, new model capabilities, and evolving safety standards.',
                },
                {
                  icon: Users,
                  title: 'Collaborative Excellence',
                  description: 'I thrive in distributed teams, contributing to inter-annotator agreement, sharing insights with peers, and maintaining productive async workflows across time zones.',
                },
              ].map(({ icon: Icon, title, description }) => (
                <div key={title} className="p-7 bg-black hover:bg-neutral-950 transition-colors">
                  <Icon size={24} className="text-white mb-4" strokeWidth={1.5} />
                  <h3 className="font-medium text-white mb-3 tracking-wide">{title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed font-light">{description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <div className="border border-white/10 p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">
                Quality & Accuracy Philosophy
              </h2>
              <p className="text-neutral-400 leading-relaxed font-light mb-4">
                I believe that AI evaluation is fundamentally about protecting the integrity of the feedback signal. Every preference ranking, every quality score, and every safety label directly shapes how models learn to behave. Inaccurate or inconsistent evaluation doesn't just produce bad data — it actively misaligns models.
              </p>
              <p className="text-neutral-400 leading-relaxed font-light mb-4">
                This is why I approach every evaluation task with the same rigor I'd apply to any high-stakes analytical work: verify before asserting, document before concluding, and calibrate before committing.
              </p>
              <p className="text-neutral-400 leading-relaxed font-light">
                My goal is to produce evaluation work that AI research teams can trust completely — work where the reasoning is transparent, the standards are consistent, and the quality speaks for itself.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">
              Professional Timeline
            </h2>
            <div className="space-y-6">
              {experience.map((exp) => (
                <div key={exp.id} className="relative pl-8 border-l border-white/20">
                  <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] bg-white" />
                  <div className="pb-2">
                    <span className="text-xs font-light text-neutral-500 tracking-wide uppercase">{exp.period}</span>
                    <h3 className="text-lg font-medium text-white mt-1 tracking-wide">
                      {exp.role}
                    </h3>
                    <p className="text-neutral-400 font-light">{exp.company} · {exp.type}</p>
                  </div>
                </div>
              ))}
              <div className="relative pl-8 border-l border-white/20">
                <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] bg-white" />
                <div className="pb-2">
                  <span className="text-xs font-light text-neutral-500 tracking-wide uppercase">Education</span>
                  <h3 className="text-lg font-medium text-white mt-1 tracking-wide">
                    {education.degree}
                  </h3>
                  <p className="text-neutral-500 text-sm mt-1 font-light">
                    Relevant coursework: {education.relevantCoursework.join(', ')}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center py-12">
            <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">
              Interested in Working Together?
            </h2>
            <p className="text-neutral-400 mb-6 font-light">
              I'm available for remote AI evaluation engagements and contract opportunities.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-black font-medium tracking-wide hover:bg-neutral-200 transition-colors"
            >
              Get in Touch <ArrowRight size={16} />
            </Link>
          </section>
        </div>
      </main>
    </>
  );
}
