import React from "react";
import "./About.css";

function About(){
    return (
        <div className="about__container">
            <span>
                YeonMovie, Update ~ing 
            </span>
            <span>
                To-Do
                <ul>
                <li>CSS 큰 테두리는 바꾸지 말기, 나 CSS 잘 몰랑</li>
                <li>Node.js API로 코드 수정</li>
                <li>Themovie DB로 API 바꿔보기</li>
                <li>회원가입, 로그인, 로그아웃, 회원정보 수정, 회원탈퇴</li>
                <li>게시판</li>
                <li>검색</li>
                <li>또 뭐가 있을까</li>
                </ul> 
            </span>
        </div>
    );
}

export default About;