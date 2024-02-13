import React, { useState } from "react";
import Toolbar from "./Toolbar";

function LandingPage(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogin = () => {
        setIsLoggedIn(true);
        /*로그인 버튼을 누르면 로그인 상태가 사실이 됨*/
    };

    const onClickLogout = () => {
        setIsLoggedIn(false);
        /*로그아웃 버튼을 누르면 로그인 상태가 거짓이 됨*/
    };

    return (
        <div>
            <Toolbar
            isLoggedIn={isLoggedIn}
            onClickLogin={onClickLogin}
            /*로그인 버튼을 누르면 로그인 페이지가 됨*/
            onClickLogout={onClickLogout}
            /*로그아웃 버튼을 누르면 로그아웃 페이지가 됨*/
            />
            <div style={{padding: 16}}>리액트 공부</div>
        </div>
    );
}

export default LandingPage;