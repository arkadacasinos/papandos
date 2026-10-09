import { OFFER_URL } from '../../lib/offer'

const games = [
  { img: '/img/game-1.jpg', name: 'Farm Fortune' },
  { img: '/img/game-2.jpg', name: 'Big Catch' },
  { img: '/img/game-3.jpg', name: 'Wild West Gold' },
  { img: '/img/game-4.jpg', name: 'Black Luxe' },
  { img: '/img/game-5.jpg', name: 'Buck Hunt' },
  { img: '/img/game-6.jpg', name: 'Magic Apple' },
  { img: '/img/game-1.jpg', name: 'Farm Fortune Deluxe' },
]

export function TopGames() {
  return (
    <section id="top-games" aria-label="Топ слотов Panda Casino">
      <div className="k9z4-gridhead">
        <h2>Топ</h2>
        <a className="k9z4-more" href={OFFER_URL} target="_blank" rel="noopener noreferrer">
          Смотреть все
        </a>
      </div>
      <div className="k9z4-grid" style={{ marginTop: '10px' }}>
        {games.map((g, i) => (
          <a
            className="k9z4-tile"
            key={`${g.name}-${i}`}
            href={OFFER_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={g.img} alt={`Слот ${g.name} в Panda Casino`} width={420} height={560} loading="lazy" />
            <span>{g.name}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
