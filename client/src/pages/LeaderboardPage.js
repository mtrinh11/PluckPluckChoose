import React, {useState, useEffect} from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

    const getLeaders = async() => {
        try {

        } catch (error) {
            throw error
        }
    }

    useEffect(() => {
        getLeaders()
    }, [])
    
    return (
        <div style ={{backgroundColor: 'white', padding: '50px', borderRadius: '20px'}}>
            <h1> The Pluck of Fame </h1>
            {board.map((post, index) => {
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
                                <b>Description:</b> {post.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </div>
            })}
        </div>
    )
}