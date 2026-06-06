/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  ServiceItem,
  ProductionItem,
  ProjectItem,
  CaseStudyItem,
  TimelineEvent,
  ExecutiveProfile,
  OpenPosition,
  NewsArticle
} from './types';

export const COMP_INFO = {
  name: "Sikeisen Group Pvt. Ltd.",
  tagline: "Turning Imagination Into Reality",
  shortDesc: "Sikeisen Group is a modern media, entertainment, technology, creative production, and digital innovation conglomerate. From independent cinematic storytelling to advanced AI models and rapid prototyping, we craft the experiences that shape tomorrow.",
  foundedYear: "2016",
  headquarters: "Bengaluru, India",
  email: "executive@sikeisen.com",
  phone: "+91 80 4321 0987",
  whatsapp: "+91 80 4321 0987",
  address: "Sikeisen HQ, Elite Creative Parks, Sector 7, Whitefield, Bengaluru, KA - 560066"
};

export const SERVICES: ServiceItem[] = [
  // Media & Entertainment
  {
    id: "film-production",
    title: "Film Production",
    category: "media",
    description: "End-to-end premium feature films, immersive short films, and high-impact series production with state-of-the-art camera systems and deep creative collaboration.",
    benefits: [
      "Access to multi-award-winning directing and cinematography teams",
      "Sought-after physical production sets and international location scouting",
      "Exclusive distribution pipeline representation"
    ],
    process: [
      "Pre-Production & Script doctoring (Screenwriting and storyboards)",
      "Principal Photography with elite Cine units",
      "Post-Production supervision (Offline edit, color correction, sound design)"
    ],
    deliverables: [
      "DCI-compliant Cinema Digital Master (4K/8K SDR/HDR)",
      "Comprehensive promotional trailers and EPK (Electronic Press Kit)",
      "Multi-format spatial audio stems"
    ],
    faq: [
      {
        question: "Do you co-produce or accept fully-funded external script commissions?",
        answer: "Yes, we accept co-production pitches and provide complete turnkey script-to-screen production services for established brands and global distributors."
      }
    ]
  },
  {
    id: "commercial-production",
    title: "Commercial & Video Production",
    category: "media",
    description: "High-concept promotional advertisements, brand anthems, documentary showcases, and cinematic music videos designed to arrest viewer attention.",
    benefits: [
      "Guaranteed high visual conversion rates",
      "Fast turnaround times without quality degradation",
      "Fully customized concept building from scratch"
    ],
    process: [
      "Brand strategy profiling & script ideation",
      "High-pace dynamic shooting schedules",
      "Impactful VFX overlays and music licensing"
    ],
    deliverables: [
      "Social-media native 9:16 and 16:9 4K cuts",
      "Ad-variant raw footage archives",
      "Interactive social-ready assets"
    ],
    faq: [
      {
        question: "What is your typical turnaround time for global commercial projects?",
        answer: "A standard highly specialized high-end brand commercial runs through a 4 to 6-week pipeline from concept sign-off."
      }
    ]
  },
  // Creative Services
  {
    id: "creative-design",
    title: "Graphic Design & Branding",
    category: "creative",
    description: "Developing modern elite visual systems, corporate branding guidelines, vector publishing packages, and motion graphics that stand out globally.",
    benefits: [
      "Cohesive brand expression over all print, broadcast, and interactive planes",
      "Vector-perfect designs matching premium minimal design-led philosophies",
      "Optimized assets for digital platforms"
    ],
    process: [
      "Context research and typographic pairing development",
      "Iterative design cycles and vector guidelines mapping",
      "High-framerate corporate animation matching"
    ],
    deliverables: [
      "Interactive Brand Guidelines eBook",
      "Scalable Vector Assets Pack (SVG/PDF)",
      "Corporate presentation templates"
    ],
    faq: [
      {
        question: "Do you design physical marketing assets or do you stick to digital media?",
        answer: "We support both. We craft high-quality physical mockups, vehicle wraps, and premium merchandise guidelines that work hand-in-hand with our digital identity models."
      }
    ]
  },
  // Technology Services
  {
    id: "tech-solutions",
    title: "Enterprise Software & AI Solutions",
    category: "tech",
    description: "Architecting custom scalable web solutions, mobile applications, interactive platforms, and embedding tailored AI large language models with deep analytics integrations.",
    benefits: [
      "Military-grade security protocols (WAF, rate-limiting, custom token isolation)",
      "High performance indexing resulting in ultra-fast load speed",
      "Automated lead sorting and custom AI strategists"
    ],
    process: [
      "Discovery phase & architectural scoping (Drizzle ORM / Node.js)",
      "Agile development sprints with secure test suites",
      "Cloud native deployments using container infrastructures"
    ],
    deliverables: [
      "Production-ready source code repository with CI/CD hooks",
      "Interactive analytics dashboard user rights mapping",
      "API systems documentation"
    ],
    faq: [
      {
        question: "Can Sikeisen build hybrid apps that leverage existing datasets?",
        answer: "Absolutely. We specialize in building secure micro-services that bridge existing database warehouses with modern client-facing applications."
      }
    ]
  },
  // Digital Publishing
  {
    id: "publishing-solutions",
    title: "Digital Publishing & Content Distribution",
    category: "publishing",
    description: "End-to-end publishing solutions, epub layout design, international ISBN registry, and premium content creation for modern global audiences.",
    benefits: [
      "Global release coverage across major bookstores and indexers",
      "Impeccable editorial flow supervision",
      "Beautiful typography matching the world's standard"
    ],
    process: [
      "Editorial critique & comprehensive proofreading",
      "Ebook epub/fixed-layout compilation",
      "Distribution setup (Kindle, Apple, Kobo, and print-on-demand networks)"
    ],
    deliverables: [
      "Standard and Fixed-Layout EPUB files",
      "LSI-compliant Print-Ready PDF archives",
      "Full author platform landing sites"
    ],
    faq: [
      {
        question: "Are print distribution services integrated with Sikeisen solutions?",
        answer: "Yes, we handle worldwide on-demand printing grids so physical hardbacks reach clients without high inventory overheads."
      }
    ]
  },
  // 3D Printing
  {
    id: "three-d-printing",
    title: "3D Printing & Rapid Prototyping",
    category: "manufacturing",
    description: "Transforming ideas into high-precision polymer models, industrial-grade engineering composites, custom set miniatures, or custom hardware cases.",
    benefits: [
      "Sub-micron layer resolution using professional stereolithography (SLA) & industrial FDM",
      "Vast material catalog from translucent resin to extreme-temp nylon composites",
      "On-demand small batch runs avoiding expensive injection-molding tooling"
    ],
    process: [
      "CAD check (thickness optimization & topology verification)",
      "High-precision multi-system array slicing",
      "UV-cure post-processing, supports cleanup, and micro-sanding finish"
    ],
    deliverables: [
      "Finished production grade prototypes",
      "Complete optimized STL/STEP modeling records",
      "Manufacturing stress analysis sheet"
    ],
    faq: [
      {
        question: "What is the maximum single-build size Sikeisen supports?",
        answer: "We support single-part designs up to 450x450x500mm, with infinite assembly capability through interlocking custom joints."
      }
    ]
  }
];

