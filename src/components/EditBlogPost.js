import React, {useState, useEffect} from 'react'
import {withRouter} from 'react-router-dom'




const EditBlogPost = ({history, updateBlogPost, post}) => {
    
    function handleChange(event) {
        const name = event.target.name
        const value = event.target.value
        setFormState({
            ...formState,
            [name]: value
        })
    }
    function handleSubmit(event) {
        event.preventDefault()
        const updatedPost = {
            _id: post._id,
            title: formState.title,
            category: formState.category || "general",
            modified_date: new Date(),
            content: formState.content
        }
        updateBlogPost(updatedPost)
        history.push(`/posts/${post._id}`)
    }
    // Set initial form values to what is in the current post
    const initialFormState = {
        title: "",
        category: "",
        content: ""
    } 

    const [formState,setFormState] = useState(initialFormState)

    useEffect(() => {
        // Set the formState to the fields in the post after mount and when post changes
        post && setFormState({
            title: post.title,
            category: post.category,
            content: post.content
        })
    },[post])

    return (
        <div class="form-wrapper">
        <form id="editPostForm" onSubmit={handleSubmit}>
        <div class="form-styles">
                <label class="form-label">Title</label>
                <input class="form-input"  required type="text" name="title" value={formState.title} onChange={handleChange}></input>
            </div>
            <div class="form-styles">
                <label class="form-label">Category</label>
                <input class="form-input"  type="text" name="category" value={formState.category} onChange={handleChange}></input>
            </div>
            <div class="form-styles">
                <label class="form-label">Content</label>
                <textarea form="editPostForm" required class="form-input-text"  name="content" value={formState.content} onChange={handleChange}></textarea>
            </div>
            <input type="submit" value="Update post"></input>
        </form>
        </div>
    ) 
}

export default withRouter(EditBlogPost)
