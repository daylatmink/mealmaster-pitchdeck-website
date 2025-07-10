import React from "react";
import "./MarketStatsSection.css";

const MarketStatsSection = () => {
    const stats = [
        {
            icon: "💚",
            percent: "60%",
            text: "Người trẻ tại Việt Nam đang theo đuổi lối sống lành mạnh (Cimigo, 2022)"
        },
        {
            icon: "⏰",
            percent: "45%",
            text: "Thừa nhận không đủ thời gian chuẩn bị bữa ăn lành mạnh (Vero, 2022)"
        },
        {
            icon: "💸",
            percent: "75%",
            text: "Sẵn sàng trả phí cho giải pháp ăn uống thông minh (VitaGrid)"
        },
    ];

    return (
        <section className="market-section">
            <h2 className="market-title">
                Người trẻ đang ưu tiên sống khỏe – nhưng không đủ thời gian để ăn uống đúng cách
            </h2>
            <div className="market-grid">
                {stats.map((s, idx) => (
                    <div className="market-card" key={idx}>
                        <div className="market-icon">{s.icon}</div>
                        <div className="market-percent">{s.percent}</div>
                        <p className="market-text">{s.text}</p>
                    </div>
                ))}
            </div>
            <p className="market-callout">
                “MealMaster không tạo ra nhu cầu mới – chúng tôi chỉ giải quyết vấn đề mà người trẻ đang đối mặt mỗi ngày.”
            </p>
        </section>
    );
};

export default MarketStatsSection;
