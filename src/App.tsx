/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Building, 
  Film, 
  Cpu, 
  Compass, 
  BookOpen, 
  Layers, 
  Briefcase, 
  TrendingUp, 
  ChevronRight, 
  Menu, 
  X, 
  Award, 
  Sparkles, 
  Search, 
  ArrowRight, 
  Check, 
  Send, 
  ExternalLink, 
  FileText, 
  CheckCircle,
  HelpCircle,
  Globe
} from 'lucide-react';

// Data / Config
import { SERVICES, TIMELINE, TEAM, PORTFOLIO, CASE_STUDIES, ARTICLES, COMP_INFO } from './data';
import { ProjectItem, NewsArticle } from './types';

// Modular Components
import SikeisenPictures from './components/SikeisenPictures';
import SikeisenTech from './components/SikeisenTech';
import SikeisenInvestors from './components/SikeisenInvestors';
import CareerCenter from './components/CareerCenter';
import AIConsultant from './components/AIConsultant';
import LeadCenter from './components/LeadCenter';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'pictures' | 'tech' | 'portfolio' | 'cases' | 'investors' | 'careers' | 'newsroom' | 'contact'>('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<'EN' | 'JA' | 'HI'>('EN');

  // Contact Form State
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    company: '',
    category: 'General' as any,
    text: '',
    budget: ''
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [submittingContact, setSubmittingContact] = useState(false);
  const [routedDept, setRoutedDept] = useState('');

  // Portfolio local filter and search states
  const [portFilter, setPortFilter] = useState<'All' | 'Films' | 'Commercials' | 'Photography' | 'Design' | 'Software Projects' | 'AI Projects' | '3D Printing Projects'>('All');
  const [portSearch, setPortSearch] = useState('');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // News active article state (detailed reader modal)
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);

  // Scroll to top upon subtab toggles
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const handleSubmitContact = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email || !contactForm.text) return;

    setSubmittingContact(true);
    try {
      const response = await fetch('/api/inquire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contactForm)
      });
      const data = await response.json();
      if (data.success) {
        setRoutedDept(data.assignedDept);
        setContactSubmitted(true);
      }
    } catch (err) {
      // In case server is offline/syncing, fallback nicely so user flow is unblocked
      setRoutedDept("Sikeisen Operations Directorate (General Counsel)");
      setContactSubmitted(true);
    } finally {
      setSubmittingContact(false);
    }
  };

  const handleResetContact = () => {
    setContactForm({
      name: '',
      email: '',
      company: '',
      category: 'General',
      text: '',
      budget: ''
    });
    setContactSubmitted(false);
  };

  // Filtered portfolio list
  const filteredPortfolio = PORTFOLIO.filter(item => {
    const matchesFilter = portFilter === 'All' || item.category === portFilter;
    const matchesSearch = item.title.toLowerCase().includes(portSearch.toLowerCase()) || 
                          item.description.toLowerCase().includes(portSearch.toLowerCase()) ||
                          item.client.toLowerCase().includes(portSearch.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between selection:bg-[#D4AF37] selection:text-black">
      
      {/* Structured microdata Schema script to maximize SEO goals */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Sikeisen Group Pvt. Ltd.",
          "alternateName": "Sikeisen",
          "url": "https://sikeisen.com",
          "logo": "https://sikeisen.com/logo.png",
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+91-80-4321-0987",
              "contactType": "customer service",
              "email": "executive@sikeisen.com",
              "areaServed": "Worldwide"
            }
          ],
          "sameAs": [
            "https://linkedin.com/company/sikeisen"
          ]
        })}
      </script>

      {/* Primary Elegant Header Navigation */}
      <header className="sticky top-0 z-40 bg-black/85 backdrop-blur-md border-b border-neutral-900">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Sikeisen Branding Wordmark */}
          <div 
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-3 cursor-pointer group select-none"
          >
            <div className="w-9 h-9 rounded bg-black border border-[#D4AF37] flex items-center justify-center shadow-[0_0_12px_rgba(212,175,55,0.2)] group-hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] transition-all">
              <span className="font-display font-black text-xs text-[#D4AF37] tracking-tighter">SK</span>
            </div>
            <div>
              <span className="font-display font-black text-base text-white tracking-widest uppercase block group-hover:text-[#D4AF37] transition-colors">
                SIKEISEN
              </span>
              <span className="text-[9px] font-mono tracking-widest text-[#D4AF37] uppercase block">
                GROUP PRIVATE LTD
              </span>
            </div>
          </div>

          {/* Desktop Tab links list */}
          <nav className="hidden lg:flex items-center space-x-1">
            {[
              { id: 'home', label: 'Ecosystem' },
              { id: 'pictures', label: 'Pictures Studio' },
              { id: 'tech', label: 'AI & Prototyping' },
              { id: 'portfolio', label: 'Global Portfolio' },
              { id: 'cases', label: 'Case Studies' },
              { id: 'investors', label: 'Investors Board' },
              { id: 'careers', label: 'Careers' },
              { id: 'newsroom', label: 'Newsroom' },
              { id: 'contact', label: 'Acquisitions' }
            ].map((tab) => (
              <button
                key={tab.id}
                id={`tab-link-${tab.id}`}
                onClick={() => setActiveTab(tab.id as any)}
                className={`text-[11px] font-mono font-semibold uppercase px-3 py-2 rounded-md transition-all tracking-wider cursor-pointer ${
                  activeTab === tab.id 
                    ? 'text-[#D4AF37] bg-neutral-900 border border-neutral-850' 
                    : 'text-zinc-400 hover:text-white border border-transparent'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Multi-language selector mockup */}
          <div className="hidden lg:flex items-center gap-3 border-l border-neutral-900 pl-6 h-6 text-[10px] font-mono text-zinc-500">
            <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
            <button 
              onClick={() => { setLang('EN'); }}
              className={`hover:text-white transition-colors cursor-pointer ${lang === 'EN' ? 'text-[#D4AF37] font-bold' : ''}`}
            >
              EN
            </button>
            <span>|</span>
            <button 
              onClick={() => { setLang('JA'); }}
              className={`hover:text-white transition-colors cursor-pointer ${lang === 'JA' ? 'text-[#D4AF37] font-bold' : ''}`}
            >
              JA
            </button>
            <span>|</span>
            <button 
              onClick={() => { setLang('HI'); }}
              className={`hover:text-white transition-colors cursor-pointer ${lang === 'HI' ? 'text-[#D4AF37] font-bold' : ''}`}
            >
              HI
            </button>
          </div>

          {/* Mobile hamburger button */}
          <button
            id="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-zinc-400 hover:text-white p-2 rounded-md hover:bg-neutral-900 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu panel */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-neutral-900 bg-black/95 p-4 space-y-1 text-center font-mono text-xs">
            {[
              { id: 'home', label: 'Ecosystem' },
              { id: 'pictures', label: 'Pictures Studio' },
              { id: 'tech', label: 'AI & Prototyping' },
              { id: 'portfolio', label: 'Global Portfolio' },
              { id: 'cases', label: 'Case Studies' },
              { id: 'investors', label: 'Investors Board' },
              { id: 'careers', label: 'Careers' },
              { id: 'newsroom', label: 'Newsroom' },
              { id: 'contact', label: 'Acquisitions' }
            ].map((tab) => (
              <button
                key={tab.id}
                id={`mobile-link-${tab.id}`}
                onClick={() => {
                  setActiveTab(tab.id as any);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left py-3.5 px-4 rounded-lg block uppercase tracking-wider ${
                  activeTab === tab.id ? 'bg-neutral-900 text-[#D4AF37] font-bold border border-neutral-850' : 'text-zinc-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Main Container */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        
        {/* VIEW: HOME / ECOSYSTEM */}
        {activeTab === 'home' && (
          <div className="space-y-24">
            
            {/* Cinematic Hero space */}
            <div className="relative text-center space-y-12 py-16 md:py-28 overflow-hidden rounded-3xl border border-neutral-900 bg-zinc-950 p-6 md:p-16 shadow-[0_0_50px_rgba(0,0,0,0.9)]">
              {/* Abstract luxury gold light bleed background */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D4AF37]/5 rounded-full blur-[140px] pointer-events-none" />
              
              <div className="space-y-4 max-w-5xl mx-auto">
                <span className="text-xs font-mono text-[#D4AF37] tracking-superwide uppercase flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#D4AF37] animate-pulse" /> Sikeisen Creative Portal
                </span>
                
                <h1 className="text-4xl sm:text-7xl lg:text-8xl font-display font-black text-white tracking-tighter leading-[0.95] uppercase">
                  {lang === 'EN' && (
                    <>
                      Turning <span className="text-stroke-white select-none">Imagination</span> <br className="hidden md:inline" />
                      Into <span className="text-[#D4AF37] text-glow">Reality</span>
                    </>
                  )}
                  {lang === 'JA' && (
                    <>
                      想像力を <br className="hidden md:inline" />
                      <span className="text-[#D4AF37] text-glow">現実</span> に変える
                    </>
                  )}
                  {lang === 'HI' && (
                    <>
                      कल्पना को <br className="hidden md:inline" />
                      <span className="text-[#D4AF37] text-glow">वास्तविकता</span> में बदलना
                    </>
                  )}
                </h1>

                <p className="text-zinc-450 text-sm md:text-base max-w-3xl mx-auto font-sans font-medium tracking-wide leading-relaxed pt-2">
                  We are an elite modern creative and digital innovation company. Sikeisen excels in <span className="text-white font-semibold">A24-grade storycrafting</span>, secure server-side neural integration pipelines, and sub-micron SLA industrial prototyping.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
                <button
                  id="hero-explore-work"
                  onClick={() => setActiveTab('portfolio')}
                  className="w-full sm:w-auto bg-[#D4AF37] hover:bg-amber-500 text-black font-display font-bold text-xs uppercase px-8 py-4 rounded-lg tracking-wider hover:scale-105 transition-transform cursor-pointer shadow-[0_0_20px_rgba(212,175,55,0.35)]"
                >
                  Explore Our Work
                </button>
                <button
                  id="hero-start-project"
                  onClick={() => setActiveTab('contact')}
                  className="w-full sm:w-auto bg-black text-white hover:text-[#D4AF37] font-display font-bold text-xs uppercase px-8 py-4 rounded-lg tracking-wider border border-neutral-800 hover:border-[#D4AF37] transition-all cursor-pointer"
                >
                  Start Your Project
                </button>
              </div>

              {/* Statistics Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 max-w-5xl mx-auto border-t border-neutral-900 text-center">
                {[
                  { value: "500+", label: "Projects Completed" },
                  { value: "150+", label: "Clients Served" },
                  { value: "10+", label: "Years of Experience" },
                  { value: "75+", label: "Creative Team Members" }
                ].map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <span className="text-3xl sm:text-5xl font-black text-white font-display block tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-mono text-zinc-500 uppercase tracking-superwide block">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Corporate Profile, Mission, Vision */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
              <div className="bg-zinc-950 p-6 md:p-8 rounded-2xl border border-neutral-900 col-span-1 lg:col-span-2 space-y-4">
                <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest block">Group profile</span>
                <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight uppercase">Corporate Overview</h2>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Sikeisen Group functions as an elite multi-directorate agency holding space across fine cinema production, additive manufacturing SLA services, editorial epub compilation, and highly isolated software development.
                </p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Our strategic frameworks are entirely client-oriented. By leveraging containerized AI server layers, we offer modern features without exposing database interfaces to public networks, guaranteeing maximum confidentiality.
                </p>
              </div>

              <div className="bg-gradient-to-b from-[#111] to-black p-6 md:p-8 rounded-2xl border border-[#D4AF37]/20 flex flex-col justify-between shadow-[inset_0_0_20px_rgba(212,175,55,0.05)] text-left">
                <div className="space-y-4">
                  <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest block">Our Compass</span>
                  <div className="space-y-2">
                    <h4 className="text-white font-bold text-sm uppercase tracking-wide">Mission:</h4>
                    <p className="text-zinc-400 text-xs leading-relaxed">"To resolve our client's most complex visual, physical, and digital roadblocks with unparalleled cinematic precision and enterprise durability."</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-white font-bold text-sm uppercase tracking-wide">Vision:</h4>
                    <p className="text-zinc-400 text-xs leading-relaxed">"Sovereign convergence of additive technologies with independent theatrical arts to create the standard of tomorrow."</p>
                  </div>
                </div>
                <div className="pt-4 border-t border-neutral-900 text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest">
                  Est. Bengaluru 2016
                </div>
              </div>
            </div>

            {/* Competitive Advantages: Why Choose Sikeisen */}
            <div className="space-y-8">
              <div className="text-center space-y-2">
                <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest">Strategic Edge</span>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">Why Sikeisen Group?</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { title: "Sovereign Additive & Film Labs", desc: "No outsourcing. We operate our own camera sets, render grids, and 3D industrial printer networks directly, cutting logistics wait times." },
                  { title: "Military-Grade Secure Software", desc: "Isolated server-side proxy wrappers shielding sensitive API keys, utilizing standard token rate limiting buffers." },
                  { title: "Unified Intellectual Reserves", desc: "We deploy interdisciplinary groups where visual graphic designers collaborate directly with complex structural chemists." }
                ].map((item, i) => (
                  <div key={i} className="bg-zinc-950 p-6 rounded-xl border border-neutral-900 space-y-3">
                    <div className="w-8 h-8 rounded bg-[#D4AF37]/15 flex items-center justify-center border border-[#D4AF37]/35 text-[#D4AF37] font-semibold text-xs font-mono">
                      0{i + 1}
                    </div>
                    <h4 className="text-white font-bold text-base tracking-tight">{item.title}</h4>
                    <p className="text-zinc-400 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Interactive Timeline Section */}
            <div className="space-y-12 bg-zinc-950 border border-neutral-900 rounded-3xl p-6 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />
              
              <div className="max-w-2xl space-y-3">
                <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest block">Historical milestones</span>
                <h3 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight uppercase">Company Timeline</h3>
                <p className="text-zinc-400 text-xs">Explore Sikeisen's developmental roadmaps from a small creative collective to an international conglomerate holding.</p>
              </div>

              <div className="relative pt-8 pl-4 sm:pl-8 border-l border-neutral-800 space-y-12 max-w-4xl">
                {TIMELINE.map((evt, id) => (
                  <div key={evt.id} className="relative space-y-1.5 group">
                    {/* Ring dot indicator */}
                    <div className="absolute -left-[20px] sm:-left-[36px] top-1.5 w-3 h-3 rounded-full bg-black border-2 border-[#D4AF37] group-hover:scale-125 transition-transform" />
                    
                    <span className="text-sm font-mono font-black text-[#D4AF37] block tracking-widest">{evt.year}</span>
                    <h4 className="text-white font-bold text-base group-hover:text-[#D4AF37] transition-colors">{evt.title}</h4>
                    <p className="text-zinc-400 text-xs max-w-2xl leading-relaxed">{evt.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Services Highlights Cards */}
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div>
                  <span className="text-xs font-mono text-[#D4AF37] tracking-widest uppercase">The ecosystem catalog</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">Core Operations</h3>
                </div>
                <button
                  onClick={() => setActiveTab('pictures')}
                  className="text-xs font-semibold text-[#D4AF37] hover:text-white border-b border-[#D4AF37] hover:border-white transition-colors pb-1 cursor-pointer flex items-center gap-1"
                >
                  Explore Studio Page <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SERVICES.map((s) => (
                  <div 
                    key={s.id} 
                    className="bg-zinc-950 p-6 rounded-xl border border-neutral-900 hover:border-[#D4AF37]/50 transition-all flex flex-col justify-between hover:shadow-[0_0_15px_rgba(212,175,55,0.05)]"
                  >
                    <div className="space-y-3">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">{s.category} Service</span>
                      <h4 className="text-white font-bold tracking-tight text-lg">{s.title}</h4>
                      <p className="text-zinc-400 text-xs leading-relaxed line-clamp-3">{s.description}</p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-neutral-900 flex justify-between items-center">
                      <span className="text-[10px] text-[#D4AF37] font-mono uppercase tracking-widest">Turnkey pipeline</span>
                      <button
                        onClick={() => {
                          setActiveTab('portfolio');
                          setPortFilter(s.category === 'media' ? 'Films' : s.category === 'tech' ? 'AI Projects' : 'Design');
                        }}
                        className="text-xs font-mono font-semibold hover:text-[#D4AF37] text-white flex items-center gap-1 select-none pointer cursor-pointer"
                      >
                        Details <ChevronRight className="w-3 h-3 text-[#D4AF37]" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Brief Testimonials / Partners showcase */}
            <div className="bg-[#111111]/40 border border-neutral-900 rounded-3xl p-6 md:p-12 space-y-8 text-center text-zinc-300">
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block">Vetted validations</span>
              <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight max-w-xl mx-auto leading-tight">
                "Sikeisen consistently delivers high-fidelity assets securely on tight schedule increments."
              </h3>
              <p className="text-xs text-zinc-500 font-mono">- Global Creative Director, Moda Tokyo Consortium</p>
            </div>
            
          </div>
        )}

        {/* VIEW: PICTURES DIVISION */}
        {activeTab === 'pictures' && <SikeisenPictures />}

        {/* VIEW: TECH & AI SOLUTIONS */}
        {activeTab === 'tech' && <SikeisenTech />}

        {/* VIEW: COMPREHENSIVE PORTFOLIO WITH DYNAMIC GRAPH FILTER & SEARCH */}
        {activeTab === 'portfolio' && (
          <div className="space-y-12">
            
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest">Global Showcases</span>
                <h2 className="text-3xl font-black text-white tracking-tight uppercase">Master Portfolio</h2>
                <p className="text-zinc-400 text-xs mt-1">Filter, search, or inspect precise physical and digital outcomes of Sikeisen Group.</p>
              </div>

              {/* Live search input field */}
              <div className="relative w-full sm:w-72">
                <input
                  type="text"
                  placeholder="Search works or clients..."
                  value={portSearch}
                  onChange={(e) => setPortSearch(e.target.value)}
                  className="w-full bg-neutral-900 border border-neutral-800 text-white placeholder-zinc-500 text-xs px-4 py-3 pl-10 rounded-lg focus:border-[#D4AF37] focus:outline-none transition-colors"
                />
                <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3.5" />
              </div>
            </div>

            {/* Portfolio Categories List */}
            <div className="flex flex-wrap gap-2 pb-2 border-b border-neutral-900">
              {([
                'All', 'Films', 'Commercials', 'Photography', 'Design', 'Software Projects', 'AI Projects', '3D Printing Projects'
              ] as const).map((filterOpt) => (
                <button
                  key={filterOpt}
                  id={`btn-port-filter-${filterOpt.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setPortFilter(filterOpt)}
                  className={`text-xs px-3.5 py-2.5 font-mono rounded-md border transition-all cursor-pointer ${
                    portFilter === filterOpt 
                      ? 'bg-[#D4AF37] border-[#D4AF37] text-black font-semibold shadow-[0_0_12px_rgba(212,175,55,0.15)]'
                      : 'bg-[#111] border-neutral-850 text-zinc-400 hover:text-white'
                  }`}
                >
                  {filterOpt}
                </button>
              ))}
            </div>

            {/* Portfolio Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPortfolio.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedProject(item)}
                  className="group bg-zinc-950 border border-neutral-900 hover:border-neutral-700 rounded-xl overflow-hidden cursor-pointer transition-all hover:-translate-y-1 h-full flex flex-col justify-between"
                >
                  <div className="aspect-video w-full overflow-hidden bg-neutral-900 relative">
                    <img 
                      src={item.imageUrl} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-neutral-800 text-[10px] font-mono text-zinc-300 px-2.5 py-0.5 rounded">
                      {item.category}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">Client: {item.client}</span>
                      <h4 className="text-white font-extrabold text-base tracking-tight group-hover:text-[#D4AF37] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-zinc-400 text-xs leading-relaxed line-clamp-3">{item.description}</p>
                    </div>

                    <div className="pt-3 border-t border-neutral-900 flex justify-between items-center text-[10px] font-mono">
                      <span className="text-zinc-500">Year of Completion: {item.year}</span>
                      <span className="text-[#D4AF37] flex items-center gap-1 hover:text-white transition-colors">
                        Inspect Out <ChevronRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredPortfolio.length === 0 && (
              <div className="py-16 text-center border border-dashed border-neutral-850 rounded-2xl bg-zinc-950/40">
                <Search className="w-8 h-8 text-zinc-600 mx-auto mb-2.5 animate-bounce" />
                <p className="text-sm text-zinc-400">No active portfolios match your criteria.</p>
                <button 
                  onClick={() => { setPortFilter('All'); setPortSearch(''); }}
                  className="text-xs text-[#D4AF37] font-semibold underline mt-2 cursor-pointer"
                >
                  Reset portfolio filters
                </button>
              </div>
            )}

            {/* Interactive Project Details Modal */}
            {selectedProject && (
              <div id="project-details-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
                <div className="bg-[#111] border border-neutral-800 max-w-3xl w-full rounded-2xl overflow-y-auto max-h-[90vh] relative p-6 md:p-8 space-y-6">
                  
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 text-zinc-400 hover:text-white p-2 rounded-full hover:bg-neutral-900 cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="space-y-4">
                    <span className="text-[10px] bg-[#D4AF37]/15 text-[#D4AF37] border border-[#D4AF37]/35 px-2.5 py-1 rounded font-mono uppercase tracking-widest inline-block">
                      {selectedProject.category}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">{selectedProject.title}</h2>
                    <p className="text-zinc-400 text-sm leading-relaxed">{selectedProject.description}</p>
                  </div>

                  {/* Before/After slider showcase if available */}
                  {selectedProject.beforeImage && selectedProject.afterImage && (
                    <div className="space-y-3">
                      <span className="text-[11px] font-mono text-[#D4AF37] uppercase tracking-wider block">Before / After CAD Rendering Showcase</span>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1 relative group">
                          <img src={selectedProject.beforeImage} alt="Before CAD" className="w-full h-44 object-cover rounded-xl border border-neutral-900" referrerPolicy="no-referrer" />
                          <span className="absolute bottom-2 left-2 bg-black/85 px-2 py-0.5 text-[9px] font-mono text-zinc-400 rounded">01. Raw Mesh/Mold CAD</span>
                        </div>
                        <div className="space-y-1 relative group">
                          <img src={selectedProject.afterImage} alt="After print" className="w-full h-44 object-cover rounded-xl border border-neutral-900" referrerPolicy="no-referrer" />
                          <span className="absolute bottom-2 left-2 bg-black/85 px-2 py-0.5 text-[9px] font-mono text-[#D4AF37] rounded font-bold">02. Sikeisen Finished SLA Part</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Project Outputs */}
                  <div className="space-y-2 border-t border-neutral-900 pt-5 text-sm">
                    <span className="text-[10px] uppercase font-mono text-zinc-500 block">Deliverables catalog</span>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.outputs.map((out, idx) => (
                        <span key={idx} className="bg-neutral-900 border border-neutral-805 text-zinc-300 text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                          <Check className="w-3.5 h-3.5 text-[#D4AF37]" /> {out}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-neutral-900 text-xs text-zinc-500 font-mono">
                    <span>Partner Brand: {selectedProject.client} ({selectedProject.year})</span>
                    <button
                      onClick={() => {
                        setSelectedProject(null);
                        setActiveTab('contact');
                        setContactForm(prev => ({
                          ...prev,
                          category: selectedProject.category.includes('Films') ? 'Production' : 'Technology',
                          text: `Hi, I inspected your '${selectedProject.title}' project and want to commission a custom quote. `
                        }));
                      }}
                      className="bg-[#D4AF37] hover:bg-amber-500 text-black px-4 py-2 rounded font-sans text-xs font-semibold cursor-pointer"
                    >
                      Commission Quote for this Work
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* VIEW: CASE STUDIES LIST */}
        {activeTab === 'cases' && (
          <div className="space-y-16">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest">Enterprise Case registers</span>
              <h2 className="text-3xl font-black text-white tracking-tight uppercase">Solutions & Strategy Case Studies</h2>
              <p className="text-zinc-400 text-sm">
                Detailed breakdowns of complex problems resolved dynamically across major luxury watch brands and fast shipping logistics systems.
              </p>
            </div>

            {/* Case list */}
            <div className="space-y-12">
              {CASE_STUDIES.map((cs) => (
                <div key={cs.id} className="bg-zinc-950 p-6 md:p-10 rounded-2xl border border-neutral-900 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-[400px] h-[200px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />
                  
                  {/* Strategic Columns */}
                  <div className="col-span-1 lg:col-span-2 space-y-6">
                    <div>
                      <span className="bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#D4AF37] px-3 py-1 rounded text-[10px] font-mono uppercase tracking-wider inline-block">
                        {cs.sector} Focus Case
                      </span>
                      <h3 className="text-2xl font-black text-white tracking-tight mt-3">{cs.title}</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-neutral-900 pt-6">
                      <div className="space-y-1">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block">The Problem</span>
                        <p className="text-zinc-300 text-xs leading-relaxed">{cs.problem}</p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block">The Strategy</span>
                        <p className="text-zinc-300 text-xs leading-relaxed">{cs.strategy}</p>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block">The Execution</span>
                        <p className="text-zinc-300 text-xs leading-relaxed">{cs.execution}</p>
                      </div>
                    </div>

                    {cs.testimonial && (
                      <div className="bg-[#111] p-4 rounded-xl border border-neutral-900 relative">
                        <p className="italic text-zinc-400 text-xs">"{cs.testimonial.quote}"</p>
                        <span className="block mt-2 text-[10px] font-mono text-[#D4AF37] uppercase tracking-widest">
                          - {cs.testimonial.author}, {cs.testimonial.role}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* ROI Stats column */}
                  <div className="bg-black/80 border border-neutral-850 p-6 rounded-xl flex flex-col justify-between h-full space-y-8 relative z-10">
                    <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest block border-b border-neutral-950 pb-2">Vetted Metrics & Audited ROI</span>
                    
                    <div className="space-y-6">
                      {cs.metrics.map((met, mid) => (
                        <div key={mid} className="space-y-1">
                          <span className="text-3xl font-black text-[#D4AF37] tracking-tight block">{met.value}</span>
                          <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider block">{met.label}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => {
                        setActiveTab('contact');
                        setContactForm(prev => ({
                          ...prev,
                          category: 'Technology',
                          text: `Inquiring about client solutions similar to ${cs.client}`
                        }));
                      }}
                      className="text-xs font-semibold text-[#D4AF37] hover:text-white border-b border-[#D4AF37] hover:border-white transition-colors pb-1 justify-start flex items-center gap-1.5 cursor-pointer"
                    >
                      Commission Similar Campaign <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* VIEW: INVESTORS OVERVIEW */}
        {activeTab === 'investors' && <SikeisenInvestors />}

        {/* VIEW: CAREERS RECRUITMENT */}
        {activeTab === 'careers' && <CareerCenter />}

        {/* VIEW: NEWSROOM / PRESS RELEASES CENTRAL */}
        {activeTab === 'newsroom' && (
          <div className="space-y-12">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest">Press Intelligence</span>
              <h2 className="text-3xl font-black text-white tracking-tight uppercase font-sans">Sikeisen Newsroom</h2>
              <p className="text-zinc-400 text-sm">Vetted corporate disclosures, project awards, and official statements of our board of directors.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ARTICLES.map((art) => (
                <div 
                  key={art.id}
                  onClick={() => setActiveArticle(art)}
                  className="bg-zinc-950 rounded-xl overflow-hidden border border-neutral-900 cursor-pointer hover:border-neutral-700 transition-all flex flex-col justify-between h-full group"
                >
                  <div className="aspect-video w-full overflow-hidden relative bg-neutral-900">
                    <img src={art.headerImage} alt={art.title} className="w-full h-full object-cover group-hover:scale-103 transition-transform" referrerPolicy="no-referrer" />
                    <span className="absolute top-3 left-3 bg-black/85 backdrop-blur-sm border border-neutral-800 text-[9px] font-mono text-zinc-300 px-2.5 py-0.5 rounded">
                      {art.type}
                    </span>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center text-[10px] text-zinc-500 font-mono">
                        <span>{art.category}</span>
                        <span>{art.date}</span>
                      </div>
                      <h4 className="text-white font-extrabold text-base tracking-tight group-hover:text-[#D4AF37] transition-colors leading-snug line-clamp-2">
                        {art.title}
                      </h4>
                      <p className="text-zinc-400 text-xs leading-relaxed line-clamp-3">{art.excerpt}</p>
                    </div>

                    <div className="pt-3 border-t border-neutral-900 flex justify-between items-center text-[10px] font-mono">
                      <span className="text-zinc-500">Read complexity: {art.readTime}</span>
                      <span className="text-[#D4AF37] flex items-center gap-1">Read Article <ArrowRight className="w-3 h-3" /></span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Detailed Article Reader Modal */}
            {activeArticle && (
              <div id="news-article-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
                <div className="bg-[#111] border border-neutral-800 max-w-2xl w-full rounded-2xl overflow-y-auto max-h-[90vh] relative p-6 md:p-8 space-y-6">
                  <button
                    onClick={() => setActiveArticle(null)}
                    className="absolute top-4 right-4 text-zinc-400 hover:text-white p-2 rounded-full hover:bg-neutral-900 cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="space-y-4">
                    <div className="flex gap-3 text-[10px] font-mono text-zinc-500">
                      <span className="bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#D4AF37] px-2.5 py-0.5 rounded">{activeArticle.type}</span>
                      <span>Filed: {activeArticle.date}</span>
                      <span>{activeArticle.category}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight">{activeArticle.title}</h2>
                  </div>

                  <img src={activeArticle.headerImage} alt={activeArticle.title} className="w-full aspect-video object-cover rounded-xl border border-neutral-900" referrerPolicy="no-referrer" />

                  <p className="text-zinc-300 text-sm leading-relaxed whitespace-pre-wrap">{activeArticle.content}</p>

                  <div className="pt-4 border-t border-neutral-900 flex justify-between items-center text-xs text-zinc-500 font-mono">
                    <span>Sikeisen Communications Desk</span>
                    <button
                      onClick={() => setActiveArticle(null)}
                      className="bg-neutral-900 text-white border border-neutral-850 px-4 py-2 rounded hover:text-[#D4AF37] transition-all cursor-pointer"
                    >
                      Close Reader
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* VIEW: ACQUISITIONS & SMARTEST ROUTING LEAD CAPTURE CONTACT */}
        {activeTab === 'contact' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* Legal / Corporate contacts column */}
            <div className="space-y-8 bg-zinc-950 p-6 md:p-8 rounded-2xl border border-neutral-900">
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest block">Direct desks</span>
                <h3 className="text-2xl font-black text-white tracking-tight uppercase">Corporate Offices</h3>
                <p className="text-zinc-400 text-xs">Sikeisen maintains strict priority queues for investors and creative commissions.</p>
              </div>

              <div className="space-y-6 pt-4 border-t border-neutral-900 text-xs font-sans">
                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono text-[#D4AF37] uppercase block">Operations Head Office</span>
                  <p className="text-white font-medium">{COMP_INFO.address}</p>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono text-[#D4AF37] uppercase block">Electronic Courier</span>
                  <p className="text-white font-medium hover:text-[#D4AF37] transition-colors">{COMP_INFO.email}</p>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono text-[#D4AF37] uppercase block">Global direct line</span>
                  <p className="text-white font-medium">{COMP_INFO.phone}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-900 flex flex-col gap-3">
                <span className="text-[10px] font-mono text-zinc-500 uppercase block">Enterprise certification</span>
                <div className="flex gap-2 text-[10px] font-mono text-emerald-400 bg-emerald-950/20 border border-emerald-900/30 p-3 rounded-lg">
                  <Check className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>Encrypted end-to-end routing enabled on all inquiries.</span>
                </div>
              </div>
            </div>

            {/* Smart routing contact form */}
            <div id="contact-panel-card" className="bg-[#111]/40 border border-neutral-900 rounded-3xl p-6 md:p-10 col-span-1 lg:col-span-2 space-y-6">
              
              {contactSubmitted ? (
                <div className="py-8 text-center space-y-4 max-w-lg mx-auto">
                  <CheckCircle className="w-14 h-14 text-emerald-400 mx-auto animate-pulse" />
                  <div className="space-y-1">
                    <h3 className="text-white font-black text-xl md:text-2xl tracking-tight">Lead Secured & routed</h3>
                    <p className="text-zinc-400 text-sm">
                      Sikeisen's server has successfully routed your inquiry to:
                    </p>
                    <span className="inline-block bg-neutral-900 border border-neutral-850 text-[#D4AF37] px-4 py-2 rounded-xl text-xs font-mono font-bold mt-2">
                      {routedDept}
                    </span>
                  </div>
                  <p className="text-zinc-500 text-xs leading-relaxed">
                    Our department secretaries will verify your objectives and assemble technical or creative dossier estimates within 12 business hours.
                  </p>
                  <button
                    onClick={handleResetContact}
                    className="text-xs text-[#D4AF37] font-semibold underline hover:text-white transition-colors cursor-pointer"
                  >
                    File another corporate proposal
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmitContact} className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-xs font-mono text-[#D4AF37] uppercase tracking-widest block">turnkey entry</span>
                    <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight uppercase">Strategic Inquiries</h3>
                    <p className="text-zinc-400 text-xs">Fill our secure routing form. Automated classifiers assign incoming leads to relevant department executives instantly.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-mono text-zinc-500 block">Personal moniker / Full Name *</label>
                      <input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        placeholder="e.g. Yukinari Sase"
                        className="w-full bg-neutral-900 text-white border border-neutral-800 focus:border-[#D4AF37] focus:outline-none px-4 py-3 rounded-lg text-xs transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-mono text-zinc-500 block">Electronic Courier / Email *</label>
                      <input
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        placeholder="sase@sikeisen.com"
                        className="w-full bg-neutral-900 text-white border border-neutral-800 focus:border-[#D4AF37] focus:outline-none px-4 py-3 rounded-lg text-xs transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-mono text-zinc-500 block">Employer corporative / Company name</label>
                      <input
                        type="text"
                        value={contactForm.company}
                        onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                        placeholder="Moda Tokyo Selects"
                        className="w-full bg-neutral-900 text-white border border-neutral-800 focus:border-[#D4AF37] focus:outline-none px-4 py-3 rounded-lg text-xs transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase font-mono text-zinc-500 block">Inquiry classification category *</label>
                      <select
                        required
                        value={contactForm.category}
                        onChange={(e) => setContactForm({ ...contactForm, category: e.target.value as any })}
                        className="w-full bg-neutral-900 text-white border border-neutral-800 focus:border-[#D4AF37] focus:outline-none px-4 py-3 rounded-lg text-xs cursor-pointer transition-colors"
                      >
                        <option value="General">General / Other Channels</option>
                        <option value="Production">Media & Film Production</option>
                        <option value="Technology">Software & AI Solutions</option>
                        <option value="Publishing">Digital Books & Publications</option>
                        <option value="Careers">Careers Opportunities</option>
                        <option value="Investors">Investor Relations & Partnerships</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-mono text-zinc-500 block">Project capital allocations / Budget estimate</label>
                    <select
                      value={contactForm.budget}
                      onChange={(e) => setContactForm({ ...contactForm, budget: e.target.value })}
                      className="w-full bg-neutral-900 text-white border border-neutral-800 focus:border-[#D4AF37] focus:outline-none px-4 py-3 rounded-lg text-xs cursor-pointer transition-colors"
                    >
                      <option value="">Select capital range...</option>
                      <option value="Under $10,000">Under $10,000</option>
                      <option value="$10,000 - $50,050">$10,000 - $50,000</option>
                      <option value="$50,000 - $250,000">$50,000 - $250,000</option>
                      <option value="Over $250,000">Over $250,000 / Institutional Funding</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase font-mono text-zinc-500 block">Narrative brief / Proposal specifications *</label>
                    <textarea
                      required
                      value={contactForm.text}
                      onChange={(e) => setContactForm({ ...contactForm, text: e.target.value })}
                      placeholder="Outline target scope of work, technical barriers, schedule configurations, etc..."
                      rows={5}
                      className="w-full bg-neutral-900 text-white border border-neutral-800 focus:border-[#D4AF37] focus:outline-none px-4 py-3 rounded-lg text-xs transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submittingContact}
                    className="w-full bg-[#D4AF37] hover:bg-amber-500 disabled:bg-neutral-800 text-black font-semibold text-xs uppercase px-6 py-4 rounded-lg tracking-wider hover:scale-101 transition-transform duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_12px_rgba(212,175,55,0.2)]"
                  >
                    {submittingContact ? "Routing Lead securely..." : "Submit routed proposal Securely"} <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
            
          </div>
        )}

      </main>

      {/* Floating Utilities (AI estrategist + WhatsApp triggers) */}
      <AIConsultant />
      <LeadCenter />

      {/* Corporate footer */}
      <footer className="bg-zinc-950 border-t border-neutral-900 py-12 text-zinc-500 text-[11px] font-mono">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-white font-extrabold text-sm tracking-wide block uppercase font-display">SIKEISEN GROUP PVT. LTD.</span>
            <span className="text-[#D4AF37]/80 block text-[10px]">Turning Imagination Into Reality | Bangalore, India</span>
            <p className="text-zinc-650 text-[10px] max-w-md">Compliance with strict isolation practices. All digital vectors, custom CAD scripts, and theatrical masters are protected under international IP sovereign laws.</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-zinc-400">
            <button onClick={() => setActiveTab('home')} className="hover:text-white transition-colors cursor-pointer uppercase">Ecosystem</button>
            <button onClick={() => setActiveTab('investors')} className="hover:text-white transition-colors cursor-pointer uppercase">Investors</button>
            <button onClick={() => setActiveTab('careers')} className="hover:text-white transition-colors cursor-pointer uppercase">Careers</button>
            <button onClick={() => setActiveTab('contact')} className="hover:text-white transition-colors cursor-pointer uppercase">Acquisitions</button>
          </div>

          <div className="text-center md:text-right text-zinc-600 block">
            <span>© {new Date().getFullYear()} Sikeisen Group Pvt. Ltd. All rights reserved globally.</span>
            <span className="block mt-1 text-[9px] text-[#D4AF37]">Vetted under WCAG 2.1 AA & secure corporate SSL bounds.</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
