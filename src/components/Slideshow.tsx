import { useEffect, useState } from 'react'
import type { Slide } from './Lightbox'

type Props = {
  slides: Slide[]
  /** Posição global do relógio compartilhado; cada galeria usa o resto pela própria quantidade de fotos. */
  tick: number
  onOpen: (index: number) => void
  onPause: (paused: boolean) => void
  /** Largura em que a galeria aparece na tela; o navegador usa isso para escolher o arquivo de imagem certo. */
  sizes?: string
  /** 'contain' mostra a foto inteira sobre um fundo desfocado da própria foto (para fotos verticais em quadros baixos). */
  fit?: 'cover' | 'contain'
}

/** Uma imagem por vez, com troca em fade. O tempo é controlado por quem a usa, para várias galerias trocarem juntas. */
export default function Slideshow({ slides, tick, onOpen, onPause, sizes, fit = 'cover' }: Props) {
  const n = slides.length
  const current = tick % n
  const next = (current + 1) % n

  // A foto anterior fica montada só durante o fade de saída; depois sai do DOM.
  const [prev, setPrev] = useState(current)
  useEffect(() => {
    const t = window.setTimeout(() => setPrev(current), 1100)
    return () => window.clearTimeout(t)
  }, [current])

  return (
    <button
      type="button"
      aria-label={`Ampliar: ${slides[current].alt}`}
      onClick={() => onOpen(current)}
      // Só mouse e foco de teclado pausam; um toque na tela não deixa a galeria presa em pausa.
      onPointerEnter={(e) => e.pointerType === 'mouse' && onPause(true)}
      onPointerLeave={() => onPause(false)}
      onFocus={(e) => e.currentTarget.matches(':focus-visible') && onPause(true)}
      onBlur={() => onPause(false)}
      className="relative block h-full w-full cursor-zoom-in overflow-hidden"
    >
      {slides.map((s, i) => {
        // Monta só a atual, a que está saindo e a próxima (pré-carga): evita baixar todas as fotos de uma vez.
        if (i !== current && i !== prev && i !== next) return null
        const active = i === current
        return (
          <span
            key={s.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${active ? 'opacity-100' : 'opacity-0'}`}
          >
            {fit === 'contain' && (
              <img
                src={s.src}
                srcSet={s.srcSet}
                sizes={sizes}
                alt=""
                aria-hidden
                loading="lazy"
                decoding="async"
                draggable={false}
                className="absolute inset-0 h-full w-full scale-110 object-cover opacity-60 blur-xl"
              />
            )}
            <img
              src={s.src}
              srcSet={s.srcSet}
              sizes={sizes}
              alt={active ? s.alt : ''}
              aria-hidden={!active || undefined}
              loading="lazy"
              decoding="async"
              draggable={false}
              className={`relative h-full w-full ${fit === 'contain' ? 'object-contain' : 'object-cover'}`}
            />
          </span>
        )
      })}
    </button>
  )
}
