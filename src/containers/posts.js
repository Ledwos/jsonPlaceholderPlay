import React from 'react'
import {useParams} from 'react-router'

export default function Posts(props) {
    const {id} = useParams();
    const post = props.posts.filter(post => post.id === parseInt(id))[0]
    
    // const post = props.post[1]
    console.log(post)
    // const index = parseInt(id) + 1

    // parseInt the userParams id and use that id to fetch that one post and set that post to state. 
    return (
        <div>
            <p>{post.id}</p>
            {props.posts.length > 0 ? <p>{post.body}</p> : null} 
            {/* <p>{post.body}</p> */}
            
        </div>
    )
}
