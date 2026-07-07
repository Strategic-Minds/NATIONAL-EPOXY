import { demoAdminInsights, demoChatResponse, demoQuoteAssistant } from "./mock-responses";
import type { AiAdminInsightsResponse, AiChatMessage, AiChatResponse, AiMode, AiQuoteAssistantResponse, QuoteRequest } from "./types";

function hasGatewayConfig() {
  return Boolean(process.env.AI_GATEWAY_API_KEY || process.env.OPENAI_API_KEY || process.env.GROQ_API_KEY);
}

export function resolveAiMode(): AiMode {
  return hasGatewayConfig() ? "gateway" : "demo";
}

export async function runAiChat(messages: AiChatMessage[]): Promise<AiChatResponse> {
  return demoChatResponse(messages);
}

export async function runQuoteAssistant(request: QuoteRequest): Promise<AiQuoteAssistantResponse> {
  return demoQuoteAssistant(request);
}

export async function runAdminInsights(): Promise<AiAdminInsightsResponse> {
  return demoAdminInsights();
}
