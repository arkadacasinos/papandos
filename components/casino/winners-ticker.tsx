const wins = [
  { img: '/img/game-1.jpg', user: 'user***95', sum: '1629 ₽' },
  { img: '/img/game-3.jpg', user: 'user***75', sum: '2952 ₽' },
  { img: '/img/game-2.jpg', user: 'user***28', sum: '4166 ₽' },
  { img: '/img/game-6.jpg', user: 'user***74', sum: '5724 ₽' },
  { img: '/img/game-5.jpg', user: 'user***01', sum: '13166 ₽' },
  { img: '/img/game-4.jpg', user: 'alek***ti', sum: '17277 ₽' },
  { img: '/img/game-6.jpg', user: 'user***72', sum: '1690 ₽' },
  { img: '/img/game-2.jpg', user: 'user***65', sum: '12900 ₽' },
  { img: '/img/game-1.jpg', user: 'user***14', sum: '870 ₽' },
  { img: '/img/game-3.jpg', user: 'user***58', sum: '4768 ₽' },
]

export function WinnersTicker() {
  return (
    <section className="k9z4-ticker" aria-label="Последние выигрыши">
      {wins.map((w, i) => (
        <article className="k9z4-win" key={`${w.user}-${i}`}>
          <img src={w.img} alt="" width={40} height={40} loading="lazy" />
          <div>
            <span className="k9z4-winu">{w.user}</span>
            <span className="k9z4-wins">{w.sum}</span>
          </div>
        </article>
      ))}
    </section>
  )
}
