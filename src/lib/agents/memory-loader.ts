// ─────────────────────────────────────────────────────────────
// Memory Loader — Mission Control AI
// Loads relevant memories for context injection into prompts.
// ─────────────────────────────────────────────────────────────

import type { MemorySchemaType } from "@/lib/validators";
import { memoryService } from "@/lib/services/memory.service";

/**
 * Loads the user's relevant memories.
 *
 * Strategy:
 * 1. Fetch all memories for the user (V1 — small dataset assumption).
 * 2. Filter out expired memories.
 * 3. If contextTags are provided, boost memories that share tags.
 * 4. Sort by confidence descending.
 * 5. Cap at a reasonable limit to avoid blowing up the prompt.
 */
export async function loadMemories(
  userId: string,
  contextTags: string[] = [],
  limit: number = 20
): Promise<MemorySchemaType[]> {
  const allMemories = await memoryService.listByUser(userId);

  const now = Date.now();

  // Filter out expired memories
  const active = allMemories.filter(
    (m) => !m.expiresAt || m.expiresAt > now
  );

  // Score and sort: tag overlap gives a boost, then sort by confidence
  const scored = active.map((memory) => {
    const tagOverlap = contextTags.length > 0
      ? memory.tags.filter((t) => contextTags.includes(t)).length
      : 0;
    return {
      memory,
      score: memory.confidence + tagOverlap * 10,
    };
  });

  scored.sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((s) => s.memory);
}
