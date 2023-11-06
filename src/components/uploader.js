import {useState, useEffect, useRef} from "react"
import "./css/uploader.css"

export default function Uploader() {
    const title = useRef(null)
    const description = useRef(null)
    const files = useRef(null)
    const send = async () => {
        const [titleValue, descriptionValue, filesValue] = [title.current.value, description.current.value, files.current.files]
        if (titleValue === 0 || descriptionValue === 0) {
            return
        }

        const base64FIlesArray = await filesToBase64(filesValue)
        const body = JSON.stringify({
            "title": titleValue,
            "description": descriptionValue,
            "attachedFiles": base64FIlesArray
        })

        console.log(base64FIlesArray[0])

        await fetch("http://localhost:3001/api/v1/post", {
            method: "POST",
            body: body,
            headers: {
                'Content-Type': 'application/json'
            },
        })
    }

    const filesToBase64 = async (files) => {
        const array = []

        for (let i = 0;i < files.length;i++) {
            const base64String = await toBase64(files[i])
            // console.log(base64String)
            array.push(base64String)
        }

        return array
    }

    const toBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }


    return (
        <div className="uploaderContainer">
            <div className="uploader">
                <div className="inputsWithLabels">
                    <label>Title</label>
                    <input type="text" className="inputTitle" ref={title}></input>
                </div>
                <div className="inputsWithLabels">
                    <label>Description</label>
                    <textarea className="textarea" rows="5" ref={description}></textarea>
                </div>
                <div className="inputsWithLabels">
                    <label>Files</label>
                    <input type="file" className="inputFile" multiple ref={files}></input>
                </div>
                <div className="inputsWithLabels">
                    <button className="sendButton" onClick={send}>Send</button>
                </div>
            </div>
        </div>
    )
}