import React from "react";
import "./RegisterBannerSection.css";

const RegisterBannerSection = () => {
    return (
        <section className="register-banner">
            <img src="/assets/13.png" alt="Pan Left" className="pan-left" />
            <div className="register-content">
                <p className="register-text">Đăng ký để nhận ngay nhiều ưu đãi giới hạn!</p>
                <button className="register-button">Đăng ký ngay!</button>
            </div>
            <img src="/assets/11.png" alt="Pot Right" className="pot-right" />
        </section>
    );
};

export default RegisterBannerSection;
