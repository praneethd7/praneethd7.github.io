---
title: Multi-Agent Software Engineering Workspace
category: Generative AI
type: current
tags: [Multi-Agent Systems, crewAI, Autogen, LLMs]
featured: true
order: 3
---

An autonomous agent workspace where a crew of specialized AI agents (Product Manager, Coder, QA Engineer, Tech Writer) collaborate to plan, write, test, and write documentation for small software features.

### Key Features
- **Hierarchical Planning**: Agents draft an implementation plan first, seek feedback, and execute in sandboxed containers.
- **Auto-Debugging Loops**: The Coder agent writes code, the QA agent runs automated tests, and syntax/runtime errors are piped back to the Coder for automatic iterative bug fixing.
- **Shared Memory**: Utilizes vector database short-term memory to share context between agents during execution steps.

### Technology Stack
- **Frameworks**: crewAI, LangGraph, Docker (sandboxing)
- **Base Models**: Gemini 1.5 Flash, GPT-4o

<div class="mt-6 flex justify-center">
  <img class="rounded-xl border border-white/10 shadow-lg max-w-md w-full" src="/assets/multi_agent_crew.png" alt="Multi-Agent Software Engineering Workspace">
</div>

