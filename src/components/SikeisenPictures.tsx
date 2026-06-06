/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Film, Play, Tv, Award, Calendar, Users, Eye, ArrowRight, Video, Sparkles, ChevronRight } from 'lucide-react';
import { PRODUCTIONS } from '../data';
import { ProductionItem } from '../types';

export default function SikeisenPictures() {
  const [activeFilm, setActiveFilm] = useState<ProductionItem>(PRODUCTIONS[0]);
  const [filter, setFilter] = useState<'All' | 'Released' | 'Post-Production' | 'In Development'>('All');

  const filteredFilms = filter === 'All' 
    ? PRODUCTIONS 
    : PRODUCTIONS.filter(f => f.status === filter);

  return (
    <div className="space-y-16">
      {/* Editorial Banner */}
      <div className="relative bg-zinc-950 rounded-2xl overflow-hidden border border-neutral-800 p-8 md:p-12 lg:p-16 flex flex-col md:flex-row gap-8 items-center">
        {/* Background Ambient Aura */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />
        
        {/* Poster Frame */}
        <div className="w-full md:w-1/3 aspect-[2/3] relative rounded-xl overflow-hidden border border-[#D4AF37]/35 shadow-[0_0_30px_rgba(212,175,55,0.15)] group shrink-0">
          <img 
            src={activeFilm.poster} 
            alt={activeFilm.title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent flex flex-col justify-end p-6">
            <span className="text-[10px] font-mono text-[#D4AF37] uppercase tracking-wider mb-2">
              Featured Spotlights
            </span>
            <h3 className="text-white text-xl font-bold tracking-tight">{activeFilm.title}</h3>
            <span className="text-zinc-400 text-xs mt-1">{activeFilm.genre}</span>
          </div>
        </div>

        {/* Narrative / Trailer Player */}
        <div className="flex-1 space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#D4AF37] px-3 py-1 rounded-full text-xs font-mono">
              {activeFilm.type}
            </span>
            <span className="bg-zinc-900 border border-neutral-800 text-zinc-300 px-3 py-1 rounded-full text-xs font-mono">
              {activeFilm.status}
            </span>
            <span className="text-zinc-500 text-xs font-mono">Release Year: {activeFilm.year}</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-display font-black tracking-tighter text-white leading-none uppercase">
            {activeFilm.title}
          </h1>

          <p className="text-zinc-400 text-base md:text-lg leading-relaxed">
            {activeFilm.synopsis}
          </p>

          {/* Cast & Crew block */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-neutral-900 pt-6">
            <div>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Director</span>
              <span className="text-white text-sm font-medium">{activeFilm.director}</span>
            </div>
            <div>
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block">Core Cast</span>
              <span className="text-white text-sm font-medium">{activeFilm.cast.join(', ')}</span>
            </div>
          </div>

          {activeFilm.awards && activeFilm.awards.length > 0 && (
            <div className="flex items-start gap-2.5 bg-[#D4AF37]/5 border border-[#D4AF37]/10 p-3.5 rounded-lg">
              <Award className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
              <div>
                <span className="text-[10px] text-[#D4AF37] uppercase tracking-wider font-mono font-semibold block">Laurel & Accordances</span>
                <span className="text-zinc-300 text-xs">{activeFilm.awards.join(' | ')}</span>
              </div>
            </div>
          )}

          {activeFilm.trailerUrl ? (
            <div className="pt-4 flex flex-col gap-4">
              <span className="text-[11px] font-mono text-[#D4AF37] uppercase tracking-wider flex items-center gap-2">
                <Video className="w-4 h-4 animate-pulse" /> Official Interactive Teaser Preview
              </span>
              <div id="active-trailer-frame" className="aspect-video w-full rounded-xl overflow-hidden border border-neutral-850 bg-black">
                <iframe
                  src={activeFilm.trailerUrl}
                  title={`${activeFilm.title} Trailer`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ) : (
            <div className="p-8 border border-dashed border-neutral-800 rounded-xl flex flex-col items-center justify-center text-center bg-black/40">
              <Sparkles className="w-8 h-8 text-[#D4AF37] opacity-60 mb-2 animate-bounce" />
              <p className="text-xs text-zinc-400">Exclusive Behind-The-Scenes media files are currently syncing on enterprise CDNs.</p>
            </div>
          )}
        </div>
      </div>

      {/* Film Library Header and Filter */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <span className="text-xs font-mono text-[#D4AF37] tracking-superwide uppercase block">The library</span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-white tracking-tighter uppercase">Studio Archive & Pipeline</h2>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {(['All', 'Released', 'Post-Production', 'In Development'] as const).map((stat) => (
              <button
                key={stat}
                id={`filter-film-${stat.toLowerCase().replace(' ', '-')}`}
                onClick={() => setFilter(stat)}
                className={`text-xs px-3.5 py-1.5 rounded-md font-mono border transition-all cursor-pointer ${
                  filter === stat
                    ? 'bg-[#D4AF37] border-[#D4AF37] text-black font-semibold'
                    : 'bg-[#111] border-neutral-800 text-zinc-400 hover:text-white'
                }`}
              >
                {stat}
              </button>
            ))}
          </div>
        </div>

        {/* Film Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredFilms.map((film) => (
            <div
              key={film.id}
              onClick={() => setActiveFilm(film)}
              className={`group bg-zinc-950 border rounded-xl overflow-hidden cursor-pointer transition-all duration-300 flex flex-col h-full ${
                activeFilm.id === film.id
                  ? 'border-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.15)] ring-1 ring-[#D4AF37]'
                  : 'border-neutral-850 hover:border-neutral-700 hover:-translate-y-1'
              }`}
            >
              <div className="aspect-[3/4] relative overflow-hidden bg-neutral-900">
                <img 
                  src={film.poster} 
                  alt={film.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 flex gap-1">
                  <span className="bg-black/80 backdrop-blur-md border border-neutral-800 text-[10px] font-mono text-zinc-300 px-2 py-0.5 rounded">
                    {film.type}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-[#D4AF37] text-black text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1">
                    <Play className="w-3.5 h-3.5 fill-black" /> Stream Preview
                  </span>
                </div>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h4 className="text-white font-bold tracking-tight text-base group-hover:text-[#D4AF37] transition-colors line-clamp-1">
                    {film.title}
                  </h4>
                  <p className="text-zinc-500 text-xs font-mono mt-1">{film.genre} ({film.year})</p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-neutral-900 text-[11px] font-mono">
                  <span className={
                    film.status === 'Released' ? 'text-emerald-500' :
                    film.status === 'Post-Production' ? 'text-[#D4AF37]' : 'text-blue-400'
                  }>
                    {film.status}
                  </span>
                  <span className="text-zinc-500 flex items-center gap-1 hover:text-white transition-colors">
                    View Details <ChevronRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Production Workflow timeline Section */}
      <div className="border border-neutral-900 bg-[#111111]/40 backdrop-blur-md rounded-2xl p-6 md:p-10 space-y-8">
        <div>
          <span className="text-xs font-mono text-[#D4AF37] tracking-superwide uppercase block">Our Methodology</span>
          <h3 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tighter uppercase">The Sikeisen Cinematic Pipeline</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          <div className="space-y-3 p-4 bg-black/60 rounded-xl border border-neutral-900 relative">
            <span className="absolute top-4 right-4 text-3xl font-mono text-[#D4AF37]/15">01</span>
            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/20 text-[#D4AF37]">
              <Film className="w-5 h-5" />
            </div>
            <h4 className="text-white font-bold">Comprehensive Script Clinic</h4>
            <p className="text-zinc-400 text-xs leading-relaxed">
              We vet characters, narratives, and story structures through rigorous focus evaluations to align creative sparks with high market viability.
            </p>
          </div>

          <div className="space-y-3 p-4 bg-black/60 rounded-xl border border-neutral-900 relative">
            <span className="absolute top-4 right-4 text-3xl font-mono text-[#D4AF37]/15">02</span>
            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/20 text-[#D4AF37]">
              <Users className="w-5 h-5" />
            </div>
            <h4 className="text-white font-bold">Physical Additive Props</h4>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Bridging digital VFX with physically printed sets, precision custom miniature assets, and smart carbon fiber camera rigs dynamically.
            </p>
          </div>

          <div className="space-y-3 p-4 bg-black/60 rounded-xl border border-neutral-900 relative">
            <span className="absolute top-4 right-4 text-3xl font-mono text-[#D4AF37]/15">03</span>
            <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 flex items-center justify-center border border-[#D4AF37]/20 text-[#D4AF37]">
              <Tv className="w-5 h-5" />
            </div>
            <h4 className="text-white font-bold">Immersive Spatial Masters</h4>
            <p className="text-zinc-400 text-xs leading-relaxed">
              Engineered for Dolby Atmos, Atmos Vision, HDR formats, and global delivery directly targeting international streaming giants and theaters.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
