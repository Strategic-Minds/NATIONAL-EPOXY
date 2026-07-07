import { runQuoteAssistant } from "@/lib/ai/provider";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const response = await runQuoteAssistant(body || {});
  return Response.json(response);
}
