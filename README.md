# Regi Modas — landing page

Página única (React + Vite + TypeScript + Tailwind, Framer Motion e lucide-react). Sem back-end.

```bash
npm install
npm run dev      # desenvolvimento em http://localhost:5173
npm run build    # gera a pasta dist
```

- Dados da loja (WhatsApp, Instagram, endereço, horários, nota): `src/lib.ts`
- Fotos: `src/assets/` (versões `-sm` são geradas para telas pequenas; larguras em `src/image-widths.json`)
- Galerias e ampliação das fotos: `src/components/Showcase.tsx`, `Slideshow.tsx`, `MobileGallery.tsx`, `Lightbox.tsx`
