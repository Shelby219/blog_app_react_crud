import React from 'react'
import {Link} from 'react-router-dom'



const BlogPost = ({history, post, showControls, deleteBlogPost}) => {
    // If we don't have a post, return null
    if (!post) return null
    const {title, modified_date, category, content} = post 


    const linkStyles = {
        textDecoration: 'none'
    }
// Handle the delete button
    function handleDelete(event) {
        event.preventDefault()
        deleteBlogPost(post._id)
        history.push("/")
    }

     // Handle the edit button
     function handleEdit(event) {
        event.preventDefault()
        history.push(`/posts/edit/${post._id}`)
    }
    return (
        <div>   
            <Link  style={linkStyles} to={`/posts/${post._id}`}>
             <div class="blog-posts">
                <h1 class="heading blog-title">{title}</h1>
                <p class="blog-content">{modified_date.toLocaleString()}</p>
                <p class="blog-content">{category}</p>
                <p class="blog-content">{content}</p>
                {showControls && (
                    <div>
                        <button  class="button" onClick={handleDelete}>Delete</button>
                        <button class="button" onClick={handleEdit}>Edit</button>
                    </div>
                )}
                </div>
            </Link>
       
  
        </div>
    )
}

export default BlogPost