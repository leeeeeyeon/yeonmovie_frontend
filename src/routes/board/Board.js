import React from "react";
import { Link } from "react-router-dom";
import "./Board.css";

function Board(){
    return (
        <div className="board__container">
            <h2>커뮤니티</h2>
            <Link to="/board/create" className="create">create</Link>
            <table className="tbl">
                <thead>
                    <tr>
                    <th>No</th>
                    <th>제목</th>
                    <th>유저</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>이것은 제목입니다</td>  
                        <td>사용자1</td>  
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>이것도 제목입니다</td>  
                        <td>사용자2번</td>  
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>저도 제목입니다</td>  
                        <td>3번 사용자</td>  
                    </tr>
                </tbody>

            </table>
        </div>
    );
}

export default Board;