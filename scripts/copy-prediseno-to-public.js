import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

function copyRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  const stats = fs.statSync(src);
  if (stats.isDirectory()) {
    if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
    const entries = fs.readdirSync(src);
    for (const entry of entries) {
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');
const srcDir = path.join(repoRoot, 'prediseño', 'contexto-sitio', 'mockup');
const destDir = path.join(repoRoot, 'public', 'prediseño', 'contexto-sitio', 'mockup');

console.log('Copying prediseño mockup files...');
if (!fs.existsSync(srcDir)) {
  console.warn('Source prediseño mockup not found at', srcDir);
  process.exit(0);
}
copyRecursive(srcDir, destDir);
console.log('Copied prediseño mockup to public folder:', destDir);
