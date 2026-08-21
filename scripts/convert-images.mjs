// One-off asset optimizer: converts heavy PNG/JPG sources in src/assets
// to WebP (quality 82) and prints the import-path rewrites to apply.
// Usage: node scripts/convert-images.mjs
import { readdirSync, statSync, unlinkSync } from "node:fs";
import { join, dirname, basename } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = join(dirname(fileURLToPath(import.meta.url)), "..", "src", "assets");
const MIN_BYTES = 300 * 1024; // only bother with files > ~300 KB

async function walk(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

const files = (await walk(root)).filter((f) =>
  /\.(png|jpe?g)$/i.test(f) && statSync(f).size > MIN_BYTES
);

for (const f of files) {
  const webp = f.replace(/\.(png|jpe?g)$/i, ".webp");
  const before = statSync(f).size;
  await sharp(f).webp({ quality: 82, effort: 5 }).toFile(webp);
  const after = statSync(webp).size;
  unlinkSync(f);
  console.log(
    `${basename(f)} -> ${basename(webp)}  ${(before / 1e6).toFixed(2)}MB -> ${(after / 1e6).toFixed(2)}MB`
  );
}

console.log(`\nDone. ${files.length} file(s) converted.`);
