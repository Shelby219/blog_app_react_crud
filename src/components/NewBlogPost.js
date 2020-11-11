import React, {useState} from 'react'
import {withRouter} from 'react-router-dom'




const NewBlogPost = ({history, addBlogPost, nextId}) => {
  
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
        const newPost = {
            _id: nextId,
            title: formState.title,
            category: formState.category || "general",
            modified_date: new Date(),
            content: formState.content
        }
        addBlogPost(newPost)
        history.push(`/posts/${nextId}`)
    }
    const initialFormState = {
        title: "",
        category: "",
        content: ""
    } 
    const [formState,setFormState] = useState(initialFormState)
    return (
        <div class="form-wrapper">
        <form id="newPostForm" onSubmit={handleSubmit}>
            <div class="form-styles">
                <label class="form-label">Title</label>
                <input class="form-input" required type="text" name="title" placeholder="Enter a title" onChange={handleChange}></input>
            </div>
            <div class="form-styles">
                <label class="form-label">Category</label>
                <input class="form-input"  type="text" name="category" placeholder="Enter a category" onChange={handleChange}></input>
            </div>
            <div class="form-styles">
                <label class="form-label">Content</label>
                <textarea form="newPostForm" required class="form-input-text"  name="content" placeholder="Enter post here" onChange={handleChange}></textarea>
            </div>
            <input class="button" type="submit" value="Add post"></input>
        </form>
        </div>
    ) 
}

export default withRouter(NewBlogPost)