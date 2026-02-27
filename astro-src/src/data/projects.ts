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
          'Idempotent run IDs and artifact paths to avoid duplicate side effects during retries.'
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
          'Scheduled Prefect flows for source ingestion, event capture, and memory consolidation.',
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
    slug: 'pdf-chat-local-llm',
    title: 'PDF Chat (Local LLM)',
    date: '2026-02-24',
    hero: '/images/gohugo-default-sample-hero-image.jpg',
    summary:
      'A local document assistant that ingests PDFs and streams grounded answers for faster technical review.',
    featured: true,
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'PDF Chat is a local-first document Q&A prototype built with FastAPI and Ollama.',
          'It focuses on grounded answers from source documents instead of generic recall.'
        ]
      },
      {
        heading: 'Architecture',
        bullets: [
          'Server-side PDF ingestion and text extraction.',
          'Grounded response generation from extracted content.',
          'Streaming responses for faster feedback and review loops.',
          'Private-by-default local execution.'
        ]
      },
      {
        heading: 'Impact',
        paragraphs: [
          'Result: faster document interrogation and a practical foundation for private knowledge workflows.'
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
      'Computer vision and edge optimization work for production smart shopping carts, including TensorRT acceleration and operational tooling.',
    sections: [
      {
        heading: 'Highlights',
        bullets: [
          'Owned major vision pipeline updates for edge deployment on Nvidia hardware.',
          'Improved deployment speed and model management workflows.',
          'Implemented hardware-accelerated video compression and client-side encryption improvements.',
          'Built dashboards, alarms, and production metrics to improve operational visibility.'
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
      'End-to-end ML pipeline for product recognition and retrieval, including model optimization for edge constraints.',
    sections: [
      {
        heading: 'Highlights',
        bullets: [
          'Built image classification and retrieval pipelines using deep learning models.',
          'Trained and tuned VGG, Siamese, and ensemble architectures on AWS.',
          'Applied pruning and quantization to shrink model size and improve latency.',
          'Built supporting data pipelines for training, preprocessing, and stakeholder reporting.'
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
