import { OFFER_URL } from '../../lib/offer'

const sides = ['Миссии', 'Магазин бонусов', 'VIP клуб', 'Турниры']

export function Hero() {
  return (
    <section className="k9z4-herorow" aria-label="Бонусы Panda Casino">
      <div className="k9z4-banner">
        <h1>
          <span className="k9z4-h1cap">Бонус</span>
          <span className="k9z4-h1big">
            ДО 225% <span className="k9z4-h1fs">+1500 ФС</span>
          </span>
          <span className="k9z4-h1sub">на первый депозит в Panda Casino</span>
        </h1>
        <a className="k9z4-cta" href={OFFER_URL} target="_blank" rel="noopener noreferrer">
          Забрать бонус
        </a>
        <div className="k9z4-payrow" aria-label="Платёжные системы">
          <span className="k9z4-pay">СБП</span>
          <span className="k9z4-pay">Pay</span>
          <span className="k9z4-pay k9z4-pay-mir">МИР</span>
          <span className="k9z4-pay">TRON</span>
          <span className="k9z4-pay">tether</span>
        </div>
        <img
          className="k9z4-panda"
          src="/img/hero-panda.jpg"
          alt="Панда талисман Panda Casino с деньгами"
          width={900}
          height={675}
        />
      </div>
      {sides.map((s) => (
        <a className="k9z4-side" key={s} href={OFFER_URL} target="_blank" rel="noopener noreferrer">
          <span>{s}</span>
        </a>
      ))}
    </section>
  )
}
