import React, { useState } from "react"

function Likes({ video }) {

    const [upVotes, setUpVotes] = useState(video.upvotes)
    const [downVotes, setDownVotes] = useState(video.downvotes)

    function changeUpVote() {
        setUpVotes(upVotes + 1)
    }

    function changeDownVote() {
        setDownVotes(downVotes - 1)
    }

    return (
        <div name="likes">
            <button name="upvote" onClick={changeUpVote}>{upVotes}</button>
            <button name="downvote" onClick={changeDownVote}>{downVotes}</button>
        </div>
    )
}

export default Likes