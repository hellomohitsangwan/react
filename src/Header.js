import React from 'react';
import "./Header.css";
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import { useStateValue } from './StateProvider';

function Header()
{

 
    const [{ basket }] = useStateValue();
    console.log(basket);
    return (
        <nav className="header">
            {/* logo on left */}
            <Link to="/">
                <img
                    className="header__logo"
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="">
                </img>
            </Link>
 
            {/* serach bar */}
            <div className="header__Search">
                <input type="text" className="header__searchInput" />
                <SearchIcon className="header__searchIcon" />
            </div>
            {/* 3 links */} 
            <div className="header__nav">
                {/* 1st link */}
                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optonLine1">hello mohit</span>
                        <span className="header__optionLine2">Sign In</span>
                    </div>
                </Link>
                {/* lonk 2 */}
                 <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optonLine1">Returns</span>
                        <span className="header__optionLine2">& order</span>
                    </div>
                </Link>
                {/* link 3 */}
                 <Link to="/" className="header__link">
                    <div className="header__option">
                        <span className="header__optonLine1">your</span>
                        <span className="header__optionLine2">Prime</span>
                    </div>
                </Link>
                
                {/* link 4 */}
                <Link to="/checkout" className="header__link">
                    <div className="header__optionBasket">
                        <ShoppingCartIcon />
                        <span className="header__optionLine2 header__optionBasketCount">{basket?.length}</span>
                    </div>
                </Link>
            </div>       
            {/* basket icon with numbers */}
        </nav>
    )
}

export default Header
 