import React from "react";
import "./ProblemSection.css";
import IconButton from "../../ui/IconButton/IconButton";

import woman from "./woman.png";
import question from "./question.png";
import time from "./time.png";
import tapping from "./tapping.png";
import wait from "./wait.png";
import arrow from "./arrow.png"


const ProblemSection = () => {
    return (
        <section className="problem-section">

            <div className="problem-left">
                <img src={woman} alt="Confused Person"/>
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
                            <img src={question} alt="Không biết hôm nay ăn gì" />
                        </div>
                        <p className="problem-caption">Không biết hôm nay ăn gì</p>
                    </div>

                    <div className="problem-item">
                        <div className="problem-icon-box">
                            <img src={time} alt="Không có thời gian đi chợ" />
                        </div>
                        <p className="problem-caption">Không có thời gian đi chợ</p>
                    </div>

                    <div className="problem-item">
                        <div className="problem-icon-box">
                            <img src={tapping} alt="Ngại phải cân đo, lên thực đơn" />
                        </div>
                        <p className="problem-caption">Ngại phải cân đo, lên thực đơn</p>
                    </div>

                    <div className="problem-item">
                        <div className="problem-icon-box">
                            <img src={wait} alt="Khó duy trì thói quen" />
                        </div>
                        <p className="problem-caption">Khó duy trì thói quen</p>
                    </div>

                </div>

                <div className="problem-arrow">
                    <img src={arrow} alt="Arrow Down" />
                </div>

                <p className="problem-cta">Nếu bạn muốn A B C D gì đó, hãy tải MealMaster!</p>

            </div>

        </section>
    );
};

export default ProblemSection;