import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';


const Posts = () => {

    // state is the whole global redux store/state. To access this global state we use useSelector
    const posts = useSelector((state) => {
        // state.posts is the value we gave in combine reducers in the /reducers/index.js. we want that state
        return state.posts
    });
    const classes = useStyles();
    
    return (
        // Check to see if the global state posts (from redux) has something in it
        !posts.length ? <CircularProgress /> :
        <Grid className={classes.container} container alignItems="strech" packing={3}>
                {
                    posts[0].map((post) => (
                        <Grid key={post.id} item xs={12} sm={6}>
                            {console.log(posts)}
                            <Post post={post} />
                        </Grid>
                    ))
                }

            </Grid>
    )
}

export default Posts;