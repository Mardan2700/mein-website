import { useEffect } from 'react'
import './App.css'
import profileImage from './assets/mardan-ali.jpg'
import projectImageOne from './assets/project1.png'
import projectImageTwo from './assets/project2.png'
import projectImageThree from './assets/project3.jpg'

function App() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    if (!window.location.hash) {
      window.scrollTo(0, 0)
    }

    const sections = document.querySelectorAll('.reveal-section')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 },
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="portfolio">
      <nav className="site-nav" aria-label="Hauptnavigation">
        <a className="wordmark" href="#top">MA<span>.</span></a>
        <div className="nav-links">
          <a href="#about">Über mich</a>
          <a href="#work">Projekte</a>
          <a href="#education">Werdegang</a>
        </div>
        <a className="nav-contact" href="mailto:mardan00@gmx.de">Kontakt <span>↗</span></a>
      </nav>

      <main id="top">
        <section className="hero-section reveal-section" aria-labelledby="intro-title">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> Offen für neue Möglichkeiten</p>
            <h1 id="intro-title">Mardan Ali<br /><em>Software Engineer</em></h1>
            <p className="hero-intro">Hi, ich bin Mardan Ali, Absolvent der Angewandten Informatik. Ich entwickle Webanwendungen mit Java, Spring Boot, .NET, React und SQL.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Meine Projekte <span>↓</span></a>
              <a className="text-link" href="mailto:mardan00@gmx.de">Lass uns sprechen <span>↗</span></a>
            </div>
            <div className="social-links" aria-label="Profile und soziale Netzwerke">
              <a href="https://github.com/Mardan2700" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
              <a href="https://www.linkedin.com/in/mardan-ali-a79793398/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
            </div>
          </div>
          <div className="hero-note" aria-label="Profilfoto">
            <img className="profile-image" src={profileImage} alt="Porträt von Mardan Ali" />
          </div>
        </section>

        <section className="statement-section reveal-section" id="about" aria-labelledby="about-title">
          <p className="section-kicker">01 / Über mich</p>
          <div>
            <h2 id="about-title">Über mich</h2>
            <p className="large-copy">Mein Schwerpunkt liegt auf der Entwicklung zuverlässiger Anwendungen: von der Benutzeroberfläche über REST-APIs und Datenbanken bis zur Automatisierung und Bereitstellung. Dabei arbeite ich strukturiert, lerne schnell und behalte die Nutzer im Blick.</p>
          </div>
        </section>

        <section className="work-section reveal-section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <div>
              <p className="section-kicker">02 / Ausgewählte Arbeit</p>
              <h2 id="work-title">Projekte</h2>
            </div>
          </div>
          <div className="project-grid">
            <article className="project-card project-card-featured">
              <div className="project-visual"><img src={projectImageOne} alt="Vorschau der Medien Review Plattform" /></div>
              <div className="project-meta"><span>01 — Webanwendung</span><span>Java · Spring Boot · MySQL</span></div>
              <h3>Medien Review Plattform</h3>
              <p>Webanwendung zur Erstellung und Verwaltung von Bewertungen für Filme, Serien, Bücher und Spiele.</p>
              <span className="card-link">Backend & Benutzeroberfläche</span>
            </article>
            <article className="project-card">
              <div className="project-visual"><img src={projectImageTwo} alt="Vorschau des Eventplaners und Kalorientrackers" /></div>
              <div className="project-meta"><span>02 — Full-Stack</span><span>React · Java · MySQL</span></div>
              <h3>Eventplaner & Kalorientracker</h3>
              <p>Full-Stack-Anwendung zur Planung von Events sowie zur Verwaltung von Ernährungseinträgen.</p>
              <span className="card-link">React & Spring Boot</span>
            </article>
            <article className="project-card">
              <div className="project-visual"><img src={projectImageThree} alt="Vorschau des Magic Mirror Projekts" /></div>
              <div className="project-meta"><span>03 — Anwendungsentwicklung</span><span>REST API · Raspberry Pi</span></div>
              <h3>Magic Mirror</h3>
              <p>Fahrplananzeige für aktuelle BVG-Informationen mit REST-API und Verarbeitung von JSON-Daten.</p>
              <span className="card-link">Echtzeitinformationen</span>
            </article>
          </div>
        </section>

        <section className="education-section reveal-section" id="education" aria-labelledby="education-title">
          <div><p className="section-kicker">03 / Werdegang</p><h2 id="education-title">Werdegang</h2></div>
          <div className="timeline">
            <div className="timeline-item"><span>04/2020 — 05/2025</span><div><h3>Bachelor of Science — Angewandte Informatik</h3><p>HTW Berlin</p></div></div>
            <div className="timeline-item"><span>11/2023 — 11/2025</span><div><h3>Werkstudent DevOps Engineer — Toll Collect GmbH</h3><ul><li>Entwicklung und Pflege von .NET-Anwendungen mit C#, Windows Forms und Konsolentools sowie Migration bestehender VB.NET-Tools nach C#.</li><li>Automatisierung von Abläufen mit PowerShell und Bash sowie Versionsverwaltung mit Git und GitLab.</li><li>Betreuung von Nutzern und SaaS-Zugängen sowie Arbeit mit Docker-nahen Entwicklungsumgebungen, Jira und Confluence.</li></ul></div></div>
            <div className="timeline-item"><span>Schwerpunkte</span><div><h3>Full-Stack, DevOps & Tools</h3><p>Spring Boot, .NET, REST-APIs, MySQL, React, Angular, HTML, CSS, Git/GitLab, Docker, Linux und Kubernetes.</p></div></div>
          </div>
        </section>

        <section className="skills-section reveal-section" aria-labelledby="skills-title">
          <div><p className="section-kicker">04 / Fähigkeiten</p><h2 id="skills-title">Fähigkeiten</h2></div>
          <div className="skills-grid">
            <div><h3>Programmiersprachen</h3><p>Java · C# · JavaScript · Python · C++ · Visual Basic</p></div>
            <div><h3>Full-Stack Entwicklung</h3><p><strong>Backend</strong> Spring Boot · .NET · REST-APIs · MySQL<br /><strong>Frontend</strong> React · Angular · HTML · CSS</p></div>
            <div><h3>DevOps & Tools</h3><p>GitLab CI/CD · Docker · Linux · Bash · Kubernetes · Jenkins · Ansible</p></div>
            <div><h3>Sprachen</h3><p>Deutsch — Muttersprache<br />Englisch — C1<br />Kurdisch — Muttersprache<br />Französisch — B1</p></div>
          </div>
        </section>

        <section className="contact-section reveal-section" aria-labelledby="contact-title">
          <p className="section-kicker">05 / Kontakt</p>
          <h2 id="contact-title">Kontaktmöglichkeiten</h2>
          <a className="button button-light" href="mailto:mardan00@gmx.de">mardan00@gmx.de <span>↗</span></a>
        </section>
      </main>

      <footer><span>© 2026 Mardan Ali</span><span>Gebaut mit React</span><a href="#top">Nach oben ↑</a></footer>
    </div>
  )
}

export default App
