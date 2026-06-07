const modelContextWindows: Record<string, number> = {
  'qwen-max': 32768,
  'qwen-max-latest': 32768,
  'qwen-plus': 131072,
  'qwen-plus-latest': 131072,
  'qwen-turbo': 131072,
  'qwen-turbo-latest': 131072,
  'qwen-long': 1000000,
  'qwen-coder': 131072,
  'qwen-coder-plus': 131072,
  'qwen3.7-plus': 131072,
  'qwen3.7-max': 131072,
  'qwen3-235b-a22b': 131072,
  'qwen3-30b-a3b': 131072,
  'qwen3-32b': 131072,
  'qwen3-14b': 131072,
  'qwen3-8b': 131072,
  'qwq-plus': 131072,
}

const modelTokenDivisors: Record<string, number> = {
  'qwen-max': 2.2,
  'qwen-max-latest': 2.2,
  'qwen-plus': 2.0,
  'qwen-plus-latest': 2.0,
  'qwen-turbo': 1.8,
  'qwen-turbo-latest': 1.8,
  'qwen-long': 1.8,
  'qwen-coder': 2.3,
  'qwen-coder-plus': 2.3,
  'qwen3.7-plus': 2.0,
  'qwen3.7-max': 2.0,
  'qwen3-235b-a22b': 1.9,
  'qwen3-30b-a3b': 1.9,
  'qwen3-32b': 1.9,
  'qwen3-14b': 1.9,
  'qwen3-8b': 1.9,
  'qwq-plus': 1.9,
}

const defaultContextWindow = 131072
const defaultTokenDivisor = 2.0
export const MAX_PAYLOAD_SIZE = 10 * 1024 * 1024

export function setModelContextWindow(modelId: string, contextWindow: number): void {
  modelContextWindows[modelId] = contextWindow
}

export function getModelContextWindow(modelId: string): number {
  const baseId = modelId.replace('-no-thinking', '')
  return modelContextWindows[baseId] ?? defaultContextWindow
}

export function getModelTokenDivisor(modelId: string): number {
  const baseId = modelId.replace('-no-thinking', '')
  return modelTokenDivisors[baseId] ?? defaultTokenDivisor
}

export function syncModelContextWindows(models: Array<{ id: string; context_window?: number }>): void {
  for (const m of models) {
    if (m.context_window) {
      modelContextWindows[m.id] = m.context_window
    }
  }
}
