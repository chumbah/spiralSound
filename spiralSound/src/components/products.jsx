export default function Products() {
    const products = [
        { id: 1, title: "Album 1", artist: "Artist 1", price: 19.99, image: "album1.jpg", genre: "Pop" },
        { id: 2, title: "Album 2", artist: "Artist 2", price: 24.99, image: "album2.jpg", genre: "Rock" },
        { id: 3, title: "Album 3", artist: "Artist 3", price: 15.99, image: "album3.jpg", genre: "Jazz" }
    ]
    return(
        <>
            {products.map((product) => (
                <div key={product.id}>
                    <img src={product.image} alt={product.title} />
                    <h3>{product.title}</h3>
                    <p>{product.artist}</p>
                    <p>${product.price.toFixed(2)}</p>
                </div>
            ))}
        </>
    )
}