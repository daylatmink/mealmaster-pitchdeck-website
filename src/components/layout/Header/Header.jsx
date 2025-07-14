import React from "react";
import "./Header.css";

import SearchIcon from './searchicon.svg';

const Header = () => {
    return (
        <header className="header">

            <div className="nav-group">    
                <div className="nav-search">
                    <img src={SearchIcon} id="SearchIcon" />
                </div>

                <div className="logo">
                    <img src="/assets/logo2.png" alt="MealMaster" />
                </div>
                
                <ul className="nav-links">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Pricing</a></li>
                    <li><a href="#">Service</a></li>
                    <li><a href="#">Community</a></li>
                </ul>
            </div>

            <div className="nav-auth">
                <button className="nav-btn nav-signup">Sign up</button>
                <button className="nav-btn nav-login">Login</button>
            </div>
            
        </header>
    );
};

export default Header;