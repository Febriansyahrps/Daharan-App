const likeButtonCreator = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`
const likedButtonCreator = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

const notFoundPageCreator = (errorMessage) => `
  <div class="error-page">
    <h1>${errorMessage}</h1>
  </div>
`

export { likeButtonCreator, likedButtonCreator, notFoundPageCreator }
