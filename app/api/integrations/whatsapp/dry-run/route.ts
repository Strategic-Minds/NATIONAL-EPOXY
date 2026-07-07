export async function POST() {
  return Response.json({
    ok: true,
    mode: "dry-run",
    channel: "whatsapp",
    wouldSendTo: "+1-555-555-5555",
    template: "WhatsApp project update template",
    requiresConsent: true,
    sent: false,
    nextAction: "Configure Twilio env vars and approve live sending gate."
  });
}
