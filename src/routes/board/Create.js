import React from "react";
import { Link } from "react-router-dom";
import "./Create.css";

function Create(){
    return (
        <div className="create__container">
            <h2>커뮤니티</h2>
            <Link to="/board/create" className="create">create</Link>
            <form action="/board/create_process" method="post">
                <p><input type="text" name="title" placeholder="title"/></p>
                <p>
                    <textarea name="description" placeholder="description"></textarea>
                </p>
                <p><input type="submit" value="글 작성" /></p>
            </form>
        </div>
    );
}

export default Create;