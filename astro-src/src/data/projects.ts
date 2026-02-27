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
    slug: 'agent-memory-framework',
    title: 'Agent Memory Framework',
    date: '2026-02-26',
    hero: '/images/notebook.jpg',
    summary:
      'A durable memory framework for coding agents with layered recall, retrieval, and cross-channel session continuity.',
    featured: true,
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'Agent Memory is a local-first memory framework for coding agents. It is designed to make long-running workflows behave like systems, not disconnected chats.',
          'The core objective is reliable context retention: preserving what matters, retrieving it quickly, and keeping decisions traceable over time.'
        ]
      },
      {
        heading: 'Architecture',
        bullets: [
          'Semantic memory for stable project facts, constraints, and references.',
          'Episodic memory for chronological run history, decisions, and follow-ups.',
          'Procedural memory for reusable playbooks learned through iteration.',
          'Local SQLite + FTS retrieval exposed through CLI and API surfaces.'
        ]
      },
      {
        heading: 'Operations',
        paragraphs: [
          'A Telegram bridge extends the same memory-backed workflows to mobile while preserving session continuity and guardrails.',
          'Prefect automation keeps memory fresh through scheduled capture and consolidation.'
        ]
      },
      {
        heading: 'Impact',
        paragraphs: [
          'Result: lower re-prompting overhead, more consistent agent output, and better auditability for complex multi-session work.'
        ]
      }
    ]
  },
  {
    slug: 'agentic-task-orchestration',
    title: 'Agentic Task Orchestration',
    date: '2026-02-23',
    hero: '/images/projects-bg-img.png',
    summary:
      'A multi-step orchestration framework with domain-aware routing, reusable tool chains, and traceable execution.',
    featured: true,
    sections: [
      {
        heading: 'Overview',
        paragraphs: [
          'This system treats agent automation as an execution architecture problem: routing, state, tooling, and observability.',
          'It is intentionally generic and domain-aware, so workflows can adapt behavior based on context without rewiring the engine.'
        ]
      },
      {
        heading: 'Execution Model',
        bullets: [
          'Domain classification and policy loading before run execution.',
          'Reusable workflow steps for fetch, parse, transform, summarize, notify, and persist.',
          'Structured run history for deterministic follow-up behavior.'
        ]
      },
      {
        heading: 'Memory + Reliability',
        paragraphs: [
          'The orchestration layer is paired with semantic, episodic, and procedural memory so each run improves future runs.',
          'Guardrails, rate limits, and auditable logs make it suitable for recurring operations, not just demos.'
        ]
      },
      {
        heading: 'Impact',
        paragraphs: [
          'Result: more reproducible automation, faster iteration on complex tasks, and clearer debugging when runs fail.'
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
