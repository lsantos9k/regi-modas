import { MessageCircle } from 'lucide-react'
import { m } from 'framer-motion'
import fachada from '../assets/fachada.webp'
import { WHATSAPP_URL, ease } from '../lib'

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-7xl px-6 lg:px-10">
      <div className="grid items-center gap-8 py-6 lg:grid-cols-5 lg:gap-16 lg:py-24">
        {/* Imagem: topo no mobile, direita (60%) no desktop */}
        <div className="lg:order-2 lg:col-span-3">
          <div className="relative mx-auto aspect-[4/5] max-h-[42vh] w-full max-w-sm md:max-h-none md:max-w-md lg:max-w-none">
            <div aria-hidden className="absolute inset-0 translate-x-3 translate-y-3 bg-accent lg:translate-x-5 lg:translate-y-5" />
            <m.div
              className="relative h-full w-full overflow-hidden"
              initial={{ scale: 1.08, y: 24, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              transition={{ duration: 1, ease }}
            >
              <img
                src={fachada}
                alt="Fachada da loja Regi Modas em Araçoiaba da Serra, com vitrine de roupas e bolsas"
                className="h-full w-full object-cover"
                {...{ fetchpriority: 'high' }}
              />
            </m.div>
          </div>
        </div>

        <m.div
          className="lg:order-1 lg:col-span-2"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease, delay: 0.2 }}
        >
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-accent">Araçoiaba da Serra</p>
          <h1 className="text-[clamp(2.25rem,6vw,4.75rem)] leading-[1.05]">
            Vista-se de qualidade. Descubra a <em className="italic text-accent">regi modas.</em>
          </h1>
          <p className="mt-5 max-w-prose text-base leading-relaxed text-ink/70 md:text-lg">
            A melhor loja de Araçoiaba da Serra com coleções completas em moda adulto, infantil e bolsas. Venha conhecer ou compre sem sair de casa.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-accent px-8 py-4 text-base font-medium text-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_-6px_rgba(238,119,53,0.2)] sm:w-auto"
          >
            <MessageCircle size={18} aria-hidden />
            Falar pelo WhatsApp
          </a>
        </m.div>
      </div>
    </section>
  )
}
