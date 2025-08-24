

export default function ProductCard(props) {
    console.log(props)
    return (
        <div>
            <h1>ProductCard</h1>
            <p>{props.name}</p>
            <p>{props.price}</p>
            <img className="product-image" src={props.image} />
            <button>Add to Cart</button>
        </div>
    )

}