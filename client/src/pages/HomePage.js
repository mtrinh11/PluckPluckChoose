import React, {useState, useEffect} from 'react';
import {__GetRandomPost} from '../services/PostsServices';
import Card from '../components/Card'

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

export default () => {

    const classes = useStyles();

    const [picUrl, setPicUrl] =  useState('');
    const [postId, setPostId] = useState('');
    const [postDownvotes, setPostDownvotes] = useState('');
    const [postUpvotes, setPostUpvotes] = useState('');
    const [titleText, setTitle] = useState('');
    const [descriptionText, setDescription] = useState('');
    const [postOpacity, setPostOpacity] = useState(1)
    const [overlayOpacity, setOverlayOpacity] = useState(0)
    const [overlayZIndex, setoverlayZindex] = useState(-1)

    useEffect(() => {
        getOneRandomPost();
    }, [])

    console.log('this is the title',titleText,'this is the desription', descriptionText)

    const getOneRandomPost = async () => {
        try {
            let post = await __GetRandomPost();
            setPostId(post.id); 
            setPicUrl(post.picture);
            setTitle(post.text);
            setDescription(post.description);
            setPostUpvotes(post.upvote);
            setPostDownvotes(post.downvote);
        } catch (error) {
            throw error
        }
        return
    }

    const setOpacities = () => {
        setOverlayOpacity('0')
        setPostOpacity('0.2')
        setoverlayZindex('1')
    }

    const resetOpacities = () => {
        setOverlayOpacity('0')
        setPostOpacity('1')
        setoverlayZindex('-1')
    }

    return (
        <div style={{height:'100%', flexGrow:'1'}}>
            <div style={{
                zIndex: `${overlayZIndex}`,
                position: 'absolute',
                backgroundColor: `rgba(211,211,211, ${overlayOpacity})`,
                textAlign: 'center'
            }}>
                <h1 style={{marginTop: '10%', marginLeft: '100px'}}> Please sign in before plucking or chucking!</h1>
                <button onClick={() => {resetOpacities()}}> ok FOINE </button>
            </div>
            <div 
                style={{ 
                    margin: '50px', 
                    opacity: `${postOpacity}`,
                }}
            >
                <div className={classes.root}>
                    <IconButton 
                    style={{}}
                    onClick={() => {getOneRandomPost()}}>
                        <p> next </p>
                        <NavigateNextIcon />
                    </IconButton>
                </div>
                <Card 
                    id={postId}
                    url={picUrl}
                    title={titleText}
                    description={descriptionText}
                    downvotes={postDownvotes}
                    upvotes={postUpvotes}
                    onclick={() => setOpacities()}
                />
            </div>
        </div>
    )
}