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
    slug: 'agentic-task-orchestration',
    title: 'Digibrain: Agent Memory + Task Orchestration Platform',
    date: '2026-02-26',
    hero: '/images/projects-bg-img.png',
    summary:
      'Digibrain: a local-first agent engineering platform combining domain-aware orchestration, layered memory, and multi-channel execution for reliable LLM workflows.',
    featured: true,
    sections: [
      {
        heading: 'System Objective',
        paragraphs: [
          'This project started from a practical gap in real agent usage: LLM agents can generate strong single responses, but long-running workflows fail without memory discipline, execution structure, and operational guardrails.',
          'The platform combines orchestration and memory into one runtime so tasks are not prompt chains, but inspectable execution graphs with durable context.'
        ]
      },
      {
        heading: 'Architecture Overview',
        bullets: [
          'Domain-aware routing: requests are classified and bound to domain policy before tool execution.',
          'Task graph runtime: reusable stages for fetch, parse, transform, summarize, notify, and persist.',
          'Layered memory substrate: semantic, episodic, and procedural memory with explicit write paths.',
          'Local retrieval engine: SQLite + FTS for deterministic context fetch and low-latency lookups.',
          'Surface adapters: terminal and Telegram interfaces share the same session and memory backend.',
          'FastAPI service layer and Typer CLI expose the same orchestration primitives for interactive and scripted runs.'
        ]
      },
      {
        heading: 'ApplyOps Runtime (Orchestration Core)',
        paragraphs: [
          'The orchestration core follows an agent-runtime pattern instead of chat chaining. A planner compiles a task plan, executors run tool steps, and a reviewer verifies output quality before finalization.',
          'Execution is persisted as a run ledger with status transitions, timestamps, artifacts, and error envelopes so every run can be replayed and audited.'
        ],
        bullets: [
          'Tool registry abstraction to plug in generic tools without changing orchestrator logic.',
          'Step contracts with typed inputs/outputs to reduce prompt drift between stages.',
          'Retry and backoff policies at task-step level, with failure classification for transient vs. hard errors.',
          'Idempotent run IDs and artifact paths to avoid duplicate side effects during retries.',
          'Notification hooks emit Telegram updates on start, completion, and failure for long-running runs.'
        ]
      },
      {
        heading: 'Core Tech Stack',
        bullets: [
          'Python runtime with FastAPI services for orchestration and memory APIs.',
          'Typer CLI for local operator workflows using the same execution primitives as the API layer.',
          'SQLite + FTS indexes for deterministic local retrieval and memory search.',
          'Prefect flows for scheduled ingestion, event capture, and memory consolidation.',
          'Telegram bot bridge for cross-channel agent sessions, notifications, and async task handoff.',
          'Local LLM integrations (Ollama/OpenAI-compatible adapters) behind a provider abstraction.'
        ]
      },
      {
        heading: 'Memory System Design',
        paragraphs: [
          'Semantic memory stores stable facts, constraints, and references. Episodic memory captures execution history and decisions. Procedural memory stores reusable playbooks learned through corrections and repeated runs.',
          'Separating these layers prevents context pollution, improves retrieval quality, and makes memory writes auditable. The key engineering decision was to avoid a monolithic memory log and instead optimize each memory type for a different retrieval pattern.',
          'Memory writes are policy-gated: only high-signal facts are promoted to semantic memory, run traces flow to episodic memory, and repeated correction patterns are promoted to procedural memory.'
        ]
      },
      {
        heading: 'LLM and Agent Engineering Patterns',
        bullets: [
          'Prompt contracts are domain-scoped so tool usage and output shape stay consistent per workflow type.',
          'Context assembly is deterministic: memory retrieval, source documents, and run-state are merged in a fixed order.',
          'Agent behavior is constrained through execution policy rather than free-form prompt instructions alone.',
          'Runs emit structured traces so failures can be reproduced and corrected without guessing hidden model state.',
          'Source grounding pipeline loads resume and technical project docs into indexed context so outputs are anchored to real implementation history.',
          'Output synthesis uses bounded context windows and section-aware prompts to reduce hallucinated cross-domain details.'
        ]
      },
      {
        heading: 'Reliability and Ops',
        bullets: [
          'Session continuity across desktop and Telegram with auth and rate-limiting controls.',
          'Operator alerts over Telegram for failed runs, retries exhausted, and high-priority events.',
          'Scheduled Prefect orchestration for source ingestion, event capture, and memory consolidation.',
          'Run-level logging and outcome summaries for post-run review and regression tracking.',
          'Artifact-aware responses so generated files are handled as first-class outputs, not chat text only.',
          'Operational endpoints support health checks, queue introspection, and memory index maintenance.'
        ]
      },
      {
        heading: 'Why This Matters',
        paragraphs: [
          'Most agent demos optimize for response quality in isolation. This platform optimizes for production behavior over time: repeatability, observability, safe operation, and lower context-reset cost.',
          'Result: complex multi-step workflows become easier to trust, easier to debug, and faster to iterate.'
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
          'Dash Cart required low-latency, high-confidence perception on constrained edge hardware operating continuously in a noisy retail environment.',
          'I owned major portions of the vision runtime and supporting platform systems, shipping model and infrastructure changes that had to be performant, observable, and production-safe at fleet scale.'
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
        heading: 'Outcome',
        paragraphs: [
          'The result was a more resilient edge AI platform: faster operational loops, safer production rollout behavior, and stronger runtime reliability in one of the most challenging applied-CV deployment contexts.'
        ]
      },
      {
        heading: 'Technical Highlights',
        bullets: [
          'TensorRT, Nvidia edge runtime, MQTT, DynamoDB/Lambda, AWS KMS, CloudWatch, GPU video acceleration.',
          'Production skills: edge inference optimization, distributed rollout safety, observability-first operations.'
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
          'LightFinder solved a practical but hard problem: map user-captured photos to the exact bulb form factor and compatible replacements with high precision.',
          'I worked across model design, data pipeline development, and deployment packaging so the system was not just accurate in notebooks, but usable in production workflows.'
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
        heading: 'Outcome',
        paragraphs: [
          'This work established a strong applied-ML foundation: measurable model improvements, deployable inference systems, and practical retrieval quality that translated directly into product usability.'
        ]
      },
      {
        heading: 'Technical Highlights',
        bullets: [
          'TensorFlow/Keras, VGG/Siamese retrieval, pruning/quantization, AWS-hosted training and inference pipelines.',
          'Production skills: model optimization under constraints, ranking quality tuning, end-to-end ML systems delivery.'
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
