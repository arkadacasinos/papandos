const tags = [
  { href: '#sec-1', label: '#PandaCasino' },
  { href: '#sec-2', label: '#PandaCasinoЗеркало' },
  { href: '#sec-3', label: '#PandaCasinoИграть' },
  { href: '#sec-4', label: '#PandaCasinoОфициальный' },
  { href: '#sec-5', label: '#PandaCasinoОфициальныйСайт' },
  { href: '#sec-6', label: '#PandaКазино' },
  { href: '#sec-7', label: '#ПандаКазино' },
  { href: '#sec-8', label: '#ПандаКазиноЗеркало' },
  { href: '#sec-9', label: '#ПандаКазиноЗеркалоРабочее' },
  { href: '#sec-10', label: '#ПандаКазиноИграть' },
  { href: '#sec-11', label: '#ПандаКазиноОнлайн' },
  { href: '#sec-12', label: '#ПандаКазиноОфициальный' },
  { href: '#sec-13', label: '#ПандаКазиноОфициальныйСайт' },
]

export function Footer() {
  return (
    <footer className="k9z4-foot">
      <nav className="k9z4-tags" aria-label="Ключевые темы страницы">
        {tags.map((t) => (
          <a className="k9z4-tag" key={t.label} href={t.href}>
            {t.label}
          </a>
        ))}
      </nav>
      <div className="k9z4-footnote">
        <p>
          Panda Casino — информационная страница о клубе Панда Казино: официальный сайт, рабочее зеркало, бонусы и
          слоты. Материал носит ознакомительный характер.
        </p>
        <p>18+ Азартные игры могут вызывать зависимость. Играйте ответственно. © 2026 Panda Casino.</p>
      </div>
    </footer>
  )
}
