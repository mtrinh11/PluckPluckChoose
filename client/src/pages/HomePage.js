import React, {useState, useEffect} from 'react';
import {__GetRandomPost} from '../services/PostsServices';
import Card from '../components/Card'

export default () => {
    const [picUrl, setPicUrl] =  useState('');
    const [postId, setPostId] = useState('');
    const [postDownvotes, setPostDownvotes] = useState('');
    const [postUpvotes, setPostUpvotes] = useState('');

    useEffect(() => {
        getOneRandomPost();
    }, [])

    const getOneRandomPost = async () => {
        try {
            let post = await __GetRandomPost();
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
            <button onClick={() => getOneRandomPost()}>next</button>
            <Card 
                id={postId}
                url={picUrl}
                downvotes={postDownvotes}
                upvotes={postUpvotes}
            />
        </div>
    )
}