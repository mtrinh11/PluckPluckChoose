import React, {useState, useEffect} from 'react'
//Component Imports
import AuthCard from '../components/AuthCard'
import {NavLink} from 'react-router-dom'
//Materialize Imports
import {makeStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

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
        }catch(error){
            throw error
        }
        return
    }
    
    const getPost2 = async () => {
        try {
            let post2 = await __GetRandomPost()
            setPicUrl2(post2.picture)
        }catch(error){
            throw error
        }
        return
    }

    const questionsArray = [
        `Who snitched to the cops?`,
        `Who can make a better Eggs Benedict?`,
        `Who would you rather drink with?`,
        `Pick the lightweight.`,
        `Who forgot their lighter, but took yours last time?`,
        `Which one's in your bank robbing team?`,
        `Who would win in a fight?`,
        `Who would you take home to Mom and Dad?`,
        `Who has a better credit score?`,
        `Who's got a cooler butt?`,
        `Who went on Maury?`,
        `Who's using their ex's Netflix?`,
        `Party tonight! Who's hosting?`,
        `Who asks to split the check, then makes a venmo request?`,
        `Who's buying pizza?`,
        `Whose merge had conflicts?`
    ]


    const getAQuestion = () => {
        return questionsArray[Math.floor(Math.random()*questionsArray.length)]
    }

    const comparisonGame = async () => {
        try{
            getPost1()
            getPost2()
            getAQuestion()
        }catch(error){
            throw error
        }
    }

    useEffect(()=> {
        comparisonGame()
    },[])

    return (
        <div style = {{margin: '50px', textAlign:'center', width: '100%'}}>
            <h1> {getAQuestion()} </h1>
            <div className = {classes.root}>
                <IconButton
                style= {{}}
                onClick ={()=> {comparisonGame()}}
                >
                <p>next</p>
                <NavigateNextIcon />
                </IconButton>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <img 
                    src={picUrl1} 
                    style={{
                        maxWidth: '500px', 
                        height: 'auto', 
                        marginRight: '50px', 
                        cursor:'pointer'
                    }} 
                    onClick={() => {comparisonGame()}}/>
                <img
                    src={picUrl2} 
                    style={{
                        maxWidth: '500px', 
                        height: 'auto', 
                        cursor:'pointer'
                    }}
                    onClick={() => {comparisonGame()}}
                />
            </div>
        </div> 
    )
}