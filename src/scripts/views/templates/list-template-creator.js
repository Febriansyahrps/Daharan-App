import './item-template-creator'

class restorantList extends HTMLElement {
  set restaurants (restaurants) {
    this._restaurants = restaurants
    this.render()
  }

  render () {
    this._restaurants.forEach(restaurant => {
      const restaurantItemElement = document.createElement('restaurant-item')

      restaurantItemElement.restaurant = restaurant
      this.appendChild(restaurantItemElement)
    })
  }
}

customElements.define('restaurant-list', restorantList)