import React from "react";
import "./DifferenceSection.css"; // nếu bạn muốn CSS riêng

const DifferenceSection = () => {
    const data = [
        { feature: "Lên thực đơn", grocery: false, diet: true, mealmaster: true },
        { feature: "Giao nguyên liệu", grocery: true, diet: false, mealmaster: true },
        { feature: "Chia khẩu phần", grocery: false, diet: false, mealmaster: true },
        { feature: "Theo dõi lịch ăn", grocery: false, diet: true, mealmaster: true },
    ];

    return (
        <section className="difference-section">
            <h2 className="difference-title">
                Không giống app đi chợ, không giống app ăn kiêng
            </h2>
            <div className="difference-table">
                <div className="difference-row header">
                    <div></div>
                    <div>App đi chợ</div>
                    <div>App ăn kiêng</div>
                    <div>MealMaster</div>
                </div>
                {data.map((row, idx) => (
                    <div className="difference-row" key={idx}>
                        <div className="feature">{row.feature}</div>
                        <div>{row.grocery ? "✅" : "❌"}</div>
                        <div>{row.diet ? "✅" : "❌"}</div>
                        <div>{row.mealmaster ? "✅" : "❌"}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DifferenceSection;
