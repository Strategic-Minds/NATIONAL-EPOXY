import { runAdminInsights } from "@/lib/ai/provider";

export async function GET() {
  return Response.json(await runAdminInsights());
}
