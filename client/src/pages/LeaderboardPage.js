import React, {useState, useEffect} from 'react'

import {__GetMostPlucked, __GetMostChucked} from '../services/PostsServices'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });

export default () => {

    const classes = useStyles();
    const [board, setBoard] = useState(null)
    const [pluckers, setPluckers] = useState(null)
    const [chuckers, setChuckers] = useState(null)
    const [choice, setChoice] = useState('')
    const [loading, setLoading] = useState(true)
    

    const getLeaders = async() => {
        try {
            let mpl = await __GetMostPlucked()
            let mch = await __GetMostChucked()
            setPluckers(mpl)
            setChuckers(mch)
        } catch (error) {
            throw error
        }
    }

    const whichBoard = () => {
        switch(choice) {
            case "pluckers":
                return (
                    <div>
                        <h1> The Plucks of Fame </h1>
                        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}}>
                            {pluckers.map((post, index) => { return (
                                <div style={{margin: '10px'}}>
                                    <h3># {`${index + 1}`}</h3>
                                    <Card className={classes.root}>
                                        <CardActionArea>
                                            <CardMedia
                                            className={classes.media}
                                            image={post.picture}
                                            title={post.title}
                                            />
                                            <CardContent>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                {post.title}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p" style={{minWidth: "450px"}}>
                                                <b>Plucks:</b> {post.upvote}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                )
                break;
            case "chuckers":
                return (
                    <div>
                        <h1> The Chucks of Shame </h1>
                        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr'}}>
                            {chuckers.map((post, index) => { return (
                            <div style={{margin: '10px'}}>
                                <h3># {`${index + 1}`}</h3>
                                <Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                        className={classes.media}
                                        image={post.picture}
                                        title={post.title}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                            {post.title}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p" style={{minWidth: "450px"}}>
                                            <b>Chucks:</b> {post.downvote}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </div>
                            )
                        })}
                        </div>
                    </div>
                )
            default:
                return (
                    <p> Choose which ones to judge! </p>
                )
        }
    }

    useEffect(() => {
        if(!pluckers) {
            getLeaders()
        } 
        setLoading(false)
    }, [])
    
    return (
        <div>
            {loading ? 
                <p>Loading...</p>
            :
                <div style={{backgroundColor: 'white', padding: '50px', borderRadius: '20px'}}>
                    <ButtonGroup disableElevation variant="contained">
                        <Button onClick={() => setChoice('pluckers')}>Plucks of Fame</Button>
                        <Button onClick={() => setChoice('chuckers')}>Chucks of Shame</Button>
                    </ButtonGroup>
                    { whichBoard() }
                </div> 
            }        
        </div>
        
    )
}