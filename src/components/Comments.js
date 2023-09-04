import React, { useState } from "react"

function Comments({ id, user, comment }) {

    return (
        <div id={id}>
            <h2>{user}</h2>
            <p>{comment}</p>
        </div>
    )
}

export default Comments;