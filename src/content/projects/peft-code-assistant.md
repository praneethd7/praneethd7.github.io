---
title: Fine-Tuning Code Llama with PEFT/LoRA
category: Generative AI
type: current
tags: [PEFT, LoRA, HuggingFace, PyTorch, LLMs]
featured: true
order: 2
---

A specialized code-generation assistant developed by fine-tuning Code Llama (13B) on domain-specific repository patterns, improving codebase-specific code completions by 35%.

### Key Features
- **Parameter-Efficient Fine-Tuning (PEFT)**: Employed QLoRA (Quantized Low-Rank Adaptation) to train model on single consumer-grade A100 GPU, reducing training cost by 90%.
- **Context Extension**: Fine-tuned RoPE (Rotary Position Embeddings) to expand context window from 4k to 16k tokens.
- **Evaluation**: Evaluated using HumanEval and custom internal code benchmarks for syntax accuracy and logic correctness.

### Technology Stack
- **Tools**: HuggingFace PEFT, TRL (Transformer Reinforcement Learning), PyTorch
- **Infrastructure**: RunPod A100 instances, vLLM for high-throughput inference

<div class="mt-6 flex justify-center">
  <img class="rounded-xl border border-white/10 shadow-lg max-w-md w-full" src="/assets/peft_code_llama.png" alt="Fine-Tuning Code Llama with PEFT/LoRA">
</div>

