import fs from "node:fs";
const [,, name] = process.argv;
fs.mkdirSync("docs/receipts", { recursive: true });
fs.writeFileSync(`docs/receipts/${name}.json`, JSON.stringify({ ok: true, timestamp: new Date().toISOString() }, null, 2));
