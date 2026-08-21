// Generates circular favicons from IMG_1319 and og.png from the chosen thumbnail.
import sharp from "sharp";

const FACE = "C:/Users/MARYAM/Downloads/IMG_1319.PNG";
const THUMB = "C:/Users/MARYAM/Downloads/Maryam Waqar (1).png";
const OUT = "public";

const circleMask = (s) =>
  Buffer.from(
    `<svg width="${s}" height="${s}"><circle cx="${s / 2}" cy="${s / 2}" r="${s / 2}" fill="#fff"/></svg>`
  );

async function circlePng(src, size, out) {
  await sharp(src)
    .resize(size, size, { fit: "cover" })
    .composite([{ input: circleMask(size), blend: "dest-in" }])
    .png()
    .toFile(out);
}

await circlePng(FACE, 512, `${OUT}/favicon-512.png`);
await circlePng(FACE, 192, `${OUT}/icon-192.png`);
await circlePng(FACE, 180, `${OUT}/apple-touch-icon.png`);
await circlePng(FACE, 32, `${OUT}/favicon-32.png`);

await sharp(THUMB)
  .resize(1200, 630, { fit: "cover" })
  .jpeg({ quality: 88 })
  .toFile(`${OUT}/og.png`);

console.log("favicons (circle) + og.png regenerated");
