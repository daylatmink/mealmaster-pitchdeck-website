import React from "react";
import "./ProblemSection.css";
import IconButton from "../../buttons/IconButton";

const ProblemSection = () => {
    return (
        <section className="problem-section">
            <div className="problem-left">
                <img src="/assets/6.png" alt="Confused Person"/>
                <div className="problem-buttons">
                    <IconButton label="Tải ứng dụng" href="#download" className="button1" />
                    <IconButton label="Đăng ký ngay" href="#signup" className="button2" />
                </div>
            </div>
            <div className="problem-right">
                <h2 className="problem-title">
                    Nấu ăn lành mạnh tưởng dễ, <br />
                    nhưng lại khiến nhiều người bối rối mỗi ngày
                </h2>

                <div className="problem-icons">
                    <div className="problem-item">
                        <div className="problem-icon-box">
                            <img src="/assets/question.png" alt="Không biết hôm nay ăn gì" />
                        </div>
                        <p className="problem-caption">Không biết hôm nay ăn gì</p>
                    </div>

                    <div className="problem-item">
                        <div className="problem-icon-box">
                            <img src="/assets/1.png" alt="Không có thời gian đi chợ" />
                        </div>
                        <p className="problem-caption">Không có thời gian đi chợ</p>
                    </div>

                    <div className="problem-item">
                        <div className="problem-icon-box">
                            <img src="/assets/tapping.png" alt="Ngại phải cân đo, lên thực đơn" />
                        </div>
                        <p className="problem-caption">Ngại phải cân đo, lên thực đơn</p>
                    </div>

                    <div className="problem-item">
                        <div className="problem-icon-box">
                            <img src="/assets/wait.png" alt="Khó duy trì thói quen" />
                        </div>
                        <p className="problem-caption">Khó duy trì thói quen</p>
                    </div>

                </div>

                <div className="problem-arrow">
                    <img src="/assets/4.png" alt="Arrow Down" />
                </div>

                <p className="problem-cta">Nếu bạn muốn A B C D gì đó, hãy tải MealMaster!</p>


            </div>
        </section>
    );
};

export default ProblemSection;