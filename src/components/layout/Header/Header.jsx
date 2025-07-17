/* Header.jsx */

import React, { useState, useEffect } from "react";
import "./Header.css";

import SearchIcon from './searchicon.svg';
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isZoomed, setIsZoomed] = useState(false);

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

    // Detect zoom level
    useEffect(() => {
        const detectZoom = () => {
            const zoomLevel = window.devicePixelRatio;
            const viewport = window.visualViewport;
            
            // Method 1: Using devicePixelRatio (works for most cases)
            if (zoomLevel >= 1.5) {
                setIsZoomed(true);
                return;
            }
            
            // Method 2: Using visualViewport (more accurate for zoom detection)
            if (viewport) {
                const scale = viewport.scale;
                if (scale >= 1.5) {
                    setIsZoomed(true);
                    return;
                }
            }
            
            // Method 3: Using screen width comparison
            const screenWidth = window.screen.width;
            const windowWidth = window.innerWidth;
            const calculatedZoom = screenWidth / windowWidth;
            if (calculatedZoom >= 1.5) {
                setIsZoomed(true);
                return;
            }
            
            setIsZoomed(false);
        };

        // Initial check
        detectZoom();

        // Listen for resize events (zoom changes trigger resize)
        window.addEventListener('resize', detectZoom);
        
        // Listen for visualViewport changes (better zoom detection)
        if (window.visualViewport) {
            window.visualViewport.addEventListener('resize', detectZoom);
        }

        return () => {
            window.removeEventListener('resize', detectZoom);
            if (window.visualViewport) {
                window.visualViewport.removeEventListener('resize', detectZoom);
            }
        };
    }, []);

    return (
        <header className={`header ${isZoomed ? 'zoomed' : ''}`}>
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
                    
                    <div className="nav-search nav-search-mobile">
                        <img src={SearchIcon} alt="Search" />
                    </div>
                </div>

                {/* Logo */}
                <div className="header-logo">
                    <a href="">
                        <img src="/assets/logo2.png" alt="MealMaster" />
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

                    <div className="nav-search nav-search-desktop">
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