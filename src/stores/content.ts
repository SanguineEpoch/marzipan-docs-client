// stores/content.ts
import { defineStore } from 'pinia'
import type { Card, Button } from '@/types/card'

import type { RoadmapStep } from '@/types/roadmap'
import { RoadmapStatus } from '@/types/roadmap'

interface ContentState {
  hero: {
    title: string
    subtitle: string
    cta: Button[]
  }

  disclaimer: {
    title: string
    text: string | string[]
  }

  valueProposition: {
    title: string
    paragraphs: string[]
  }

  personas: {
    title: string
    items: Card[]
  }

  architectureOverview: {
    title: string
    intro: string
    items: Card[]
  }

  designPrinciples: {
    title: string
    principles: Card[]
  }

  summary: {
    title: string
    items: Array<{
      title: string
      icon: string
    }>
  }

  roadmap: {
    title: string
    text: string | string[]
    steps: RoadmapStep[]
    callToAction?: Button[]
  }

  gettingStarted: {
    intro: string
    currentFocus: string[]
    contributorInvites: string[]
    callToAction: Button[]
  }
  philosophy: {
    title: string
    intro: string
    paragraphs: string[]
    cta: Button[]
  }
  future: {
    title: string
    paragraphs: string[]
  }
}

// todo: make code snippets

