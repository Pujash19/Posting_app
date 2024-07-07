import React from 'react'
import { useParams,Link } from "react-router-dom";
import Missing from './Missing';
const PostPage = ({posts,handleDelete}) => {
  const {id} = useParams();
  const post = posts.find(post =>(post.id).toString()===id)
  return (
    <div className='PostPage'>
      <article className='post'>
        {post &&
          <>
          <h2>{post.title}</h2>
          <p className="postDate">{post.datetime}</p>
          <p className='postBody'>{post.body}</p>
          <Link to={`/edit/${post.id}`}><button className="editButton">Edit Post</button></Link>
          <button className='submitButton' onClick={()=>handleDelete(post.id)}>Delete post</button>
          </>
          
        }
        {!post &&
         <>
          <Missing/>
         </>

        }

      </article>
    </div>
  )
}

export default PostPage