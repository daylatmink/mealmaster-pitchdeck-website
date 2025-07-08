import React from "react";
import "./ProblemSection.css";

const ProblemSection = () => {

    return (
        <section className="problem-section">

            <div className="problem-container">
                <h2 className="problem-title">
                    Nấu ăn lành mạnh tưởng dễ, nhưng lại khiến nhiều người bối rối mỗi ngày
                </h2>
                <p className="problem-subline">
                    Bạn muốn sống khỏe, ăn đủ chất, nhưng:
                </p>
                <ul className="problem-list">
                    <li>Không biết hôm nay ăn gì</li>
                    <li>Không có thời gian đi chợ</li>
                    <li>Ngại phải cân đo, lên thực đơn</li>
                    <li>Lại càng không kiên nhẫn để duy trì thói quen này lâu dài…</li>
                </ul>
                <p className="problem-conclusion">
                    Nếu bạn từng trải qua cảm giác đó – MealMaster chính là giải pháp dành cho bạn.
                </p>
            </div>
        </section>
    );
};

export default ProblemSection;
