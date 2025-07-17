// HeroSection.jsx

import React from "react";
import "./HeroSection.css";

import meal from "./meal.jpg"
import exHeroWave from "./exHeroWave.svg"

const HeroSection = () => {
    return (
        <section className="hero-section">
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

                {/* Top Nav */}

                {/* Content */}
                <div className="hero-inner">
                    <h1 className="hero-title">
                        MealMaster – Trợ lý bữa ăn <br></br>cá nhân hoá đầu tiên tại Việt Nam
                    </h1>

                    <div className="hero-badges">
                        <span className="badge badge-1">Dễ dàng</span>
                        <span className="badge badge-2">Tiện lợi</span>
                        <span className="badge badge-3">Lành mạnh</span>
                        <span className="badge badge-4">Không lãng phí</span>
                    </div>
                </div>
                <div className="hero-lower-text">
                    <p className="hero-headline">
                        KHÔNG CÒN PHẢI NGHĨ <br /><span>“HÔM NAY ĂN GÌ”</span>
                    </p>

                </div>

            </div>
        </section>
    );
};

export default HeroSection;