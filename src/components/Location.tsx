import { MapPin } from 'lucide-react'
import { m } from 'framer-motion'
import { ADDRESS, MAPS_URL, ease } from '../lib'

const MAP_EMBED = 'https://maps.google.com/maps?q=-23.5056481,-47.6152564&z=17&hl=pt-BR&output=embed'

export default function Location() {
  return (
    <section id="localizacao" className="mx-auto max-w-7xl scroll-mt-16 px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
        <m.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease }}
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-accent">Localização</p>
          <h2 className="text-4xl leading-tight md:text-5xl">
            Onde <span className="italic text-accent">estamos.</span>
          </h2>
          <p className="mt-6 flex items-start gap-3 text-ink/70">
            <MapPin size={20} strokeWidth={1.5} className="mt-1 shrink-0 text-accent" aria-hidden />
            <span className="leading-relaxed">{ADDRESS}</span>
          </p>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-accent px-8 py-4 font-medium text-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_-6px_rgba(238,119,53,0.2)] sm:w-auto"
          >
            Abrir no Google Maps
          </a>
        </m.div>

        <m.div
          className="relative mx-auto aspect-square w-full max-w-xl"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease }}
        >
          {/* Carrega sozinho, mas só quando a pessoa chega perto da seção (loading="lazy"). */}
          <iframe
            title="Mapa com a localização da Regi Modas em Araçoiaba da Serra"
            src={MAP_EMBED}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="relative h-full w-full border-2 border-accent bg-zinc-100"
          />
        </m.div>
      </div>
    </section>
  )
}
