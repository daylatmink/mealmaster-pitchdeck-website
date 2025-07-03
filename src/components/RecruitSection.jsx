import React from "react";
import "./RecruitSection.css";

const RecruitSection = () => {
    return (
        <section className="recruit-section">
            <h2 className="recruit-title">
                Bạn muốn đồng hành cùng hành trình thay đổi cách người Việt ăn uống mỗi ngày? Hãy tham gia cùng chúng tôi!
            </h2>
            <p className="recruit-desc">
                MealMaster đang tìm cộng sự có đam mê với công nghệ, sức khỏe, logistics và sản phẩm người dùng – cùng tạo nên nền tảng giúp hàng triệu người ăn đúng – sống khỏe – dễ dàng hơn mỗi ngày.
            </p>
            <div className="recruit-cta">
                <a href="mailto:hr@vitagrid.vn" className="btn-primary">
                    Gửi CV
                </a>
                <a href="#mentor" className="btn-secondary">
                    Trở thành cộng sự/mentor
                </a>
            </div>
        </section>
    );
};

export default RecruitSection;
