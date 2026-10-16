import { Clock, MapPin, Star } from 'lucide-react'
import { m } from 'framer-motion'
import { pic } from '../images'
import { ADDRESS, HOURS, MAPS_URL, RATING, ease } from '../lib'

export default function Store() {
  return (
    <section id="loja" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
        <m.div
          className="order-2 lg:order-1"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease }}
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-accent">Visite-nos</p>
          <h2 className="text-4xl leading-tight md:text-5xl">Sinta a qualidade de <span className="italic text-accent">perto.</span></h2>
          <p className="mt-6 font-serif text-xl italic leading-relaxed text-ink/80">
            Venha nos visitar em Araçoiaba da Serra e desfrute de um atendimento maravilhoso.
          </p>
          <p className="mt-6 max-w-prose leading-relaxed text-ink/70">
            Temos o prazer de receber você em um ambiente pensado para o seu conforto. Descubra nossas novidades ao vivo e deixe nossa equipe ajudar a encontrar a peça perfeita.
          </p>

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver a localização da Regi Modas no Google Maps"
            className="mt-8 flex items-start gap-3 text-sm text-ink/70 transition-colors hover:text-ink"
          >
            <MapPin size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-accent" aria-hidden />
            <span className="link-underline">{ADDRESS}</span>
          </a>

          <div className="mt-5 flex items-start gap-3 text-sm text-ink/70">
            <Clock size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-accent" aria-hidden />
            <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-1">
              {HOURS.map((h) => (
                <div key={h.days} className="contents">
                  <dt>{h.days}</dt>
                  <dd className="text-ink">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>

          <p className="mt-5 flex items-center gap-2 text-sm text-ink/70" aria-label={`Nota ${RATING} de 5 no Google Maps`}>
            <span className="flex gap-0.5" aria-hidden>
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={15} className="fill-accent text-accent" />
              ))}
            </span>
            <span className="font-medium text-ink">{RATING}</span>
            <span>no Google Maps</span>
          </p>

          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex w-full items-center justify-center rounded-full border border-accent px-8 py-3.5 text-accent transition duration-300 hover:bg-accent hover:text-white sm:w-auto"
          >
            Como chegar
          </a>
        </m.div>

        <m.div
          className="relative order-1 aspect-[4/5] lg:order-2"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease }}
        >
          <div aria-hidden className="absolute inset-0 -translate-x-3 translate-y-3 bg-accent lg:-translate-x-5 lg:translate-y-5" />
          <div className="relative h-full w-full overflow-hidden"><img
              {...pic('loja-interior')}
              sizes="(min-width: 1024px) 560px, 90vw"
              alt="Interior da Regi Modas: cliente sorrindo em frente à placa da loja, com araras de roupas e balcão ao fundo"
              loading="lazy"
              className="h-full w-full object-cover"
            /></div>
        </m.div>
      </div>
    </section>
  )
}
