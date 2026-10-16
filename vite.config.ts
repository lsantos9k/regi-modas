import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  // No GitHub Pages o site fica em /regi-modas/; no desenvolvimento, na raiz.
  base: command === 'build' ? '/regi-modas/' : '/',
  plugins: [react()],
  // Evita que o Vite resolva o caminho real (pasta virtualizada do Windows) e falhe ao carregar os arquivos
  resolve: { preserveSymlinks: true },
  server: { fs: { strict: false } },
}))
