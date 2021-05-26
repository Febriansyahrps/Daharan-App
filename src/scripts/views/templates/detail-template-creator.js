import CONFIG from '../../globals/config'

class restaurantDetail extends HTMLElement {
  set restaurant (restaurant) {
    this._restaurant = restaurant
    this.render()
  }

  render () {
    this.innerHTML = `
        <div class="detail_header">
            <div class="image_header">
                <img src="${CONFIG.BASE_IMAGE_URL}/${this._restaurant.pictureId}" alt="${this._restaurant.name}" class="detail_image" crossorigin="anonymous">
            </div>
            <div class="desc_header">
                <h1 class="detail_title">${this._restaurant.name}</h1>
                <p class="detail_address">${this._restaurant.address}, ${this._restaurant.city}</p>
                <h2 class="detail_category">Menu Categories :</h2>
                <div class="categories_list">
                    ${this._restaurant.categories.map((category) => `
                            <div class="category_item">${category.name}</div>
                        `)
                    .join('')}
                </div>
            </div>
        </div>
        <section>
            <div class="detail_description">
                <p>${this._restaurant.description}</p>
            </div>
            <h1 class="title_menu">Restaurant Menu</h1>
            <hr class="main_line">
            <article class="menu">
                <div class="list_menu">
                    <ol><h2 class="menu_category">Foods : </h2>
                        ${this._restaurant.menus.foods
                            .map((food) => `
                            <li class="item_menu">${food.name}</li>
                            `)
                        .join('')}
                    <ol>
                </div>
                <div class="list_menu">
                    <ol><h2 class="menu_category">Drinks : </h2>
                        ${this._restaurant.menus.drinks
                            .map((drink) => `
                            <li class="item_menu">${drink.name}</li>
                            `)
                        .join('')}
                    <ol>
                </div>
            </article>
            <h2 class="title_review">Restaurant Review</h2>
            <p class="detail_rating">Rating ⭐️: ${this._restaurant.rating} </p>
            <hr class="main_line">
            <div class="review">
                ${this._restaurant.customerReviews
                    .map((customer) => `
                        <div class="item-review">
                            <div class="review_header">
                                <div>
                                    <h3 class="review_name">${customer.name}</h3>
                                </div>
                                <div>
                                    <p class="review_date">${customer.date}</p>
                                </div>
                            </div>
                            <hr class="main_line">
                            <p class="review_desc">${customer.review}</p>
                        </div>
                    `)
                .join('')}
            </div>
            <h2 class="add_review_title">Add Review</h2>
            <div class="post_review">
                <h3 class="add_review_tag">Name</h3>  
                <input type="text" id="nameReview" class="name_input" placeholder="Reviewers Name..."><br><br>
                <h3 class="add_review_tag">Review</h3>
                <textarea id="textReview" class="review_input" placeholder="Write Restaurant Review..."></textarea>
                <button id="postReview" class="review_button" aria-label="Send Review">Send Review</button>
            </div>
        </section>
    `
  }
}
customElements.define('restaurant-detail', restaurantDetail)
