import './style.css'
import heroImg from './assets/hero.png'

document.querySelector('#app').innerHTML = `
  <ul>
    <li><a href="#msg">Message</a></li>
    <li><a href="#cnct">Connect</a></li>
    <li><a href="#rsrc">Resources</a></li>
  </ul>

  <section id="msg">
    <h1>Message</h1>
    <p>This is your message section.</p>
  </section>

  <section id="cnct">
    <h1>Connect</h1>
    <p>Ways to connect will go here.</p>
  </section>

  <section id="rsrc">
    <h1>Resources</h1>
    <p>Your resources go here.</p>
  </section>

  <section id="center">
    <div class="hero">
      <img src="${heroImg}" width="170" height="179">
    </div>
  </section>
`