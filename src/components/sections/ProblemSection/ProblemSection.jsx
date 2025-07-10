import React from "react";
import "./ProblemSection.css";

const ProblemSection = () => {
    return (
        <section className="problem-section">
            <div className="problem-content">
                <div className="problem-text">
                    <h2 className="problem-title">
                        Nấu ăn lành mạnh tưởng dễ, nhưng lại khiến nhiều người bối rối mỗi ngày
                    </h2>
                    <p className="problem-description">
                        Bạn muốn sống khỏe, ăn đủ chất, nhưng bạn không biết hôm nay ăn gì, không có thời gian đi chợ,
                        ngại phải cân đo, lên thực đơn, lại càng không kiên nhẫn để duy trì thói quen này lâu dài...
                    </p>
                    <p className="problem-solution">
                        Nếu bạn từng trải qua cảm giác đó - MealMaster chính là giải pháp dành cho bạn
                    </p>
                    <div className="cta-buttons">
                        <a href="#support" className="btn btn-primary">We need your support!</a>
                        <a href="#join" className="btn btn-secondary">Join us now!</a>
                    </div>
                </div>
                <div className="problem-image">
                    <div className="image-container">
                        <img src="/assets/gradient_bg.png" alt="Gradient Background" className="gradient-bg"/>
                        <img src="/assets/animatedwoman.png" alt="Character Image" className="character-img"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;