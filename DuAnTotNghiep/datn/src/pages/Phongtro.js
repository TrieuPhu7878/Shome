import React from "react";
import "../css/header.css";
import "../css/footer.css";
import "../css/phongtro.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronDown, faMapMarkerAlt, faExpand, faPhoneVolume, faUser, faHeadset, faPhone } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/Header";
import Footer from "../components/Footer";
const Phongtro = () => {
    const rooms = Array(10).fill({
        title: "Phòng trọ mới sửa 7/2023, Quận Tân Phú",
        location: "Lương Thế Vinh, Quận Tân Phú, TPHCM",
        price: "1.8 Triệu/tháng",
        size: "20 m²",
        description: "Giá từ 1800K, cam kết hình thật...",
        image: "/img/anh-mo-hinh-nha-removebg-preview.png",
    });

    return (
        <div>
            {/* Header */}
            <Header/>

            {/* Thanh tìm kiếm */}
            <div className="search-container">
                <div className="search-box">
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" placeholder="Tìm kiếm phòng trọ..." />
                </div>
                <div className="filter-box">
                    {['Phòng trọ', 'Quận', 'Giá thuê', 'Diện tích'].map(filter => (
                        <button className="filter-btn" key={filter}>{filter} <FontAwesomeIcon icon={faChevronDown} /></button>
                    ))}
                </div>
            </div>

            {/* Danh sách phòng trọ */}
            <div className="room-list">
                {rooms.map((room, index) => (
                    <div className="room-card" key={index}>
                        <div className="room-image">
                            <img src={room.image} alt="Phòng trọ" />
                        </div>
                        <div className="room-info">
                            <h3 className="room-title">{room.title}</h3>
                            <p className="room-location"><FontAwesomeIcon icon={faMapMarkerAlt} /> {room.location}</p>
                            <p className="room-price">{room.price}</p>
                            <p className="room-size"><FontAwesomeIcon icon={faExpand} /> {room.size}</p>
                            <p className="room-description">{room.description}</p>
                            <a href="/chitietphongtro" className="btn-view">Xem chi tiết</a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Phân trang */}
            <div className="pagination-container">
                <a href="#" className="prev">&laquo; Trước</a>
                {[1, 2, 3].map(page => (
                    <a href="#" className={`page ${page === 1 ? 'active' : ''}`} key={page}>{page}</a>
                ))}
                <a href="#" className="next">Tiếp &raquo;</a>
            </div>

            <Footer/>
        </div>
    );
};

export default Phongtro;
