import { useState } from 'react'
import { Menu, MessageCircle, X } from 'lucide-react'
import { AnimatePresence, m } from 'framer-motion'
import { WHATSAPP_URL } from '../lib'

const links = [
  { href: '#colecoes', label: 'Coleções' },
  { href: '#loja', label: 'A Loja' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#localizacao', label: 'Localização' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#top" className="font-serif text-2xl tracking-tight">regi modas</a>

        <nav aria-label="Principal" className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="link-underline text-sm text-ink/70 transition-colors hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar com a Regi Modas pelo WhatsApp"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_-8px_rgba(238,119,53,0.5)]"
          >
            <MessageCircle size={16} aria-hidden />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          <button
            type="button"
            className="p-2 md:hidden"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <m.nav
            aria-label="Menu mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-white md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-6 pt-2">
              {links.map((l) => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-3 font-serif text-2xl">
                  {l.label}
                </a>
              ))}
            </div>
          </m.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
