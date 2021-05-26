import likeRestaurantIdb from '../data/restaurant-idb'
import { likeButtonCreator, likedButtonCreator } from '../views/templates/template-creator'

const likeButtonInitiator = {
  async init ({ likeButtonElement, restaurant }) {
    this._likeButtonElement = likeButtonElement
    this._restaurant = restaurant

    await this._renderButton()
  },

  async _renderButton () {
    const { id } = this._restaurant

    if (await this._isRestaurantExist(id)) {
      this._renderLiked()
    } else {
      this._renderLike()
    }
  },

  async _isRestaurantExist (id) {
    const restaurant = await likeRestaurantIdb.getRestaurant(id)
    return !!restaurant
  },

  _renderLike () {
    this._likeButtonElement.innerHTML = likeButtonCreator()

    const likeButton = document.querySelector('#like-button')
    likeButton.addEventListener('click', async () => {
      await likeRestaurantIdb.putRestaurant(this._restaurant)
      this._renderButton()
    })
  },

  _renderLiked () {
    this._likeButtonElement.innerHTML = likedButtonCreator()

    const likeButton = document.querySelector('#like-button')
    likeButton.addEventListener('click', async () => {
      await likeRestaurantIdb.deleteRestaurant(this._restaurant.id)
      this._renderButton()
    })
  }
}

export default likeButtonInitiator
