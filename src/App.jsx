import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  return (
    <div className="portfolio">
      <header>
        <h1>Hallo, ich bin [Dein Name]</h1>
        <p>[Dein Beruf/Deine Zielrolle, z. B. Frontend Entwickler]</p>
      </header>

      <section id="ueber-mich">
        <h2>Über mich</h2>
        <p>Kurze Beschreibung zu deiner Motivation und deinen Interessen.</p>
      </section>

      <section id="bildungsweg">
        <h2>Bildungsweg</h2>
        <ul>
          <li>
            <strong>2020 - 2023:</strong> Bachelor in Informatik - Uni Mustermann
          </li>
          <li>
            <strong>2017 - 2020:</strong> Abitur - Muster-Gymnasium
          </li>
        </ul>
      </section>

      <section id="projekte">
        <h2>Meine Projekte</h2>
        <div className="projekt-karte">
          <h3>Projekt 1: Wetter-App</h3>
          <p>Eine App, die Wetterdaten anzeigt. Gebaut mit React und OpenWeather API.</p>
          <a href="https://github.com/dein-github/wetter-app" target="_blank" rel="noreferrer">GitHub Link</a>
        </div>
      </section>

      <footer>
        <p>Kontakt: deine.email@example.com</p>
      </footer>
    </div>
  )
}

export default App
