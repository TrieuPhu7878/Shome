import React from "react";
import "../css/header.css";

const Header = () => {
    return (
            <header>
                <div className="box-header">
            <div className="logo"><h1>Shome</h1></div>
            <nav className="menu">
                <ul>
                    <li><a href="/">Trang chủ</a></li>
                    <li><a href="/phongtro">Phòng trọ</a></li>
                </ul>
            </nav>
            <div className="login"><a href="/login">Đăng nhập</a></div>
            </div>
        </header>
    );
};

export default Header;
