import widths from './image-widths.json'

const urls = import.meta.glob('./assets/*.webp', { eager: true, query: '?url', import: 'default' }) as Record<string, string>
const url = (name: string) => urls[`./assets/${name}.webp`]

/** Foto com versão pequena (520 px) e grande: o navegador escolhe a melhor para a tela. */
export function pic(name: keyof typeof widths) {
  const [small, large] = (widths[name] as number[]).length === 2 ? (widths[name] as number[]) : [0, (widths[name] as number[])[0]]
  return {
    src: url(name),
    srcSet: small ? `${url(`${name}-sm`)} ${small}w, ${url(name)} ${large}w` : undefined,
  }
}
