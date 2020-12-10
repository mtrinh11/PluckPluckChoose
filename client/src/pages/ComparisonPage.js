import React, {useState, useEffect} from 'react'
import AuthCard from '../components/AuthCard'
import {NavLink} from 'react-router-dom'
import {makeStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import NavigateNextIcon from '@material-ui/core/NavigateNext';

import {__GetRandomPost} from '../services/PostsServices'


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

export default () => {

    const classes = useStyles();

    const [picUrl1, setPicUrl] = useState('')
    const [postId1, setPostId] = useState('')
    const [postDownvotes1, setPostDownvotes] = useState('')
    const [postUpvotes1, setPostUpvotes] = useState('')
    const [titleText1, setTitle] = useState('')
    const [descriptionText1, setDescription] = useState('')

    const [picUrl2, setPicUrl2] = useState('')
    const [postId2, setPostId2] = useState('')
    const [postDownvotes2, setPostDownvotes2] = useState('')
    const [postUpvotes2, setPostUpvotes2] = useState('')
    const [titleText2, setTitle2] = useState('')
    const [descriptionText2, setDescription2] = useState('')


    const getPost1 = async () => {
        try {
            let post1 = await __GetRandomPost()
            setPicUrl(post1.picture)
            setPostId(post1.id)
            setTitle(post1.text)
            setDescription(post1.description)
            setPostUpvotes(post1.upvote)
            setPostDownvotes(post1.downvote)
            console.log('ComparisonPage: GetPost1 hits')
        }catch(error){
            console.log('ComparisonPage: GetPost1 fails')
            throw error
        }
        return
    }
    const getPost2 = async () => {
        try {
            let post2 = await __GetRandomPost()
            setPicUrl2(post2.picture)
            setPostId2(post2.id)
            setTitle2(post2.text)
            setDescription2(post2.description)
            setPostUpvotes2(post2.upvote)
            setPostDownvotes2(post2.downvote)
            console.log('ComparisonPage: GetPost2 hits')
        }catch(error){
            console.log('ComparisonPage: GetPost2 fails')
            throw error
        }
        return
    }


    const questionsArray = [
        'question 1',
        'question 2',
        'question 3',
        'question 4',
        'question 5',
        'question 6',
        'question 7'
    ]


    const getAQuestion = () => {
        return questionsArray[Math.floor(Math.random()*questionsArray.length)]
    }

    const comparisonGame = async () => {
        try{
            getPost1()
            getPost2()
            getAQuestion()
            console.log('ComparisonPage comparisonGame hits')
        }catch(error){
            console.log('ComparisonPage comparisonGame fails')
            throw error
        }
    }

    useEffect(()=> {
        comparisonGame()
    },[])

    return (
        <div> {/** GrandParent Div */}
            <div>
                <div style = {{margin: '50px'}}>
                    <div className = {classes.root}>
                        <IconButton
                        style= {{}}
                        onClick ={()=> {comparisonGame()}}
                        >
                        <p>next</p>
                        <NavigateNextIcon />
                        </IconButton>
                    </div>
                    {/** Post 1 Card*/}
                    <AuthCard
                        id= {postId1}   
                        url= {picUrl1}   
                        title= {titleText1}   
                        description= {descriptionText1}   
                        downvotes= {postDownvotes1}   
                        upvotes= {postDownvotes2}   
                        //mt onclick
                        onclick= {()=> comparisonGame()}   
                    />
                    <AuthCard
                        id= {postId2}   
                        url= {picUrl2}   
                        title= {titleText2}   
                        description= {descriptionText2}   
                        downvotes= {postDownvotes2}   
                        upvotes= {postDownvotes2}   
                        //mt onclick
                        onclick= {()=> comparisonGame()}   
                    />
                </div> 
            </div>
        </div>
    )
}