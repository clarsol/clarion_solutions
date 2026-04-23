/**
 * Generates favicon.ico, apple-icon.png, and icon.png for the Clarion Solutions brand.
 * Run with: node scripts/generate-favicons.mjs
 */

import sharp from '../node_modules/sharp/lib/index.js';
import { readFileSync, writeFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');

const fontB64 = readFileSync(resolve(root, 'src/fonts/BebasNeue.ttf')).toString('base64');

function makeSVG(size) {
  const border = Math.max(1, Math.round(size * 0.05));
  const fontSize = Math.round(size * 0.60);
  const y = Math.round(size * 0.74);
  const letterSpacing = Math.round(size * 0.03);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
  <defs>
    <style>@font-face { font-family: 'BebasNeue'; src: url('data:font/ttf;base64,${fontB64}'); }</style>
  </defs>
  <rect width="${size}" height="${size}" fill="#080808"/>
  <rect x="${border / 2}" y="${border / 2}" width="${size - border}" height="${size - border}"
    fill="none" stroke="#C9A84C" stroke-width="${border}"/>
  <text x="${size / 2}" y="${y}" font-family="BebasNeue,Impact" font-size="${fontSize}"
    fill="#C9A84C" text-anchor="middle" letter-spacing="${letterSpacing}">CS</text>
</svg>`;
}

function buildIco(pngBuffers) {
  // ICO format: header + one directory entry per image + image data
  const count = pngBuffers.length;
  const headerSize = 6;
  const entrySize = 16;
  const dataOffset = headerSize + entrySize * count;

  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);     // reserved
  header.writeUInt16LE(1, 2);     // type: 1 = icon
  header.writeUInt16LE(count, 4); // number of images

  const entries = [];
  let offset = dataOffset;
  for (const { w, h, buf } of pngBuffers) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(w === 256 ? 0 : w, 0);   // width (0 = 256)
    entry.writeUInt8(h === 256 ? 0 : h, 1);   // height
    entry.writeUInt8(0, 2);                    // color count
    entry.writeUInt8(0, 3);                    // reserved
    entry.writeUInt16LE(1, 4);                 // planes
    entry.writeUInt16LE(32, 6);                // bit count
    entry.writeUInt32LE(buf.length, 8);        // data size
    entry.writeUInt32LE(offset, 12);           // data offset
    entries.push(entry);
    offset += buf.length;
  }

  return Buffer.concat([header, ...entries, ...pngBuffers.map((x) => x.buf)]);
}

async function run() {
  const sizes = [16, 32, 48];
  const pngBuffers = await Promise.all(
    sizes.map(async (s) => ({
      w: s,
      h: s,
      buf: await sharp(Buffer.from(makeSVG(s))).png().toBuffer(),
    }))
  );

  // favicon.ico (16 + 32 + 48)
  const ico = buildIco(pngBuffers);
  writeFileSync(resolve(root, 'src/app/favicon.ico'), ico);
  console.log(`favicon.ico  ${ico.length} bytes (16×16, 32×32, 48×48)`);

  // apple-icon.png (180×180) — placed in src/app for Next.js App Router
  const apple = await sharp(Buffer.from(makeSVG(180))).png().toBuffer();
  writeFileSync(resolve(root, 'src/app/apple-icon.png'), apple);
  console.log(`apple-icon.png  ${apple.length} bytes (180×180)`);

  // icon.png (32×32) — Next.js uses this for <link rel="icon">
  const icon32 = pngBuffers.find((p) => p.w === 32).buf;
  writeFileSync(resolve(root, 'src/app/icon.png'), icon32);
  console.log(`icon.png  ${icon32.length} bytes (32×32)`);
}

run().catch((e) => { console.error(e); process.exit(1); });
