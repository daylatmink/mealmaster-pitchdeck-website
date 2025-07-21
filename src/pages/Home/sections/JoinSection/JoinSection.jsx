import React from "react";
import "./JoinSection.css";

const JoinSection = () => {
    return (
        <section className="join-section">
            <div className="join-container">

                <div className="join-left">
                    <span className="join-badge">JOIN THE REVOLUTION</span>
                    <h2 className="join-title">
                        HÃY THAM GIA
                        CÙNG CHÚNG TÔI THAY
                        ĐỔI CÁCH NGƯỜI VIỆT
                        ĂN UỐNG MỖI NGÀY!
                    </h2>
                </div>
                <div className="join-right">
                    <p className="join-description">
                        MealMaster đang tìm cộng sự có đam mê với công nghệ, sức khỏe, logistics và sản phẩm người dùng – cùng tạo nên nền tảng giúp hàng triệu người ăn đúng – sống khỏe – dễ dàng hơn mỗi ngày.
                    </p>
                    <div className="join-buttons">
                        <div className="join-icon blue-bg">
                            <img src="/assets/logo2.png" alt="Chef Icon" />
                            <button className="play-btn">▶</button>
                        </div>
                        <div className="join-icon orange-bg">
                            <span>Tham gia</span>
                            <button className="play-btn">▶</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default JoinSection;
