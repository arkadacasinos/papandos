import { OFFER_URL } from '../../lib/offer'

const chips = ['Слоты', 'Горячие', 'Новые', 'Топ', 'Лайв', 'Отыгрыш бонуса', 'Краш', 'Джекпот', 'Halloween']

export function CatalogBar() {
  return (
    <section aria-label="Поиск и категории игр">
      <div className="k9z4-catsearch" role="search">
        <input className="k9z4-input" type="search" name="q" placeholder="Искать игры" aria-label="Искать игры" />
        <a className="k9z4-prov" href={OFFER_URL} target="_blank" rel="noopener noreferrer">
          Провайдеры
        </a>
      </div>
      <div className="k9z4-chips" style={{ marginTop: '10px' }}>
        {chips.map((c) => (
          <a className="k9z4-chip" key={c} href={OFFER_URL} target="_blank" rel="noopener noreferrer">
            {c}
          </a>
        ))}
      </div>
    </section>
  )
}
