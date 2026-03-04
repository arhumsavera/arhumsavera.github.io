export type Project = {
  slug: string;
  title: string;
  date: string;
  hero: string;
  summary: string;
  featured?: boolean;
  sections: Array<{
    heading: string;
    paragraphs?: string[];
    bullets?: string[];
  }>;
};

export const projects: Project[] = [
  {
    slug: 'consumeraffairs-ai-platform',
    title: 'ConsumerAffairs: AI Platform & Event Infrastructure',
    date: '2025-12-01',
    hero: '/images/projects-bg-img.png',
    summary:
      'Built the AI content platform and Kafka event backbone at ConsumerAffairs — semantic review moderation, real-time lead intelligence, and smart pricing infrastructure serving a high-traffic consumer marketplace.',
    featured: true,
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'ConsumerAffairs matches consumers to service providers at scale — reviews, leads, pricing, all of it moving in real time. The Kafka backbone didn\'t exist when I arrived. Neither did the AI content platform. The lead processing system existed but was held together with scheduling hacks and direct DB queries that would occasionally cascade under load. I spent four years building these systems, running them, and fixing them.',
        ]
      },
      {
        heading: 'AI Content Platform',
        paragraphs: [
          'At the scale ConsumerAffairs operates, you can\'t hand-review every submission. The incoming rate outpaced the team\'s capacity, and the backlog was growing. The platform had to automate the judgment layer without losing the audit trail that legal and compliance require.',
        ],
        bullets: [
          'Architected on FastAPI with async-first design, enabling high-concurrency AI inference without blocking the API layer.',
          'Moved vector storage to PostgreSQL + pgvector, achieving 10x improvement in metadata filtering — enabling complex SQL predicates combined with semantic similarity search.',
          'Built multi-strategy summarization: token-aware chain selection adapts between approaches based on content length, with prompt templates manageable by non-engineers without deploys.',
          'Integrated OpenAI APIs for automated content moderation — reduced manual review workload by ~80% with a full audit trail for compliance.',
          'Applied tiktoken-based token budgeting and adaptive content limits to reduce AI inference costs by ~30% without quality regression.',
        ]
      },
      {
        heading: 'Kafka Event Streaming',
        paragraphs: [
          'The platform ran on polling loops — services querying each other on intervals, with all the coupling and thundering-herd problems that creates. Moving to event-driven wasn\'t just a performance improvement; it meant services could evolve independently without coordinating deploys.',
        ],
        bullets: [
          'Kafka event contracts across 8+ microservices: matching decisions, lead scoring, review events, budget tracking.',
          '5x throughput improvement for downstream analytics by moving from polling to event-driven delivery.',
          'ML-driven lead quality scoring via Databricks integrated over Kafka — real-time signals without synchronous coupling.',
        ]
      },
      {
        heading: 'Pricing & Lead Infrastructure',
        bullets: [
          'Async budget enforcement and CPL pricing systems reduced database queries by 40% and Redis call volume by 60%.',
          'Real-time call routing system matching high-intent inbound calls to providers with sub-second decisions.',
          'Primary owner of the lead processing platform for 4 years — 5 major legacy subsystems deprecated, thousands of lines of dead code removed.',
        ]
      },
      {
        heading: 'Tech Stack',
        bullets: [
          'Python, FastAPI, Django, Celery, Kafka, PostgreSQL, pgvector, Redis, LangChain, OpenAI, Databricks, AWS.',
        ]
      }
    ]
  },
  {
    slug: 'digibrain',
    title: 'Digibrain: Persistent Memory for AI Agents',
    date: '2026-02-27',
    hero: '/images/projects-bg-img.png',
    summary:
      'Persistent shared memory for AI coding agents. Uses vectorless tree-index retrieval and a structured SQLite data store to give agents (Claude, opencode, Gemini) long-term context across sessions.',
    featured: true,
    sections: [
      {
        heading: 'System Objective',
        paragraphs: [
          'Most AI agents suffer from "goldfish memory" — every session starts from a blank slate. Digibrain provides a durable memory substrate that allows agents to remember facts, track interactions, and follow learned workflows across different sessions and platforms.',
          'The goal is simple: an agent that worked with you last week should know what you were working on, what you told it, and what didn\'t work. Most don\'t.'
        ]
      },
      {
        heading: 'Vectorless Retrieval via Tree Index',
        paragraphs: [
          'While most memory systems rely on vector databases and cosine similarity, Digibrain uses a "tree-index" approach where the agent itself reasons over a structured table of contents.'
        ],
        bullets: [
          'No embeddings or complex infra: memory is stored in plain Markdown files.',
          'Semantic routing: the agent reads a small index file and decides which specific memory files are relevant to the current task.',
          'Deterministic & Transparent: users can read the memory index and know exactly what context the agent is loading.',
          'Token Efficient: only relevant files are loaded, preventing context window bloat.'
        ]
      },
      {
        heading: 'Layered Memory Architecture',
        paragraphs: [
          'Digibrain matches human cognitive patterns by separating knowledge into three distinct layers:'
        ],
        bullets: [
          'Episodic: Daily append-only logs of every interaction (the "what happened").',
          'Semantic: Persistent facts, user preferences, and project knowledge (the "what is").',
          'Procedural: Learned workflows and rules, updated through feedback and corrections (the "how to").'
        ]
      },
      {
        heading: 'ApplyOps: The Structured Data Store',
        paragraphs: [
          'Beyond prose memory, Digibrain includes ApplyOps — a domain-driven SQLite store for structured data like tasks, research notes, and contact info.'
        ],
        bullets: [
          'Domain-aware routing: requests are classified into domains (fitness, research, todos) with specialized toolsets.',
          'FTS5 Search: Full-text search across all structured items for sub-millisecond lookups.',
          'Extensible Schema: Create new tracking domains on the fly with custom data shapes and agent instructions.'
        ]
      },
      {
        heading: 'Multi-Channel Presence',
        bullets: [
          'Telegram Bridge: Talk to your local agents from your phone with real-time streaming and file support.',
          'Web Dashboard: FastAPI + HTMX interface for browsing memory, inspecting domains, and auditing agent logs.',
          'Agent Stubs: Universal protocol supporting Claude Code, opencode, and Gemini CLI.'
        ]
      },
      {
        heading: 'Automation & Consolidation',
        bullets: [
          'Importance Scoring: High-signal corrections (importance 4-5) update semantic memory immediately.',
          'Prefect Flows: Scheduled background tasks for episodic-to-semantic consolidation and inbox scanning.',
          'Local Summarization: Uses Ollama (llama3.2:1b) for fast, free text summarization in automated flows.'
        ]
      },
      {
        heading: 'Tech Stack',
        bullets: [
          'Python, FastAPI, Typer, SQLite (FTS5), HTMX, Jinja2, Prefect, Ollama, Telegram API.'
        ]
      }
    ]
  },
  {
    slug: 'speakeasy',
    title: 'SpeakEasy: Voice Coding Workflow',
    date: '2026-02-25',
    hero: '/images/markus-spiske-qjnAnF0jIGk-unsplash.jpg',
    summary:
      'SpeakEasy: a fully local voice interface for coding with fast dictation, push-to-talk controls, and spoken agent responses designed for low-friction development workflows.',
    featured: true,
    sections: [
      {
        heading: 'System Objective',
        paragraphs: [
          'Voice interaction with coding agents reduces context-switching overhead and keeps hands on keyboard during flow states. Most voice coding tools rely on cloud APIs, introducing latency, privacy concerns, and dependency on external services.',
          'This project delivers a 100% local voice interface for CLI agents (Claude Code, OpenCode) using warm background servers for near-instant transcription and speech synthesis without ever sending audio or text to the cloud.'
        ]
      },
      {
        heading: 'Architecture',
        bullets: [
          'Warm HTTP servers: Whisper STT and Kokoro TTS models stay in memory, eliminating cold-start latency (~1.5s first-audio response).',
          'Push-to-talk workflow: Global Raycast hotkey triggers recording, silence detection ends capture, transcription auto-pastes to active app.',
          'Agent narration hooks: Claude Code hooks and OpenCode plugins pipe assistant responses through TTS with markdown/code stripping.',
          'Project-aware voices: Different project directories get distinct voices so you know which agent is speaking.',
          'Streaming synthesis: Sentences are generated and played incrementally while the next sentence generates in parallel.'
        ]
      },
      {
        heading: 'Speech-to-Text Pipeline',
        bullets: [
          'whisper.cpp with Metal acceleration on Apple Silicon (M1-M4) for GPU-native transcription.',
          'ggml-large-v3-turbo-q5_0 model: strong accuracy with quantized weights (~900MB total).',
          'HTTP server on port 8787 handles multipart/form-data file uploads and returns JSON with transcribed text.',
          'Recording uses sox (libsox) for robust cross-device audio capture at 16kHz mono.',
          'Silence detection with configurable threshold (default 3% over 2 seconds) triggers auto-stop.'
        ]
      },
      {
        heading: 'Text-to-Speech Pipeline',
        bullets: [
          'kokoro-onnx: ONNX-based neural TTS with sub-100ms generation times on Apple Silicon.',
          ' voices-v1.0.bin voice pack with 10+ distinct voices (af_heart, am_adam, bf_emma, etc.).',
          'HTTP server on port 8788 accepts JSON POSTs with text, voice ID, and speed parameters.',
          'Output streamed as WAV files; afplay (macOS native) handles playback with minimal latency.',
          'Sentence-level chunking: response text is split on punctuation boundaries, each sentence generated and played in sequence.'
        ]
      },
      {
        heading: 'Agent Integrations',
        bullets: [
          'Claude Code: hook scripts in ~/.claude/settings.json capture Stop and Notification events, pipe JSON through sed for markdown stripping, invoke speak command asynchronously.',
          'OpenCode: TypeScript plugin registers for message.part.updated events, deduplicates consecutive identical messages, spawns detached speak process per response.',
          'Both integrations run the speak command with --project flag to enable per-directory voice assignment.',
          'Lock file mechanism (/tmp/speakeasy-speech.lock) prevents TTS from interrupting active dictation.'
        ]
      },
      {
        heading: 'CLI and Operator Interface',
        bullets: [
          'Bash CLI with subcommands: setup, server start/stop/status, dictate, speak, mute/unmute, doctor, logs, hook-install.',
          'Config stored in ~/.config/speakeasy/config with model paths, voice defaults, silence thresholds.',
          'Doctor command validates dependencies, model files, server health, and hook wiring in one run.',
          'Logs command aggregates whisper-server, kokoro-server, and plugin output for centralized debugging.'
        ]
      },
      {
        heading: 'Performance Characteristics',
        bullets: [
          'STT latency: ~300-500ms for typical command transcription (model warm).',
          'TTS latency: ~100-150ms per sentence generation, with first sentence playing ~1.5s after response start.',
          'Memory footprint: Whisper + Kokoro models use ~1.5GB total RAM.',
          'Zero network dependency: all processing local, works offline after initial model download.'
        ]
      },
      {
        heading: 'Reliability and Diagnostics',
        bullets: [
          'Health check endpoints on both servers enable automated restart and status monitoring.',
          'Graceful degradation: if TTS server unavailable, falls back to kokoro-tts CLI binary.',
          'Dictation auto-starts servers if not running, ensuring single-command usability.',
          'Comprehensive doctor checks cover: sox, ffmpeg, jq, whisper-server, uv, Python deps, model files, hook configs.'
        ]
      },
      {
        heading: 'Why Local Matters',
        paragraphs: [
          'Cloud STT/TTS APIs introduce network latency, require internet connectivity, and send sensitive code/commands to external services. For developers working on proprietary code or in secure environments, this is a non-starter.',
          'By keeping everything on-device with warm servers, this system achieves cloud-competitive latency while maintaining complete privacy. The architecture is also more reliable—no API rate limits, no service outages, no vendor lock-in.'
        ]
      }
    ]
  },
  {
    slug: 'amazon-dash-cart',
    title: 'Amazon Dash Cart',
    date: '2020-05-09',
    hero: '/images/amazon-dash-cart.png',
    summary:
      'Owned core computer-vision and edge infrastructure for Amazon Dash Cart, driving production-scale model performance, telemetry reliability, and security delivery across live store deployments.',
    sections: [
      {
        heading: 'System Scope',
        paragraphs: [
          'Grocery stores are a hostile environment for CV systems. Lighting varies by aisle and time of day. Carts get bumped. Items get placed at odd angles. The system has to stay confident enough to charge customers for what they put in the cart — without constant cloud connectivity, on hardware that lives in a store and gets returned at the end of a shift.',
          'I owned the vision runtime and most of the supporting platform infrastructure: model deployment, inference optimization, telemetry, and the compliance systems that enabled the fleet to expand.'
        ]
      },
      {
        heading: 'Edge Vision and Inference Engineering',
        bullets: [
          'Optimized and deployed TensorRT-based model pipelines on Nvidia edge devices powering 100+ active carts.',
          'Reduced inference and preprocessing bottlenecks to preserve real-time decision quality under store traffic spikes.',
          'Hardened on-device runtime behavior for long-lived sessions, including model lifecycle controls and stability guardrails.',
          'Built operational hooks for model rollout validation and failure triage in production environments.'
        ]
      },
      {
        heading: 'Platform and Operational Excellence',
        bullets: [
          'Engineered GPU-accelerated video encoding pipeline with ~40x size reduction and ~90% faster upload cycles for incident/debug workflows.',
          'Delivered client-side encryption with AWS KMS in a six-week compliance sprint across four collaborating teams with zero production regressions.',
          'Implemented real-time MQTT service communication and automated DynamoDB/Lambda processing paths for continuous system learning.',
          'Expanded CloudWatch observability across the cart fleet with alarms and diagnostics to improve mean-time-to-detect and operator response.'
        ]
      },
      {
        heading: 'Technical Highlights',
        bullets: [
          'TensorRT, Nvidia edge runtime (Jetpack), C++, Python, MQTT, DynamoDB/Lambda, AWS KMS, CloudWatch, GPU video acceleration.',
          'OpenCV preprocessing pipelines, TBB-parallelized frame processing, model lifecycle controls for safe in-field rollout.'
        ]
      }
    ]
  },
  {
    slug: 'signify-lightfinder',
    title: 'Signify: LightFinder',
    date: '2017-04-10',
    hero: '/images/signify-lightfinder.png',
    summary:
      'Built and optimized end-to-end ML systems for Signify LightFinder, spanning retrieval, classification, and edge-focused deployment constraints from research to production.',
    sections: [
      {
        heading: 'System Scope',
        paragraphs: [
          'LightFinder needed to take a photo of a light bulb — taken by a consumer in their kitchen, probably with a phone, probably in bad lighting — and match it to the correct replacement SKU from a catalog of visually similar products. The hard part isn\'t the model architecture, it\'s the gap between 92% accuracy on a clean test set and 71% accuracy on real user photos. Most of the work lived in that gap.',
        ]
      },
      {
        heading: 'Modeling and Retrieval Architecture',
        bullets: [
          'Developed deep learning pipelines combining classification and similarity retrieval patterns for robust product matching.',
          'Trained and tuned VGG, Siamese, and ensemble model variants to improve retrieval precision across visually similar SKUs.',
          'Designed feature extraction and ranking flows to improve top-k match quality for downstream product selection.',
          'Built reproducible training/evaluation loops to compare architectures and iterate quickly on model quality.'
        ]
      },
      {
        heading: 'Edge and Deployment Engineering',
        bullets: [
          'Applied iterative pruning and post-training quantization to reduce model size by ~60% and improve inference speed by ~30%.',
          'Containerized inference services and deployment artifacts for consistent execution across environments.',
          'Implemented dataset curation and augmentation pipelines that improved model robustness on real-world input variance.',
          'Added model documentation and tracking workflows so experiments and deployment decisions remained auditable.'
        ]
      },
      {
        heading: 'Technical Highlights',
        bullets: [
          'TensorFlow/Keras, VGG/Siamese networks, Mask-RCNN, iterative pruning, post-training quantization.',
          'The model compression work (60% size reduction, 30% inference speedup) was driven by real deployment constraints — not a performance exercise. The target hardware had fixed memory limits and the retrieval had to stay accurate enough to be useful.'
        ]
      }
    ]
  }
];

export const featuredProjects = projects.filter((p) => p.featured);

export const recentProjects = [...projects].sort((a, b) =>
  a.date < b.date ? 1 : -1
);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
