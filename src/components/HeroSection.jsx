import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-container">
                <div className="hero-text">
                    <h1 className="hero-title">
                        MealMaster – Trợ lý bữa ăn cá nhân hóa đầu tiên tại Việt Nam
                    </h1>
                    <p className="hero-subtitle">
                        Không còn phải nghĩ “hôm nay ăn gì”. MealMaster giúp bạn lên thực đơn
                        theo mục tiêu sức khỏe, chia khẩu phần đúng lượng và giao nguyên liệu
                        tận tay – dễ dàng, lành mạnh, không lãng phí.
                    </p>
                    <div className="hero-cta">
                        <a href="#trial" className="btn-primary">
                            Dùng thử miễn phí 7 ngày
                        </a>
                        <a href="#notify" className="btn-secondary">
                            Nhận thông báo khi ra mắt
                        </a>
                    </div>
                </div>

                <div className="hero-visual">
                    <img
                        src="/assets/mockup-app.png"
                        alt="MealMaster App"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
