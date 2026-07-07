import { requiredAssets } from "./assets";
import { routes, apiRoutes } from "./routes";

export function validateShell() {
  return {
    routes,
    apiRoutes,
    assets: requiredAssets.map((asset) => asset.path),
    ok: true
  };
}
