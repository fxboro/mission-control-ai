// ─────────────────────────────────────────────────────────────
// Model Adapter — Placeholder Implementation
// Mission Control AI
//
// This module provides a default no-op adapter that returns
// mock responses. Swap this out for a real vendor adapter
// (OpenAI, Anthropic, Gemini, etc.) when you're ready.
// ─────────────────────────────────────────────────────────────

import type { ModelAdapter, ModelRequest, ModelResponse } from "./types";

/**
 * Placeholder adapter that echoes back a JSON skeleton.
 * Replace this with a real implementation when integrating
 * an actual LLM vendor.
 *
 * Usage:
 *   import { createModelAdapter } from "@/lib/agents/model-adapter";
 *   const adapter = createModelAdapter();
 *   const response = await adapter.generate({ systemPrompt, userPrompt });
 */
export class PlaceholderModelAdapter implements ModelAdapter {
  async generate(params: ModelRequest): Promise<ModelResponse> {
    // In development, log the prompts for debugging
    console.log("[PlaceholderModelAdapter] System prompt length:", params.systemPrompt.length);
    console.log("[PlaceholderModelAdapter] User prompt length:", params.userPrompt.length);

    return {
      raw: JSON.stringify({
        _placeholder: true,
        _message: "This is a placeholder response. Integrate a real model adapter to get actual AI outputs.",
        _systemPromptPreview: params.systemPrompt.slice(0, 100),
      }),
      parsed: {
        _placeholder: true,
        _message: "This is a placeholder response. Integrate a real model adapter to get actual AI outputs.",
      },
      usage: { promptTokens: 0, completionTokens: 0, totalTokens: 0 },
    };
  }
}

/**
 * Factory function for creating a model adapter.
 * Centralizes adapter creation so the orchestrator doesn't
 * care which vendor is being used.
 *
 * Future: Accept a config param to select between vendors.
 */
export function createModelAdapter(): ModelAdapter {
  // TODO: Replace with real adapter selection logic
  // e.g. if (config.provider === "openai") return new OpenAIAdapter(config);
  return new PlaceholderModelAdapter();
}
