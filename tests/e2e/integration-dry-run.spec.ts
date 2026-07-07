import { test, expect } from "@playwright/test";

test("twilio and whatsapp dry run endpoints return sent false", async ({ request }) => {
  const sms = await request.post("/api/integrations/twilio/dry-run");
  const whatsapp = await request.post("/api/integrations/whatsapp/dry-run");
  expect((await sms.json()).sent).toBe(false);
  expect((await whatsapp.json()).sent).toBe(false);
});
