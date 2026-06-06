/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  category: 'media' | 'creative' | 'tech' | 'publishing' | 'manufacturing';
  description: string;
  benefits: string[];
  process: string[];
  deliverables: string[];
  faq: { question: string; answer: string }[];
}

export interface ProductionItem {
  id: string;
  title: string;
  year: string;
  type: 'Feature Film' | 'Short Film' | 'Documentary' | 'Commercial' | 'Series';
  genre: string;
  status: 'In Development' | 'In Production' | 'Post-Production' | 'Released';
  director: string;
  cast: string[];
  synopsis: string;
  awards?: string[];
  poster: string;
  trailerUrl?: string; // e.g. youtube embed
  behindTheScenes?: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Films' | 'Commercials' | 'Photography' | 'Design' | 'Software Projects' | 'AI Projects' | '3D Printing Projects';
  client: string;
  year: string;
  description: string;
  imageUrl: string;
  outputs: string[];
  beforeImage?: string; // elements for comparison
  afterImage?: string;
  videoUrl?: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  client: string;
  sector: string;
  problem: string;
  strategy: string;
  execution: string;
  results: string;
  metrics: { value: string; label: string }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface ExecutiveProfile {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
}

export interface OpenPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote' | 'Internship';
  description: string;
  requirements: string[];
  benefits: string[];
}

export interface NewsArticle {
  id: string;
  title: string;
  type: 'Press Release' | 'Announcement' | 'Article' | 'Event';
  category: string;
  date: string;
  excerpt: string;
  content: string;
  readTime: string;
  headerImage: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant' | 'system';
  text: string;
  timestamp: string;
}

export interface InquiryPayload {
  name: string;
  email: string;
  company: string;
  category: 'General' | 'Production' | 'Technology' | 'Publishing' | 'Careers' | 'Investors';
  text: string;
  budget?: string;
  attachmentName?: string;
}
