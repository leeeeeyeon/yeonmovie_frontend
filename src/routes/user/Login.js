import axios from "axios";
import React, { useState } from "react";
import "./css/Login.css";

function Login(props){
    const { history } = props;

    const [loginInfo, setLoginInfo] = useState({
        id: '',
        pwd: ''
    });

    const [loggedIn, setLoggedIn] = useState({
        count: '',
        id: '',
        name: ''
    });

    const getValue = e => {
        const {name, value} = e.target;
        setLoginInfo({
            ...loginInfo,
            [name]: value
        });
    }

    const submitLogin = async () => {
        await axios.post('http://localhost:3002/user/login', {
            id: loginInfo.id,
            pwd: loginInfo.pwd
        })
        .then((res)=>{
            if(res.data.login) {
                alert('로그인 완료!');
                history.push('/');
                console.log(res.data);
            } else {
                alert('로그인 실패');
            }
        })
        .catch((err)=>{ console.log(err); });
    }
    
    return (
        <div className="login__container">
            <h4>Login</h4>
            <p><input type="text" name="id" placeholder="id" onChange={getValue} /></p>
            <p><input type="password" name="pwd" placeholder="password" onChange={getValue} /></p>
            <p><input type="submit" value="login" onClick={submitLogin}/></p>
        </div>
    );
}

export default Login;