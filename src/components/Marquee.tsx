const items = ['Moda adulto', 'Moda infantil', 'Bolsas', 'Acessórios']

export default function Marquee() {
  return (
    <div className="mt-16 bg-accent py-6 text-white lg:mt-8" aria-hidden>
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-2 px-6 font-serif text-xl italic md:text-2xl">
        {items.map((t, i) => (
          <span key={t} className="flex items-center gap-10">
            {t}
            {i < items.length - 1 && <span className="hidden h-1 w-1 rounded-full bg-white/70 sm:block" />}
          </span>
        ))}
      </div>
    </div>
  )
}
