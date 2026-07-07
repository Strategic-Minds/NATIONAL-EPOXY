function payload(channel: "sms" | "whatsapp") {
  return {
    ok: true,
    mode: "dry-run",
    channel,
    wouldSendTo: "+1-555-555-5555",
    template: `${channel.toUpperCase()} project update template`,
    requiresConsent: true,
    sent: false,
    nextAction: "Configure Twilio env vars and approve live sending gate."
  };
}

export async function POST() {
  return Response.json(payload("sms"));
}
