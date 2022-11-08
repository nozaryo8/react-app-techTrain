import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    useParams,
} from 'react-router-dom';

export const InThreadList = () => {
    const params = useParams();     // URLのパスパラメータを取得。例えば、 /uses/2 なら、2の部分を取得
    const [inThreads, setInThreads] = useState([]);
    useEffect(() => {
        axios.get(`https://railway-react-bulletin-board.herokuapp.com/threads/${params.thread_id}/posts`)
        .then((res) => {
            console.log(res)
            const posts = res.data.posts
            setInThreads(posts)
        })
        .catch(
            err => console.log(err)
        );
    }, [params.thread_id])
    const [post, setPost] = useState("");

    const changePost = (e) => {
        setPost(e.target.value);
    }

    function uploadThread(){
        axios.post(`https://railway-react-bulletin-board.herokuapp.com/threads/${params.thread_id}/posts`,{"post": post})
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
            <div className="thread-list">{inThreads.map(t=> <li className="thread">{t.post}</li>)}</div>
            <div className="post-button-aria">
                <form>
                    <input type="text" id="text" onChange={changePost} value={post}></input>
                </form>
                <button className="post-button" type="submit" onClick={uploadThread}>
                    スレッド内投稿
                </button>
            </div>
        </div>
    )
    
}
