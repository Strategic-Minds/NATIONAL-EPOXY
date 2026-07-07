export function GET() {
  return Response.json({
    ok: true,
    service: "national-epoxy-pros",
    timestamp: new Date().toISOString(),
    build: "preview-shell"
  });
}
