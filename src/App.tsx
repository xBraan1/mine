import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import { Navigation, Footer, ScrollToTop } from './components/Layout';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Expertise = lazy(() => import('./pages/Expertise'));
const Services = lazy(() => import('./pages/Services'));
const Experience = lazy(() => import('./pages/Experience'));
const Work = lazy(() => import('./pages/Work'));
const Skills = lazy(() => import('./pages/Skills'));
const Insights = lazy(() => import('./pages/Insights'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Contact = lazy(() => import('./pages/Contact'));

// Eager load legal/utility pages (smaller, needed quickly)
import { Privacy, Terms, Cookies } from './pages/Legal';
import { NotFound, ThankYou } from './pages/Utility';

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-[2px] border-white/20 border-t-white rounded-full animate-spin" />
        <p className="text-sm text-neutral-500 font-light tracking-wide">Loading...</p>
      </div>
    </div>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navigation />
      <ScrollToTop />
      <div className="flex-1">
        {children}
      </div>
      <Footer />
      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 sm:hidden bg-black/95 backdrop-blur-md border-t border-white/10 p-3 z-40">
        <Link
          to="/contact"
          className="block w-full text-center py-3 bg-white text-black font-medium tracking-wide hover:bg-neutral-200 transition-colors"
        >
          Discuss an Opportunity
        </Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <LanguageProvider>
          <BrowserRouter>
            <Layout>
              <Suspense fallback={<LoadingFallback />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/expertise" element={<Expertise />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/services/:slug" element={<Services />} />
                  <Route path="/experience" element={<Experience />} />
                  <Route path="/work" element={<Work />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/insights" element={<Insights />} />
                  <Route path="/insights/:id" element={<Insights />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy" element={<Privacy />} />
                  <Route path="/terms" element={<Terms />} />
                  <Route path="/cookies" element={<Cookies />} />
                  <Route path="/thank-you" element={<ThankYou />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </Layout>
          </BrowserRouter>
        </LanguageProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
