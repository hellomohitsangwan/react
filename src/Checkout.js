import React from 'react'
import { useStateValue } from './StateProvider';
import CheckoutProducts from "./CheckoutProducts";
function Checkout()
{
    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            {basket?.length === 0 
                ? (<div><h2>your basket is empty</h2></div>)
                : (
                    <div>
                        <h2 className="checkout__title">your basket</h2>
                        {/* list of all the added products */}
                        {basket.map(item => (
                            <CheckoutProducts 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                            
                        ))}
                        
                    </div>
                )
            }
        </div>
    )
}

export default Checkout
