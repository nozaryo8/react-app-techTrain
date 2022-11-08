import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Link
} from 'react-router-dom';


export const ThreadList = () => {
    const [threads, setThreads] = useState([]);
    useEffect(() => {
        axios.get("https://railway-react-bulletin-board.herokuapp.com/threads?offset=")
        .then((res) => {
            const threads = res.data
            setThreads(threads)
        })
        .catch(
            err => console.log(err)
        );
    }, [])

    function uploadThread(){
        let thread = "hello world"
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
            <div className="thread-list">{threads.map(t=> <li className="thread"><Link to={`/threads/` + t.id}>{t.title}</Link></li>)}</div>
            <div className="post-button-aria">
                <button className="post-button" onClick={uploadThread}>
                    投稿
                </button>
            </div>
        </div>
    )
    
}
