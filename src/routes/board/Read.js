import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactHtmlParser from 'react-html-parser';
import axios from "axios";
import "./Read.css";

function Read(props){
    const { location, history } = props;
    useEffect(()=>{
        if(location.state === undefined){
            history.push("/board");
        }
    }, [location, history]);

    const deleteContent = () => {
        axios.delete(`http://localhost:3002/board/delete`, {
            data: {
                id: location.state.id
            }
        })
        .then(()=>{
            alert('삭제 완료!');
            history.push('/board');
        })
        .catch((err)=>{ console.log(err); });
    }

    return (
        <div className="read__container">
            <Link to={{
                pathname: `/board/update/${location.state.id}`,
                state: {
                    id: location.state.id,
                    title: location.state.title,
                    description: location.state.description
                }
                }} className="update">update</Link>

            <input type="submit" value="delete"
             className="delete" onClick={deleteContent}/>

            <ul>
                <li>제목: {location.state.title}</li>
                <li>작성 날짜: {location.state.date}</li>
                <li>{ReactHtmlParser(location.state.description)}</li>
            </ul>
        </div>
    );
}

export default Read;