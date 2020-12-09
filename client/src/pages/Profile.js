import React, {useState, useEffect} from 'react';
<<<<<<< HEAD
import {__GetPostsByAccount, __DeletePost, __UpdatePost, __UploadPost} from '../services/PostsServices'
import TextField from '@material-ui/core/TextField'
/**
 * we want to add full crud for posts here
 * so that means
 *        CREATE
 *          upload a post
 *          tag a post
 *        READ
 *          get all posts made by a user   
 *        UPDATE
 *          Edit a post
 *        DESTROY
 *          Delete a post
 * 
 * 
 * 
 * 
 * 
 * and be able to display the user logged in
 *      the user logged in display could just be tucked into Nav
 *          cleaner this way
 * 
 * 
 * 
 */
=======
import {NavLink} from 'react-router-dom'
import AuthCard from '../components/AuthCard'

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import {__GetRandomPost, __UpvotePost, __DownvotePost} from '../services/PostsServices';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
>>>>>>> 43be59ad031620a83b7516cd423cf135b9b9313b

export default (props) => {
    // we're going to use this to get the post and set it
    const [picUrl, setPicUrl] = useState('');
    const [isCreating, setCreatePost] = useState(false);
    //


    useEffect(() => {
        getAccountPosts()
        handleSubmit()
    }, [])

    const toggleCreatePost = (value) => {setCreatePost(value)}

    const getAccountPosts = async () => {
        try {
            let accountPosts = await __GetPostsByAccount();
            setPicUrl(accountPosts.picture)
        } catch (error) {
            console.log('FRONTEND: getAccountPosts fails')
            throw error
        }
        return
    }
    
    const handleSubmit = async (myEvent) => {
        myEvent.preventDefault()
        console.log('FRONTEND: Profile.js handleSubmit')
        try{
            let picToUpload = {
                picture: picUrl
            }
            let newPost = await __UploadPost(picToUpload)
            props.history.push('/create')
            //line 63 is.... questionable
        }
        catch(error){
            console.log('FRONTEND: handleSubmit fails')
            throw error
        }
    }
    // const createPost = async (picUrl, myEvent) => {
    //     myEvent.preventDefault()
    //     try{
    //         let picToUpload = await __UploadPost()
    //         setPicUrl(picToUpload)
    //     }
    //     catch(error){
    //         console.log('FRONTEND: createPost fails')
    //         throw error
    //     }
    // }
/** map through and...*/

    const classes = useStyles();

    const [picUrl, setPicUrl] =  useState('');
    const [postId, setPostId] = useState('');
    const [postDownvotes, setPostDownvotes] = useState('');
    const [postUpvotes, setPostUpvotes] = useState('');

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

    const upvoteOrDownvote = async(action) => {
        try {
            if (action === 'up') {
                __UpvotePost(postId)
            } else if (action === 'down') {
                __DownvotePost(postId)
            }
            getOneRandomPost();
        } catch (error) {
            throw error
        }
    }

    useEffect(() => {
        getOneRandomPost();
    }, [])

    return (
<<<<<<< HEAD
        <div style={{margin: '5px', alignContent: 'justify'}}>
            
            {/**Upload An Image */}
            <div>
            <button onClick ={()=>toggleCreatePost(true)}>Make A New Post</button>
            <div>
                    {props.isCreating ?
                    <form onSubmit={handleSubmit()}>
                    <TextField
                        fullwidth='true'
                        id="imgUpload"
                        label="Upload an Image"
                        type="url"
                        variant="outlined"
                        color="secondary"
                        onChange={(e) => setPicUrl(e.target.value)}
                        />
                    <button>Upload</button>
                    </form>
                : null
                    }
                </div>
            </div>

    {/**Get account posts and delete a post */}
           <div className="row">
                <div className="col s12 m6">
                <div className="card">
                    <div className="card-image">
                    {/* <img src=*put each card image here/> */}
                    <a className="btn-floating halfway-fab waves-effect waves-light red">
                        <i className="material-icons">Delete</i></a>
                    <div className="card-content">
                    <p></p>
                    </div>
                </div>
                </div>
            </div>
        </div>
=======
        <div style={{margin: '50px', alignContent: ''}}>
            <NavLink
                to="/profile/createpost"
                >
                <h3>Create Post</h3>
            </NavLink>
            <NavLink
                to="/profile/manage"
                >
                <h3>Manage Posts</h3>
            </NavLink>
            <div>
                <div 
                    style={{ 
                        margin: '50px', 
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
                    <AuthCard 
                        id={postId}
                        url={picUrl}
                        downvotes={postDownvotes}
                        upvotes={postUpvotes}
                        // mt onclick
                        onclick={(action) => {upvoteOrDownvote(action)}}
                    />
                </div>
            </div>
>>>>>>> 43be59ad031620a83b7516cd423cf135b9b9313b
        </div>
    )
}
