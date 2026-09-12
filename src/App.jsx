import './App.css'

function App() {
  return (
    <div className="portfolio">
      <nav className="site-nav" aria-label="Hauptnavigation">
        <a className="wordmark" href="#top">MS<span>.</span></a>
        <div className="nav-links">
          <a href="#about">Über mich</a>
          <a href="#work">Projekte</a>
          <a href="#education">Werdegang</a>
        </div>
        <a className="nav-contact" href="mailto:deine.email@example.com">Kontakt <span>↗</span></a>
      </nav>

      <main id="top">
        <section className="hero-section" aria-labelledby="intro-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Offen für neue Möglichkeiten</p>
            <h1 id="intro-title">Ich entwickle digitale Produkte, <em>die Menschen gern nutzen.</em></h1>
            <p className="hero-intro">Hi, ich bin Max Schneider. Ein neugieriger Frontend-Entwickler mit einem Auge für gute Interfaces und einem Faible für sauberen Code.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Meine Projekte <span>↓</span></a>
              <a className="text-link" href="mailto:deine.email@example.com">Lass uns sprechen <span>↗</span></a>
            </div>
          </div>
          <div className="hero-note" aria-label="Kurzprofil">
            <div className="orbit-mark"><span>MS</span></div>
            <p className="note-label">Kurzprofil</p>
            <p>Frontend Development<br />UI Engineering<br />Product Thinking</p>
            <span className="note-index">01 / 04</span>
          </div>
        </section>

        <section className="statement-section" id="about" aria-labelledby="about-title">
          <p className="section-kicker">01 / Über mich</p>
          <div>
            <h2 id="about-title">Technik ist für mich kein Selbstzweck.</h2>
            <p className="large-copy">Ich mag die Stelle, an der aus einer Idee ein echtes Erlebnis wird. Dabei verbinde ich technisches Denken mit Empathie, klarer Kommunikation und einer gesunden Portion Detailverliebtheit.</p>
          </div>
        </section>

        <section className="work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div>
              <p className="section-kicker">02 / Ausgewählte Arbeit</p>
              <h2 id="work-title">Dinge, die ich gebaut habe.</h2>
            </div>
            <span className="project-count">03 Projekte</span>
          </div>
          <div className="project-grid">
            <article className="project-card project-card-featured">
              <div className="project-visual visual-dashboard"><span className="visual-label">FLOW / 2024</span><div className="mock-window"><i /><i /><i /><b>42.8k</b><small>active users</small><div className="chart-line" /></div></div>
              <div className="project-meta"><span>01 — Web App</span><span>React · TypeScript</span></div>
              <h3>Flow Finance</h3>
              <p>Ein übersichtliches Finanz-Dashboard, das komplexe Zahlen ruhig und verständlich macht.</p>
              <a className="card-link" href="https://github.com" target="_blank" rel="noreferrer">Fallstudie ansehen <span>↗</span></a>
            </article>
            <article className="project-card">
              <div className="project-visual visual-archive"><span className="archive-word">ARCHIV<br /><i>24</i></span><span className="visual-label">CULTURE / 2023</span></div>
              <div className="project-meta"><span>02 — Plattform</span><span>Next.js · CMS</span></div>
              <h3>Stadtarchiv</h3>
              <p>Eine digitale Ausstellung für Geschichten, Bilder und Stimmen aus der Stadt.</p>
              <a className="card-link" href="https://github.com" target="_blank" rel="noreferrer">Projekt ansehen <span>↗</span></a>
            </article>
            <article className="project-card">
              <div className="project-visual visual-mobile"><span className="visual-label">HABIT / 2023</span><div className="phone-ui"><strong>08:30</strong><span>morning routine</span><div className="progress"><i /></div><small>2 / 3 complete</small></div></div>
              <div className="project-meta"><span>03 — Mobile App</span><span>React Native · Expo</span></div>
              <h3>Habitual</h3>
              <p>Ein freundlicher Begleiter, der kleine Routinen sichtbar und machbar macht.</p>
              <a className="card-link" href="https://github.com" target="_blank" rel="noreferrer">Projekt ansehen <span>↗</span></a>
            </article>
          </div>
        </section>

        <section className="education-section" id="education" aria-labelledby="education-title">
          <div><p className="section-kicker">03 / Werdegang</p><h2 id="education-title">Lernen hört nie auf.</h2></div>
          <div className="timeline">
            <div className="timeline-item"><span>2022 — heute</span><div><h3>B.Sc. Medieninformatik</h3><p>Hochschule für angewandte Wissenschaften</p></div></div>
            <div className="timeline-item"><span>2021 — 2022</span><div><h3>Ausbildung zum Mediengestalter</h3><p>Fokus auf Digitalmedien und Konzeption</p></div></div>
            <div className="timeline-item"><span>Immer</span><div><h3>Selbstständiges Lernen</h3><p>Web Performance, Accessibility, Design Systems</p></div></div>
          </div>
        </section>

        <section className="contact-section" aria-labelledby="contact-title">
          <p className="section-kicker">04 / Kontakt</p>
          <h2 id="contact-title">Lust auf ein<br /><em>gutes Gespräch?</em></h2>
          <a className="button button-light" href="mailto:deine.email@example.com">deine.email@example.com <span>↗</span></a>
        </section>
      </main>

      <footer><span>© 2024 Max Schneider</span><span>Gebaut mit Neugier & React</span><a href="#top">Nach oben ↑</a></footer>
    </div>
  )
}

export default App
