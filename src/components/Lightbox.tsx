import { useEffect, useRef } from 'react'
import { AnimatePresence, m } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

export type Slide = { src: string; srcSet?: string; alt: string }

type Props = {
  slides: Slide[]
  index: number | null
  onChange: (index: number | null) => void
}

/** Visualização ampliada: fecha com Esc, clique fora ou botão; setas do teclado navegam. */
export default function Lightbox({ slides, index, onChange }: Props) {
  const open = index !== null
  const closeRef = useRef<HTMLButtonElement>(null)
  const total = slides.length

  useEffect(() => {
    if (!open) return
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onChange(null)
      if (total > 1 && e.key === 'ArrowRight') onChange((index! + 1) % total)
      if (total > 1 && e.key === 'ArrowLeft') onChange((index! - 1 + total) % total)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [open, index, total, onChange])

  const btn =
    'absolute flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white'

  return (
    <AnimatePresence>
      {open && (
        <m.div
          role="dialog"
          aria-modal="true"
          aria-label="Imagem ampliada"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/90 p-4 sm:p-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={() => onChange(null)}
        >
          <button ref={closeRef} type="button" aria-label="Fechar imagem" className={`${btn} right-4 top-4`} onClick={() => onChange(null)}>
            <X size={22} aria-hidden />
          </button>

          {total > 1 && (
            <>
              <button
                type="button"
                aria-label="Imagem anterior"
                className={`${btn} left-3 top-1/2 -translate-y-1/2 sm:left-6`}
                onClick={(e) => {
                  e.stopPropagation()
                  onChange((index! - 1 + total) % total)
                }}
              >
                <ChevronLeft size={24} aria-hidden />
              </button>
              <button
                type="button"
                aria-label="Próxima imagem"
                className={`${btn} right-3 top-1/2 -translate-y-1/2 sm:right-6`}
                onClick={(e) => {
                  e.stopPropagation()
                  onChange((index! + 1) % total)
                }}
              >
                <ChevronRight size={24} aria-hidden />
              </button>
            </>
          )}

          <m.img
            key={index}
            src={slides[index!].src}
            alt={slides[index!].alt}
            className="max-h-full max-w-full object-contain"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          />
        </m.div>
      )}
    </AnimatePresence>
  )
}
