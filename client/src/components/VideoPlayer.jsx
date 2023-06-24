import React, { useContext } from 'react';
import { Grid, Typography, Paper, makeStyles } from '@material-ui/core';

import { SocketContext } from '../SocketContext';

const useStyles = makeStyles((theme) => ({
    video: {
        width: '580px',
        [theme.breakpoints.down('xs')]: {
            width: '300px',
        },
        justifyContent: 'center',
    },
    gridContainer: {
        justifyContent: 'center',
        color: 'red',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
        },
    },
    paper: {
        padding: '10px',
        margin: '10px',
        backgroundColor: '#131118',
        color: '#1CB752',
    },
}));

const VideoPlayer = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext);
    const classes = useStyles();

    return (
        <Grid container className={classes.gridContainer}>
            {stream && (

                <Paper className={classes.paper}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
                        <video playsInline muted ref={myVideo} autoPlay className={classes.video} />
                    </Grid>
                </Paper>
            )}
            {callAccepted && !callEnded && (
                <Paper className={classes.paper}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
                        <video playsInline ref={userVideo} autoPlay className={classes.video} />
                    </Grid>
                </Paper>
            )}
        </Grid>
    );
};

export default VideoPlayer;