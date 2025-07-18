/* Header.jsx */

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

import SearchIcon from './searchicon.svg';

const Header = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLoginClick = () => {
        navigate("/loginUser");
    };
    
    const handleSignupClick = () => {
        navigate("/registerUser");
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header-section">
            <div className="header-container">
                
                {/* Nav-left (only visible on mobile) */}
                <div className="nav-left">
                    <div className="nav-mobile-menu">
                        <button 
                            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                            onClick={toggleMenu}
                        >
                            <span />
                            <span />
                            <span />
                        </button>
                        
                        <div className={`dropdown-menu ${isMenuOpen ? 'open' : ''}`}>
                            <a href="#" onClick={handleLinkClick}>About</a>
                            <a href="#" onClick={handleLinkClick}>Pricing</a>
                            <a href="#" onClick={handleLinkClick}>Service</a>
                            <a href="#" onClick={handleLinkClick}>Community</a>
                        </div>
                    </div>
                    
                    <div className="nav-search">
                        <img src={SearchIcon} alt="Search" />
                    </div>
                </div>

                {/* Logo */}
                <div className="header-logo">
                    <a href="">
                        <img src="/assets/logo.png" alt="MealMaster" />
                        <img src="/assets/tittle.png" alt="MealMaster" />
                    </a>
                </div>

                {/* Nav-right (hidden on mobile) */}
                <div className="nav-right">
                    <ul className="nav-links">
                        <li><a href="#">About</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Service</a></li>
                        <li><a href="#">Community</a></li>
                    </ul>

                    <div className="nav-search">
                        <img src={SearchIcon} alt="Search" />
                    </div>
                </div>
                
                {/* Auth Buttons */}
                <div className="header-auth">
                    <button className="header-btn header-signup" onClick={handleSignupClick}>
                        Sign up
                    </button>
                    <button className="header-btn header-login" onClick={handleLoginClick}>
                        Login
                    </button>
                </div>
                    
            </div>
        </header>
    );
};

export default Header;