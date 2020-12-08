import React, {useState, useEffect} from 'react';
import {__GetOnePost} from '../services/PostsServices';
import Card from '../components/Card'

export default () => {
    const [picUrl, setPicUrl] =  useState('');
    const [postId, setPostId] = useState('');
    const [postDownvotes, setPostDownvotes] = useState('');
    const [postUpvotes, setPostUpvotes] = useState('');

    useEffect(() => {
        getOnePost(1);
    }, [])

    const getOnePost = async (id) => {
        try {
            let post = await __GetOnePost(id);
            setPostId(post.id); 
            setPicUrl(post.picture);
            setPostUpvotes(post.upvote);
            setPostDownvotes(post.downvote);
        } catch (error) {
            throw error
        }
        return
    }

    return (
        <div style={{margin: '50px', alignContent: ''}}>
            <Card 
                id={postId}
                url={picUrl}
                downvotes={postDownvotes}
                upvotes={postUpvotes}
            />
        </div>
        
    )
}