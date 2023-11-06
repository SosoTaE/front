import { useState } from "react";
import "./css/post.css"


export default function Post(props) {
    const [title, setTitle] = useState(props.children.title)
    const [description, setDescription] = useState(props.children.description)
    const [Files, setFiles] = useState(props.children.attachedFiles)


    return (
        <div className="postContainer">
            <p className="postTitle">{title}</p>
            <p className="postDescription">{description}</p>
        </div>
    )
}