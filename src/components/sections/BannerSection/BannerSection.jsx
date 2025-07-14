import React from "react";
import "./BannerSection.css";

const BannerSection = () => {
    return (
        <section className="banner-full">
            <div className="banner-inner">
                    <img src="/assets/12.png" alt="mascot" className="mascot-picture" />
            </div>
            <div className="banner-footer">
                <h3 className="banner-title left">MEALMASTER</h3>
                <h3 className="banner-title right">SINCE 2025</h3>
            </div>
        </section>
    );
};

export default BannerSection;
