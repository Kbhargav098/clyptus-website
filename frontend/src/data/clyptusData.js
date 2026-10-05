export const CLYPTUS_BRAND = {
  name: "Clyptus",
  tagline: "Next-Gen Enterprise Solutions & Talent Platform",
  established: 2014,
  headquarters: "Hyderabad, India | Global Client Ops",
  logoUrl: "http://clyptus.com/wp-content/uploads/2025/07/PNG-1024x648-2.png",
  logoAlt: "http://clyptus.com/wp-content/uploads/2025/07/cropped-cropped-LOGO-CLYPTUS-e1712751423156.png"
};

export const SERVICES = [
  {
    id: "sap",
    title: "SAP",
    subtitle: "Enterprise ERP & Cloud Transformation",
    iconName: "Layers",
    color: "from-cyan-500 via-blue-600 to-indigo-600",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    accentGlow: "rgba(6, 182, 212, 0.4)",
    themeGradient: "gradient-text-sap",
    heroHeading: "Empower Your Business With Intelligent SAP Solutions",
    heroSubheading: "End-to-end SAP S/4HANA implementations, SAP BRIM subscription management, SuccessFactors HR cloud, and custom ABAP/BTP development for global enterprises.",
    description: "Clyptus delivers deep SAP consulting, migration, audit, and BRIM monetization solutions that convert complex enterprise workflows into lean operational advantages.",
    capabilities: [
      "SAP S/4HANA Implementation & Migration",
      "SAP BRIM (Billing & Revenue Innovation Management)",
      "SAP SuccessFactors & HCM Digitization",
      "SAP BTP (Business Technology Platform) & ABAP",
      "SAP System Audit, Loopholes & Optimization",
      "24/7 Managed SAP Support Services"
    ],
    stats: [
      { value: "100%", label: "SAP Migration Success" },
      { value: "45%", label: "Faster Deployment Cycles" },
      { value: "$1.4B+", label: "Billing Processed via BRIM" },
      { value: "150+", label: "SAP Consultants Deployed" }
    ]
  },
  {
    id: "recruitment",
    title: "IT Recruitment",
    subtitle: "Strategic Tech Talent & RPO Solutions",
    iconName: "Users",
    color: "from-emerald-400 via-teal-500 to-green-600",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    accentGlow: "rgba(16, 185, 129, 0.4)",
    themeGradient: "gradient-text-recruitment",
    heroHeading: "Scale High-Performing Tech Teams with Speed & Precision",
    heroSubheading: "Specialized IT talent acquisition, executive tech search, dedicated SAP resource sourcing, and AI-assisted Applicant Tracking System (ATS) platform capabilities.",
    description: "Accelerate your hiring roadmap with Clyptus IT Recruitment. We connect enterprise clients with pre-vetted SAP architects, senior engineers, cloud specialists, and executive leaders.",
    capabilities: [
      "Specialized SAP & Enterprise Talent Sourcing",
      "Full-Lifecycle RPO (Recruiting Process Outsourcing)",
      "Executive Search for Tech Leadership",
      "Clyptus Proprietary AI-Powered ATS Integration",
      "On-Demand Contract & Permanent IT Staffing",
      "Global Offshoring & Staff Augmentation"
    ],
    stats: [
      { value: "< 14 Days", label: "Average Time-to-Hire" },
      { value: "98.2%", label: "90-Day Retention Guarantee" },
      { value: "1,200+", label: "Tech Roles Placed Globally" },
      { value: "40%", label: "Cost-per-Hire Reduction" }
    ]
  },
  {
    id: "ai",
    title: "AI",
    subtitle: "Agentic Automation & Enterprise Intelligence",
    iconName: "Cpu",
    color: "from-purple-500 via-violet-600 to-fuchsia-600",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    accentGlow: "rgba(168, 85, 247, 0.45)",
    themeGradient: "gradient-text-ai",
    heroHeading: "Transform Business Operations with Agentic AI & Analytics",
    heroSubheading: "Deploy generative AI assistants, predictive analytics engines, automated document intelligence, and customized machine learning workflows into existing enterprise systems.",
    description: "Clyptus builds custom AI architectures that streamline decision-making, automate repetitive enterprise tasks, predict market trends, and supercharge employee productivity.",
    capabilities: [
      "Generative AI & Private Enterprise RAG LLMs",
      "Predictive Analytics & Forecasting Engines",
      "Intelligent Document Processing (OCR & Metadata)",
      "Automated Duplicate Candidate & Profile Matching",
      "Process Automation & Autonomous AI Agents",
      "Computer Vision & Quality Assurance AI"
    ],
    stats: [
      { value: "99.4%", label: "AI Extraction Accuracy" },
      { value: "5.8x", label: "Operational Speedup" },
      { value: "2.4M+", label: "Documents Processed Monthly" },
      { value: "85%", label: "Reduction in Manual Workflow" }
    ]
  }
];

