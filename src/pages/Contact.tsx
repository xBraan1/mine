import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO, Breadcrumbs } from '../components/Layout';
import { profile } from '../data/content';
import { Send, CheckCircle, AlertCircle, ExternalLink, Shield } from 'lucide-react';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  organization: string;
  subject: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  consent?: string;
}

export default function Contact() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', organization: '', subject: '', message: '', consent: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 20) newErrors.message = 'Please provide more detail (minimum 20 characters)';
    if (!formData.consent) newErrors.consent = 'Please accept the privacy notice to continue';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setFormState('submitting');

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormState('success');
    } catch {
      setFormState('error');
    }
  };

  const handleChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (formState === 'success') {
    return (
      <>
        <SEO title="Message Sent — Brian Kibet | Contact" description="Your message has been received." />
        <main className="pt-24 lg:pt-32 pb-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-neutral-950 p-8 border border-white/10">
              <CheckCircle size={48} className="text-white mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-white mb-4">
                Message Received
              </h1>
              <p className="text-neutral-400 mb-6 font-light">
                Thank you for reaching out. Your inquiry has been noted.
              </p>
              <Link to="/" className="text-white hover:underline font-medium">
                ← Return to Homepage
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
        title="Contact — Brian Kibet | Get in Touch"
        description="Get in touch about AI evaluation opportunities, collaboration, and contract engagements."
      />
      <main className="pt-24 lg:pt-32 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: 'Contact' }]} />

          <header className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-neutral-400 leading-relaxed max-w-3xl font-light">
              Interested in discussing AI evaluation opportunities, collaboration, or contract engagements? Send a professional inquiry below.
            </p>
          </header>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-neutral-950 p-6 lg:p-8 border border-white/5" noValidate>
                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-1.5">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className={`w-full px-4 py-2.5 border ${errors.name ? 'border-red-500' : 'border-white/10'} bg-black text-white focus:border-white/30 outline-none transition-colors`}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && <p id="name-error" className="text-red-500 text-xs mt-1" role="alert">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-1.5">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className={`w-full px-4 py-2.5 border ${errors.email ? 'border-red-500' : 'border-white/10'} bg-black text-white focus:border-white/30 outline-none transition-colors`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && <p id="email-error" className="text-red-500 text-xs mt-1" role="alert">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="organization" className="block text-sm font-medium text-white mb-1.5">
                      Organization
                    </label>
                    <input
                      id="organization"
                      type="text"
                      value={formData.organization}
                      onChange={(e) => handleChange('organization', e.target.value)}
                      className="w-full px-4 py-2.5 border border-white/10 bg-black text-white focus:border-white/30 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-white mb-1.5">
                      Subject
                    </label>
                    <select
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleChange('subject', e.target.value)}
                      className="w-full px-4 py-2.5 border border-white/10 bg-black text-white focus:border-white/30 outline-none transition-colors"
                    >
                      <option value="">Select a topic...</option>
                      <option value="llm-evaluation">LLM Evaluation</option>
                      <option value="rlhf">RLHF / Preference Ranking</option>
                      <option value="sft">SFT Data Creation</option>
                      <option value="prompt-evaluation">Prompt Evaluation</option>
                      <option value="safety">AI Safety & Quality</option>
                      <option value="general">General Inquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-1.5">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className={`w-full px-4 py-2.5 border ${errors.message ? 'border-red-500' : 'border-white/10'} bg-black text-white focus:border-white/30 outline-none transition-colors resize-y`}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && <p id="message-error" className="text-red-500 text-xs mt-1" role="alert">{errors.message}</p>}
                </div>

                <div className="mb-6">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => handleChange('consent', e.target.checked)}
                      className="mt-1 w-4 h-4 border-white/20 bg-black text-white focus:ring-white/30"
                    />
                    <span className="text-sm text-neutral-400 font-light">
                      I consent to the processing of my personal data as described in the{' '}
                      <Link to="/privacy" className="text-white hover:underline">Privacy Policy</Link>. <span className="text-red-500">*</span>
                    </span>
                  </label>
                  {errors.consent && <p className="text-red-500 text-xs mt-1" role="alert">{errors.consent}</p>}
                </div>

                {formState === 'error' && (
                  <div className="flex items-center gap-2 p-3 border border-red-500/30 bg-red-500/10 mb-4">
                    <AlertCircle size={16} className="text-red-500" />
                    <p className="text-sm text-red-400">
                      Something went wrong. Please try again.
                    </p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black disabled:opacity-50 disabled:cursor-not-allowed font-medium tracking-wide hover:bg-neutral-200 transition-colors"
                >
                  {formState === 'submitting' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Inquiry
                    </>
                  )}
                </button>

                <p className="text-xs text-neutral-600 mt-4 flex items-center gap-1">
                  <Shield size={12} />
                  Your data is handled according to our Privacy Policy.
                </p>
              </form>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-neutral-950 p-6 border border-white/5">
                <h2 className="font-medium text-white mb-4">Connect Directly</h2>
                <ul className="space-y-3">
                  <li>
                    <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors">
                      <ExternalLink size={14} /> LinkedIn Profile
                    </a>
                  </li>
                  <li>
                    <a href={profile.social.x} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors">
                      <ExternalLink size={14} /> X (Twitter)
                    </a>
                  </li>
                  <li>
                    <a href={profile.social.telegram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors">
                      <ExternalLink size={14} /> Telegram
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-white/5 p-6 border border-white/10">
                <h2 className="font-medium text-white mb-3">What to Include</h2>
                <ul className="space-y-2 text-sm text-neutral-400 font-light">
                  <li>• Brief description of your project or needs</li>
                  <li>• Timeline and engagement type</li>
                  <li>• Specific evaluation requirements</li>
                  <li>• Team size and collaboration preferences</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
