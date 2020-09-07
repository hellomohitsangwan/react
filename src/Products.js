import React from 'react'
import "./Products.css"
import { useStateValue } from './StateProvider'
function Products({ id, title, price, rating, image })
{

    const [{basket}, dispatch] = useStateValue();
    const addToBasket = () =>
    {
        //dispatch is bascically a type of action.
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image:image
            }
})
}
    return (
        <div className="products">
            <div className="products__info">
            <p>{title}</p>
            <p className="product__price">
            <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {Array(rating)
                    .fill()
                    .map((_) =>
                    {
                        return <p>🌟</p>
                    
                    })}
                </div> 
                </div>
            <img src={image}></img>
            <button onClick={addToBasket}>Add To Cart</button>
        </div>
    )
}

export default Products