export const PROJECTS = [
  // SAP Projects
  {
    id: "sap-proj-1",
    serviceId: "sap",
    title: "Global Telecom SAP BRIM Monetization Platform",
    client: "TeleCom Global Corp",
    industry: "Telecommunications & Digital Services",
    summary: "Complete architecture and deployment of SAP BRIM for automated high-volume multi-tier subscription billing and revenue recognition.",
    metric: "$1.4B Managed Billing Volume",
    techStack: ["SAP BRIM", "SAP S/4HANA", "SAP Convergent Charging", "SAP Fiori"],
    details: "Implemented end-to-end SAP BRIM solution handling over 12 million real-time customer micro-transactions per day. Automated subscription lifecycle management, usage rating, and financial reconciliation with 100% compliance across 14 geographic tax jurisdictions.",
    results: [
      "Reduced monthly billing cycle execution from 7 days to 4 hours",
      "Zero billing leakage across complex multi-partner bundle plans",
      "Automated revenue recognition under IFRS 15 compliance standards"
    ]
  },
  {
    id: "sap-proj-2",
    serviceId: "sap",
    title: "Multi-Plant S/4HANA Manufacturing Transformation",
    client: "Precision Tech Manufacturing",
    industry: "Automotive & Heavy Industry",
    summary: "Zero-downtime migration from legacy ERP to SAP S/4HANA Cloud with real-time IoT inventory tracking and predictive maintenance.",
    metric: "8,500 Users Migrated",
    techStack: ["SAP S/4HANA Cloud", "SAP BTP", "IoT Edge Integration", "ABAP on HANA"],
    details: "Migrated 8 global manufacturing plants seamlessly over a single weekend. Unified supply chain planning, procurement, quality management, and plant maintenance into a single real-time S/4HANA core.",
    results: [
      "32% reduction in raw material holding costs",
      "Real-time visibility across 14,000 SKU inventory items",
      "100% legacy data audit cleanup and migration accuracy"
    ]
  },
  {
    id: "sap-proj-3",
    serviceId: "sap",
    title: "Pharmaceutical SAP SuccessFactors HR Digitization",
    client: "BioVita Pharma Solutions",
    industry: "Healthcare & Pharmaceuticals",
    summary: "Cloud HR transformation unifying employee lifecycle, talent management, and global payroll compliance.",
    metric: "18,000 Employees Onboarded",
    techStack: ["SAP SuccessFactors", "Employee Central", "Performance & Goals", "SAP BTP"],
    details: "Streamlined global human experience management across 22 countries. Unified job architectures, automated compliance reporting for FDA/EMA audits, and digitized performance reviews.",
    results: [
      "Onboarding duration reduced from 14 days to 48 hours",
      "Automated HR compliance tracking across all global subsidiaries",
      "94% employee portal adoption within 30 days"
    ]
  },

  // IT Recruitment Projects
  {
    id: "rec-proj-1",
    serviceId: "recruitment",
    title: "FinTech Scale-Up Engineering Team Expansion",
    client: "PayVelocity Systems",
    industry: "FinTech & Digital Payments",
    summary: "Accelerated recruitment drive placing 65 senior full-stack, cloud, and security engineers in under 45 days.",
    metric: "65 Senior Hires Placed",
    techStack: ["React", "Node.js", "Kubernetes", "AWS Security", "Go"],
    details: "Clyptus acted as exclusive RPO partner to scale a Series B FinTech startup's core platform team. Deployed custom technical vetting rubrics and automated candidate matching via Clyptus ATS.",
    results: [
      "Average time-to-hire reduced from 52 days to 12 days",
      "100% candidate retention past the 6-month milestone",
      "Saved 350+ hours of senior engineering interview time"
    ]
  },
  {
    id: "rec-proj-2",
    serviceId: "recruitment",
    title: "SAP Center of Excellence Staffing Initiative",
    client: "Global Energy Alliance",
    industry: "Energy & Utilities",
    summary: "Dedicated sourcing for niche SAP ABAP, S/4HANA, and BRIM solution architects for enterprise ERP overhaul.",
    metric: "42 Certified SAP Experts",
    techStack: ["SAP S/4HANA", "SAP ABAP", "SAP BRIM", "SAP Fiori", "Basis"],
    details: "Built a complete SAP Competency Center from scratch for an energy giant transitioning to S/4HANA Cloud. Sourced hard-to-find senior SAP specialists with sector-specific experience.",
    results: [
      "Filled 100% of critical SAP architect leadership vacancies",
      "35% lower talent acquisition cost vs traditional headhunters",
      "Zero disruption to ERP project migration milestones"
    ]
  },
  {
    id: "rec-proj-3",
    serviceId: "recruitment",
    title: "Global RPO & Dedicated Talent Pipeline",
    client: "CloudSphere Software Solutions",
    industry: "SaaS & Cloud Engineering",
    summary: "Multi-year RPO contract managing end-to-end recruitment for software development, DevOps, and QA roles.",
    metric: "250+ Annual Placements",
    techStack: ["Full Stack", "DevOps", "AI/ML", "QA Automation", "Clyptus ATS"],
    details: "Provided turnkey hiring infrastructure, employer branding, technical interviewing, and offer management across North America and APAC delivery centers.",
    results: [
      "Achieved 98.4% offer acceptance rate",
      "Streamlined candidate pipeline with Clyptus AI ATS deduplication",
      "Delivered predictable monthly hiring SLA benchmarks"
    ]
  },

  // AI Projects
  {
    id: "ai-proj-1",
    serviceId: "ai",
    title: "Intelligent Document Processing & Invoice AI",
    client: "Apex Financial Group",
    industry: "Banking & Financial Services",
    summary: "Automated extraction and validation of unstructured financial documents, invoices, and legal contracts.",
    metric: "2.4M Documents / Mo",
    techStack: ["Python", "PyTorch", "LLM OCR", "FastAPI", "Vector Database"],
    details: "Developed a hybrid OCR + Large Language Model pipeline that extracts line-item financial data, performs automated anomaly detection, and integrates with SAP & Oracle ERP systems.",
    results: [
      "99.4% field extraction accuracy across 18 languages",
      "Processing time per document reduced from 12 minutes to 1.8 seconds",
      "$2.1M annual operational cost savings in back-office processing"
    ]
  },
  {
    id: "ai-proj-2",
    serviceId: "ai",
    title: "Predictive Supply Chain Demand & Inventory Engine",
    client: "OmniLogistics Global",
    industry: "Logistics & Supply Chain",
    summary: "Machine learning engine predicting SKU demand spikes and optimizing warehouse stocking across 500 distribution hubs.",
    metric: "94.2% Prediction Accuracy",
    techStack: ["TensorFlow", "Time-Series Transformer", "Python", "Cloud Pipeline"],
    details: "Built custom neural network models analyzing historical sales, seasonal trends, macroeconomic indicators, and real-time weather data to forecast localized inventory needs.",
    results: [
      "Reduced stockouts by 48% across peak retail seasons",
      "Decreased safety stock inventory requirements by $14M",
      "Automated automated re-order triggers into enterprise ERP"
    ]
  },
  {
    id: "ai-proj-3",
    serviceId: "ai",
    title: "Enterprise Private RAG Copilot & Knowledge Assistant",
    client: "OmniCorp International",
    industry: "Global Enterprise",
    summary: "Secure on-premise Large Language Model copilot trained on internal standard operating procedures, policies, and codebases.",
    metric: "12,000 Active Internal Users",
    techStack: ["LangChain", "Vector Index", "Private Llama 3", "React UI"],
    details: "Designed a permission-aware enterprise RAG platform allowing employees to query internal technical documentation, HR policies, and SAP execution guides with instant source citations.",
    results: [
      "Reduced internal IT/HR support ticket volumes by 62%",
      "Engineers saved an average of 4.5 hours per week on technical documentation search",
      "100% data privacy compliance with zero external API data exposure"
    ]
  }
];

