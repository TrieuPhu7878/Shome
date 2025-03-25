import React, { useState } from "react";
import "../css/dangnhap.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [otpSent, setOtpSent] = useState(false);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    const handleSendOTP = () => {
        setOtpSent(true);
    };

    return (
        <>
            <Header />
            <div className="form-container">
                {isLogin ? (
                    <form id="login-form">
                        <h2>Đăng nhập</h2>
                        <div className="mb-3">
                            <label>Email hoặc Số điện thoại</label>
                            <input type="text" className="form-control" placeholder="Nhập email hoặc số điện thoại" required />
                        </div>
                        <div className="mb-3">
                            <label>Mật khẩu</label>
                            <input type="password" className="form-control" placeholder="Nhập mật khẩu" required />
                        </div>
                        <button type="submit" className="btn-dangnhap w-100">Đăng nhập</button>
                        <a className="toggle-link" onClick={toggleForm}>Chưa có tài khoản? Đăng ký</a>
                    </form>
                ) : (
                    <form id="register-form">
                        <h2>Đăng ký</h2>
                        <div className="mb-3">
                            <label>Họ và tên</label>
                            <input type="text" className="form-control" placeholder="Nhập họ và tên" required />
                        </div>
                        <div className="mb-3">
                            <label>Số điện thoại</label>
                            <input type="tel" className="form-control" placeholder="Nhập số điện thoại" required />
                        </div>
                        <div className="mb-3">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Nhập email" required />
                        </div>
                        <div className="mb-3">
                            <label>Mật khẩu</label>
                            <input type="password" className="form-control" placeholder="Nhập mật khẩu" required />
                        </div>
                        <button type="button" className="btn btn-success w-100" onClick={handleSendOTP} disabled={otpSent}>
                            {otpSent ? "Đã gửi OTP" : "Gửi mã OTP"}
                        </button>

                        {otpSent && (
                            <div className="mt-3">
                                <label>Nhập mã OTP</label>
                                <div className="otp-input">
                                    {[...Array(5)].map((_, i) => (
                                        <input key={i} type="text" maxLength="1" className="form-control otp-code" />
                                    ))}
                                </div>
                                <button type="submit" className="btn-dangnhap w-100 mt-3">Xác nhận đăng ký</button>
                            </div>
                        )}
                        <a className="toggle-link" onClick={toggleForm}>Đã có tài khoản? Đăng nhập</a>
                    </form>
                )}
            </div>
            <Footer />
        </>
    );
};

export default Login;
