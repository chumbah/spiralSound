import { addBtnListeners } from './cartService.js'

// ===== Rendering products =====

export default function RenderProducts (){
   let products = [
        { id: 1, title: "Album 1", artist: "Artist 1", price: 19.99, image: "album1.jpg", genre: "Pop" },
        { id: 2, title: "Album 2", artist: "Artist 2", price: 24.99, image: "album2.jpg", genre: "Rock" },
        { id: 3, title: "Album 3", artist: "Artist 3", price: 15.99, image: "album3.jpg", genre: "Jazz" }
    ]
    


 function renderProducts(products) {
  const albumsContainer = document.getElementById('products-container')
  const cards = products.map((album) => {
    return `
      <div class="product-card">
        <img src="./images/${album.image}" alt="${album.title}">
        <h2>${album.title}</h2>
        <h3>${album.artist}</h3>
        <p>$${album.price}</p>
        <button class="main-btn add-btn" data-id="${album.id}">Add to Cart</button>
        <p class="genre-label">${album.genre}</p>
      </div>
    `
    
  }).join('')

  albumsContainer.innerHTML = cards
  addBtnListeners()
}
return(
  <RenderProducts/>
)

}


// ===== Handling filtering =====

export async function applySearchFilter() {
  const search = document.getElementById('search-input').value.trim()
  const filters = {}
  if (search) filters.search = search
  const products = await getProducts(filters)
  renderProducts(products)
}



