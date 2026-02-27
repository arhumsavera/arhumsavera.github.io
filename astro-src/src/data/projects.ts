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
    title: 'Agent Memory + Task Orchestration Platform',
    date: '2026-02-26',
    hero: '/images/projects-bg-img.png',
    summary:
      'A local-first agent engineering platform combining domain-aware orchestration, layered memory, and multi-channel execution for reliable LLM workflows.',
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
    slug: 'voice-coding-workflow',
    title: 'Voice Coding Workflow',
    date: '2026-02-25',
    hero: '/images/markus-spiske-qjnAnF0jIGk-unsplash.jpg',
    summary:
      'A local voice interface for coding with low-latency transcription, push-to-talk controls, and spoken response hooks.',
    featured: true,
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'Voice Coding Workflow is a local speech interface that reduces interaction overhead in agent-assisted development.',
          'It combines whisper.cpp transcription, Kokoro TTS, and predictable push-to-talk behavior.'
        ]
      },
      {
        heading: 'System Design',
        bullets: [
          'Low-latency local transcription suitable for command-style prompts.',
          'Spoken output hooks to keep feedback flowing while coding continues.',
          'Immediate interrupt and hotkey controls for reliable session flow.'
        ]
      },
      {
        heading: 'Impact',
        paragraphs: [
          'Result: quicker command cycles, lower interaction fatigue, and stronger focus during long implementation sessions.'
        ]
      }
    ]
  },
  {
    slug: 'project-1',
    title: 'Amazon: Dash Carts',
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
    slug: 'project-2',
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
