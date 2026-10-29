import React from 'react';
import { SEO, Breadcrumbs } from '../components/Layout';

export function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy — Brian Kibet" description="Privacy policy for the Brian Kibet portfolio website." />
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
          <h1 className="text-4xl font-bold text-white mb-8 tracking-tight">Privacy Policy</h1>
          <div className="prose max-w-none">
            <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <h2>Information Collection</h2>
            <p>This website collects minimal information necessary for its operation. No personal data is collected without your explicit consent through the contact form.</p>
            <h2>Contact Form Data</h2>
            <p>When you submit the contact form, the information you provide (name, email, organization, message) is used solely to respond to your inquiry. This data is not shared with third parties.</p>
            <h2>Cookies & Local Storage</h2>
            <p>This website uses local storage to remember your theme preference. No tracking cookies are used.</p>
            <h2>Third-Party Services</h2>
            <p>This website links to external platforms (LinkedIn, X/Twitter, Telegram, etc.). These platforms have their own privacy policies.</p>
            <h2>Data Retention</h2>
            <p>Contact form submissions are retained only as long as necessary to respond to your inquiry, unless otherwise agreed upon.</p>
            <h2>Your Rights</h2>
            <p>You have the right to request access to, correction of, or deletion of any personal data held. Contact through the website form to exercise these rights.</p>
          </div>
        </div>
      </main>
    </>
  );
}

export function Terms() {
  return (
    <>
      <SEO title="Terms of Service — Brian Kibet" description="Terms of service for the Brian Kibet portfolio website." />
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Terms of Service' }]} />
          <h1 className="text-4xl font-bold text-white mb-8 tracking-tight">Terms of Service</h1>
          <div className="prose max-w-none">
            <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <h2>Acceptance of Terms</h2>
            <p>By accessing this website, you agree to these terms of service. If you do not agree, please do not use this website.</p>
            <h2>Content</h2>
            <p>All content on this website is for informational purposes. Case studies are illustrative exercises and do not represent confidential client work.</p>
            <h2>Intellectual Property</h2>
            <p>All content, design, and code on this website is the property of Brian Kibet unless otherwise noted. Reproduction without permission is prohibited.</p>
            <h2>Limitation of Liability</h2>
            <p>This website is provided "as is" without warranties of any kind. The owner shall not be liable for any damages arising from use of this website.</p>
            <h2>External Links</h2>
            <p>This website contains links to external sites. The owner is not responsible for the content or practices of these external sites.</p>
          </div>
        </div>
      </main>
    </>
  );
}

export function Cookies() {
  return (
    <>
      <SEO title="Cookie Policy — Brian Kibet" description="Cookie policy for the Brian Kibet portfolio website." />
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Cookie Policy' }]} />
          <h1 className="text-4xl font-bold text-white mb-8 tracking-tight">Cookie Policy</h1>
          <div className="prose max-w-none">
            <p>Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <h2>What Are Cookies</h2>
            <p>Cookies are small text files stored on your device when you visit a website. This website uses local storage rather than traditional cookies.</p>
            <h2>Local Storage Usage</h2>
            <p>This website stores your theme preference (light/dark mode) in your browser's local storage. This is a strictly functional preference and contains no tracking data.</p>
            <h2>Third-Party Cookies</h2>
            <p>This website does not use third-party tracking cookies or analytics services that set cookies.</p>
            <h2>Managing Storage</h2>
            <p>You can clear local storage at any time through your browser settings. This will reset your theme preference to the default.</p>
          </div>
        </div>
      </main>
    </>
  );
}
