import React from 'react';
import './StatementSection.css';

import orange from "./orange.png";

const StatementSection = () => {
    return (
        <section className="statement-section">
            <div className="statement-container">

                <div className="background-overlay">
                    <img src={orange} />
                </div>
                
                <div className="content">
                    <h2 className="statement-text">
                        "MEALMASTER KHÔNG TẠO RA NHƯ CẦU MỚI –<br />
                        CHÚNG TÔI CHỈ GIẢI QUYẾT VẤN ĐỀ MÀ NGƯỜI TRẺ ĐANG<br />
                        ĐỐI MẶT MỖI NGÀY."
                    </h2>
                </div>

            </div>
        </section>
    );
};

export default StatementSection;