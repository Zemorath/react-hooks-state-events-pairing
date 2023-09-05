import React, { useState} from "react"
import Likes from "./Likes"
import Comments from "./Comments"


function Display({ video }) {

    const [videoComments, setVideoComments] = useState(video.comments)
    const [showComments, setShowComments] = useState(true)

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
                <button className="hide" onClick={() => setShowComments(!showComments)}>Hide Comments</button>
                {showComments && (
                    <div>
                        <hr />
                        <h1>{videoComments.length} Comments</h1>
                        {videoComments.map((comment) => 
                            <Comments key={comment.id} id={comment.id} comment={comment.comment} user={comment.user}/>
                        )}
                    </div>
                )}
        </div>
    )
}

export default Display;