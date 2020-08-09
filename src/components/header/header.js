import React from 'react';
import {Link} from 'react-router-dom';

import './header.css'

const Header = ( ) =>{
    return(
        <ul className="header-main_nav">
            <li>
                <Link to="/" className="header-nav_item">Home</Link>
            </li>
            <li>
                <Link to="/cart" className="header-nav_item">Cart</Link>
            </li>
        </ul>
    )
}

export default Header