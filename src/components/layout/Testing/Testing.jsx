// Testing.jsx

import React from "react";
import "./Testing.css";
import { IconButton } from "../../../components";

const Testing = () => {
    return (
        <section className="testing-section">
            <div className="testing-container">

                <p className="testing-subtitle">
                    MealMaster giúp bạn lên thực đơn theo mục tiêu sức khỏe, chia khẩu phần đúng lượng và giao nguyên liệu tận tay – dễ dàng, lành mạnh, không lãng phí.
                </p>
                <div className="testing-buttons">
                    <IconButton href="#faq" label="FAQ"/>
                    <IconButton href="#explore" label="Explore" />
                </div>

            </div>
        </section>
    );
};

export default Testing;