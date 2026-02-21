#!/usr/bin/env node
/**
 * Optimiza las imágenes del catálogo (PNG) reduciendo tamaño.
 * Ejecutar: node scripts/optimize-images.mjs
 * Requiere: npm install sharp --save-dev
 *
 * Redimensiona a max 600px de ancho y comprime, reemplazando los originales.
 * Los productos en src/data/products.ts siguen usando las mismas URLs.
 */

import { readdir, stat, writeFile } from 'fs/promises';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const IMG_DIR = join(__dirname, '../public/img');
const MAX_WIDTH = 600; // Suficiente para cards de ~250-300px en retina

async function optimizeImages() {
  try {
    const sharp = (await import('sharp')).default;
    const files = await readdir(IMG_DIR);
    const pngFiles = files.filter(
      (f) => extname(f).toLowerCase() === '.png' && !f.includes('logo_web')
    );

    if (pngFiles.length === 0) {
      console.log('No se encontraron archivos PNG para optimizar.');
      return;
    }

    console.log(`Optimizando ${pngFiles.length} imágenes PNG...\n`);

    for (const file of pngFiles) {
      const inputPath = join(IMG_DIR, file);

      const info = await stat(inputPath);
      const sizeBefore = (info.size / 1024).toFixed(1);

      const buffer = await sharp(inputPath)
        .resize(MAX_WIDTH, null, { withoutEnlargement: true })
        .png({ compressionLevel: 9 })
        .toBuffer();

      await writeFile(inputPath, buffer);
      const sizeAfter = (buffer.length / 1024).toFixed(1);
      const saved = ((1 - buffer.length / info.size) * 100).toFixed(0);

      console.log(`${file}: ${sizeBefore}KB → ${sizeAfter}KB (${saved}% menos)`);
    }

    console.log('\n✓ Imágenes optimizadas.');
  } catch (err) {
    if (err.code === 'ERR_MODULE_NOT_FOUND' && err.message.includes('sharp')) {
      console.error('Error: sharp no está instalado. Ejecuta: npm install sharp --save-dev');
    } else {
      console.error('Error:', err.message);
    }
    process.exit(1);
  }
}

optimizeImages();
