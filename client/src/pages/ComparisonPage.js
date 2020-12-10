import React, {useState, useEffect} from 'react'
import AuthCard from '../components/AuthCard'
import {NavLink} from 'react-router-dom'
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
    const [picUrl2, setPicUrl2] = useState('')


    const getPost1 = async () => {
        try {
            let post1 = await __GetRandomPost()
            setPicUrl(post1.picture)
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
            console.log('ComparisonPage: GetPost2 hits')
        }catch(error){
            console.log('ComparisonPage: GetPost2 fails')
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
                        url= {picUrl1}   
                        //mt onclick
                        onclick= {()=> comparisonGame()}   
                    />
                    <AuthCard
                        url= {picUrl2}   

                        //mt onclick
                        onclick= {()=> comparisonGame()}   
                    />
                </div> 
            </div>
        </div>
    )
}