import fs from "node:fs";
import path from "node:path";
const roots = ["app", "components", "lib", "scripts", "tests", "public"];
const ignored = new Set([
  path.join("lib", "no-phoenix.ts"),
  path.join("scripts", "validate-no-phoenix.mjs"),
  path.join("tests", "e2e", "no-phoenix.spec.ts")
]);
const hits = [];
for (const root of roots) {
  if (!fs.existsSync(root)) continue;
  for (const file of walk(root)) {
    const text = fs.readFileSync(file, "utf8").replace(/no-phoenix/gi, "");
    if (/phoenix/i.test(text) && !ignored.has(path.normalize(file))) hits.push(file);
  }
}
function* walk(dir) { for (const entry of fs.readdirSync(dir, { withFileTypes: true })) { const full = path.join(dir, entry.name); if (entry.isDirectory()) yield* walk(full); else yield full; } }
console.log(JSON.stringify({ ok: hits.length === 0, hits }, null, 2));
