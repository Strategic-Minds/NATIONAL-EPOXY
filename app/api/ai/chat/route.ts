import { runAiChat } from "@/lib/ai/provider";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  const response = await runAiChat(Array.isArray(body.messages) ? body.messages : []);
  return Response.json(response);
}
