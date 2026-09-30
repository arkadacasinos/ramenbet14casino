import { RamenSymbol } from './ramen-symbol'

export function RamenHero() {
  return (
    <section className="rm14-hero rm14-wrap" aria-labelledby="hero-title">
      <div className="rm14-hero-grid">
        <div className="rm14-hero-copy">
          <p className="rm14-eyebrow"><span className="rm14-live-dot" aria-hidden="true" />ВАШ ОРИЕНТИР В МИРЕ Ramenbet</p>
          <h1 id="hero-title">Японский характер.<br /><span>Осознанная игра.</span></h1>
          <p className="rm14-hero-description">Ramenbet без лишнего шума. Что знать о платформе, как проверять доступ и почему безопасность важнее красивых обещаний.</p>
          <div className="rm14-hero-actions">
            <a className="rm14-action" href="#guide">Знакомство с Ramenbet <RamenSymbol kind="outward" /></a>
            <a className="rm14-text-link" href="#mirror">О зеркале <RamenSymbol kind="right" /></a>
          </div>
          <p className="rm14-hero-note"><RamenSymbol kind="check" /> Независимый материал · Только для взрослых</p>
        </div>
        <figure className="rm14-hero-art">
          <picture>
            <source media="(max-width: 600px)" srcSet="/images/ramen-gate-mobile.webp" />
            <img src="/images/ramen-gate.webp" alt="Красные японские ворота тории, солнечный диск и игровые фишки" width="1050" height="700" fetchPriority="high" loading="eager" />
          </picture>
          <figcaption>Восточная эстетика. Взвешенный подход.</figcaption>
        </figure>
      </div>
      <nav className="rm14-topic-strip" aria-label="Темы руководства">
        <a href="#official"><span className="rm14-topic-symbol"><RamenSymbol kind="outward" /></span><span>Официальный сайт<small>Проверяем источник</small></span></a>
        <a href="#mirror"><span className="rm14-topic-symbol"><RamenSymbol kind="swap" /></span><span>Доступ и зеркало<small>Разбираемся без спешки</small></span></a>
        <a href="#casino"><span className="rm14-topic-symbol"><RamenSymbol kind="diamond" /></span><span>Правила игры<small>Читаем до первого шага</small></span></a>
        <a href="#safety"><span className="rm14-topic-symbol"><RamenSymbol kind="check" /></span><span>Личная безопасность<small>Держим всё под контролем</small></span></a>
      </nav>
    </section>
  )
}
