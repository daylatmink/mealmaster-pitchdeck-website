import React from "react";
import "./SolutionSection.css"; // nếu muốn tách CSS riêng

import easy from "./easy.png";
import food from "./food.png";
import fresh from "./fresh.png";
import save from "./save.png";

const SolutionSection = () => {
    return (
        <section className="solution-section">
            <h2 className="solution-title">
                Giải pháp toàn diện, từ thực đơn đến tận tay
            </h2>
            <div className="solution-cards">
                <div className="solution-card">
                    <img src={easy} className="solution-card-img"/>
                    <h3 className="solution-card-title">Dễ dàng</h3>
                    <p className="solution-card-text">Lên thực đơn theo ý bạn</p>
                </div>
                <div className="solution-card">
                    <img src={food} className="solution-card-img"/>
                    <h3 className="solution-card-title">Không lãng phí</h3>
                    <p className="solution-card-text">Với thực đơn từ nguyên liệu sẵn có</p>
                </div>
                <div className="solution-card">
                    <img src={fresh} className="solution-card-img"/>
                    <h3 className="solution-card-title">Lành mạnh</h3>
                    <p className="solution-card-text">với AI theo dõi dinh dưỡng</p>
                </div>
                <div className="solution-card">
                    <img src={save} className="solution-card-img"/>
                    <h3 className="solution-card-title">Tiện lợi</h3>
                    <p className="solution-card-text">Thời gian, công sức và tiền bạc, giải phóng người nội trợ</p>
                </div>
            </div>
        </section>

    );
};

export default SolutionSection;
