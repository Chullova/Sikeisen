/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Cpu, Printer, Layers, GitFork, User, ShieldAlert, Binary, CheckCircle, Smartphone, Sliders, ChevronDown, Sparkles } from 'lucide-react';
import { TEAM } from '../data';

export default function SikeisenTech() {
  const [selectedLeader, setSelectedLeader] = useState<string | null>("e1");
  const [activeTab, setActiveTab] = useState<'matrix' | 'proto' | 'org'>('matrix');

  // AI capabilities list
  const aiMatrix = [
    { name: "Server-Side Gemini LLM Integration", description: "Bespoke system instructions powered by high-speed server models with isolated token managers.", status: "Enterprise Active", code: "v3.5-flash-active" },
    { name: "Multi-modal Prompt Translation Arrays", description: "Securely bridges and categorizes user files, images, code inputs, and voice streams into single endpoints.", status: "Active Service", code: "multi-modal-endpoint" },
    { name: "Direct vector DB embeddings indexing", description: "High performance parsing of corporate PDF manuals for instant chat grounding searches.", status: "Deployed Core", code: "vector-search-ready" }
  ];

  return (
    <div className="space-y-12">
      {/* Visual Subtabs */}
      <div className="flex border-b border-neutral-900 pb-0.5 space-x-6 overflow-x-auto">
        <button
          onClick={() => setActiveTab('matrix')}
          className={`pb-4 text-sm font-semibold tracking-wider uppercase transition-colors relative cursor-pointer ${
            activeTab === 'matrix' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          AI Capabilities Matrix
          {activeTab === 'matrix' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37]" />}
        </button>
        <button
          onClick={() => setActiveTab('proto')}
          className={`pb-4 text-sm font-semibold tracking-wider uppercase transition-colors relative cursor-pointer ${
            activeTab === 'proto' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          3D Printing & Prototyping
          {activeTab === 'proto' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37]" />}
        </button>
        <button
          onClick={() => setActiveTab('org')}
          className={`pb-4 text-sm font-semibold tracking-wider uppercase transition-colors relative cursor-pointer ${
            activeTab === 'org' ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
          }`}
        >
          Interactive Corporate Hierarchy
          {activeTab === 'org' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4AF37]" />}
        </button>
      </div>

      {/* Tab Contents: AI Capability Matrix */}
      {activeTab === 'matrix' && (
        <div className="space-y-8 animate-fade-in">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono text-[#D4AF37] tracking-superwide uppercase block">The Intelligence core</span>
            <h3 className="text-2xl md:text-3xl font-display font-black text-white tracking-tighter uppercase">AI & Enterprise Integration</h3>
            <p className="text-zinc-400 text-sm">
              Sikeisen's technical architectures prioritize server-side security, high availability, and lightning fast response bounds. We keep process models separated backend-side to avoid client exposure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {aiMatrix.map((item, id) => (
              <div key={id} className="bg-zinc-950 p-6 rounded-xl border border-neutral-900 space-y-4 hover:border-[#D4AF37]/50 transition-colors">
                <div className="flex justify-between items-center">
                  <div className="w-8 h-8 rounded bg-[#D4AF37]/15 flex items-center justify-center border border-[#D4AF37]/35 text-[#D4AF37]">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] bg-neutral-900 border border-neutral-800 text-emerald-500 px-2 py-0.5 rounded font-mono">
                    {item.status}
                  </span>
                </div>
                
                <div className="space-y-1.5">
                  <h4 className="text-white font-bold tracking-tight text-sm">{item.name}</h4>
                  <p className="text-zinc-400 text-xs leading-relaxed">{item.description}</p>
                </div>

                <div className="pt-2 border-t border-neutral-900 flex justify-between text-[10px] font-mono text-zinc-500">
                  <span>DEPLOYED_REPRESENTATIVE</span>
                  <span className="text-[#D4AF37]">{item.code}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Secure Middleware Feature Info Card */}
          <div className="bg-gradient-to-r from-zinc-950 to-[#121212] border border-neutral-850 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-2 flex-1">
              <span className="text-[10px] bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] px-2.5 py-1 rounded font-mono uppercase">
                CSRF & XSS Isolation
              </span>
              <h4 className="text-white font-bold text-lg">Secure Server-Side API Handlers</h4>
              <p className="text-zinc-400 text-xs">
                In compliance with international standards, Sikeisen never transmits raw API secrets down to the browser context, completely mitigating key theft and query manipulation vectors.
              </p>
            </div>
            
            <div className="flex gap-3 text-xs font-mono">
              <span className="flex items-center gap-1.5 bg-neutral-900 px-3.5 py-2 rounded text-emerald-500 border border-[#111]">
                <CheckCircle className="w-4 h-4" /> SECURE HANDSHAKES
              </span>
              <span className="flex items-center gap-1.5 bg-neutral-900 px-3.5 py-2 rounded text-zinc-300 border border-[#111]">
                <Binary className="w-4 h-4" /> AES-256 ISOLATION
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Tab Contents: 3D Prototyping Showcase */}
      {activeTab === 'proto' && (
        <div className="space-y-8 animate-fade-in">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono text-[#D4AF37] tracking-superwide uppercase block">Precision Additive Manufacturing</span>
            <h3 className="text-2xl md:text-3xl font-display font-black text-white tracking-tighter uppercase">CAD & Rapid Prototyping Array</h3>
            <p className="text-zinc-400 text-sm">
              Our specialized SLA and selective carbon-fiber deposition machines fabricate custom parts down to 25-micron thresholds, allowing physical model creation in minutes rather than weeks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-zinc-950 rounded-xl overflow-hidden border border-neutral-900 flex flex-col justify-between">
              <div className="aspect-video w-full overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600" 
                  alt="Industrial SLA Slicing" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <span className="absolute bottom-3 left-3 text-white font-bold text-sm">Industrial Resin SLA</span>
              </div>
              <div className="p-5 space-y-2">
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Sub-micron level fluid printing for precision dental, medical alignments, structural gears, and cinema camera mounts.
                </p>
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-2 border-t border-neutral-900">
                  <span>Resoution limit:</span>
                  <span className="text-white">25 micrometers</span>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 rounded-xl overflow-hidden border border-neutral-900 flex flex-col justify-between">
              <div className="aspect-video w-full overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=600" 
                  alt="Sintered Alloys"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <span className="absolute bottom-3 left-3 text-white font-bold text-sm">High Temp Composites</span>
              </div>
              <div className="p-5 space-y-2">
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Fibers infused with high-strength carbon composites and aerospace alloys targeting structural stress parts.
                </p>
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-2 border-t border-neutral-900">
                  <span>Composite materials:</span>
                  <span className="text-white">Carbon-nylon, PEEK</span>
                </div>
              </div>
            </div>

            <div className="bg-zinc-950 rounded-xl overflow-hidden border border-neutral-900 flex flex-col justify-between">
              <div className="aspect-video w-full overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=600" 
                  alt="Custom Cinema Rig Models" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
                <span className="absolute bottom-3 left-3 text-white font-bold text-sm">Cinema Miniature Sets</span>
              </div>
              <div className="p-5 space-y-2">
                <p className="text-zinc-400 text-xs leading-relaxed">
                  Physical prototyping for miniature film sets, high detail models, action pieces, and stop-motion models.
                </p>
                <div className="flex items-center justify-between text-[11px] font-mono text-zinc-500 pt-2 border-t border-neutral-900">
                  <span>Tolerances achieved:</span>
                  <span className="text-white">+/- 0.05 mm</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab Contents: Interactive Corporate Chart */}
      {activeTab === 'org' && (
        <div className="space-y-8 animate-fade-in">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono text-[#D4AF37] tracking-superwide uppercase block">The Corporate Lattice</span>
            <h3 className="text-2xl md:text-3xl font-display font-black text-white tracking-tighter uppercase">Dynamic Executive Structure</h3>
            <p className="text-zinc-400 text-sm">
              Sikeisen's operations are divided under strict functional directorates, promoting rapid cross-collaboration between media artists, fullstack engineers, and materials scientists.
            </p>
          </div>

          {/* Interactive Org Chart Tree representation */}
          <div className="bg-zinc-950 rounded-xl border border-neutral-900 p-8 flex flex-col items-center">
            {/* Level 1: CEO */}
            <div className="relative pb-8 flex flex-col items-center">
              <div 
                onClick={() => setSelectedLeader("e1")}
                className={`relative z-10 bg-black border px-6 py-4 rounded-xl cursor-pointer text-center select-none transition-all duration-300 w-64 ${
                  selectedLeader === "e1" ? 'border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.2)]' : 'border-neutral-800 hover:border-neutral-600'
                }`}
              >
                <span className="text-[9px] font-mono text-[#D4AF37] tracking-wider uppercase block">Group Commander</span>
                <h4 className="text-white font-extrabold tracking-tight text-sm">Yukinari Sase</h4>
                <p className="text-zinc-500 text-xs">Chief Creative Officer & Founder</p>
              </div>
              {/* Connecting vertical line */}
              <div className="absolute bottom-0 w-0.5 h-8 bg-neutral-800" />
            </div>

            {/* Connecting horizontal line */}
            <div className="relative w-full max-w-[500px] h-0.5 bg-neutral-800">
              <div className="absolute top-0 left-0 w-0.5 h-4 bg-neutral-800" />
              <div className="absolute top-0 right-0 w-0.5 h-4 bg-neutral-800" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-neutral-800" />
            </div>

            {/* Level 2: Directors */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 pt-4 w-full max-w-4xl">
              {/* Under-CEO 1: Head of Tech */}
              <div className="flex flex-col items-center">
                <div 
                  onClick={() => setSelectedLeader("e2")}
                  className={`bg-black border px-5 py-4 rounded-xl cursor-pointer text-center select-none transition-all duration-300 w-60 ${
                    selectedLeader === "e2" ? 'border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.2)]' : 'border-neutral-800 hover:border-neutral-600'
                  }`}
                >
                  <span className="text-[9px] font-mono text-[#D4AF37] tracking-wider uppercase block">Technology Vertical</span>
                  <h4 className="text-white font-extrabold tracking-tight text-sm">Amara Kulkarni</h4>
                  <p className="text-zinc-500 text-xs">President of Software Solutions</p>
                </div>
                {/* Visual Branch Indicators */}
                <div className="w-0.5 h-6 bg-neutral-900 mt-2" />
                <div className="border border-neutral-900 rounded-md p-3 text-center text-[10px] font-mono text-zinc-400 bg-black/60 w-52 space-y-1">
                  <span>- Secure server deployments</span>
                  <span className="block">- Gemini LLM configurations</span>
                  <span className="block">- Drizzle Orm / REST grids</span>
                </div>
              </div>

              {/* Under-CEO 2: Head of Additive */}
              <div className="flex flex-col items-center">
                <div 
                  onClick={() => setSelectedLeader("e3")}
                  className={`bg-black border px-5 py-4 rounded-xl cursor-pointer text-center select-none transition-all duration-300 w-60 ${
                    selectedLeader === "e3" ? 'border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.2)]' : 'border-neutral-800 hover:border-neutral-600'
                  }`}
                >
                  <span className="text-[9px] font-mono text-[#D4AF37] tracking-wider uppercase block">Manufacturing Vertical</span>
                  <h4 className="text-white font-extrabold tracking-tight text-sm">Hiroshi Vance</h4>
                  <p className="text-zinc-500 text-xs">Head of Additive Prototyping</p>
                </div>
                {/* Visual Branch Indicators */}
                <div className="w-0.5 h-6 bg-neutral-900 mt-2" />
                <div className="border border-neutral-900 rounded-md p-3 text-center text-[10px] font-mono text-zinc-400 bg-black/60 w-52 space-y-1">
                  <span>- SLA Photopolymer Printing</span>
                  <span className="block">- CAD stress topologies</span>
                  <span className="block">- Hardware custom covers</span>
                </div>
              </div>
            </div>

            {/* Profile Drawer showing selected executive profile */}
            {selectedLeader && (
              <div className="mt-12 bg-[#1c1c1c]/40 backdrop-blur-md rounded-xl p-5 border border-neutral-850 flex flex-col sm:flex-row gap-5 items-center w-full max-w-2xl animate-fade-in">
                <img 
                  src={TEAM.find(t => t.id === selectedLeader)?.image} 
                  alt="Leader Profile" 
                  className="w-16 h-16 rounded-full object-cover border border-[#D4AF37]"
                  referrerPolicy="no-referrer"
                />
                <div className="flex-1 space-y-1">
                  <h4 className="text-white font-extrabold text-[#D4AF37]">{TEAM.find(t => t.id === selectedLeader)?.name}</h4>
                  <p className="text-zinc-500 font-mono text-xs">{TEAM.find(t => t.id === selectedLeader)?.role}</p>
                  <p className="text-zinc-300 text-xs leading-relaxed">{TEAM.find(t => t.id === selectedLeader)?.bio}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
