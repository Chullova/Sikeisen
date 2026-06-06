/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Mail, MessageCircle, X, Bell, Shield, CheckCircle } from 'lucide-react';
import { COMP_INFO } from '../data';

export default function LeadCenter() {
  const [showExit, setShowExit] = useState(false);
  const [hasShownExit, setHasShownExit] = useState(false);
  const [newsEmail, setNewsEmail] = useState('');
  const [newsSubbed, setNewsSubbed] = useState(false);

  // Exit intent script trigger
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (hasShownExit) return;
      if (e.clientY < 40) {
        setShowExit(true);
        setHasShownExit(true);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShownExit]);

  const handleNewsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsEmail.trim()) return;
    setNewsSubbed(true);
    setNewsEmail('');
  };

  const triggerWhatsApp = () => {
    const message = encodeURIComponent("Hello Sikeisen Group, I am interested in exploring creative, technology, or investment collaborations.");
    window.open(`https://wa.me/918043210987?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Floating Conversational / WhatsApp Utility Rail */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
        {/* WhatsApp Catalyst */}
        <button
          onClick={triggerWhatsApp}
          className="flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white rounded-full p-3.5 shadow-lg shadow-emerald-950/40 hover:scale-110 transition-transform duration-300 group cursor-pointer"
          title="Direct WhatsApp Helpline"
        >
          <MessageCircle className="w-5.5 h-30 text-white group-hover:rotate-12 transition-transform duration-300" />
        </button>
      </div>

      {/* Exit Intent Presentation Modal with Golden Theme */}
      {showExit && (
        <div id="modal-exit-intent" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="bg-[#111] border border-[#D4AF37] max-w-lg w-full rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-[0_0_55px_rgba(212,175,55,0.2)]">
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#D4AF37]/5 rounded-full blur-[100px]" />
            <button
              onClick={() => setShowExit(false)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white p-2 rounded-full cursor-pointer hover:bg-zinc-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <span className="text-[10px] bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#D4AF37] px-3 py-1 rounded font-mono uppercase tracking-widest inline-block">
                Exclusive Opportunity BRIEF
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                Before You Go..
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Connect with Sikeisen Group C-Suite today. Gain full access to private theatrical screenings, additive SLA rapid sample trials, and bespoke software roadmaps.
              </p>

              <div className="border-t border-neutral-850 pt-5 space-y-4">
                <p className="text-xs text-zinc-500 font-mono">Sign up for Sikeisen's exclusive quarterly Briefings:</p>
                {newsSubbed ? (
                  <div className="flex items-center gap-2.5 text-xs text-emerald-400 bg-emerald-950/20 border border-emerald-900/30 p-3 rounded-lg font-sans">
                    <CheckCircle className="w-4.5 h-4.5" /> <span>Strategic newsletter registered successfully.</span>
                  </div>
                ) : (
                  <form onSubmit={handleNewsSubmit} className="flex gap-2">
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={newsEmail}
                      onChange={(e) => setNewsEmail(e.target.value)}
                      className="flex-1 bg-neutral-900 text-white placeholder-zinc-500 text-xs px-4 py-2.5 rounded-lg border border-neutral-800 focus:border-[#D4AF37] focus:outline-none transition-colors"
                    />
                    <button
                      type="submit"
                      className="bg-[#D4AF37] hover:bg-amber-500 text-black px-4 py-2.5 rounded-lg text-xs font-semibold hover:scale-105 transition-all cursor-pointer"
                    >
                      Subscribe
                    </button>
                  </form>
                )}
              </div>

              <div className="flex items-center gap-2 pt-2 text-[10px] text-zinc-500 font-mono">
                <Shield className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Zero spam. Absolute corporate intelligence guaranteed.</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
