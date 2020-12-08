import React, {useState, useEffect} from 'react';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAlt';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

export default (details) => {

    const classes = useStyles();

    return (
        <div style={{display: 'flex', flexDirection: 'column', margin: '50px'}}>
            <img src={details.url} style={{
                border: '3px', 
                borderRadius: '5px',
                boxShadow: '3px 3px 20px black',
                color: 'white',
                textShadow:'2px 2px 5px black'}}
            />
            <div style={{display: 'flex', textAlign: 'center', marginTop: '50px' }}>
                <div style={{flexGrow: '1'}}>
                    <IconButton 
                        onClick={() => details.onclick()}
                    >
                        <SentimentDissatisfiedIcon style={{fontSize: '60px'}}/>
                    </IconButton>
                    <p>Chucked by {details.downvotes} people</p>
                </div>
                <div style={{flexGrow: '1'}}>
                    <IconButton 
                        onClick={details.onclick}
                    >
                        <SentimentSatisfiedAltIcon style={{fontSize: '60px'}}/>
                    </IconButton>
                    <p>Plucked by {details.upvotes} people</p>
                </div>
            </div>
        </div>
    )
}