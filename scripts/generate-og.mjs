/**
 * Generates public/og-image.png — 1200×630 social share card for FoxMargin.
 * Run: node scripts/generate-og.mjs
 * Requires: sharp (already in node_modules)
 */
import sharp from 'sharp';
import { readFileSync, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dir = dirname(fileURLToPath(import.meta.url));
const root  = join(__dir, '..');

// Brand colours
const NAVY      = '#0f2d52';
const FOX       = '#d4500a';
const FOX_LIGHT = '#f0884a';
const WHITE     = '#ffffff';
const MUTED     = '#a8c0d6';  // lightened navy-on-navy

const W = 1200, H = 630;

// ── Read logo PNG and convert to base64 data-URI ──────────────────
const logoPath = join(root, 'public', 'foxmargin-logo.png');
const logoB64  = existsSync(logoPath)
  ? `data:image/png;base64,${readFileSync(logoPath).toString('base64')}`
  : null;

const logoTag = logoB64
  ? `<image href="${logoB64}" x="80" y="80" width="72" height="72" />`
  : '';

// ── SVG template ──────────────────────────────────────────────────
const svg = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
     width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <!-- subtle diagonal gradient for depth -->
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%"   stop-color="#112e50"/>
      <stop offset="100%" stop-color="#0a1e35"/>
    </linearGradient>
    <!-- orange accent bar gradient -->
    <linearGradient id="bar" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%"   stop-color="${FOX}"/>
      <stop offset="100%" stop-color="${FOX_LIGHT}"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="url(#bg)" />

  <!-- Top accent bar -->
  <rect x="0" y="0" width="${W}" height="6" fill="url(#bar)" />

  <!-- Bottom accent bar -->
  <rect x="0" y="${H - 6}" width="${W}" height="6" fill="url(#bar)" rx="0" />

  <!-- Logo -->
  ${logoTag}

  <!-- FoxMargin wordmark -->
  <text x="172" y="134" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        font-size="42" font-weight="800" fill="${WHITE}" letter-spacing="-0.5">Fox</text>
  <text x="248" y="134" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        font-size="42" font-weight="800" fill="${FOX_LIGHT}" letter-spacing="-0.5">Margin</text>

  <!-- Divider -->
  <rect x="80" y="165" width="120" height="3" fill="${FOX}" rx="2"/>

  <!-- Headline -->
  <text x="80" y="260" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        font-size="56" font-weight="800" fill="${WHITE}" letter-spacing="-1">Free Business Tools</text>
  <text x="80" y="330" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        font-size="56" font-weight="800" fill="${WHITE}" letter-spacing="-1">for Small Business</text>

  <!-- Subtitle -->
  <text x="80" y="395" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        font-size="26" font-weight="400" fill="${MUTED}">Invoices · Receipts · Quotes · Purchase Orders</text>
  <text x="80" y="430" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        font-size="26" font-weight="400" fill="${MUTED}">Profit Margin · Break-Even · Markup Calculators</text>

  <!-- Feature pills -->
  ${makePill('No signup', 80, 490)}
  ${makePill('Live preview', 230, 490)}
  ${makePill('100% free', 415, 490)}
  ${makePill('No watermarks', 561, 490)}

  <!-- URL -->
  <text x="${W - 80}" y="${H - 44}"
        font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        font-size="24" font-weight="600" fill="${FOX_LIGHT}"
        text-anchor="end">foxmargin.com</text>
</svg>
`;

function makePill(label, x, y) {
  const pad = 18, h = 38, r = 19;
  // approximate char width
  const w = label.length * 13.5 + pad * 2;
  return `
  <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}"
        fill="none" stroke="${FOX}" stroke-width="1.5" opacity="0.7"/>
  <text x="${x + w / 2}" y="${y + h / 2 + 6}"
        font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        font-size="16" font-weight="600" fill="${FOX_LIGHT}"
        text-anchor="middle">${label}</text>`;
}

const outPath = join(root, 'public', 'og-image.png');

await sharp(Buffer.from(svg))
  .png()
  .toFile(outPath);

console.log(`✓ Written ${outPath}`);
