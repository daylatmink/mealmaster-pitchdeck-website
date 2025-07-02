import React from "react";
import "./ProjectIntro.css"; // Nếu bạn muốn tách style riêng

const ProjectIntro = () => {
    return (
        <section className="project-intro">
            <h1>MealMaster</h1>
            <p>
                MealMaster giúp bạn lên thực đơn thông minh, tiết kiệm thời gian nấu ăn và tối ưu hóa chi phí cho mọi gia đình hiện đại.
            </p>
            <a className="cta-btn" href="#contact">
                Liên hệ với chúng tôi
            </a>
        </section>
    );
};

export default ProjectIntro;