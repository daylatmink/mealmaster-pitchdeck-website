import React from "react";
import "./SolutionSection.css"; // nếu muốn tách CSS riêng

const SolutionSection = () => {
    const features = [
        {
            title: "Gợi ý món ăn theo mục tiêu cá nhân",
            icon: "🍽️",
        },
        {
            title: "Chia khẩu phần thông minh",
            icon: "📏",
        },
        {
            title: "Đi chợ hộ – giao tận nơi",
            icon: "🛒",
        },
        {
            title: "Theo dõi lịch ăn – tuân thủ dễ dàng",
            icon: "📅",
        },
    ];

    return (
        <section className="solution-section">
            <h2 className="solution-title">
                Giải pháp toàn diện, từ thực đơn đến tận tay
            </h2>
            <div className="solution-grid">
                {features.map((item, index) => (
                    <div className="solution-card" key={index}>
                        <div className="solution-icon">{item.icon}</div>
                        <h3 className="solution-card-title">{item.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SolutionSection;
