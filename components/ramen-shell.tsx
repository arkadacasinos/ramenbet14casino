import { RamenSymbol } from './ramen-symbol'

export function LandingHeader() {
  return (
    <header className="rm14-header">
      <div className="rm14-wrap rm14-header-inner">
        <a href="#" className="rm14-brand" aria-label="Ramenbet — начало страницы">
          <img src="/images/ramen-mark.png" alt="" width="38" height="38" />
          <span>Ramen<span className="rm14-brand-accent">bet</span><small>НЕЗАВИСИМЫЙ ГИД</small></span>
        </a>
        <nav className="rm14-nav" aria-label="Основная навигация">
          <a href="#about">О Ramenbet</a>
          <a href="#mirror">Доступ и зеркало</a>
          <a href="#safety">Безопасность</a>
        </nav>
        <a className="rm14-header-link" href="#guide">Читать гид <RamenSymbol kind="outward" /></a>
        <span className="rm14-age" aria-label="Только для лиц старше 18 лет">18+</span>
      </div>
    </header>
  )
}

export function LandingFooter() {
  return (
    <footer className="rm14-footer">
      <div className="rm14-wrap rm14-footer-inner">
        <div className="rm14-footer-top">
          <a href="#" className="rm14-brand" aria-label="Ramenbet — вверх">
            <img src="/images/ramen-mark.png" alt="" width="38" height="38" loading="lazy" />
            <span>Ramen<span className="rm14-brand-accent">bet</span><small>НЕЗАВИСИМЫЙ ГИД</small></span>
          </a>
          <a className="rm14-top-link" href="#">Наверх <RamenSymbol kind="up" /></a>
        </div>
        <nav className="rm14-tags" aria-label="Поиск по ключевым темам страницы">
          <a href="#about">#Ramenbet</a>
          <a href="#about">#Раменбет</a>
          <a href="#mirror">#Ramenbet_зеркало</a>
          <a href="#name">#Рамен_бет</a>
          <a href="#name">#Ramen_bet</a>
          <a href="#mirror">#Раменбет_зеркало</a>
          <a href="#official">#Ramenbet_официальный_сайт</a>
          <a href="#official">#Раменбет_официальный_сайт</a>
          <a href="#access">#Раменбет_рабочее_зеркало</a>
          <a href="#casino">#Ramenbet_казино</a>
          <a href="#casino">#Раменбет_казино</a>
        </nav>
        <div className="rm14-footer-bottom">
          <p>© 2026 Ramenbet Guide. Информационный материал, не сайт оператора.</p>
          <p>18+ · Играйте ответственно.</p>
        </div>
      </div>
    </footer>
  )
}
