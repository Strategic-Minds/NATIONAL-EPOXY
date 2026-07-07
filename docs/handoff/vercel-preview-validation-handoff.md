# Vercel Preview Validation Handoff

- Verify routes: `/`, `/dashboard`, `/admin`, `/installer`, `/floor-design-center`
- Verify APIs: `/api/health`, `/api/cron/validate`
- Verify no Phoenix references
- Verify PWA manifest and receipts
- Verify `assetWarnings` in `/api/cron/validate` remain accurate until all workbook assets are uploaded
- Preview deployment is required before any production consideration