export const INDUSTRIES = [
  // SAP Industries
  {
    serviceId: "sap",
    title: "Manufacturing & Heavy Industry",
    icon: "Factory",
    tag: "SAP S/4HANA & IoT",
    description: "Streamline plant maintenance, production scheduling, and bill-of-materials with real-time S/4HANA visibility.",
    highlights: ["Shop-floor IoT Integration", "Material Requirement Planning (MRP)", "Quality Management"]
  },
  {
    serviceId: "sap",
    title: "Retail & E-Commerce",
    icon: "ShoppingBag",
    tag: "SAP Customer Experience",
    description: "Unified omnichannel inventory, subscription billing via SAP BRIM, and dynamic pricing models.",
    highlights: ["High-Volume Micro-Transactions", "Omnichannel Fulfillment", "Customer Lifetime Value Analytics"]
  },
  {
    serviceId: "sap",
    title: "Telecommunications",
    icon: "Radio",
    tag: "SAP BRIM & Billing",
    description: "Automate complex revenue sharing, tier pricing, and 5G service billing models.",
    highlights: ["Usage-Based Monetization", "Partner Settlement Automation", "IFRS 15 Compliance"]
  },
  {
    serviceId: "sap",
    title: "Healthcare & Life Sciences",
    icon: "HeartPulse",
    tag: "SAP Compliance & HCM",
    description: "Strict regulatory tracking, clinical inventory management, and HR digitization.",
    highlights: ["FDA/EMA Audit Compliance", "SuccessFactors HCM Integration", "Batch Traceability"]
  },

  // IT Recruitment Industries
  {
    serviceId: "recruitment",
    title: "Software & SaaS Enterprises",
    icon: "Code2",
    tag: "Product & Engineering",
    description: "Source top-tier principal architects, frontend/backend leads, and DevOps engineers.",
    highlights: ["Pre-Vetted Tech Assessment", "Fast 12-Day Placement SLA", "Senior Leadership Search"]
  },
  {
    serviceId: "recruitment",
    title: "FinTech & Digital Banking",
    icon: "Landmark",
    tag: "Security & Cloud Sourcing",
    description: "Hire cyber-security specialists, blockchain engineers, and compliance leaders.",
    highlights: ["Background Vetted Sourcing", "High-Retention Guarantee", "Contract & Direct Hire"]
  },
  {
    serviceId: "recruitment",
    title: "SAP & Enterprise ERP Centers",
    icon: "Building2",
    tag: "ERP Specialist Talent",
    description: "Niche recruitment for certified SAP ABAP, S/4HANA, SuccessFactors, and Basis consultants.",
    highlights: ["Domain-Specific Evaluation", "RPO Execution Teams", "Global Offshoring Delivery"]
  },
  {
    serviceId: "recruitment",
    title: "Deep Tech & AI Labs",
    icon: "Sparkles",
    tag: "AI & ML Talent Pool",
    description: "Locate scarce Machine Learning researchers, Data Engineers, and MLOps architects.",
    highlights: ["AI Talent Pipeline", "Academic & Industry Network", "Seamless Technical Screening"]
  },

  // AI Industries
  {
    serviceId: "ai",
    title: "Banking & Fraud Prevention",
    icon: "ShieldAlert",
    tag: "Risk & ML Fraud Detection",
    description: "Detect anomalous financial transactions and automated loan application risk scoring.",
    highlights: ["Real-Time Anomaly Detection", "Sub-100ms Inference Speed", "Automated Compliance Audit"]
  },
  {
    serviceId: "ai",
    title: "Logistics & Supply Chain",
    icon: "Truck",
    tag: "Predictive Routing AI",
    description: "Optimize fleet routes, dynamic freight pricing, and predictive warehouse stocking.",
    highlights: ["Predictive Demand Models", "Automated Dispatching", "Fuel & Route Optimization"]
  },
  {
    serviceId: "ai",
    title: "Smart Manufacturing",
    icon: "Bot",
    tag: "Computer Vision QA",
    description: "AI camera systems inspecting manufacturing assembly lines for surface defects in real-time.",
    highlights: ["Automated Defect Detection", "99.9% QA Precision", "Reduced Manual Inspection"]
  },
  {
    serviceId: "ai",
    title: "Enterprise Document Operations",
    icon: "FileText",
    tag: "Intelligent OCR & LLM",
    description: "Transform unstructured PDFs, receipts, and contracts into structured ERP database records.",
    highlights: ["Multi-Lingual Extraction", "Zero Human Intervention", "Direct SAP / Oracle Sync"]
  }
];

