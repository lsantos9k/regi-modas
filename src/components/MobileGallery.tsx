import Slideshow from './Slideshow'
import type { Slide } from './Lightbox'

export type Group = { id: string; label: string; slides: Slide[] }

type Props = {
  groups: Group[]
  tick: number
  onOpen: (slides: Slide[], index: number) => void
  onPause: (paused: boolean) => void
}

/** Galeria só para celular: 4 quadros ao mesmo tempo (um por categoria), com as fotos inteiras, sem corte. */
export default function MobileGallery({ groups, tick, onOpen, onPause }: Props) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {groups.map((g) => (
        <div key={g.id} className="relative aspect-square overflow-hidden">
          <Slideshow slides={g.slides} tick={tick} fit="contain" sizes="45vw" onOpen={(n) => onOpen(g.slides, n)} onPause={onPause} />
          <span className="pointer-events-none absolute left-1 top-1 z-10 rounded-full bg-white/85 px-2 py-px text-[8px] font-medium uppercase leading-4 tracking-[0.12em] text-ink">
            {g.label}
          </span>
        </div>
      ))}
    </div>
  )
}
