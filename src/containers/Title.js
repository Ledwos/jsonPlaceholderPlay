import React from 'react'

export default function Title(props) {
    console.log(props)
    return (
        <div>
            {props.title !== [] ? props.title.map((posts,index) => (<a key={index} href={`/posts/${posts.id}`}><p>{posts.title}</p></a>)) : null}
            {/* {props.title.map((posts,index) => (
                <a key={index} href={`/posts/${posts.id}`}><p>{posts.title}</p></a>
            ))} */}
        </div>
    )
}
