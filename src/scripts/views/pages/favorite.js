import likeRestaurantIdb from '../../data/restaurant-idb'
import '../templates/list-template-creator'

const Favorite = {
  async render () {
    return `
      <h1 id="main-content" class="main_title">Favorite Restaurants</h1>
      <hr class="main_line">
      <div class="articles">
        <restaurant-list class="article-list"></restaurant-list>
      </div>    
    `
  },

  async afterRender () {
    const restaurants = await likeRestaurantIdb.getAllRestaurants()
    const restorantListElement = document.querySelector('restaurant-list')
    restorantListElement.restaurants = restaurants
  }
}

export default Favorite
