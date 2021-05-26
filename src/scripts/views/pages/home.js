import RestaurantSource from '../../data/restaurant-source'
import '../templates/list-template-creator'

const Home = {
  async render () {
    return `
      <div class="hero" aria-label="background image">
        <div class="hero_inner">
          <h1 class="hero_title">Daharan Apps</h1>
          <p class="hero_desc">Search, Eat and Happy</p>
        </div>
      </div>
      <h1 id="main-content" class="main_title">Explore Restaurant</h1>
      <hr class="main_line">
      <div class="articles">
        <restaurant-list class="article-list"></restaurant-list>
      </div>
    `
  },

  async afterRender () {
    const restaurants = await RestaurantSource.Home()
    const restorantListElement = document.querySelector('restaurant-list')
    restorantListElement.restaurants = restaurants
  }
}

export default Home
