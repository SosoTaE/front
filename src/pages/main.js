import Uploader from "../components/uploader"
import Posts from "../components/posts"

export default function Main() {
    return (
        <div className="container" style={{"width":"100vw", "height":"100vh", "display": "flex", "alignItems":"center", "flexDirection":"column"}}>
            <Uploader></Uploader>
            <Posts></Posts>
       </div>
    )
}