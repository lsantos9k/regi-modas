import { Camera } from 'lucide-react'

type Props = { label: string; tone?: 'sand' | 'stone' | 'clay' | 'sage' | 'rose'; className?: string }

const tones: Record<NonNullable<Props['tone']>, string> = {
  sand: 'from-[#efe6da] to-[#d9c9b4]',
  stone: 'from-[#ecebe8] to-[#cfccc5]',
  clay: 'from-[#f1ddd0] to-[#d9b49c]',
  sage: 'from-[#e4e8de] to-[#bcc5b0]',
  rose: 'from-[#f3e3e1] to-[#dcbcb8]',
}

/** Placeholder editorial até as fotos originais da loja chegarem. */
export default function Photo({ label, tone = 'sand', className = '' }: Props) {
  return (
    <div
      role="img"
      aria-label={`Foto ilustrativa: ${label}`}
      className={`relative h-full w-full bg-gradient-to-br ${tones[tone]} ${className}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-ink/40">
        <Camera size={22} strokeWidth={1.25} aria-hidden />
        <span className="px-6 text-center font-serif text-sm italic">{label}</span>
      </div>
    </div>
  )
}
