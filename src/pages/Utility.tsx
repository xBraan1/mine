import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/Layout';

export function NotFound() {
  return (
    <>
      <SEO title="404 — Page Not Found" description="The page you're looking for doesn't exist." />
      <main className="pt-24 lg:pt-32 pb-16 min-h-[70vh] flex items-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-8xl font-bold text-white/10 mb-4">404</p>
          <h1 className="text-3xl font-bold text-white mb-4 tracking-tight">
            Page Not Found
          </h1>
          <p className="text-neutral-400 mb-8 font-light leading-relaxed">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-black font-medium tracking-wide hover:bg-neutral-200 transition-colors"
            >
              Return Home
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-white/20 text-white font-light tracking-wide hover:border-white/50 hover:bg-white/5 transition-all"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export function ThankYou() {
  return (
    <>
      <SEO title="Thank You — Brian Kibet" description="Thank you for your inquiry." />
      <main className="pt-24 lg:pt-32 pb-16 min-h-[70vh] flex items-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-4 tracking-tight">
            Thank You
          </h1>
          <p className="text-neutral-400 mb-8 font-light leading-relaxed">
            Your message has been received. I'll get back to you as soon as possible.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-black font-medium tracking-wide hover:bg-neutral-200 transition-colors"
          >
            Return Home
          </Link>
        </div>
      </main>
    </>
  );
}
