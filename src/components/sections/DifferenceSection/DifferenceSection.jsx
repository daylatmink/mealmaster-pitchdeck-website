import React from "react";
import "./DifferenceSection.css"; // nếu bạn muốn CSS riêng

const DifferenceSection = () => {
    const data = [
        { feature: "Cá nhân hóa thực đơn", mealmaster: true, shipping: false, shopping: false, fitness: true },
        { feature: "Gợi ý và chia khẩu phần", mealmaster: true, shipping: false, shopping: false, fitness: true },
        { feature: "Đi chợ hộ từng bữa", mealmaster: true, shipping: true, shopping: true, fitness: false },
        { feature: "Giao nguyên liệu theo bữa", mealmaster: true, shipping: false, shopping: true, fitness: false },
    ];

    return (
        <section className="difference-section">
            <h2 className="difference-title">
                Không giống app đi chợ, không giống app ăn kiêng
            </h2>
            <div className="difference-table">
                
                <div className="difference-row header">
                    <div>Tiện ích</div>
                    <div>MealMaster</div>
                    <div>App đặt đồ ăn</div>
                    <div>App đi chợ</div>
                    <div>App fitness</div>
                </div>

                {data.map((row, idx) => (
                    <div
                        className={`difference-row ${idx % 2 === 0 ? "even" : "odd"}`}
                        key={idx}
                    >
                        <div className="feature">{row.feature}</div>
                        <div>{row.mealmaster ? "✅" : "❌"}</div>
                        <div>{row.shipping ? "✅" : "❌"}</div>
                        <div>{row.shopping ? "✅" : "❌"}</div>
                        <div>{row.fitness ? "✅" : "❌"}</div>
                    </div>
                ))}

            </div>
        </section>
    );
};

export default DifferenceSection;