import React from "react";
import "./DifferenceSection.css";

const DifferenceSection = () => {
    const features = [
        "Cá nhân hóa thực đơn",
        "Gợi ý và chia khẩu phần",
        "Đi chợ hộ từng bữa",
        "Giao nguyên liệu theo bữa",
    ];

    const data = {
        "Tiện ích": features,
        "MealMaster": [true, true, true, true],
        "App đặt đồ ăn": [false, false, true, false],
        "App đi chợ": [false, false, true, true],
        "App fitness": [true, true, false, false],
    };

    const getIcon = (val) => (
        <img
            src={`/assets/${val ? "checked" : "cancel"}.png`}
            alt={val ? "✓" : "✕"}
            className="icon-img"
        />
    );

    return (
        <section className="difference-section">
            <h2 className="difference-title">
                KHÔNG GIỐNG APP ĐI CHỢ<br />
                KHÔNG GIỐNG APP ĂN KIÊNG
            </h2>
            <div className="difference-table">
                {Object.entries(data).map(([colTitle, colData], index) => (
                    <div className="difference-column" key={index}>
                        <div className="difference-header">{colTitle}</div>
                        {colData.map((item, i) => (
                            <div className="difference-cell" key={i}>
                                {typeof item === "string" ? item : getIcon(item)}
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DifferenceSection;
