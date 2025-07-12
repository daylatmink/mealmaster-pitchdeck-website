import React from "react";
import "./RecruitSection.css";

const RecruitSection = () => {
    return (
        <section className="recruit-section">
            <h2 className="recruit-title">
                CHẠM ĐỂ SỐNG KHỎE HƠN MỖI NGÀY
            </h2>
            <h2 className="recruit-title">
                BẮT ĐẦU CHỈ VỚI 1 CÚ CLICK !!
            </h2>
            {/*<p className="recruit-desc">*/}
            {/*    MealMaster đang tìm cộng sự có đam mê với công nghệ, sức khỏe, logistics và sản phẩm người dùng – cùng tạo nên nền tảng giúp hàng triệu người ăn đúng – sống khỏe – dễ dàng hơn mỗi ngày.*/}
            {/*</p>*/}
            <div className="recruit-cta">
                <a href="mailto:hr@vitagrid.vn" className="btn-primary">
                    Liên hệ với chúng tôi
                </a>
                <a href="#mentor" className="btn-secondary">
                    Tải ứng dụng
                </a>
            </div>
            <p className="recruit-con">
                Hàng trăm người dùng đã chọn cách ăn uống dễ dàng hơn. Còn bạn thì sao?
            </p>
        </section>
    );
};

export default RecruitSection;
