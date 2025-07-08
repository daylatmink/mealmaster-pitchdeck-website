import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
    return (
        <>
        <section className="hero-section">
            {/* Background image */}
            <div className="hero-bg">
                <img src="/assets/kitchen.png" alt="Kitchen Background" />
            </div>

            {/* Shape SVG wave */}
            <img
                src="/assets/exHeroWave.svg"
                alt="Hero Shape"
                className="hero-shape"
            />

            {/* Top Nav */}
            <nav className="hero-nav">
                <div className="nav-left">
                    <div className="nav-group">
                        <div className="nav-search">
                            <span className="search-icon">🔍</span>
                        </div>

                        <ul className="nav-links">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Service</a></li>
                            <li><a href="#">Community</a></li>
                        </ul>
                    </div>
                </div>

                <div className="nav-auth">
                    <button className="nav-btn nav-signup">Sign up</button>
                    <button className="nav-btn nav-login">Login</button>
                </div>
            </nav>

            {/* Content */}
            <div className="hero-inner">
                <h1 className="hero-title">
                    MealMaster – Trợ lý bữa ăn cá nhân hoá đầu tiên tại Việt Nam
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
        </section>

            <nav className="hero-bottom-nav">
                <p className="hero-subtitle">
                    MealMaster giúp bạn lên thực đơn theo mục tiêu sức khỏe, chia khẩu phần đúng lượng và giao nguyên liệu tận tay – dễ dàng, lành mạnh, không lãng phí.
                </p>
                <a href="#faq" className="btn-cta faq">
                    FAQ <span className="icon">▶</span>
                </a>
                <a href="#explore" className="btn-cta explore">
                    Explore <span className="icon">▶</span>
                </a>
            </nav>

        </>
    );
};

export default HeroSection;