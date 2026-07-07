export async function POST() {
  return Response.json({ ok: true, mode: "webhook-plan", channel: "sms", received: false });
}
