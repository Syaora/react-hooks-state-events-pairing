import React from "react"
import Comments from "./Comments"

function CommentsSetup({onHideComments, hideComments, comments}){
  return (
    <>
      <button style={{display: "grid", margin: "auto", "margin-top": "20px"}} onClick={onHideComments}>
        {hideComments ? "Show Comments" : "Hide Comments"}
      </button>
      <hr />
      <h2>{comments.length} Comments</h2>
      {hideComments ? null : <Comments comments={comments} /> }
    </>
  )
}

export default CommentsSetup