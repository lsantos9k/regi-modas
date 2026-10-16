import { Star } from 'lucide-react'
import { m } from 'framer-motion'
import { ease } from '../lib'

const reviews = [
  {
    text: 'A loja tem tudo em roupas infantil e adulto a melhor loja de Araçoiaba da Serra. O atendimento e maravilhoso parabéns.',
    author: 'Tania Maria Lopes Ramos Almeida Violardi',
  },
  { text: 'Produtos de ótima qualidade e excelente atendimento!!!', author: 'Lucas Emiliano' },
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="mx-auto max-w-5xl px-6 py-24 lg:px-10 lg:py-32">
      <m.div
        className="mb-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8, ease }}
      >
        <h2 className="text-4xl md:text-5xl">O que nossos clientes <span className="italic text-accent">dizem</span></h2>
        <p className="mx-auto mt-5 max-w-prose leading-relaxed text-ink/70">
          A reputação da melhor loja de Araçoiaba da Serra construída dia após dia.
        </p>
      </m.div>

      <div className="grid gap-6 md:grid-cols-2">
        {reviews.map((r, i) => (
          <m.figure
            key={r.author}
            className="flex flex-col rounded-2xl border border-gray-100 bg-white p-8 transition-shadow duration-300 border-t-2 border-t-accent hover:shadow-[0_2px_12px_rgba(0,0,0,0.06)] md:p-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease, delay: i * 0.15 }}
          >
            <div className="flex gap-1" role="img" aria-label="5 de 5 estrelas">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star key={s} size={16} className="fill-accent text-accent" aria-hidden />
              ))}
            </div>
            <span aria-hidden className="mt-4 block font-serif text-6xl leading-none text-accent">“</span>
            <blockquote className="-mt-2 flex-1 font-serif text-xl leading-relaxed">{r.text}</blockquote>
            <figcaption className="mt-8 text-sm text-ink/60">{r.author}</figcaption>
          </m.figure>
        ))}
      </div>
    </section>
  )
}
