import CONFIG from '../../globals/config'

class restaurantItem extends HTMLElement {
  set restaurant (restaurant) {
    this._restaurant = restaurant
    this.render()
  }

  render () {
    this.innerHTML = `
    <article class="post-item">  
    <div class="post-item_card">
        <a href="#/detail/${this._restaurant.id}">
            <div class="post-item_thumbnail">
                <img src="${CONFIG.BASE_IMAGE_URL}/${this._restaurant.pictureId}" alt="restaurant image" class="post-item_image" crossorigin="anonymous">
                <p class="post-item_place">Kota ${this._restaurant.city}</p>
            </div>
        </a>
            <div class="post-item_content">
                <p class="post-item_rating">Rating ${this._restaurant.rating}</p>
                <h1 class="post-item_title">${this._restaurant.name}</h1>
                <p class="post-item_desc">${this._restaurant.description.substring(0, 180)}</p>
            </div>
        </div>
    </article>
    `
  }
}
customElements.define('restaurant-item', restaurantItem)
