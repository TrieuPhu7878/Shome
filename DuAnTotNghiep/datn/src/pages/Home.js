import React, { useState, useEffect } from "react";
import "../css/index.css";
import "../css/header.css";
import "../css/footer.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const slides = [
  {
    image: "/img/house-model2-Photoroom.png",
    text: "Bạn cần tìm phòng trọ nhanh, giá hợp lý mà không phải chạy khắp nơi. Hệ thống của chúng tôi giúp bạn xem trước phòng, vị trí, giá cả rõ ràng ngay trên website. Tiết kiệm thời gian – có phòng ngay khi cần!",
  },
  {
    image: "/img/house-animate.png",
    text: "Không còn nỗi lo bị ép giá. Tiền cọc mập mờ! Tất cả thông tin phòng trọ trên hệ thống đều được kiểm duyệt, giá niêm yết rõ ràng, hợp đồng minh bạch. Bạn hoàn toàn yên tâm khi đặt cọc và chuyển vào ở.",
  },
  {
    image: "/img/anh-mo-hinh-nha-removebg-preview.png",
    text: "Tìm trọ không chỉ là có chỗ ở, mà còn là sự an tâm. Hỗ trợ xác thực chủ trọ, phản hồi nhanh khi có vấn đề, giúp bạn có trải nghiệm thuê nhà thuận tiện và an toàn nhất!",
  },
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Header/>

      <div className="slider">
        <img src={slides[currentIndex].image} alt="Slide" />
        <div className="slider-text-box">
          <p>{slides[currentIndex].text.split(".")[0]}.</p>
          <p>{slides[currentIndex].text.split(".").slice(1).join(".")}</p>
        </div>
        <div className="buttons">
          <button onClick={() => showSlide((currentIndex - 1 + slides.length) % slides.length)}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <button onClick={() => showSlide((currentIndex + 1) % slides.length)}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default Home;
