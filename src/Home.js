import React from 'react'
import "./Home.css"
import Products from "./Products";
function Home() {
    return (
        <div className="home">
            
            <img
                className="home__image"
                alt="amazon"
                src="https://firebasestorage.googleapis.com/v0/b/instagram-clone-react-1ff7d.appspot.com/o/images%2Famazon.jpg?alt=media&token=18991cd0-1007-46cc-9694-308cd23dae64">
            </img>

            {/* products:id,title,price,rating,image */}
            <div className="home__row">
            <Products 
                id="1345678"
                title="the lean startup"
                price={320}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                /> 
                            <Products 
                id="1245678"
                title="Apple MacBook Pro  - Space Grey"
                price={320}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/81bF-d1dNoL._SX569_.jpg"
            /> 
            </div>
                        <div className="home__row">
            <Products 
                id="1234678"
                title="Reach Air Bike Exercise Cycle"
                price={320}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71rmBQqnVEL._SX425_.jpg"
                /> 
                            <Products 
                id="1234578"
                title="OxiClear N99 Pollution Mask"
                price={320}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51K%2BwQ6lrpL._SX425_.jpg"
                /> 
                                            <Products 
                id="1234568"
                title="The $100 Startup"
                price={320}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51VMSG9740L._SX328_BO1,204,203,200_.jpg"
            /> 
            </div>
            <div className="home__row">
                                                            <Products 
                id="1234567"
                title="Dell U-Series 37.5 Screen LED-Lit Monitor (U3818DW)"
                price={320}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71IjK1dq-OL._SX522_.jpg"
            /> 
            </div>

        </div>
    )
}

export default Home
