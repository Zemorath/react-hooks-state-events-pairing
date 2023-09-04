import video from "../data/video.js";
import React, { useState } from "react"
import Display from "./Display.js"

function App() {
  console.log("Here's your data:", video);

  const [videoInfo, setVideoInfo] = useState(video)

  return (
    <div className="App">
      <Display video={videoInfo}/>
    </div>
  );
}

export default App;
