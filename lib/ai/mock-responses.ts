import type { AiAdminInsightsResponse, AiChatMessage, AiChatResponse, AiQuoteAssistantResponse, QuoteRequest } from "./types";

export function demoChatResponse(messages: AiChatMessage[]): AiChatResponse {
  const last = messages[messages.length - 1]?.content ?? "Help me plan a floor project.";
  return {
    ok: true,
    mode: "demo",
    message:
      `National Epoxy Pros demo assistant: I reviewed "${last.slice(0, 120)}" and recommend starting with a quote-first intake, photo upload, and a finish selection to keep the estimate clean and fast.`
  };
}

export function demoQuoteAssistant(request: QuoteRequest): AiQuoteAssistantResponse {
  const floorSystem = request.floorSystem || "Top flake epoxy";
  return {
    ok: true,
    mode: "demo",
    summary: `Demo summary for ${request.name || "a customer"} in ${request.zipCode || "unknown ZIP"} with a ${request.squareFootage || "pending"} sq ft project.`,
    recommendation: `${floorSystem} is the best demo recommendation for the stated project goals.`,
    readinessScore: 92
  };
}

export function demoAdminInsights(): AiAdminInsightsResponse {
  return {
    ok: true,
    mode: "demo",
    leadQualityScore: 88,
    scopeValidationScore: 91,
    pricingCheckScore: 84,
    workflowHealth: "healthy",
    nextBestAction: "Approve estimate draft, send dry-run follow-up, and schedule install planning."
  };
}