export const PRODUCTIONS: ProductionItem[] = [
  {
    id: "p1",
    title: "Shadows of the Monolith",
    year: "2026",
    type: "Feature Film",
    genre: "Sci-Fi Cyber-Thriller",
    status: "Post-Production",
    director: "Yukinari Sase",
    cast: ["Tatsuya Endo", "Mai Kanamoto", "Kenjiro Sato"],
    synopsis: "In a neon-drenched Bengaluru, an ethical hacker discovers that the central artificial intelligence managing the smart corporate grids has begun to manifest human remorse.",
    poster: "https://images.unsplash.com/photo-1542204172-e70528091b50?auto=format&fit=crop&q=80&w=800",
    awards: ["Best Screenplay - Kyoto Indie Film Festival", "VFX Master Award (Selected Nominee)"],
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" // Standard video embed
  },
  {
    id: "p2",
    title: "Echoes in the Valley",
    year: "2025",
    type: "Documentary",
    genre: "Environmental / Tech",
    status: "Released",
    director: "Aanya Sharma",
    cast: ["Dr. Evelyn Vance", "Santosh Hegde"],
    synopsis: "An in-depth look at the visual and environmental contrast between rapid smart-city expansions and ancient agrarian ecosystems.",
    poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800",
    awards: ["Winner: Best Documentary - Earth Cinema Awards", "Official Selection: Berlin Docs Fest"],
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "p3",
    title: "The Iron Blueprint",
    year: "2027",
    type: "Series",
    genre: "Industrial Espionage Drama",
    status: "In Development",
    director: "Marcus Lin",
    cast: ["Sarah Jenkins", "Dev Patel", "Gong Yoo"],
    synopsis: "When a multi-national engineering startup uses hyper-advanced 3D printed technology to disrupt energy monopolies, they trigger a covert global battle.",
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800",
    behindTheScenes: ["Conceptual rendering of titanium additive frameworks", "Interviews with advanced material physicists"]
  },
  {
    id: "p4",
    title: "Sikeisen Showreel 2026",
    year: "2026",
    type: "Commercial",
    genre: "Cinematic Reel",
    status: "Released",
    director: "Sikeisen Creative Directors",
    cast: ["Collective Talents"],
    synopsis: "A high-octane 4K compiled representation of our film capabilities, VFX layers, corporate designs, and 3D industrial achievements.",
    poster: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800",
    trailerUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

export const PORTFOLIO: ProjectItem[] = [
  {
    id: "project-1",
    title: "A24-Style Editorial Photography",
    category: "Photography",
    client: "Moda Tokyo",
    year: "2025",
    description: "An evocative cinematic advertising lookbook shot purely on anamorphic film, designed with striking neon tones, dramatic shadows, and soft ambient grain.",
    imageUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800",
    outputs: ["High-res print lookbook", "Digital editorial banners", "Colorgrading Lut presets"]
  },
  {
    id: "project-2",
    title: "Aether AI Custom Chat Engine",
    category: "AI Projects",
    client: "Securisk Global",
    year: "2026",
    description: "Built a customized server-side, fine-tuned deep learning customer support network that acts with standard context capabilities, routing enterprise client calls seamlessly.",
    imageUrl: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=800",
    outputs: ["React-native admin console", "Express API proxy layers", "Vector database embeddings framework"]
  },
  {
    id: "project-3",
    title: "Luxury Titanium Watch Case",
    category: "3D Printing Projects",
    client: "Chronos Atelier",
    year: "2025",
    description: "Designed and additive-printed complex watch prototype casings in carbon fiber infused nylon with high geometric precision to verify dynamic fits in mechanical assemblies.",
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800",
    outputs: ["CAD SolidWorks assembly drafts", "High-temp micro-sanded prototypes", "Vibration tolerance report"],
    beforeImage: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800", // CAD rendering
    afterImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800" // Finished print
  },
  {
    id: "project-4",
    title: "Cyber-Neon Brand Identity",
    category: "Design",
    client: "Zenith Esports",
    year: "2026",
    description: "A comprehensive brand identity overhaul incorporating bespoke dynamic logos, animated streaming frames, physical jerseys, and complete vectors.",
    imageUrl: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800",
    outputs: ["Interactive vectors archive", "Web animations in CSS/Framer-motion", "Merchandising catalog guidelines"]
  },
  {
    id: "project-5",
    title: "The Silent Forest (Short Film)",
    category: "Films",
    client: "CineVerse Selects",
    year: "2024",
    description: "An acclaimed slow-paced atmospheric horror-mystery about a remote radio ranger who receives strange, melodic broadcasts from the deep mountain trees.",
    imageUrl: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&q=80&w=800",
    outputs: ["Short Film Master (4K DCI)", "Original Soundtrack Album", "Short Film Festival Brochure"]
  }
];

export const TIMELINE: TimelineEvent[] = [
  {
    id: "t1",
    year: "2016",
    title: "The Spark of Creation",
    description: "Founded as Sikeisen Creative Collective in Bengaluru, delivering premium advertising graphics and local documentary production."
  },
  {
    id: "t2",
    year: "2019",
    title: "Sikeisen Pictures Debut",
    description: "Incorporated officially as Sikeisen Group Pvt. Ltd. Established our dedicated premium film division, acquiring our first multi-unit high-end camera rigs."
  },
  {
    id: "t3",
    year: "2022",
    title: "Dual Core: Tech & Prototyping",
    description: "Opened our advanced Software Labs and additive 3D Printing factory. Launched smart web portals and customized CAD-to-manufacturing support systems."
  },
  {
    id: "t4",
    year: "2025",
    title: "AI Ecosystem Scaling",
    description: "Fully embedded server-side Gemini API engines into clients' platforms, automating complex workflows, publishing grids, and predictive metrics."
  },
  {
    id: "t5",
    year: "2027 & Beyond",
    title: "Infinite Convergence Team",
    description: "Scaling to global studios in Tokyo, London, and San Francisco. Merging cinematic VR storytelling with real-time generative physical 3D outputs."
  }
];

export const TEAM: ExecutiveProfile[] = [
  {
    id: "e1",
    name: "Yukinari Sase",
    role: "Global Chief Creative Officer & Founder",
    bio: "Internationally renowned cinematic director and strategist. Yukinari holds over 15 years of industry tenure spanning features, television, and visual arts, channeling artistic discipline into every corporate venture.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    linkedin: "https://linkedin.com/in/yukinari-sase"
  },
  {
    id: "e2",
    name: "Amara Kulkarni",
    role: "President of Sikeisen Technology Solutions",
    bio: "Distinguished software architect and systems researcher from IISc. Amara worked as senior cloud architect at top silicon labs before spearheading Sikeisen's enterprise software frameworks and neural API arrays.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    linkedin: "https://linkedin.com/in/amara-kulkarni"
  },
  {
    id: "e3",
    name: "Hiroshi Vance",
    role: "Head of Additive Prototyping & Product Design",
    bio: "Pioneer in additive manufacturing models with deep research foundations in polymer composites. Hiroshi oversees our 3D Printing micro-factories, serving automotive and entertainment clients alike.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    linkedin: "https://linkedin.com/in/hiroshi-vance"
  }
];

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: "cs-1",
    title: "Revitalizing the Brand and Digital presence for Chronos Atelier",
    client: "Chronos Atelier",
    sector: "Luxury Retail & Manufacturing",
    problem: "Chronos Atelier was losing market capture to digital-native modular fashion giants, and required a complete re-association with precision craft.",
    strategy: "Create an interconnected web ecosystem that integrates an atmospheric cinematic web catalogue with custom 3D printed model visualization tools.",
    execution: "Our Media division shot a 4K luxury asset commercial, while our Tech division designed an interactive high-contrast responsive customer booking system.",
    results: "We drove massive online inquiry spikes and successfully secured premium demographic target markets within two fiscal quarters.",
    metrics: [
      { value: "+380%", label: "Online Service Inquiries" },
      { value: "4.2M+", label: "Brand Video Impressions" },
      { value: "32%", label: "Conversion Rate Uplift" }
    ],
    testimonial: {
      quote: "Sikeisen Group did not just build us a website; they redefined how our clients perceive our engineering legacy. They turn raw imagination into premium gold standard deliverables.",
      author: "Julius Sterling",
      role: "Global Executive Director, Chronos Atelier"
    }
  },
  {
    id: "cs-2",
    title: "AI-Powered Directives Automation for Shinjuku Logistics",
    client: "Shinjuku Logistics",
    sector: "Supply Chain Solutions",
    problem: "Incurring massive translation and manual support overheads managing supply networks between East Asia and South Asian shipping yards.",
    strategy: "Embed an enterprise-ready secure Gemini 3.5 API chatbot proxy to read, translate, and intelligently categorize warehouse dispatcher complaints instantly.",
    execution: "Constructed an isolated Node server backend running high-availability system configurations, paired with a real-time reactive admin supervisor panel.",
    results: "Virtually eliminated manual complaint sorting wait time while providing automatic dual-translation coverage 24/7.",
    metrics: [
      { value: "0.2s", label: "Average Classification Speed" },
      { value: "-75%", label: "Manual Sorting Overhead" },
      { value: "99.4%", label: "Routing Accuracy Core" }
    ],
    testimonial: {
      quote: "The software Sikeisen Group crafted is exceptionally bulletproof. Their commitment to enterprise security and speed is completely unmatched.",
      author: "Megumi Yoshioka",
      role: "CTO, Shinjuku Shipping Consolidated"
    }
  }
];

