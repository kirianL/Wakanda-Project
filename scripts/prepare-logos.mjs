/**
 * Prepara los assets de marca para la web.
 *
 * Los PNG originales del logo vienen en un lienzo cuadrado con mucho aire.
 * Este script los recorta al contenido (trim), los exporta como WebP
 * y copia fotografías/texturas a `src/assets/` para que Astro las optimice.
 *
 * Uso: npm run brand:logos
 */
import { mkdir, copyFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const ROOT = path.resolve(import.meta.dirname, '..');
const SOURCE = path.join(ROOT, 'Assets');
const BRAND_OUT = path.join(ROOT, 'src', 'assets', 'brand');

/** Logos: archivo origen → nombre semántico de salida. */
const LOGOS = {
  'WAKANDAPROJECT_RGB-01.png': 'logo-stacked-earth.png',
  'WAKANDAPROJECT_RGB-02.png': 'logo-stacked-white.png',
  'WAKANDAPROJECT_RGB-04.png': 'logo-inline-earth.png',
  'WAKANDAPROJECT_RGB-05.png': 'logo-inline-white.png',
  'WAKANDAPROJECT_RGB-09.png': 'isotype-earth.png',
  'WAKANDAPROJECT_RGB-10.png': 'isotype-white.png',
};

/** Texturas y piezas gráficas que se usan tal cual. */
const TEXTURES = {
  'fondos -01.png': 'pattern-ochre.png',
  'fondos -02.png': 'pattern-earth.png',
  'INSTAPORTFOLIOWK-08.png': 'quote-poster.png',
};

await mkdir(BRAND_OUT, { recursive: true });

for (const [source, target] of Object.entries(LOGOS)) {
  await sharp(path.join(SOURCE, source))
    .trim()
    .png({ compressionLevel: 9 })
    .toFile(path.join(BRAND_OUT, target));
  console.log(`✓ logo   ${target}`);
}

for (const [source, target] of Object.entries(TEXTURES)) {
  await copyFile(path.join(SOURCE, source), path.join(BRAND_OUT, target));
  console.log(`✓ asset  ${target}`);
}
