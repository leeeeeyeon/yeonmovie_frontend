import React from "react";
import "./Login.css";

function Login(){
    return (
        <div className="login__container">
            <h4>Login</h4>
            <form action="/auth/login_process" method="post">
                <p><input type="text" name="id" placeholder="id" /></p>
                <p><input type="password" name="pwd" placeholder="password" /></p>
                <p><input type="submit" value="login"/></p>
            </form>
        </div>
    );
}
export default Login;