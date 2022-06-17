function Comments({ comments }){
  return (
    <>
      {comments.map((comment) => {
        return (
          <>
            <h3>{comment.user}</h3>
            <p>{comment.comment}</p>
          </>
        )
      })}
    </>
  )
}

export default Comments