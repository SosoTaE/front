import { useEffect, useId, useState } from "react";
import Post from "./post";
import "./css/posts.css"

export default function Posts() {
    const [posts, setPosts] = useState([{"title":"Hello"}])


    useEffect(() => {
        console.log(1)
        getPosts(1)
    }, [])

    const getPosts = async (number) => {
        await fetch("http://localhost:3001/api/v1/posts")
        .then(data => data.json())
        .then(data => {
            setPosts(data.data)
        })
        .catch(error => {
            console.log(error)
        })
        console.log("data")
    }


    return (
        <div className="postsContainer">
            {posts.map(x => {
                return (
                    <Post >{x}</Post>
                )
            })}
        </div>
    )
}