export const SOLUTIONS_WORKFLOW = [
  {
    serviceId: "sap",
    steps: [
      { step: "01", title: "ERP Health Audit & Readiness", desc: "Evaluate existing ERP code, identify implementation loopholes, and map system dependencies." },
      { step: "02", title: "S/4HANA & BTP Architecture Blueprint", desc: "Design clean-core architecture utilizing SAP Business Technology Platform for modern extension." },
      { step: "03", title: "Phased Migration & Data Cleanup", desc: "Execute zero-downtime database migration and automated master data validation." },
      { step: "04", title: "Continuous Managed Support & Auditing", desc: "Provide 24/7 dedicated Basis, ABAP, and functional optimization SLAs." }
    ]
  },
  {
    serviceId: "recruitment",
    steps: [
      { step: "01", title: "Skill Matrix & Need Mapping", desc: "Align tech requirements, culture fit, budget constraints, and project delivery timelines." },
      { step: "02", title: "Clyptus AI ATS Sourcing", desc: "Search proprietary talent pool with automated candidate duplication detection." },
      { step: "03", title: "Rigorous Technical Vetting", desc: "Perform deep architectural interviews and hands-on coding/ERP assessment." },
      { step: "04", title: "Seamless Onboarding & Guarantee", desc: "Ensure smooth team integration backed by Clyptus 90-day retention guarantee." }
    ]
  },
  {
    serviceId: "ai",
    steps: [
      { step: "01", title: "Data Pipeline & Use-Case Audit", desc: "Analyze enterprise data readiness, security boundaries, and ROI target metrics." },
      { step: "02", title: "Custom Model Fine-Tuning & RAG", desc: "Train domain-specific machine learning models or ground private enterprise LLMs." },
      { step: "03", title: "ERP & API Systems Integration", desc: "Connect AI outputs directly into SAP, Oracle, CRM, or web workflow engines." },
      { step: "04", title: "MLOps Monitoring & Model Guardrails", desc: "Ensure continuous accuracy, drift prevention, and enterprise security compliance." }
    ]
  }
];

