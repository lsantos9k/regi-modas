import { Instagram, MapPin, MessageCircle } from 'lucide-react'
import { ADDRESS, HOURS, INSTAGRAM_URL, MAPS_URL, WHATSAPP_LABEL, WHATSAPP_URL } from '../lib'

const nav = [
  ['#colecoes', 'Coleções'],
  ['#loja', 'A Loja'],
  ['#depoimentos', 'Depoimentos'],
]

export default function Footer() {
  return (
    <footer className="bg-zinc-50">
      <div aria-hidden className="h-1 bg-accent" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-3 lg:px-10">
        <div>
          <p className="font-serif text-3xl tracking-tight">regi <span className="text-accent">modas</span></p>
          <p className="mt-4 max-w-xs leading-relaxed text-ink/60">
            Moda adulto, infantil, bolsas e acessórios em Araçoiaba da Serra.
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">Navegue</p>
          <ul className="mt-5 space-y-3 text-ink/80">
            {nav.map(([h, l]) => (
              <li key={h}>
                <a href={h} className="link-underline">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">Contato</p>
          <p className="mt-5 max-w-xs leading-relaxed text-ink/60">
            Fale com nossa equipe e tire suas dúvidas ou reserve suas peças.
          </p>
          <ul className="mt-5 space-y-3">
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp ${WHATSAPP_LABEL}`}
                className="link-underline inline-flex items-center gap-2"
              >
                <MessageCircle size={16} className="text-accent" aria-hidden /> WhatsApp: {WHATSAPP_LABEL}
              </a>
            </li>
            <li>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Localização da Regi Modas no Google Maps"
                className="link-underline inline-flex items-start gap-2"
              >
                <MapPin size={16} className="mt-1 shrink-0 text-accent" aria-hidden /> <span>{ADDRESS}</span>
              </a>
            </li>
            <li>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Regi Modas"
                className="link-underline inline-flex items-center gap-2"
              >
                <Instagram size={16} className="text-accent" aria-hidden /> Instagram
              </a>
            </li>
          </ul>
          <p className="mt-6 text-xs font-medium uppercase tracking-[0.3em] text-accent">Horários</p>
          <dl className="mt-3 grid grid-cols-[auto_1fr] gap-x-6 gap-y-1 text-sm text-ink/70">
            {HOURS.map((h) => (
              <div key={h.days} className="contents">
                <dt>{h.days}</dt>
                <dd className="text-ink">{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="border-t border-black/5 py-6 text-center text-xs text-ink/40">
        © {new Date().getFullYear()} regi modas
      </div>
    </footer>
  )
}
