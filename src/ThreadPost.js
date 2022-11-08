import React, { useState } from 'react';
import axios from 'axios';

export const ThreadPost = () => {
    const [text, setText] = useState("");

    const changeText = (e) => {
        setText(e.target.value);
    }

    function uploadThread(){
        let thread = text
        axios.post("https://railway-react-bulletin-board.herokuapp.com/threads",{"title": thread})
            .then((res) => {
                console.log("成功")
                console.log(res)
            }).catch((err) => {
                console.log("失敗")
                console.log(err)
            })
    }
    
    return (
        <div>
            {/* {threads} */}
            {/* <div className="thread-list">{threads.map(t=> <li className="thread">{t.title}</li>)}</div> */}
            <div className="post-button-aria">
                <form>
                    <input type="text" id="text" onChange={changeText} value={text}></input>
                </form>
                <button className="post-button" type="submit" onClick={uploadThread}>
                    投稿
                </button>
            </div>
        </div>
    )
    
}
