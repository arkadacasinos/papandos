import { OFFER_URL } from '../../lib/offer'

export function TopBar() {
  return (
    <header className="k9z4-topbar" id="top">
      <a className="k9z4-burger" href="#k9z4-menu" aria-label="Открыть меню">
        <i />
        <i />
        <i />
      </a>
      <a className="k9z4-logo" href="#top">
        <img src="/icon.png" alt="Panda Casino" width={28} height={28} />
        <span>Panda Casino</span>
      </a>
      <form className="k9z4-searchtop" role="search" action="#top-games">
        <input className="k9z4-input" type="search" name="q" placeholder="Искать игры" aria-label="Искать игры" />
      </form>
      <div className="k9z4-auth">
        <a className="k9z4-btn-login" href={OFFER_URL} target="_blank" rel="noopener noreferrer">
          Вход
        </a>
        <a className="k9z4-btn-reg" href={OFFER_URL} target="_blank" rel="noopener noreferrer">
          Регистрация
        </a>
      </div>
    </header>
  )
}
