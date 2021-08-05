import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./css/Update.css";
import axios from "axios";

function Update(props){
    const { location, history } = props;

    const [content, setContent] = useState({
        title: location.state.title,
        description: ''
    });

    const getValue = e => {
        const {name, value} = e.target;
        setContent({
            ...content,
            [name]: value,
        });
    }

    const updateContent = () => {
        axios.put('http://localhost:3002/board/update', {
            id: location.state.id,
            title: content.title,
            description: content.description
        })
        .then(()=>{
            alert('수정 완료!');
            history.push(`/board`);

        })
        .catch((err)=>{ console.log(err); });
    }

    useEffect(()=>{
        if(location.state === undefined){
            history.push("/board");
        }
    }, [location, history]);

    return (
        <div className="update__container">
            <h2>커뮤니티</h2>
            <p><input type="text" name="title" placeholder="title"
                value={content.title}
                onChange={getValue}/></p>
            <div className="ckeditor">
                <CKEditor
                editor={ClassicEditor}
                data={location.state.description}
                onReady={editor =>{

                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    // console.log({event, editor, data});
                    setContent({
                        ...content,
                        description: data
                    });
                }}
                onBlur={(event, editor) => {
                    // console.log('Blur', editor);
                }}
                onFocus={(event, editor) => {
                    // console.log('Focus', editor);
                }}
                />                
            </div>
            <p><input type="submit" value="글 수정" onClick={updateContent}/></p>
        </div>
    );
}

export default Update;