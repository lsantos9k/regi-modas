import { useEffect, useRef, useState } from 'react'
import { Instagram } from 'lucide-react'
import { m } from 'framer-motion'
import Photo from './Photo'
import Slideshow from './Slideshow'
import MobileGallery, { type Group } from './MobileGallery'
import Lightbox, { type Slide } from './Lightbox'
import { INSTAGRAM_URL, ease } from '../lib'
import { pic } from '../images'

const kidsSlides: Slide[] = [
  { ...pic('infantil'), alt: 'Conjunto infantil azul com babado e bordado de gatinhos, pendurado em cabide' },
  { ...pic('infantil-2'), alt: 'Dois bodies de bebê: um verde-água com estampa de flor e coelhinho, outro rosa liso' },
  { ...pic('infantil-3'), alt: 'Conjunto infantil com camisa polo verde-oliva estampada e bermuda caramelo com cordão' },
  { ...pic('infantil-4'), alt: 'Vestido infantil vermelho com estampa de corações e dois laços de cabelo' },
  { ...pic('infantil-5'), alt: 'Menina sorrindo com camiseta off-white estampada Tropical Capybara' },
  { ...pic('infantil-6'), alt: 'Bebê sorrindo com jardineira rosa bordada e body branco' },
]

const bagSlides: Slide[] = [
  { ...pic('bolsa-1'), alt: 'Bolsa de mão rosada texturizada com alças marrons e detalhes dourados' },
  { ...pic('bolsa-2'), alt: 'Bolsa pequena caramelo com alça de mão e zíper dourado' },
  { ...pic('bolsa-3'), alt: 'Bolsa preta com alça de corrente prateada' },
  { ...pic('bolsa-4'), alt: 'Três carteiras: branca, rosa e azul turquesa' },
  { ...pic('bolsa-5'), alt: 'Bolsa estruturada cinza clara com duas alças' },
]

const adultSlides: Slide[] = [
  { ...pic('adulto-1'), alt: 'Vestido longo azul e branco com estampa de folhas, usado dentro da loja' },
  { ...pic('adulto-2'), alt: 'Camiseta azul-marinho masculina plus size com estampa discreta no peito' },
  { ...pic('adulto-3'), alt: 'Cropped vermelho com short jeans branco' },
  { ...pic('adulto-4'), alt: 'Blusa verde decote em V com short jeans branco' },
  { ...pic('adulto-5'), alt: 'Vestido azul royal de manga curta com bolsos' },
  { ...pic('adulto-6'), alt: 'Duas bermudas de sarja, uma verde-oliva e outra bege' },
  { ...pic('adulto-7'), alt: 'Calça jeans feminina de cintura alta com botões aparentes' },
]

const accessorySlides: Slide[] = [
  { ...pic('acessorio-1'), alt: 'Dois kits de babador bandana infantil, um rosa com nuvens e outro branco estampado' },
  { ...pic('acessorio-2'), alt: 'Cinco laços de cabelo grandes e coloridos' },
  { ...pic('acessorio-3'), alt: 'Três carteiras masculinas de couro preto em caixas' },
  { ...pic('acessorio-4'), alt: 'Dois cintos de couro preto com fivelas prateadas' },
  { ...pic('acessorio-5'), alt: 'Duas naninhas flannel em formato de nuvem, uma rosa e outra bege, nas caixas' },
]

type Item = { id: string; label: string; tone: 'sand' | 'stone' | 'clay' | 'sage' | 'rose'; cls: string }

const items: Item[] = [
  { id: 'adulto', label: 'Moda adulto — vestidos e conjuntos', tone: 'clay', cls: 'lg:row-span-2' },
  { id: 'infantil', label: 'Moda infantil', tone: 'sage', cls: 'lg:row-span-2' },
  { id: 'bolsas', label: 'Bolsas', tone: 'stone', cls: '' },
  { id: 'acessorios', label: 'Acessórios', tone: 'rose', cls: '' },
]

