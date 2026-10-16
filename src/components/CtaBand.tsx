import { MessageCircle } from 'lucide-react'
import { m } from 'framer-motion'
import { WHATSAPP_URL, ease } from '../lib'

export default function CtaBand() {
  return (
    <section className="bg-accent">
      <m.div
        className="mx-auto flex max-w-5xl flex-col items-center px-6 py-24 text-center text-white"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease }}
      >
        <h2 className="text-4xl leading-tight md:text-6xl">Encontre a sua peça perfeita.</h2>
        <p className="mt-6 max-w-prose text-lg leading-relaxed text-white/90">
          Fale com nossa equipe e tire suas dúvidas ou reserve suas peças.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-9 py-4 font-medium text-accent transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_-8px_rgba(0,0,0,0.2)] sm:w-auto"
        >
          <MessageCircle size={18} aria-hidden />
          Falar pelo WhatsApp
        </a>
      </m.div>
    </section>
  )
}
