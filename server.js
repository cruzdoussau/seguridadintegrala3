import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const useViteDev = process.argv.includes('--vite-dev');
const port = process.env.PORT || 5173;

const app = express();

app.use(express.json());

app.get('/api/company', (_req, res) => {
  res.json({
    name: 'MT Technology',
    fantasyName: 'MT Technology',
    address: 'Acuario 5332, Lo Prado, Santiago, Chile',
    phones: ['+56 9 6752 4299', '+56 9 9430 1761'],
    emails: [],
    legalRepresentative: 'Raul Martinez Pena',
    since: 2010
  });
});

if (!useViteDev) {
  app.use(express.static(path.resolve(__dirname, 'dist')));
  app.get('*', (_req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
  });
} else {
  const { createServer: createViteServer } = await import('vite');
  const vite = await createViteServer({
    configFile: false,
    root: __dirname,
    cacheDir: path.resolve(__dirname, 'node_modules', '.vite'),
    optimizeDeps: {
      noDiscovery: true,
      include: []
    },
    server: { middlewareMode: true },
    appType: 'spa'
  });
  app.use(vite.middlewares);
}

app.listen(port, () => {
  console.log(`MT Technology disponible en http://localhost:${port}`);
});
