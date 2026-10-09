import { OFFER_URL } from '../../lib/offer'

const links = [
  { label: 'Казино', glyph: 'k9z4-g1' },
  { label: 'Слоты', glyph: 'k9z4-g2' },
  { label: 'Играть', glyph: 'k9z4-g3' },
  { label: 'Бонусы', glyph: 'k9z4-g5' },
  { label: 'Зеркало', glyph: 'k9z4-g4' },
  { label: 'Онлайн', glyph: 'k9z4-g6' },
  { label: 'Официальный сайт', glyph: 'k9z4-g7' },
]

export function Rail() {
  return (
    <>
      <nav className="k9z4-rail" id="k9z4-menu" aria-label="Меню казино">
        <div className="k9z4-railhead">
          <img src="/icon.png" alt="" width={30} height={30} />
          <span>Панда Казино</span>
        </div>
        {links.map((l) => (
          <a
            key={l.label}
            className="k9z4-railink"
            href={OFFER_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={l.label}
          >
            <span className={`k9z4-glyph ${l.glyph}`} aria-hidden="true" />
            <span className="k9z4-rlabel">{l.label}</span>
          </a>
        ))}
      </nav>
      <a className="k9z4-scrim" href="#!" aria-hidden="true" tabIndex={-1} />
    </>
  )
}
