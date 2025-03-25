import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume, faUser, faHeadset, faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import "../css/footer.css";

const Footer = () => {
    return (
        <footer className="footer-box">
                <div className="footer-box1">
                    <div className="logo-footer"><h1>Shome</h1></div>
                    <div className="contact-footer">
                        <div className="contact-footer1">
                            <div className="icon"><FontAwesomeIcon icon={faPhoneVolume} /></div>
                            <div className="content"><a>Hotline</a><br /><a>1900 1881</a></div>
                        </div>
                        <div className="contact-footer1">
                            <div className="icon"><FontAwesomeIcon icon={faUser} /></div>
                            <div className="content"><a>Hỗ trợ khách hàng</a><br /><a>trogiup.Shome.com.vn</a></div>
                        </div>
                        <div className="contact-footer1">
                            <div className="icon"><FontAwesomeIcon icon={faHeadset} /></div>
                            <div className="content"><a>Chăm sóc khách hàng</a><br /><a>hotro@Shome.com.vn</a></div>
                        </div>
                    </div>
                </div>
                <div className="footer-box2">
                    <div className="footer-box2-1">
                        <p>CÔNG TY CỔ PHẦN PROPERTYGURU VIỆT NAM</p>
                        <div className="content">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            <p>Tầng 31, Keangnam Hanoi Landmark, Phạm Hùng, Nam Từ Liêm, Hà Nội</p>
                        </div>
                        <div className="content">
                            <FontAwesomeIcon icon={faPhone} />
                            <p>(024) 3562 5939 - (024) 3562 5940</p>
                        </div>
                    </div>
                    <div className="footer-box2-2">
                        <iframe src="https://www.google.com/maps/embed?..." 
                            width="100%" height="100%" style={{ border: 0, borderRadius: 30 }} 
                            allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </footer>
    );
};

export default Footer;
