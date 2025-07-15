// CTASection.jsx

import React from "react";
import "./CTASection.css";
import IconButton from "../../IconButton/IconButton"

const CTASection = () => {
    return (
        <section className="cta-section">
            <div className="cta-container">

                <p className="cta-subtitle">
                    MealMaster giúp bạn lên thực đơn theo mục tiêu sức khỏe, chia khẩu phần đúng lượng và giao nguyên liệu tận tay – dễ dàng, lành mạnh, không lãng phí.
                </p>
                <div className="cta-buttons">
                    <IconButton href="#faq" label="FAQ"/>
                    <IconButton href="#explore" label="Explore" />
                </div>

            </div>
        </section>
    );
};

export default CTASection;