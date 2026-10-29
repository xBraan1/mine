import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO, Breadcrumbs } from '../components/Layout';
import { insights } from '../data/content';
import { ArrowRight, Clock } from 'lucide-react';

export default function Insights() {
  const { id } = useParams();
  const activeInsight = id ? insights.find(i => i.id === id) : null;

  if (activeInsight) {
    return (
      <>
        <SEO
          title={`${activeInsight.title} — Brian Kibet | Insights`}
          description={activeInsight.excerpt}
        />
        <main className="pt-24 lg:pt-32 pb-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: 'Insights', path: '/insights' }, { label: activeInsight.title }]} />

            <article>
              <header className="mb-10">
                <div className="flex flex-wrap gap-2 mb-4">
                  {activeInsight.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 border border-white/10 text-neutral-400 text-xs font-light tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
                  {activeInsight.title}
                </h1>
                <div className="flex items-center gap-4 text-sm text-neutral-500 font-light">
                  <span>{new Date(activeInsight.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                  <span className="flex items-center gap-1"><Clock size={14} /> {activeInsight.readTime}</span>
                </div>
              </header>

              <div className="prose max-w-none">
                {activeInsight.content.split('\n\n').map((paragraph, i) => {
                  if (paragraph.startsWith('## ')) {
                    return <h2 key={i}>{paragraph.replace('## ', '')}</h2>;
                  }
                  if (paragraph.startsWith('### ')) {
                    return <h3 key={i}>{paragraph.replace('### ', '')}</h3>;
                  }
                  if (paragraph.startsWith('- ')) {
                    const items = paragraph.split('\n').filter(l => l.startsWith('- '));
                    return (
                      <ul key={i}>
                        {items.map((item, j) => (
                          <li key={j} dangerouslySetInnerHTML={{ __html: item.replace('- ', '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                        ))}
                      </ul>
                    );
                  }
                  if (paragraph.match(/^\d+\./)) {
                    const items = paragraph.split('\n').filter(l => l.match(/^\d+\./));
                    return (
                      <ol key={i}>
                        {items.map((item, j) => (
                          <li key={j} dangerouslySetInnerHTML={{ __html: item.replace(/^\d+\.\s*/, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                        ))}
                      </ol>
                    );
                  }
                  return <p key={i} dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />;
                })}
              </div>
            </article>

            <div className="mt-16 pt-8 border-t border-white/5">
              <Link
                to="/insights"
                className="inline-flex items-center gap-2 text-neutral-400 hover:text-white text-sm font-light tracking-wide transition-colors"
              >
                ← Back to Insights
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
        title="Insights — Brian Kibet | AI Evaluation Articles"
        description="Articles and insights on AI evaluation, LLM quality assessment, and industry best practices."
      />
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Insights' }]} />

          <header className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
              Insights
            </h1>
            <p className="text-xl text-neutral-400 leading-relaxed font-light">
              Articles and perspectives on AI evaluation, model quality, and industry practices.
            </p>
          </header>

          <div className="space-y-6">
            {insights.map(insight => (
              <Link
                key={insight.id}
                to={`/insights/${insight.id}`}
                className="block p-6 lg:p-8 border border-white/5 hover:border-white/20 transition-all bg-neutral-950 group"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {insight.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 border border-white/10 text-neutral-400 text-xs font-light tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl font-medium text-white mb-3 tracking-wide group-hover:text-neutral-300 transition-colors">
                  {insight.title}
                </h2>
                <p className="text-sm text-neutral-500 leading-relaxed font-light mb-4">
                  {insight.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-neutral-600 font-light">
                    <span>{new Date(insight.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {insight.readTime}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-white text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity">
                    Read <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
