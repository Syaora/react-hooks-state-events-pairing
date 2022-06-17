import video from "../data/video.js";
import React, { useState } from "react"
import Likes from "./Likes"
import CommentsSetup from "./CommentsSetup"

function App() {
  const [likes, setLikes] = useState(video.upvotes)
  const [dislikes, setDislikes] = useState(video.downvotes)
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
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <h1>{video.title}</h1>
      <p>{video.views} Views | Uploaded {video.createdAt}</p>
      <Likes onLikes={onLikes} likes={likes} onDislikes={onDislikes} dislikes={dislikes} />
      <CommentsSetup onHideComments={onHideComments} hideComments={hideComments} comments={video.comments} />
    </div>
  );
}

export default App;