const mobileGroups: Group[] = [
  { id: 'adulto', label: 'Moda adulto', slides: adultSlides },
  { id: 'infantil', label: 'Moda infantil', slides: kidsSlides },
  { id: 'bolsas', label: 'Bolsas', slides: bagSlides },
  { id: 'acessorios', label: 'Acessórios', slides: accessorySlides },
]

type Open = { slides: Slide[]; index: number } | null

export default function Showcase() {
  const [open, setOpen] = useState<Open>(null)
  const [tick, setTick] = useState(0)
  const [hovered, setHovered] = useState(false)
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const paused = hovered || open !== null || !visible

  // As galerias só trocam (e baixam fotos) enquanto a seção está na tela.
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { rootMargin: '200px' })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  // Relógio único: as galerias de adulto, infantil, bolsas e acessórios trocam de foto ao mesmo tempo, a cada 4,5 s.
  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => setTick((t) => t + 1), 4500)
    return () => window.clearInterval(id)
  }, [paused])
  const show = (slides: Slide[], index: number) => setOpen({ slides, index })

  return (
    <section ref={sectionRef} id="colecoes" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <m.div
        className="mb-14 max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease }}
      >
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-accent">Adulto · Infantil · Bolsas</p>
        <h2 className="text-4xl md:text-5xl">Nossas Coleções<span className="text-accent">.</span></h2>
        <div aria-hidden className="mt-6 h-0.5 w-16 bg-accent" />
        <p className="mt-5 max-w-prose leading-relaxed text-ink/70">
          Peças selecionadas com o foco na qualidade e no estilo, para você e para as crianças.
        </p>
      </m.div>

      {/* Celular: galeria sem corte · Tablet: grade 2×2 · Desktop: bento 3 colunas */}
      <div className="md:hidden">
        <MobileGallery groups={mobileGroups} tick={tick} onOpen={show} onPause={setHovered} />
      </div>
      <div className="hidden gap-5 md:grid md:grid-cols-2 lg:auto-rows-[280px] lg:grid-cols-3">
        {items.map((it, i) => (
          <m.figure
            key={it.id}
            className={`group aspect-[4/5] overflow-hidden lg:aspect-auto ${it.cls}`}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease, delay: i * 0.1 }}
          >
            {it.id === 'adulto' ? (
              <Slideshow sizes="(min-width: 1024px) 360px, 45vw" slides={adultSlides} tick={tick} onOpen={(n) => show(adultSlides, n)} onPause={setHovered} />
            ) : it.id === 'bolsas' ? (
              <Slideshow sizes="(min-width: 1024px) 360px, 45vw" slides={bagSlides} tick={tick} onOpen={(n) => show(bagSlides, n)} onPause={setHovered} />
            ) : it.id === 'infantil' ? (
              <Slideshow sizes="(min-width: 1024px) 360px, 45vw" slides={kidsSlides} tick={tick} onOpen={(n) => show(kidsSlides, n)} onPause={setHovered} />
            ) : it.id === 'acessorios' ? (
              <Slideshow sizes="(min-width: 1024px) 360px, 45vw" slides={accessorySlides} tick={tick} fit="contain" onOpen={(n) => show(accessorySlides, n)} onPause={setHovered} />
            ) : (
              <div className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]">
                <Photo label={it.label} tone={it.tone} />
              </div>
            )}
          </m.figure>
        ))}
      </div>

      <div className="mt-14 flex justify-center">
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 rounded-full border border-accent px-8 py-3.5 text-accent transition duration-300 hover:bg-accent hover:text-white"
        >
          <Instagram size={18} aria-hidden />
          Ver mais no Instagram
        </a>
      </div>

      <Lightbox
        slides={open?.slides ?? []}
        index={open?.index ?? null}
        onChange={(n) => setOpen((o) => (n === null || !o ? null : { ...o, index: n }))}
      />
    </section>
  )
}