const initialContent: ContentState = {
  hero: {
    title: 'Marzipan',
    subtitle: "A language that builds itself to match your project's needs.",
    cta: [
      {
        text: 'Read the Docs',
        url: '/docs',
        appendIcon: 'mdi-arrow-right',
        variant: 'flat',
        color: 'marzipan',
      },
      {
        text: 'View on GitHub',
        url: 'https://github.com/SanguineEpoch/marzipan',
        prependIcon: 'mdi-github',
        variant: 'outlined',
      },
    ],
  },
  disclaimer: {
    title: 'Marzipan is Still in Early Development',
    text: [
      'Marzipan is still in its early stages.',
      'It’s not ready for production use yet—but Marzipan has real potential. Keep reading to see what Marzipan is becoming, and how developers like you can help shape it.',
    ],
  },

  valueProposition: {
    title: 'Why Marzipan?',
    paragraphs: [
      'Most languages force trade-offs: performance vs. flexibility, control vs. ease of use, compiled vs. interpreted.',
      "Marzipan doesn't. Instead, it gives each program its own runtime and compiler, shaped around your code and constraints—offering clarity, control, and performance when and how you choose.",
      'Marzipan puts trade-offs in your hands. You can build small, high-performance binaries, flexible systems with deep introspection, or find the right balance for your use case. What you include—or leave out—is always your call.',
      "Marzipan isn’t just code—it’s code that understands itself. Whether you're building adaptive systems or reasoning about your own, Marzipan becomes the language you need, when you need it.",
    ],
  },

  personas: {
    title: 'Who is Marzipan built for?',
    items: [
      {
        icon: 'mdi-code-tags',
        title: 'General Purpose Developers',
        description:
          'Marzipan is statically typed with type inference, making it both safe and expressive for development and production alike. Its clean, approachable syntax doesn’t sacrifice power, and developer ergonomics are a core focus. Marzipan is designed to make development feel natural, readable, and enjoyable.',
      },
      {
        icon: 'mdi-brain',
        title: 'AI and Adaptive Systems Developers',
        description:
          'Marzipan is designed to support—but not require—runtime code updates without downtime. This enables evolving systems that can adapt themselves over time. Runtime settings give you granular control over what a program is allowed to do and when, allowing you to build powerful systems with clear, enforceable boundaries.',
      },
      {
        icon: 'mdi-wrench-outline',
        title: 'Tooling Enthusiasts',
        description:
          "Marzipan gives you direct access to its abstract syntax tree, making it trivial to analyze or manipulate code as structured data. You can build programs that react to their own shape, or tools that evolve alongside your source. Tooling isn't a bolt-on feature—it's built into the language's core design.",
      },
      {
        icon: 'mdi-shield-check-outline',
        title: 'Security-Conscious Developers',
        description:
          'In Marzipan, programs are scoped by default. Filesystem, network, and introspection access must be explicitly declared, and are enforced at build or runtime. Marzipan’s power comes with responsibility, and we’re looking for contributors with deep security experience to help shape a system that empowers without enabling abuse. Our goal is to make powerful systems difficult to misuse, without making them difficult to use.',
      },
      {
        icon: 'mdi-compass-outline',
        title: 'Future-Oriented Contributors',
        description:
          "Marzipan isn't just a new language—it's an experiment in what programming could become. From progressively optimizing systems to introspective build pipelines, we’re rethinking how code is written, evolved, and deployed. If that excites you, we invite you to help shape it.",
      },
    ],
  },

  architectureOverview: {
    title: 'How does Marzipan work?',
    intro:
      'Marzipan rethinks the boundaries between language, runtime, and tooling.',
    items: [
      {
        icon: 'mdi-file-document-outline',
        title: 'Expression-driven syntax, human-focused types',
        description:
          "Clean, Julia-inspired syntax meets TypeScript's type system and Python's readability.",
      },
      {
        icon: 'mdi-code-braces',
        title: 'AST-first philosophy',
        description:
          'Access and modify your program’s abstract syntax tree at build or runtime. Marzipan treats ASTs like a second language—one readable by humans, writable by machines, and interpretable by both.',
      },
      {
        icon: 'mdi-format-align-left',
        title: 'Built-in canonical formatter',
        description:
          'Round-trip your code safely between AST and source, enabling programs that make programs, consistent tooling, readable diffs, and reliable codegen.',
      },
      {
        icon: 'mdi-layers-triple',
        title: 'Flexible execution model',
        description:
          "Marzipan uses a programmable execution pipeline—where interpretation, optimization, and compilation aren't separate modes, but configurable stages. You can run everything as a single-pass compiler or set up a reactive runtime that recompiles or optimizes on AST changes. It's entirely up to you. In future versions, Marzipan may support narrow AI systems that dynamically choose execution modes per AST branch or node based on efficiency needs.",
      },
      {
        icon: 'mdi-shield-check',
        title: 'Explicit, capability-based security',
        description:
          "Clearly declare your program's permissions—filesystem, network, introspection—enforced transparently at runtime or compile-time.",
      },
      {
        icon: 'mdi-cogs',
        title: 'Self-shaping runtime generation',
        description:
          "At build time, Marzipan introspects itself and generates a tailored runtime optimized precisely to your project's structure and constraints.",
      },
    ],
  },

  designPrinciples: {
    title: "What Marzipan won't do",
    principles: [
      {
        icon: 'mdi-cogs',
        title: "Won't dictate a single runtime",
        description:
          'Runtime is adapted to you. Choose your constraints, optimizations, and trade-offs explicitly—no forced defaults. However there will be presets for common use cases.',
      },
      {
        icon: 'mdi-speedometer',
        title: "Won't be performant in early stages of development",
        description:
          "Marzipan's performance goals are real — but structure and reflection come first. We're building a language that can optimize itself in context, not one that chases benchmarks before it's even fully formed. Progressive compilation and custom runtimes are coming — after the foundation is sound.",
      },
      {
        icon: 'mdi-eye-off-outline',
        title: "Won't pretend introspection is free for all users",
        description: [
          "Marzipan allows powerful runtime AST reflection and programmatic self-shaping — and it's free for open source, education, individual, small company/startup use.",
          "But if you're using these capabilities commercially beyond a certain threshold, we ask you to support the ecosystem: either with a flat license or a fair percentage once revenue scales. Marzipan is free to use — but not free to exploit.",
        ],
        button: [
          {
            text: 'Read the License for More Information',
            url: '/license',
            appendIcon: 'mdi-scale-balance',
            variant: 'text',
          },
        ],
      },
      {
        icon: 'mdi-shield-off-outline',
        title: "Won't hide behind simulated security",
        description:
          "Marzipan's security model is explicit capability-based declarations—never invisible sandboxes or hidden assumptions.",
      },
    ],
  },

  roadmap: {
    title: "Marzipan's development roadmap",
    text: [''],
    steps: [
      {
        id: 1,
        title: 'Stage 1: AOT Compiler in Rust',
        description:
          'Compile Marzipan code to native binaries with an LLVM-powered Rust compiler.',
        status: RoadmapStatus.InProgress,
      },
      {
        id: 2,
        title: 'Stage 2: Self-hosted Interpreter',
        description:
          'Bootstrap the first Marzipan interpreter, enabling introspection and runtime flexibility.',
        status: RoadmapStatus.PlannedNotStarted,
      },
      {
        id: 3,
        title: 'Stage 3: Custom IR and Backend',
        description:
          'Build a tailored intermediate representation that enables branch-level optimization and runtime-adaptive behavior.',
        status: RoadmapStatus.NotStarted,
      },
      {
        id: 4,
        title: 'Stage 4: IR Generation at Runtime',
        description:
          'Generate intermediate representations dynamically during build and runtime for adaptive optimization.',
        status: RoadmapStatus.PlannedNotStarted,
      },
      {
        id: 5,
        title: 'Stage 5: Progressive Runtime Optimization',
        description:
          'Real-time, adaptive optimization and compilation of Marzipan programs at runtime.',
        status: RoadmapStatus.PlannedNotStarted,
      },
    ],
    callToAction: [
      {
        text: 'Explore Roadmap Details',
        url: '/roadmap',
        appendIcon: 'mdi-telescope',
        variant: 'outlined',
      },
    ],
  },

  summary: {
    title: 'Marzipan in a nutshell',
    items: [
      {
        title: 'General-purpose language that evolves with your project.',
        icon: 'mdi-check-circle-outline',
      },
      {
        title: 'Flexible, introspective, and capable of self-adaptation.',
        icon: 'mdi-check-circle-outline',
      },
      {
        title:
          'From scripts to systems that rewrite themselves—Marzipan adapts as you do.',
        icon: 'mdi-check-circle-outline',
      },
      {
        title:
          'Explicit, secure, shape-aware tooling built from the ground up.',
        icon: 'mdi-check-circle-outline',
      },
    ],
  },

  philosophy: {
    title: 'The Marzipan Philosophy',
    intro:
      "Marzipan isn't just a language—it's a rethink of what programming systems can be.",
    paragraphs: [
      'Marzipan empowers developers to build systems that reflect on their own structure and selectively shape their runtime, compilation, and execution path. It removes the arbitrary boundary between tooling, runtime, and source.',
      'We believe programming tools should be as programmable as the systems they create. Marzipan aims to make that real—without sacrificing deployability, performance, or clarity.',
      'Though Marzipan is free for most, commercial users are expected to support its development to help keep the language sustainable and community-driven.',
      'Marzipan is built with the future in mind—where systems can shape themselves safely, adapt meaningfully, and remain visible and understandable to the humans who use them.',
    ],
    cta: [
      {
        text: 'Read the License for More Information',
        url: '/license',
        appendIcon: 'mdi-scale-balance',
        variant: 'text',
      },
    ],
  },

  future: {
    title: 'The Future Marzipan Could Bring',

    paragraphs: [
      "Marzipan was never just about syntax. It's about building systems that understand their own shape, respond to changing needs, and grow alongside the people and machines that use them.",
      'Because of its self-shaping runtimes, AST-level introspection, and configurable execution strategies, Marzipan could form the basis of truly adaptive software—systems that learn, reflect, and even rewrite their own execution model in response to real-world usage.',
      "Some may use it to build powerful debugging tools. Others might create systems that evolve over time. And some may explore entirely new kinds of cognition—where code doesn't just execute, but participates in its own understanding.",
      "We're still at the beginning. But the possibilities Marzipan opens up are real—and we want to make sure they stay open, understandable, and human-aligned.",
    ],
  },

  gettingStarted: {
    intro:
      'Marzipan is young and growing fast—join us in building the language, runtime, and community.',
    currentFocus: [
      'Bootstrapping the first interpreter',
      'Designing the introspective, shape-aware runtime',
      'Implementing a robust, adaptive IR',
    ],
    contributorInvites: [
      'Developers who want to shape the future of programming',
      "Security experts who can help prevent abuse of Marzipan's power.",
      'Toolmakers building introspective tools for Developers',
      'Writers who make documentation clear and inviting',
      'Early adopters who want to try out Marzipan and point out any flaws, missing features, or bugs',
    ],
    callToAction: [
      {
        text: 'Get Involved',
        url: '/contribute',
        appendIcon: 'mdi-account-plus',
        variant: 'flat',
        color: 'marzipan',
      },
    ],
  },
}

export const useContentStore = defineStore('content', {
  state: () => initialContent,
  persist: {
    storage: localStorage,
    pick: Object.keys(initialContent),
  },
})
