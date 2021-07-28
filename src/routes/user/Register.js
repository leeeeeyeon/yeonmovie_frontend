import React from "react";
import "./Register.css";

function Login(){
    return (
        <div className="login__container">
            <h4>Register</h4>
            <form action="/auth/register_process" method="post">
                <p><input type="text" name="id" placeholder="id" /></p>
                <p><input type="password" name="pwd" placeholder="password" /></p>
                <p><input type="password" name="pwd2" placeholder="password again" /></p>
                <p><input type="submit" value="register"/></p>
            </form>
        </div>
    );
}
export default Login;