import React, { useState } from "react";
import "../css/header.css";
import "../css/footer.css";
import "../css/thongtincanhan.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Thongtincanhan = () => {
  const [avatar, setAvatar] = useState("img/user.png");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  return (
    <div>
      <Header />
      <div className="box">
        <div className="menu-information">
          <div className="title-box">
            <div className="image-user">
              <img src={avatar} alt="Avatar" />
            </div>
            <div className="name-user">
              <a href="#">Lê Văn Giang</a>
            </div>
          </div>
          <div className="list-menu">
            <ul>
              <li><a href="#">Thông tin cá nhân</a></li>
              <li><a href="#">Phòng đã Thuê</a></li>
              <li><a href="#">Dịch Vụ</a></li>
              <li><a href="#">Thanh toán hàng tháng</a></li>
              <li><a href="#">Đổi mật khẩu</a></li>
              <li><a href="#">Đăng xuất</a></li>
            </ul>
          </div>
        </div>
        <div className="display-box">
          <div className="title-display-box">
            <a href="#">Thông tin cá nhân</a>
          </div>
          <div className="display">
            <div className="profile-form">
              <div className="upload-avatar">
                <label htmlFor="avatar-upload">
                  <img src={avatar} alt="Avatar Preview" id="avatar-preview" />
                  <input type="file" id="avatar-upload" accept="image/*" hidden onChange={handleAvatarChange} />
                </label>
                <p>Tải ảnh</p>
              </div>
              <div className="form-group">
                <label>Họ và tên</label>
                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nhập họ và tên" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Số điện thoại</label>
                  <input type="text" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Nhập số điện thoại" />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Nhập email" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Ngày sinh</label>
                  <input type="date" className="form-control" value={dob} onChange={(e) => setDob(e.target.value)} />
                </div>
                <div className="form-group">
                  <label>Địa chỉ</label>
                  <input type="text" className="form-control" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Nhập địa chỉ" />
                </div>
              </div>
              <div className="save-button">
                <button className="btn btn-danger">Lưu thay đổi</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Thongtincanhan;