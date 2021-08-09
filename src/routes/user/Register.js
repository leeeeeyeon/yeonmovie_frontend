import React, { useState } from "react";
import axios from "axios";
import shortid from "shortid";
import "./css/Register.css";

function Login(props){
    const { history } = props;

    const [user, setUser] = useState({
        count: shortid.generate(),
        id: '',
        name: '',
        pwd: '',
        pwd2: ''
    });

    const submitRegister = () => {
        axios.post('http://localhost:3002/user/register', {
            count: shortid.generate(),
            id: user.id,
            name: user.name,
            pwd: user.pwd,
            pwd2: user.pwd2

        })
        .then((res)=>{
            if(res.data) {
                alert('가입 완료!');
                history.push("/");
            } else {
                alert('비밀번호가 다릅니다. 다시 시도해주세요!');
                history.push("/user/register");
            }
        })
        .catch((err)=>{ console.log(err); });
    }

    const getValue = e => {
        const {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    return (
        <div className="login__container">
            <h4>Register</h4>
            <p><input type="text" name="id" placeholder="id" onChange={getValue} /></p>
            <p><input type="text" name="name" placeholder="name" onChange={getValue} /></p>
            <p><input type="password" name="pwd" placeholder="password" onChange={getValue} /></p>
            <p><input type="password" name="pwd2" placeholder="password again" onChange={getValue} /></p>
            <p><input type="submit" value="register" onClick={submitRegister}/></p>
        </div>
    );
}
export default Login;