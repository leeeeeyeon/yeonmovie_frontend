import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./css/Board.css";
import axios from "axios";

function Board(){

    const [viewContent, setViewContent] = useState([]);

    useEffect( ()=>{
        async function getContent(){
            await axios.get('http://localhost:3002/board')
            .then((res) => {
                setViewContent(res.data[2]);
            })
            .catch((err)=> { console.log(err); });
        }
        getContent();
    }, []);

    return (
        <div className="board__container">
            <h2>커뮤니티</h2>
            <Link to="/board-create" className="create">create</Link>
            <table className="tbl">
                <thead>
                    <tr>
                    <th>No</th>
                    <th>제목</th>
                    <th>등록일</th>
                    </tr>
                </thead>
                <tbody>
                    {viewContent.map((element, index) =>
                        <tr key={index}>
                            <td>{element.id}</td>
                            <td><Link to={{
                                pathname: `/board/${element.id}`,
                                state: {
                                    id: element.id,
                                    title: element.title,
                                    description: element.description,
                                    date: element.created
                                }
                            }}>{element.title}</Link></td>
                            <td>{element.created}</td>
                        </tr>
                    )}
                </tbody>

            </table>
        </div>
    );
}

export default Board;