import React from "react";
import "../css/header.css";
import "../css/footer.css";
import "../css/chitietphongtro.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faPhoneVolume, faUser, faHeadset, faMapMarkerAlt, faPhone } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import Footer from "../components/Footer";
const houseImage = process.env.PUBLIC_URL + "/img/anh-mo-hinh-nha-removebg-preview.png";
const houseImage2 = process.env.PUBLIC_URL + "/img/house-animate.png";
const houseImage3 = process.env.PUBLIC_URL + "/img/house-model2-Photoroom.png";

const Chitietphongtro = () => {
    const images = [houseImage, houseImage2, houseImage, houseImage3, houseImage];

    return (
        <div>
            <Header/>
            
            <div className="box1">
                <div className="image-slide-detail">
                    <img src={houseImage} alt="Nhà" />
                    <div className="slider-container">
                        <div className="button-left"><FontAwesomeIcon icon={faChevronLeft} /></div>
                        <div className="slider">
                            {images.map((img, index) => (
                                <div key={index} className="imageSlider"><img src={img} alt={`Slide ${index}`} /></div>
                            ))}
                        </div>
                        <div className="button-right"><FontAwesomeIcon icon={faChevronRight} /></div>
                    </div>
                </div>
                <div className="information-detail">
                    <div className="title-information"><a>Phòng trọ mới sửa 7/2023, Quận Tân Phú</a></div>
                    <div className="address"><a>Địa chỉ: Lương Thế Vinh, Phường Tân Thới Hòa, Quận Tân Phú, TPHCM</a></div>
                    <div className="price"><a>Giá Thuê: 1.8 Triệu/tháng</a></div>
                    <div className="acreage"><a>Diện tích: 20 m²</a></div>
                    <div className="button-detail">
                        <div className="buynow"><a href="/thuetro">Thuê ngay</a></div>
                        <div className="contact"><a>0397147xxx</a></div>
                    </div>
                </div>
            </div>
            
            <h1 className="title-box2">Mô tả chi tiết</h1>
            <div className="box2">
                <div className="box2-detail">
                    <p>CHÍNH CHỦ CHO THUÊ Phòng mới xây an ninh có máy lạnh😍😍 </p>
                    <p>Địa chỉ: Lương Thế Vinh, Phường Tân Thới Hoà, Quận Tân Phú, TPHCM</p>
                    <p>Diện tích: 30m²</p>
                    <p>Điện 3k5, nước 70k/ Người, wifi + rác 130k, xe Free</p>
                    <p>Nhà thiết kế chuẩn cao cấp, khoá vân tay, Camera an ninh, Báo cháy nổ</p>
                </div>
                <div className="map-location">
                    <iframe className="map-frame" 
                        src="https://www.google.com/maps/embed?..." 
                        width="90%" height="90%" allowFullScreen loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
            <Footer/>
            
        </div>
    );
};

export default Chitietphongtro;
