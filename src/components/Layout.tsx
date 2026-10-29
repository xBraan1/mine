import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';
import { navItems, profile } from '../data/content';
import { Menu, X, ExternalLink } from 'lucide-react';
import { SignatureLogo } from './SignatureLogo';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 text-white hover:opacity-80 transition-opacity"
          >
            <SignatureLogo width={100} color="#FFFFFF" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map(item => {
              const isActive = location.pathname === item.path || 
                (item.path !== '/' && location.pathname.startsWith(item.path + '/'));
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-light tracking-wide transition-all border-b-2 ${
                    isActive
                      ? 'text-white border-white'
                      : 'text-neutral-400 hover:text-white border-transparent'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2 bg-white text-black text-sm font-medium tracking-wide hover:bg-neutral-200 transition-colors"
            >
              Get in Touch
            </Link>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-neutral-400 hover:text-white transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black border-b border-white/10">
            <div className="px-4 py-6 space-y-1">
              {navItems.map(item => {
                const isActive = location.pathname === item.path || 
                  (item.path !== '/' && location.pathname.startsWith(item.path + '/'));
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-3 text-base font-light tracking-wide transition-colors ${
                      isActive
                        ? 'text-white'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                to="/contact"
                className="block px-4 py-3 mt-4 bg-white text-black text-center font-medium tracking-wide"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <SignatureLogo width={120} color="#FFFFFF" />
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed font-light">
              {profile.title}. Focused on making AI systems more helpful, honest, and harmless through rigorous evaluation.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-medium text-xs uppercase tracking-[0.2em] mb-5">Navigation</h3>
            <ul className="space-y-3">
              {navItems.slice(0, 6).map(item => (
                <li key={item.path}>
                  <Link to={item.path} className="text-neutral-400 hover:text-white text-sm font-light transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More */}
          <div>
            <h3 className="text-white font-medium text-xs uppercase tracking-[0.2em] mb-5">More</h3>
            <ul className="space-y-3">
              {navItems.slice(6).map(item => (
                <li key={item.path}>
                  <Link to={item.path} className="text-neutral-400 hover:text-white text-sm font-light transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/privacy" className="text-neutral-400 hover:text-white text-sm font-light transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-neutral-400 hover:text-white text-sm font-light transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-medium text-xs uppercase tracking-[0.2em] mb-5">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-neutral-400 hover:text-white text-sm font-light transition-colors"
                >
                  LinkedIn <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href={profile.social.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-neutral-400 hover:text-white text-sm font-light transition-colors"
                >
                  X (Twitter) <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href={profile.social.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-neutral-400 hover:text-white text-sm font-light transition-colors"
                >
                  Telegram <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href={profile.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-neutral-400 hover:text-white text-sm font-light transition-colors"
                >
                  Instagram <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a
                  href={profile.social.reddit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-neutral-400 hover:text-white text-sm font-light transition-colors"
                >
                  Reddit <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-neutral-500 text-xs font-light tracking-wide">
              © {currentYear} {profile.name}. All rights reserved.
            </p>
            <p className="text-neutral-600 text-xs font-light tracking-wide">
              Crafted with precision.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Breadcrumbs({ items }: { items: { label: string; path?: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex items-center gap-3 text-xs font-light tracking-wide text-neutral-500 flex-wrap">
        <li>
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-3">
            <span aria-hidden="true" className="text-neutral-700">/</span>
            {item.path ? (
              <Link to={item.path} className="hover:text-white transition-colors">
                {item.label}
              </Link>
            ) : (
              <span className="text-white" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function SEO({ title, description, canonical, ogImage }: {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
}) {
  useEffect(() => {
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink && canonical) canonicalLink.setAttribute('href', canonical);
  }, [title, description, canonical]);

  return null;
}

export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          const offset = 100;
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
        } else {
          window.scrollTo(0, 0);
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}
