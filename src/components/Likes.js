import React from "react"

function Likes({onLikes, likes, onDislikes, dislikes}){
  return (
    <>
      <button onClick={onLikes}>{likes} 👍</button>
      <button onClick={onDislikes}>{dislikes} 👎</button>
    </>
  )
}

export default Likes