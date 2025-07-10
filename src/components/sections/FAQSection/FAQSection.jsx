import React, { useState } from "react";
import "./FAQSection.css";

const faqs = [
    {
        question: "App có miễn phí không?",
        answer:
            "Khách hàng sẽ được trải nghiệm dùng thử bản Premium 7 ngày miễn phí. Sau đó sẽ có tùy chọn: tiếp tục sử dụng gói cơ bản hoặc nâng cấp gói Premium.",
    },
    {
        question: "Có giao hàng ở tỉnh không?",
        answer:
            "Hiện triển khai tại HN, HCM, Đà Nẵng. Sắp tới MealMaster sẽ mở rộng thêm tại các tỉnh thành khác trên khắp cả nước.",
    },
    {
        question: "Có thể chọn món yêu thích không?",
        answer:
            "Có! Bạn có thể lưu món yêu thích và MealMaster sẽ gợi ý lại để cân đối khẩu phần ăn của bạn.",
    },
    {
        question: "Nguyên liệu có đảm bảo không?",
        answer:
            "Chúng tôi liên kết với các chuỗi bán lẻ uy tín và giao tận tay mỗi ngày.",
    },
];

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <h2 className="faq-title">Câu hỏi thường gặp (FAQ)</h2>
            <div className="faq-list">
                {faqs.map((faq, idx) => (
                    <div
                        className={`faq-item ${activeIndex === idx ? "active" : ""}`}
                        key={idx}
                    >
                        <button className="faq-question" onClick={() => toggleFAQ(idx)}>
                            {faq.question}
                            <span className="faq-toggle">{activeIndex === idx ? "-" : "+"}</span>
                        </button>
                        {activeIndex === idx && (
                            <div className="faq-answer">{faq.answer}</div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQSection;
