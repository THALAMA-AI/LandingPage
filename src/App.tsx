import { useState, useRef } from 'react';

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function App() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: SERVICE_ID,
          template_id: TEMPLATE_ID,
          user_id: PUBLIC_KEY,
          template_params: {
            from_email: email,
            message: message || '(no message provided)',
            to_email: 'diegolarrieta@gmail.com',
          },
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setEmail('');
        setMessage('');
      } else {
        setSubmitStatus('error');
      }
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black" style={{ fontFamily: 'Georgia, serif' }}>

      {/* ─── SECTION 1: HERO ─────────────────────────────────────────── */}
      <div className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/thalamaintro.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Hero content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <h1
            className="text-5xl md:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Launching Soon…
            <br />
            it's cooking
          </h1>

          <p
            className="mt-6 text-2xl tracking-widest text-white"
            style={{ fontFamily: 'Pirulen, sans-serif', fontWeight: 'bold' }}
          >
            THALAMA AI
          </p>
        </div>

        {/* Scroll hint */}
        <button
          onClick={scrollToContact}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors duration-300"
          aria-label="Scroll to contact"
        >
          <span
            className="text-xs tracking-[0.25em] uppercase"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Get to know more
          </span>
          <svg
            className="w-5 h-5 animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* ─── SECTION 2: CONTACT ──────────────────────────────────────── */}
      <div
        ref={contactRef}
        className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 py-24"
        style={{
          background: 'linear-gradient(to bottom, #000000 0%, #0a0a0a 40%, #111111 100%)',
        }}
      >
        {/* Subtle top border line */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20"
          style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.15))' }}
        />

        {/* Decorative corner marks */}
        <div className="absolute top-16 left-12 w-6 h-6 border-t border-l border-white/10" />
        <div className="absolute top-16 right-12 w-6 h-6 border-t border-r border-white/10" />
        <div className="absolute bottom-16 left-12 w-6 h-6 border-b border-l border-white/10" />
        <div className="absolute bottom-16 right-12 w-6 h-6 border-b border-r border-white/10" />

        <div className="w-full max-w-lg">

          {/* Header */}
          <div className="text-center mb-14">
            <p
              className="text-xs tracking-[0.4em] uppercase text-white/30 mb-5"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Early Access
            </p>
            <h2
              className="text-4xl md:text-5xl font-bold text-white leading-tight"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Be the first
              <br />
              to know.
            </h2>
            <p
              className="mt-5 text-white/40 text-sm leading-relaxed max-w-xs mx-auto"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Leave your email and we'll reach out when Thalama AI is ready for you.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                placeholder="Your email *"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-5 py-4 text-sm text-white placeholder-white/25 bg-white/5 border border-white/10 rounded-none focus:outline-none focus:border-white/35 transition-colors duration-300"
                style={{ fontFamily: 'Georgia, serif' }}
              />
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                placeholder="Message (optional)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className="w-full px-5 py-4 text-sm text-white placeholder-white/25 bg-white/5 border border-white/10 rounded-none focus:outline-none focus:border-white/35 transition-colors duration-300 resize-none"
                style={{ fontFamily: 'Georgia, serif' }}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 text-xs tracking-[0.3em] uppercase font-bold transition-all duration-300 disabled:opacity-40"
              style={{
                fontFamily: 'Georgia, serif',
                background: isSubmitting ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.95)',
                color: isSubmitting ? 'rgba(255,255,255,0.4)' : '#000',
                border: '1px solid rgba(255,255,255,0.15)',
              }}
            >
              {isSubmitting ? 'Sending…' : 'Notify Me'}
            </button>

            {/* Status messages */}
            {submitStatus === 'success' && (
              <div className="text-center py-3">
                <p
                  className="text-white/60 text-xs tracking-widest uppercase"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  ✦ &nbsp; We'll be in touch soon.
                </p>
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="text-center py-3">
                <p
                  className="text-red-400/70 text-xs tracking-widest uppercase"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  Something went wrong. Please try again.
                </p>
              </div>
            )}
          </form>

          {/* Footer note */}
          <p
            className="text-center text-white/15 text-xs mt-10 tracking-wider"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            No spam. Ever.
          </p>
        </div>

        {/* Back to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-white/70 transition-colors duration-300"
          aria-label="Back to top"
        >
          <svg
            className="w-5 h-5 animate-bounce"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
          <span
            className="text-xs tracking-[0.25em] uppercase"
            style={{ fontFamily: 'Georgia, serif' }}
          >
            Back to top
          </span>
        </button>
      </div>
    </div>
  );
}