export const CAREER_POSITIONS: OpenPosition[] = [
  {
    id: "car-1",
    title: "Senior VFX & Composition Artist",
    department: "Sikeisen Pictures Division",
    location: "Bengaluru, India (Hybrid)",
    type: "Full-time",
    description: "We are seeking a senior visual master with high command of complex node-based composting, particle synthesis, and photorealistic 3D environment merging for upcoming Sci-Fi Feature Films.",
    requirements: [
      "5+ years post-production experience in feature films or AAA television",
      "Expert knowledge of complex visual integration suites (Nuke, Houdini, Unreal Engine)",
      "Strong aesthetic sensibility for lighting, shadows, and high cinematic grain"
    ],
    benefits: [
      "Top-tier industry compensation package with direct film profit-share options",
      "Comprehensive medical cover for self and dependents",
      "Unlimited access to specialized local render-farms and high-end camera reserves"
    ]
  },
  {
    id: "car-2",
    title: "Lead AI Systems Engineer",
    department: "Enterprise Technology Division",
    location: "Bengaluru, India or San Francisco, CA (Remote)",
    type: "Full-time",
    description: "Join Sikeisen Tech to craft custom server-side proxy models, vector storage layers, and safe high-performance micro-services using the latest LLM standards.",
    requirements: [
      "Robust experience in TypeScript, Node.js (Express/Drizzle/SQL environments)",
      "Direct expertise in building secure server-side API endpoints for Google Gemini / generative models",
      "Strong focus on web performance metrics, Core Web Vitals, and security isolation"
    ],
    benefits: [
      "Access to premium hardware stipend ($5,000 yearly credit)",
      "Flexible working schedule and generous remote allowances",
      "Interactive technical conference funding"
    ]
  },
  {
    id: "car-3",
    title: "Creative Production Intern (Summer 2026)",
    department: "Creative Studio Unit",
    location: "Bengaluru, India (On-site)",
    type: "Internship",
    description: "A comprehensive mentorship track designed for emerging filmmakers, designers, or writers eager to get direct hands-on set experience and portfolio building opportunities.",
    requirements: [
      "Excellent communication and a high drive to learn across diverse media formats",
      "Basic understanding of modern digital design suites (Adobe Creative Cloud / Premiere Pro)",
      "A stunning creative portfolio (even if academic or personal scratch projects)"
    ],
    benefits: [
      "Direct executive mentorship under Yukinari Sase representing Sikeisen Pictures",
      "Industry standardized stipend with structured high-credit certification",
      "Direct pathway consideration for junior full-time contracts"
    ]
  }
];

