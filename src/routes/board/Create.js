import React, { useState } from "react";
import "./css/Create.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import axios from "axios";

function Create(props){
    const { history } = props;

    const [content, setContent] = useState({
        title: '',
        description: '',
        date: ''
    });

    const submitContent = () => {
        axios.post('http://localhost:3002/board/create', {
            title: content.title,
            description: content.description,
            date: content.date
        })
        .then(()=>{
            alert('등록 완료!');
            history.push("/board");
        })
        .catch((err)=>{ console.log(err); });
    }

    const getValue = e => {
        const {name, value} = e.target;
        let now = new Date();
        let timeString = now.toLocaleString();
        setContent({
            ...content,
            [name]: value,
            date: timeString
        });
    }

    return (
        <div className="create__container">
            <h2>커뮤니티</h2>
            <p><input type="text" name="title" placeholder="title" onChange={getValue}/></p>
            <div className="ckeditor">
                <CKEditor
                editor={ClassicEditor}
                data='<p>Hello from CKEditor5!</p>'
                onReady={editor =>{

                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    // console.log({event, editor, data});
                    setContent({
                        ...content,
                        description: data
                    });
                    // console.log(content);
                }}
                onBlur={(event, editor) => {
                    // console.log('Blur', editor);
                }}
                onFocus={(event, editor) => {
                    // console.log('Focus', editor);
                }}
                />                
            </div>
            <p><input type="submit" value="글 작성" onClick={submitContent}/></p>
        </div>
    );
}

export default Create;