export const BLOGS = [
  // SAP Articles
  {
    id: "blog-sap-1",
    serviceId: "sap",
    title: "Navigating the Migration to SAP S/4HANA: Clean Core Best Practices",
    category: "SAP Enterprise Architecture",
    date: "October 2026",
    readTime: "6 min read",
    author: "Senior SAP Architect Team",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    excerpt: "Discover how to modernize your legacy ECC 6.0 setup while preserving custom business logic through SAP Business Technology Platform (BTP).",
    content: "Transitioning to SAP S/4HANA is no longer just a technical upgrade—it's a fundamental business strategy. In this article, our enterprise architects explore clean-core strategies, automated code remediation techniques, and how SAP BRIM unlocks recurring revenue streams for modern global enterprises."
  },
  {
    id: "blog-sap-2",
    serviceId: "sap",
    title: "SAP BRIM Explained: How Subscription Billing Drives 300% ARR Growth",
    category: "Monetization & Billing",
    date: "September 2026",
    readTime: "8 min read",
    author: "SAP BRIM Practice Lead",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    excerpt: "Learn how global leaders configure SAP Convergent Charging and Invoicing to monetize digital services and usage-based products.",
    content: "Monetization models are evolving from one-off sales to dynamic usage-based subscriptions. SAP BRIM provides the robust engine required to process millions of micro-transactions, reconcile revenue split among ecosystem partners, and maintain audit readiness."
  },

  // IT Recruitment Articles
  {
    id: "blog-rec-1",
    serviceId: "recruitment",
    title: "The 2026 Tech Hiring Blueprint: How AI ATS Platforms Eliminate Sourcing Bottlenecks",
    category: "Talent Acquisition Strategy",
    date: "October 2026",
    readTime: "5 min read",
    author: "VP of Global Recruitment",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
    excerpt: "Why traditional keyword search is failing engineering leaders, and how intelligent candidate deduplication speeds up time-to-hire by 40%.",
    content: "Finding qualified tech talent requires moving beyond passive job post submissions. Discover how Clyptus ATS leverages intelligent candidate parsing, skill verification algorithms, and dedicated RPO pipelines to deliver hire-ready candidates in days instead of months."
  },
  {
    id: "blog-rec-2",
    serviceId: "recruitment",
    title: "Sourcing Niche SAP Talent in a Competitive Enterprise Market",
    category: "ERP Staffing Insights",
    date: "September 2026",
    readTime: "7 min read",
    author: "SAP Talent Director",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    excerpt: "Key strategies for identifying, evaluating, and retaining specialized S/4HANA, SuccessFactors, and ABAP experts for mission-critical projects.",
    content: "The global shortage of certified SAP architects poses a direct risk to enterprise transformation timelines. Learn how strategic talent pooling, competitive compensation benchmarking, and global offshoring models solve critical staffing gaps."
  },

  // AI Articles
  {
    id: "blog-ai-1",
    serviceId: "ai",
    title: "Agentic Workflows in Enterprise Software: Beyond Basic Chatbots",
    category: "Artificial Intelligence",
    date: "October 2026",
    readTime: "6 min read",
    author: "Head of AI & Machine Learning",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    excerpt: "How autonomous AI agents execute complex multi-step ERP tasks, process invoices, and audit data without human intervention.",
    content: "The real value of generative AI lies in agentic execution—where AI systems don't just answer questions, but independently initiate transactions, query vector databases, validate inputs, and post updates to SAP and Oracle systems safely."
  },
  {
    id: "blog-ai-2",
    serviceId: "ai",
    title: "Building Private RAG LLMs for Enterprise Knowledge Management",
    category: "GenAI & Security",
    date: "August 2026",
    readTime: "9 min read",
    author: "AI Solutions Architect",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    excerpt: "A technical guide to implementing Retrieval-Augmented Generation with strict corporate data privacy and zero data leakage.",
    content: "Enterprise organizations hold massive repositories of internal SOPs, technical manuals, and audit documents. Learn how combining private open-weights models with vector indexing allows secure context-aware AI search across your entire company."
  }
];

