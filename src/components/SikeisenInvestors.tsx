/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Download, TrendingUp, DollarSign, Target, FileText, ChevronRight, RefreshCw, BarChart2, ShieldAlert } from 'lucide-react';

interface LeadInquiry {
  id: string;
  name: string;
  company: string;
  category: string;
  text: string;
  timestamp: string;
  status: string;
  assignedDept: string;
}

export default function SikeisenInvestors() {
  const [leads, setLeads] = useState<LeadInquiry[]>([]);
  const [loadingLeads, setLoadingLeads] = useState(false);

  const fetchCorporateLeads = async () => {
    setLoadingLeads(true);
    try {
      const response = await fetch('/api/leads');
      const data = await response.json();
      if (data.success) {
        setLeads(data.leads);
      }
    } catch (err) {
      console.warn("Failed retrieving corporate inquiry logs:", err);
    } finally {
      setLoadingLeads(false);
    }
  };

  useEffect(() => {
    fetchCorporateLeads();
  }, []);

  // Growth vectors data
  const marketMetrics = [
    { title: "Projected TAM (Total Addressable Market)", value: "$4.8B", change: "+14.2% YoY", desc: "Covers high-precision 3D additive printing, customized AI interfaces, and streaming master sales." },
    { title: "Sikeisen CAGR (Compound Growth Rate)", value: "38.6%", change: "Last 4 Years", desc: "Driven by fast adoption of tech solutions and theatrical streaming residuals." },
    { title: "EBITDA Margin Profile", value: "24.2%", change: "Q1 2026 Audit", desc: "Maintained through small-batch additive prototyping and automated client strategy models." }
  ];

  return (
    <div className="space-y-12">
      {/* Overview & Core Performance KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {marketMetrics.map((v, i) => (
          <div key={i} className="bg-zinc-950 border border-neutral-900 rounded-xl p-6 space-y-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-2xl pointer-events-none" />
            <div className="flex justify-between items-start">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">{v.title}</span>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/20 px-2 py-0.5 rounded border border-emerald-900/30">
                {v.change}
              </span>
            </div>
            <h3 className="text-3xl font-extrabold text-[#D4AF37] tracking-tight">{v.value}</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>

      {/* Growth Strategy & Opportunity Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Market Strategy */}
        <div className="bg-zinc-950 p-6 md:p-8 rounded-2xl border border-neutral-900 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest flex items-center gap-2">
              <Target className="w-4 h-4" /> Global Opportunity Roadmap
            </span>
            <h3 className="text-2xl font-black text-white tracking-tight">Synergetic Product Ecosystem</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Sikeisen Group bridges the gap between creative visual content and automated engineering workflows. Because we fabricate the cinematic films that drive our branding commissions, we retain 100% intellectual property sovereignty.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-neutral-900">
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded bg-neutral-900 flex items-center justify-center shrink-0 border border-neutral-850 text-[#D4AF37]">
                <DollarSign className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-white text-sm font-bold">100% Retained Creative IP</h4>
                <p className="text-zinc-500 text-xs leading-relaxed">Film catalogs and production blueprints are securely held under corporate licensing assets.</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded bg-neutral-900 flex items-center justify-center shrink-0 border border-neutral-850 text-[#D4AF37]">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-white text-sm font-bold">Multi-Channel Distribution</h4>
                <p className="text-zinc-500 text-xs leading-relaxed">Continuous digital publishing pipelines spanning Amazon, Apple, and physical fulfillment grids.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Downloads */}
        <div className="bg-zinc-950 p-6 md:p-8 rounded-2xl border border-neutral-900 flex flex-col justify-between space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest block">SEC Compliant Dossiers</span>
            <h3 className="text-2xl font-black text-white tracking-tight font-sans">Document Center</h3>
            <p className="text-zinc-400 text-sm">Download Sikeisen's vetted corporate briefs, financial statements, and growth prospect PDFs.</p>
          </div>

          <div className="space-y-3 pt-2">
            {[
              { file: "Standard Growth Prospectus (FY 2026/27)", size: "4.8 MB" },
              { file: "Q1 Financial Audit and EBITDA Statements", size: "2.1 MB" },
              { file: "3D Additive Plant Expansion Blueprint Plan", size: "12.4 MB" }
            ].map((f, i) => (
              <a
                key={i}
                href="#"
                onClick={(e) => { e.preventDefault(); alert(`Vetted PDF artifact placeholder (${f.file}) downloaded securely.`); }}
                className="bg-black/60 border border-neutral-900 hover:border-[#D4AF37]/50 rounded-xl p-4 flex items-center justify-between text-zinc-300 hover:text-white transition-all group"
              >
                <div className="flex items-center gap-3">
                  <FileText className="w-4 h-4 text-[#D4AF37]" />
                  <div className="text-left">
                    <span className="text-xs font-bold block group-hover:text-[#D4AF37] transition-colors">{f.file}</span>
                    <span className="text-[10px] text-zinc-500 font-mono">Format: PDF | Size: {f.size}</span>
                  </div>
                </div>
                <Download className="w-4 h-4 text-zinc-500 group-hover:text-[#D4AF37] transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Activity Grid: Dynamic Lead Tracking */}
      <div className="bg-zinc-950 rounded-xl border border-neutral-900 p-6 md:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <span className="text-xs font-mono text-[#D4AF37] tracking-widest uppercase">Live Sikeisen Dashboard</span>
            <h3 className="text-2xl font-black text-white tracking-tight">Active Strategic Partner Pipeline</h3>
            <p className="text-zinc-400 text-xs">
              Simulated executive ledger displaying actual business inquiries routed by our server-side classifiers. File a contact inquiry to see it appear live.
            </p>
          </div>
          
          <button
            onClick={fetchCorporateLeads}
            disabled={loadingLeads}
            className="text-xs bg-neutral-900 border border-neutral-805 hover:border-[#D4AF37]/50 hover:text-white text-zinc-400 px-3.5 py-1.5 rounded-md flex items-center gap-1.5 transition-all cursor-pointer disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loadingLeads ? 'animate-spin' : ''}`} /> Refresh Pipeline
          </button>
        </div>

        {/* Live Leads Table */}
        <div className="overflow-x-auto rounded-lg border border-neutral-900">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="bg-black text-zinc-500 uppercase tracking-widest font-mono text-[9px] border-b border-neutral-900">
                <th className="p-4">Partner Brand</th>
                <th className="p-4">Routed Department</th>
                <th className="p-4">Classification</th>
                <th className="p-4">Submission Context</th>
                <th className="p-4">Assigned Status</th>
                <th className="p-4 text-right">Filed UTC</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((l) => (
                <tr key={l.id} className="bg-black/30 hover:bg-neutral-900/30 border-b border-neutral-900 text-zinc-300">
                  <td className="p-4 font-bold text-white max-w-[120px] truncate">{l.name} ({l.company})</td>
                  <td className="p-4 font-mono text-zinc-400">{l.assignedDept}</td>
                  <td className="p-4">
                    <span className="bg-neutral-900 border border-neutral-800 text-[#D4AF37] px-2 py-0.5 rounded text-[10px] font-mono">
                      {l.category}
                    </span>
                  </td>
                  <td className="p-4 hidden sm:table-cell max-w-[200px] truncate">{l.text}</td>
                  <td className="p-4">
                    <span className="bg-emerald-950/25 border border-emerald-900/40 text-emerald-400 px-2.5 py-0.5 rounded text-[10px] font-mono">
                      {l.status}
                    </span>
                  </td>
                  <td className="p-4 text-right font-mono text-[10px] text-zinc-500">
                    {new Date(l.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
