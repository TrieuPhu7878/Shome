import React, { useState } from "react";
import "../css/thuetro.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Thuetro = () => {
  const [paymentMethod, setPaymentMethod] = useState("");

  return (
    <>
      <Header />
      <div className="container">
        <div className="title-display-box">
          <a href="">Thông tin thuê trọ</a>
        </div>
        <div className="display">
          <div className="profile-form">
            <div className="form-row">
              <div className="form-group">
                <label>Họ và tên</label>
                <input type="text" className="form-control" placeholder="Nhập họ và tên" required />
              </div>
              <div className="form-group">
                <label>Ngày sinh</label>
                <input type="date" className="form-control" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Số CMND/CCCD/Hộ chiếu</label>
                <input type="text" className="form-control" placeholder="Nhập số giấy tờ tùy thân" required />
              </div>
              <div className="form-group">
                <label>Ngày cấp, nơi cấp</label>
                <input type="text" className="form-control" placeholder="Nhập ngày và nơi cấp" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Địa chỉ thường trú</label>
                <input type="text" className="form-control" placeholder="Nhập địa chỉ" required />
              </div>
              <div className="form-group">
                <label>Số điện thoại</label>
                <input type="tel" className="form-control" placeholder="Nhập số điện thoại" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Phương thức thanh toán</label>
                <select
                  className="form-control"
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  required
                >
                  <option value="">Chọn phương thức thanh toán</option>
                  <option value="chuyen_khoan">Chuyển khoản</option>
                  <option value="tien_mat">Tiền mặt</option>
                </select>
              </div>
            </div>
            {paymentMethod === "chuyen_khoan" && (
              <div className="form-row" id="online-payment">
                <div className="form-group">
                  <label>Chọn cổng thanh toán</label>
                  <select className="form-control">
                    <option value="">Chọn cổng thanh toán</option>
                    <option value="momo">MoMo</option>
                    <option value="zalopay">ZaloPay</option>
                    <option value="vnpay">VNPay</option>
                  </select>
                </div>
              </div>
            )}
            <div className="save-button">
              <button className="btn btn-success">Xác nhận thuê phòng</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Thuetro;
