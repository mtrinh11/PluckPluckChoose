import React, {useState, useEffect} from 'react';

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

export default (props) => {
    // we're going to use this to get the post and set it
    const [picUrl, setPicUrl] = useState('');
    const [isCreating, setCreatePost] = useState(false);
    // //
    // const [,] = State();
    // const [,] = State();


    useEffect(() => {
        getAccountPosts()
        createPost()
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

    const createPost = async (myEvent) => {
        // myEvent.preventDefault()
        console.log('FRONTEND: Profile.js handleSubmit')
        try{
            let picToUpload = {
                picUrl: picUrl
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
    
    // const createPost = async (e, picUrl) => {
    //         e.preventDefault()
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

    return (
        <div style={{margin: '5px', alignContent: 'justify'}}>
            
            {/**Upload An Image */}
            <div>
            <button onClick ={()=>toggleCreatePost(true)}>Make A New Post</button>
            <div>
                    {/* {props.isCreating ? */}
                    <form onSubmit = {() => {createPost()}}>
                    <TextField
                        fullwidth='true'
                        id="imgUpload"
                        label="imgUpload"
                        type="url"
                        placeholder="Upload an Image"
                        variant="outlined"
                        color="secondary"
                        onChange={(e) => setPicUrl(e.target.value)}
                        />
                    <button>Upload</button>
                    </form>
                {/* : null
                    } */}
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
        </div>
    )
}