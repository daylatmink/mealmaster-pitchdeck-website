import React from "react";
import "./PersonasSection.css";

const PersonasSection = () => {
    const personas = [
        {
            name: "Huyền",
            age: 24,
            tag: "Eat clean",
            quote: "Tôi muốn ăn lành mạnh mỗi ngày mà không phải cân đo gì cả.",
            img: "/assets/persona-huyen.jpg",
        },
        {
            name: "Chị Mai",
            age: 38,
            tag: "Mẹ 2 con",
            quote: "Đặt combo cả nhà, khỏi lo mỗi sáng phải nghĩ nấu gì.",
            img: "/assets/persona-mai.jpg",
        },
        {
            name: "Khôi",
            age: 22,
            tag: "Sinh viên",
            quote: "Chỉ cần đúng lượng, đúng món – không còn đồ ăn thừa nữa.",
            img: "/assets/persona-khoi.jpg",
        },
    ];

    return (
        <section className="personas-section">
            <h2 className="personas-title">
                Dù bạn là ai, MealMaster đều giúp bạn ăn uống chủ động hơn
            </h2>
            <div className="personas-grid">
                {personas.map((p, idx) => (
                    <div className="persona-card" key={idx}>
                        <div className="persona-img-wrapper">
                            <img src={p.img} alt={p.name} className="persona-img" />
                            <span className="persona-tag">{p.tag}</span>
                        </div>
                        <p className="persona-quote">“{p.quote}”</p>
                        <p className="persona-name">
                            <strong>{p.name}</strong>, {p.age}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PersonasSection;