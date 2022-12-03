import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

const UserPost=()=>{
    const { id }=useParams();
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`).then((res)=>res.json()).then((data)=>setPosts(data))
    },[id])
    return(
        <>
            {posts.length> 0 &&(
                <ul>
                    {posts.map((post)=>(
                        <li key={post.id}>
                            <h4>{post.title}</h4>
                            <p>{post.body}</p>
                        </li>
                    ))}
                </ul>
            )}
        </>
    )
}
export default UserPost;