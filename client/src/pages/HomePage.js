import React, {useState, useEffect} from 'react';
import {__GetRandomPost} from '../services/PostsServices';
import Card from '../components/Card'
import Switch from '@material-ui/core/Switch';
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Button from '@material-ui/core/Button';

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
    const [checked, setChecked] = React.useState(false);

    useEffect(() => {
        getOneRandomPost();
    }, [])

    const getOneRandomPost = async () => {
        try {
            let post = await __GetRandomPost();
            setPostId(post.id); 
            setPicUrl(post.picture);
            setTitle(post.title);
            setDescription(post.description);
            setPostUpvotes(post.upvote);
            setPostDownvotes(post.downvote);
        } catch (error) {
            throw error
        }
        return
    }

    const setOpacities = () => {
        setOverlayOpacity('1')
        setPostOpacity('0.2')
        setoverlayZindex('1')
    }

    const resetOpacities = () => {
        setOverlayOpacity('0')
        setPostOpacity('1')
        setoverlayZindex('-1')
    }

    const handleChange = () => {
        setChecked((prev) => !prev);
      };

    return (
        <div style={{height:'100%', flexGrow:'1'}}>
            <div style={{
                width: "100%",
                zIndex: `${overlayZIndex}`,
                opacity: `${overlayOpacity}`,
                position: 'absolute',
                backgroundColor: `rgba(256, 256, 256, ${0})`,
                textAlign: 'center'
            }}>
                <h1 style={{marginTop: '10%', marginLeft: '100px'}}>
                    Please sign in before pluckin or chuckin!
                    <div className={classes.wrapper}>
                        <FormControlLabel
                            control={<Switch checked={checked} onChange={handleChange} />}
                            label="I don't wanna tho"
                        />
                        <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                                <img src="https://i.imgur.com/EKMuFIy.png   "/>
                        </Slide>
                    </div>
                </h1>
                <Button  onClick={() => {resetOpacities()}} type='submit' variant="outlined" size="medium" color="primary" className={classes.margin}>
                    ok FOINE
                </Button>
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
                        <p> Skip </p>
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