export const ARTICLES: NewsArticle[] = [
  {
    id: "art-1",
    title: "Sikeisen Pictures Unveils 4K Cyber-Thriller 'Shadows of the Monolith'",
    type: "Press Release",
    category: "Media & Film",
    date: "May 12, 2026",
    excerpt: "Sikeisen Group Pvt. Ltd. announces that principal photography has concluded on their highly anticipated cyberpunk cinema venture set to debut at international winter festivals.",
    content: "Bengaluru, KA — Sikeisen Group Pvt. Ltd., the leading contemporary conglomerate of technology and cinematic arts, has officially entered post-production for their upcoming feature film title, 'Shadows of the Monolith'. Directed by Yukinari Sase, the film explore the delicate ethical balances of artificial life in near-future technology hubs of South Asia.\n\nThe film features high anamorphic visual compositions and state-of-the-art VFX elements engineered in-house at our specialized Creative Labs. Anticipated global distribution deals will be confirmed alongside our primary trailer reveal next quarter.",
    readTime: "3 min read",
    headerImage: "https://images.unsplash.com/photo-1542204172-e70528091b50?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "art-2",
    title: "Sikeisen Enterprise Cloud Integrates Advanced Server-Side Gemini API Arrays",
    type: "Announcement",
    category: "Technology",
    date: "April 28, 2026",
    excerpt: "New secure custom server infrastructures empower Sikeisen branding clients with fully integrated AI systems, automatic classifications, and high-performance routing protocols.",
    content: "Sikeisen Technology Solutions has announced the release of our secure, fully containerised Node API proxy system. By isolating custom AI processes and utilizing direct server-side calls with the Google GenAI SDK, we can now provide military-grade security configurations and high throughputs for global client data arrays.\n\nEvery enterprise build from Sikeisen Group is now automatically PWA-ready, SEO-optimized, and backed by a solid server security core to ensure zero client-side API leaks.",
    readTime: "4 min read",
    headerImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "art-3",
    title: "Sikeisen Group Invests in Additive 3D Micro-Factory Hub in Whitefield",
    type: "Press Release",
    category: "Manufacturing",
    date: "March 15, 2026",
    excerpt: "Expanding industrial additive capability to serve medical prototyping, cinematic prop designs, and high-strength custom enclosures on-demand with advanced materials.",
    content: "Sikeisen Group is doubling down on its commitment to physical innovation by establishing an additive printing factory hub in Whitefield, Bengaluru. Driven by director Hiroshi Vance, the facility features continuous carbon-fiber printing systems, stereolithography towers, and post-cure assemblies to provide lightning fast rapid prototyping services global brands can immediately integrate into manufacturing pipelines.",
    readTime: "3 min read",
    headerImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800"
  }
];
