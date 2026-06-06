/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Bot, User, CornerDownLeft, Loader2, ArrowUpRight } from 'lucide-react';
import { ChatMessage } from '../types';

export default function AIConsultant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'assistant',
      text: "Welcome to Sikeisen Group. I am your Executive AI Director. Whether you desire to invest in our theatrical features, commission custom software architectures, rapidly protoype hardware enclosures, or license world-class publishing layouts, I am here to formulate your strategy.",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: inputText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMsg] })
      });

      const data = await response.json();
      
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        sender: 'assistant',
        text: data.reply || "Strategy optimized. Let's align on your next production milestone.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (err) {
      const errorMsg: ChatMessage = {
        id: `err-${Date.now()}`,
        sender: 'system',
        text: "Sikeisen's secure arrays are undergoing dynamic optimization. For immediate corporate consultation, please contact our chief direct desk at executive@sikeisen.com.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const fillQuickPrompt = (prompt: string) => {
    setInputText(prompt);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        id="btn-ai-trigger"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-black border border-[#D4AF37] text-white px-5 py-3.5 rounded-full shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all duration-300 group cursor-pointer"
      >
        <span className="relative flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#D4AF37]"></span>
        </span>
        <span className="font-sans font-medium text-sm tracking-wide group-hover:text-[#D4AF37] transition-colors">
          AI Consultant
        </span>
        <Sparkles className="w-4 w-4 text-[#D4AF37] group-hover:scale-110 transition-transform" />
      </button>

      {/* AI Assistant Drawer */}
      {isOpen && (
        <div 
          id="con-ai-drawer"
          className="fixed inset-y-0 right-0 w-full sm:w-[480px] bg-black/95 backdrop-blur-xl border-l border-neutral-800 z-50 shadow-[0_0_50px_rgba(0,0,0,0.9)] flex flex-col justify-between font-sans transition-all duration-500 overflow-hidden"
        >
          {/* Header */}
          <div className="p-6 border-b border-neutral-800 flex items-center justify-between bg-zinc-950">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-[#D4AF37] flex items-center justify-center">
                <Bot className="w-5 h-5 text-[#D4AF37] animate-pulse" />
              </div>
              <div>
                <h3 className="text-white font-semibold tracking-wide text-sm flex items-center gap-1.5">
                  Sikeisen Executive AI Coach <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                </h3>
                <span className="text-zinc-500 text-xs font-mono">Status: Secure Enterprise Array | Live</span>
              </div>
            </div>
            <button
              id="ai-close-btn"
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-white p-2 rounded-full hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Grid */}
          <div 
            ref={scrollRef}
            className="flex-1 p-6 overflow-y-auto space-y-6 bg-gradient-to-b from-[#0a0a0a] to-[#121212] custom-scrollbar"
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender !== 'user' && (
                  <div className="w-8 h-8 rounded-md bg-neutral-900 border border-neutral-850 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                )}
                
                <div
                  className={`max-w-[80%] rounded-xl p-4 text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 border border-[#D4AF37]/30 text-white rounded-tr-none'
                      : msg.sender === 'system'
                        ? 'bg-red-950/20 border border-red-900/40 text-red-200'
                        : 'bg-zinc-900/80 border border-neutral-800 text-neutral-200 rounded-tl-none'
                  }`}
                >
                  <p className="whitespace-pre-line text-sm">{msg.text}</p>
                  <span className="block mt-2 text-[10px] text-zinc-500 font-mono text-right">
                    {msg.timestamp}
                  </span>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-8 h-8 rounded-md bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center shrink-0">
                    <User className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-3.5 justify-start">
                <div className="w-8 h-8 rounded-md bg-neutral-900 border border-neutral-850 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-[#D4AF37]" />
                </div>
                <div className="bg-zinc-900/80 border border-neutral-800 rounded-xl rounded-tl-none p-4 max-w-[80%] flex items-center gap-3">
                  <Loader2 className="w-4 h-4 text-[#D4AF37] animate-spin" />
                  <span className="text-zinc-400 text-xs font-mono">Synthesizing strategy...</span>
                </div>
              </div>
            )}
          </div>

          {/* Quick Prompts Panel */}
          <div className="p-4 bg-zinc-950/90 border-t border-neutral-900">
            <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider block mb-2">
              Accelerate consultation:
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => fillQuickPrompt("How do I invest in Sikeisen's films?")}
                className="text-xs bg-zinc-900 hover:bg-neutral-800 border border-neutral-800 text-zinc-300 hover:text-white px-2.5 py-1.5 rounded-md transition-all flex items-center gap-1 cursor-pointer"
              >
                Film Investments <ArrowUpRight className="w-3 h-3 text-[#D4AF37]" />
              </button>
              <button
                onClick={() => fillQuickPrompt("Can you rapid prototype an SLA model for my brand?")}
                className="text-xs bg-zinc-900 hover:bg-neutral-800 border border-neutral-800 text-zinc-300 hover:text-white px-2.5 py-1.5 rounded-md transition-all flex items-center gap-1 cursor-pointer"
              >
                3D Prototyping <ArrowUpRight className="w-3 h-3 text-[#D4AF37]" />
              </button>
              <button
                onClick={() => fillQuickPrompt("Tell me about CEO Yukinari Sase")}
                className="text-xs bg-zinc-900 hover:bg-neutral-800 border border-neutral-800 text-zinc-300 hover:text-white px-2.5 py-1.5 rounded-md transition-all flex items-center gap-1 cursor-pointer"
              >
                Leadership <ArrowUpRight className="w-3 h-3 text-[#D4AF37]" />
              </button>
            </div>
          </div>

          {/* Input Panel */}
          <form 
            onSubmit={handleSendMessage}
            className="p-5 border-t border-neutral-900 bg-neutral-950 flex items-center gap-3"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask Sikeisen AI Strategy console..."
              className="flex-1 bg-neutral-900 text-white placeholder-zinc-500 text-sm px-4 py-3 rounded-lg border border-neutral-800 focus:border-[#D4AF37] focus:outline-none transition-colors"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !inputText.trim()}
              className="bg-[#D4AF37] hover:bg-amber-500 disabled:bg-neutral-800 text-black hover:scale-105 disabled:scale-100 p-3 rounded-md transition-all flex items-center justify-center duration-300 cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
