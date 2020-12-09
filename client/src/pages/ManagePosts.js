import React, {useState, useEffect, Link} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {__GetPostsByAccount, __DeletePost} from '../services/PostsServices';
import {__GetAccountByUserId} from '../services/AccountServices'

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

export default (props) => {

    const classes = useStyles();
    const [userPosts, setUserPosts] = useState(null)
    const [acctId, setAcctId] = useState(null)
    
    const getAccountId = async() => {
        try {
            let res = await __GetAccountByUserId({user_id: props.currentUser.id})
            console.log(res)
            setAcctId(res.data.id)
        } catch (error) {
            throw error
        }
    }

    const getAccountPosts = async (id) => {
        try {
            let res = await __GetPostsByAccount(id)
            setUserPosts(res)
        } catch (error) {
            throw error
        }
    }

    const deletePost = async (post_id) => {
        try{
            let res = await __DeletePost(post_id)
            props.history.push("/profile")
            console.log('FRONTEND ManagePosts deletePost hits')
        }catch(error){
            console.log('FRONTEND ManagePosts deletePost fails')
            throw error
        }
    }

    useEffect(() => {
        getAccountId()
        if (acctId) {
            getAccountPosts(acctId)
        }
    }, [acctId])

    console.log(acctId, userPosts)

    return (
        <div style={{top: '0', margin: '10px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}}>
            {userPosts ? 
                userPosts.map((post, index) => {
                    return (
                        <div style={{margin: '10px'}}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={post.picture}
                                title={`Post #${index}`}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                    {`Post #${index + 1}`}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p" >
                                        {post.title}
                                        {post.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>

                            <CardActions>
                            
                                <Button size="small" color="primary"  onClick={() => {
                                    deletePost(post.id) 
                                }} >

                                Delete
                                </Button>
                            </CardActions>
                        </Card>
                        </div>
                    )
                })
                : (
                <h1> Loading...</h1>
                )
            }
        </div>
    )
}