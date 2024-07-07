import React from 'react'

const NewPost = ({postTitle,postBody,handleSubmit,setPostBody,setPostTitle}) => {
  return (
    <div className='NewPost'>
        <h2>New Post</h2>
     <form className='newPostForm' onSubmit={handleSubmit} title='New Post'>
        <label htmlFor="PostTitle">Title:</label>
        <input type="text" 
          id="postTitle"
          placeholder='Post Title'
          value={postTitle}
          onChange={(e)=>setPostTitle(e.target.value)}
        />
        <label htmlFor="PostBody">Body:</label>
        <textarea 
          id='postBody'
          placeholder='body'
          type ="text"
          value={postBody}
          onChange={(e)=>setPostBody(e.target.value)}
        />
        <button type='submit'>Submit</button>
     </form>
    </div>
  )
}

export default NewPost