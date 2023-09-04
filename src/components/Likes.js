import React, { useState } from "react"

function Likes({ video }) {

    return (
        <div name="likes">
            <button name="upvote">{video.upvotes}</button>
            <button name="downvote">{video.downvotes}</button>
        </div>
    )
}

export default Likes