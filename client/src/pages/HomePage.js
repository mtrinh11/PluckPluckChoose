import React, {useState, useEffect} from 'react';
import {__GetPosts, __GetOnePost} from '../services/PostsServices'


const getOnePost = async (postId) => {
    try{
        const post = await __GetOnePost(postId)
        return post
    }catch(error){throw error}
}

// getAllPosts = async () => {
//     try{
//         const allDemPosts = await __GetPosts()
//         return allDemPosts
//     }catch(error){throw error}
// }

export default (props) => {
    console.log('props',props)
    const [thePost, setThePost] = useState(null)

    console.log(getOnePost(3))
    
    return (
        <div style={{margin: '50px', alignContent: ''}}>
            {/* <Card
            {...props.post.picture}
            >


            </Card> */}
            <p>this is my bullshit!</p>
        </div>
        
    )
}


/**
 * Display the stuff
 * 
 */