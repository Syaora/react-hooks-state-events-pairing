import video from "../data/video.js";
import React, { useState } from "react"
import Likes from "./Likes"
import CommentsSetup from "./CommentsSetup"

function App() {
  const copyVideo = {...video}
  
  const [likes, setLikes] = useState(copyVideo.upvotes)
  const [dislikes, setDislikes] = useState(copyVideo.downvotes)
  const [hideComments, setHideComments] = useState(false)

  function onLikes(){
    setLikes((likes) => likes + 1)
  }

  function onDislikes(){
    setDislikes((dislikes) => dislikes + 1)
  }

  function onHideComments(){
    setHideComments((hideComments) => !hideComments)
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={copyVideo.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={copyVideo.title}
      />
      <h1>{copyVideo.title}</h1>
      <p>{copyVideo.views} Views | Uploaded {copyVideo.createdAt}</p>
      <Likes onLikes={onLikes} likes={likes} onDislikes={onDislikes} dislikes={dislikes} />
      <CommentsSetup onHideComments={onHideComments} hideComments={hideComments} comments={copyVideo.comments} />
    </div>
  );
}

export default App;
