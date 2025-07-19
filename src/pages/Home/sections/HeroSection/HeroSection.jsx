/* =============== HeroSection.jsx =============== */
// HeroSection.jsx

import React, { useState, useEffect } from "react";
import "./HeroSection.css";

import meal from "./meal.jpg"
import exHeroWave from "./exHeroWave.svg"

const HeroSection = () => {
    const [isZoomed, setIsZoomed] = useState(false);

    // Detect zoom level (same logic as Header)
    useEffect(() => {
        const detectZoom = () => {
            const zoomLevel = window.devicePixelRatio;
            const viewport = window.visualViewport;
            
            // Method 1: Using devicePixelRatio
            if (zoomLevel >= 1.5) {
                setIsZoomed(true);
                return;
            }
            
            // Method 2: Using visualViewport
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

        detectZoom();
        window.addEventListener('resize', detectZoom);
        
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
        <section className={`hero-section ${isZoomed ? 'zoomed' : ''}`}>
            <div className="hero-container">
                {/* Background image */}
                <div className="hero-bg">
                    <img src={meal} alt="Kitchen Background" />
                </div>

                {/* Shape SVG wave */}
                <img
                    src={exHeroWave}
                    alt="Hero Shape"
                    className="hero-shape"
                />

                {/* Content */}
                <div className="hero-inner">
                    <h1 className="hero-title">
                        MealMaster – Trợ lý bữa ăn cá nhân hoá đầu tiên tại Việt Nam
                    </h1>

                    <div className="hero-badges">
                        <div className="badge-12">
                            <span className="badge badge-1">Dễ dàng</span>
                            <span className="badge badge-2">Tiện lợi</span>
                        </div>
                        <div className="badge-34">
                            <span className="badge badge-3">Lành mạnh</span>
                            <span className="badge badge-4">Không lãng phí</span>
                        </div>
                    </div>
                </div>
                
                <div className="hero-lower-text">
                    <p className="hero-headline">
                        KHÔNG CÒN PHẢI NGHĨ <br />
                        <span>“HÔM NAY ĂN GÌ”</span>
                    </p>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;