export const TESTIMONIALS = [
  {
    quote: "Clyptus transformed our SAP landscape seamlessly. Their deep mastery of SAP BRIM allowed us to roll out our digital subscription services across 14 global markets in record time.",
    name: "Marcus Vance",
    role: "Chief Information Officer",
    company: "TeleCom Global Corp",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    service: "SAP"
  },
  {
    quote: "When we needed to scale our core fintech platform team from 20 to 80 engineers, Clyptus delivered candidates within 10 days. Every single hire was technically vetted and fit our culture perfectly.",
    name: "Elena Rostova",
    role: "VP of Engineering",
    company: "PayVelocity Systems",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    service: "IT Recruitment"
  },
  {
    quote: "The Intelligent Document Processing AI engine built by Clyptus automated 99.4% of our invoice data extraction into SAP. We saved thousands of labor hours in the first quarter alone.",
    name: "David Chen",
    role: "Head of Digital Operations",
    company: "Apex Financial Group",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    service: "AI"
  }
];

export const WHY_CLYPTUS = [
  {
    icon: "ShieldCheck",
    title: "Proven Enterprise Expertise",
    desc: "Over 12 years delivering robust SAP, tech talent, and AI automation for Fortune 500 & fast-growing enterprises."
  },
  {
    icon: "Zap",
    title: "Dynamic AI-Augmented Delivery",
    desc: "Proprietary AI tools, ATS matching, and automated document parsing accelerate project execution velocity."
  },
  {
    icon: "Globe2",
    title: "Global Operational Scale",
    desc: "Headquartered in Hyderabad with dedicated delivery centers servicing clients across North America, Europe, and APAC."
  },
  {
    icon: "Target",
    title: "Clean Core Architecture",
    desc: "Future-proof enterprise solutions built on strict clean-core standards to minimize upgrade friction and technical debt."
  }
];
