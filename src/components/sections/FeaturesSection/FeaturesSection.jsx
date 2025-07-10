import React from "react";
import "./FeaturesSection.css"; // nếu bạn dùng CSS riêng

const FeaturesSection = () => {
    const features = [
        {
            icon: "🧠",
            title: "Không cần nghĩ “hôm nay ăn gì?”",
            desc: "MealMaster gợi ý sẵn theo mục tiêu của bạn",
        },
        {
            icon: "🥗",
            title: "Chia nguyên liệu “không dư - không thiếu”",
            desc: "Nguyên liệu được chia đúng khẩu phần, không lãng phí",
        },
        {
            icon: "💪",
            title: "“Ăn đúng - sống khỏe”",
            desc: "MealMaster theo dõi thói quen ăn uống để giúp khách hàng cân bằng dinh dưỡng",
        },
        {
            icon: "⏱️",
            title: "Tiện lợi, không tốn thời gian",
            desc: "Không cần tự đi chợ, không phải cân đo. MealMaster giúp bạn có sẵn nguyên liệu – đúng món – đúng bữa – ngay tại cửa.",
        },
    ];

    return (
        <section className="features-section">
            <h2 className="features-title">
                MealMaster – Lý do khiến bữa ăn lành mạnh trở nên dễ dàng hơn bao giờ hết
            </h2>
            <div className="features-grid">
                {features.map((feature, idx) => (
                    <div className="feature-card" key={idx}>
                        <div className="feature-icon">{feature.icon}</div>
                        <h3 className="feature-title">{feature.title}</h3>
                        <p className="feature-desc">{feature.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturesSection;
