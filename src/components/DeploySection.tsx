'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, Loader2 } from 'lucide-react';

export default function DeploySection() {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const SHEET_URL = 'https://script.google.com/macros/s/AKfycbzjox4rb6P-fiDPHEelMcZLt5IRFEpm6q0O0zXGY-dvBWPhkc7VveQ1sskyxvczyvFpTg/exec';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setLoading(true);
    try {
      await fetch(SHEET_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Waitlist submission failed:', err);
      alert('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="deploy" className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-[#0A0A0A]">
      {/* Visual Content Container */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/images/cta-hand.png" 
          alt="Digital Twin Deployment" 
          className="w-full h-full object-cover opacity-40"
        />
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
      </div>

      {/* Text Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-8 font-[family-name:var(--font-jakarta)] leading-[0.95] drop-shadow-2xl">
            READY TO DEPLOY<br />
            <span className="text-neutral-300">YOUR DIGITAL TWIN?</span>
          </h2>
          
          <p className="text-xs md:text-sm text-white font-medium mb-12 max-w-2xl mx-auto leading-relaxed uppercase tracking-[0.3em] font-mono drop-shadow-lg">
            Your expertise stays active<br />
            <span className="text-[#E84311] font-bold">even when you are not.</span>
          </p>

          <AnimatePresence mode="wait">
            {submitted ? (
              /* ── Success State ── */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">You&apos;re on the list!</h3>
                <p className="text-neutral-400 text-sm max-w-md">
                  We&apos;ll reach out to <span className="text-white font-medium">{email}</span> when it&apos;s your turn. Stay tuned.
                </p>
              </motion.div>
            ) : showForm ? (
              /* ── Waitlist Form ── */
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                onSubmit={handleSubmit}
                className="max-w-md mx-auto flex flex-col gap-4"
              >
                <div className="relative">
                  <input
                    id="waitlist-name"
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-neutral-400 font-medium text-base focus:outline-none focus:ring-2 focus:ring-[#E84311]/60 focus:border-transparent transition-all"
                  />
                </div>

                <div className="relative">
                  <input
                    id="waitlist-email"
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-neutral-400 font-medium text-base focus:outline-none focus:ring-2 focus:ring-[#E84311]/60 focus:border-transparent transition-all"
                  />
                </div>

                <motion.button
                  id="waitlist-submit"
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                  className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 bg-white text-black rounded-none font-black text-lg overflow-hidden transition-all hover:pr-14 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      SUBMITTING...
                    </>
                  ) : (
                    <>
                      SUBMIT
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </>
                  )}
                  <div className="absolute top-0 right-0 h-full w-0 bg-[#E84311] group-hover:w-4 transition-all duration-300" />
                </motion.button>

                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="text-neutral-500 text-xs uppercase tracking-widest font-bold hover:text-neutral-300 transition-colors mt-2"
                >
                  ← Go Back
                </button>
              </motion.form>
            ) : (
              /* ── CTA Button ── */
              <motion.button
                key="cta"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={() => setShowForm(true)}
                className="group relative inline-flex px-10 py-5 bg-white text-black rounded-none font-black text-lg overflow-hidden transition-all hover:pr-14"
              >
                <span className="relative z-10 flex items-center gap-4">
                  JOIN THE WAITLIST
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </span>
                <div className="absolute top-0 right-0 h-full w-0 bg-[#E84311] group-hover:w-4 transition-all duration-300" />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Floating Status / Tagline */}
      <div className="absolute bottom-12 w-full px-12 flex justify-between items-end">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-neutral-600">
          Scale beyond limits
        </p>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E84311] animate-pulse" />
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
            System: Optimal
          </p>
        </div>
      </div>
    </section>
  );
}
