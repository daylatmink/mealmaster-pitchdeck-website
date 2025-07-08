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
            <div className="solution-cards">
                <div className="solution-card">
                    <h3 className="solution-card-title">Dễ dàng</h3>
                    <p className="solution-card-text">MealMaster gợi ý sẵn theo mục tiêu của bạn</p>
                </div>
                <div className="solution-card">
                    <h3 className="solution-card-title">Không lãng phí</h3>
                    <p className="solution-card-text">Nguyên liệu được chia đúng khẩu phần, không lãng phí</p>
                </div>
                <div className="solution-card">
                    <h3 className="solution-card-title">Lành mạnh</h3>
                    <p className="solution-card-text">MealMaster theo dõi thói quen ăn uống để giúp khách hàng cân bằng dinh dưỡng</p>
                </div>
                <div className="solution-card">
                    <h3 className="solution-card-title">Tiện lợi</h3>
                    <p className="solution-card-text">MealMaster giúp bạn có sẵn nguyên liệu – đúng món – đúng bữa – ngay tại cửa</p>
                </div>
            </div>
        </section>

    );
};

export default SolutionSection;
