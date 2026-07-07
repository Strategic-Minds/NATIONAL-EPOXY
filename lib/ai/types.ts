export type AiMode = "demo" | "gateway";

export type QuoteRequest = {
  name?: string;
  phone?: string;
  email?: string;
  zipCode?: string;
  projectType?: string;
  floorSystem?: string;
  urgency?: string;
  notes?: string;
  squareFootage?: string;
};

export type AiChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export type AiChatResponse = {
  ok: true;
  mode: AiMode;
  message: string;
};

export type AiQuoteAssistantResponse = {
  ok: true;
  mode: AiMode;
  summary: string;
  recommendation: string;
  readinessScore: number;
};

export type AiAdminInsightsResponse = {
  ok: true;
  mode: AiMode;
  leadQualityScore: number;
  scopeValidationScore: number;
  pricingCheckScore: number;
  workflowHealth: "healthy" | "needs-review";
  nextBestAction: string;
};
