import React, { useState} from "react"
import Likes from "./Likes"
import Comments from "./Comments"


function Display({ video }) {

    const [videoComments, setVideoComments] = useState(video.comments)

    return (
        <div>
            <iframe
                width="919"
                height="525"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                frameBorder="0"
                allowFullScreen
                title="Thinking in React"
            />
            <h1>{video.title}</h1>
            <p>{video.views} Views | Uploaded {video.createdAt}</p>
            <Likes video={video}/>
            <div>
                <button className="hide">Hide Comments</button>
                <hr />
                <h1>{videoComments.length} Comments</h1>
                {videoComments.map((comment) => 
                    <Comments id={comment.id} comment={comment.comment} user={comment.user}/>
                )}
            </div>
            
        </div>
    )
}

export default Display;