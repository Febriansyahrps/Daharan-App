import 'regenerator-runtime'
import '../styles/main.css'
import '../styles/responsive.css'
import swRegister from './utils/sw-register'
import App from './views/app'

const app = new App({
  button: document.querySelector('#menuButton'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#main-content')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
})
