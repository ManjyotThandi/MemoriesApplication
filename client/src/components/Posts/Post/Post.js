import React from 'react';
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';

const Post = (props) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={props.post.selectedFile} title={props.post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{props.post.creator}</Typography>
                <Typography variant="body2">{moment(props.post.createdAt).fromNow}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{ color: 'white' }} size="small" onClick={() => { }}>
                    <MoreHorizIcon fontSize="default" />
                </Button>
            </div>
            <div className={classes.details}>
                {/* <Typography className={classes.title} variant="body2" color="textSecondary">{props.post[0].tags.map((tag) => `#${tag} `)}</Typography> */}
            </div>
            <CardContent>
                <Typography className={classes.title} variant="h5" gutterBottom>{props.post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => { }}>
                    <ThumbUpAltIcon fontSize="small" />
                    Like
                    {props.post.likeCount}
                </Button>
                <Button size="small" color="primary" onClick={() => { }}>
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post;