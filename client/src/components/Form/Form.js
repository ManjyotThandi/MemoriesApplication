import React, { useEffect, useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
import { useSelector } from 'react-redux';

import useStyles from './styles';


const Form = (props) => {

    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    });

    // Dont fetch all posts only fetch updated posts. FInd method for array will return first element that matches the condition
    const post = useSelector((state) => props.currentId ? state.posts[0].find((p) => p._id === props.currentId) : null);
    console.log(post)
    useEffect(() => {
        if (post) {
            setPostData(post);
        }
    }, [post])

    const classes = useStyles();

    // This allows us to dispatch actions, just like we did in app.js on loadup.
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        // if we have a current id, which is set by clicking the three dots. (State is set in app.js. We could put it in redux if we desire)
        if (props.currentId) {
            dispatch(updatePost(props.currentId, postData))
        }
        else {
            // send the post object as the complete state
            dispatch(createPost(postData));
        }
        clear();
    }

    const clear = () => {
        props.setCurrentId(null);
        setPostData({
            creator: '',
            title: '',
            message: '',
            tags: '',
            selectedFile: ''
        });
    }
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.form} ${classes.root}`} onSubmit={handleSubmit}>
                <Typography variant="h6"> {props.currentId ? 'Updating a memory' : 'Creating a memory'}</Typography>

                <TextField name="creator"
                    variant="outlined"
                    label="creator"
                    fullWidth value={postData.creator}
                    onChange={(e) => { setPostData({ ...postData, creator: e.target.value }) }}
                />
                <TextField name="title"
                    variant="outlined"
                    label="title"
                    fullWidth value={postData.title}
                    onChange={(e) => { setPostData({ ...postData, title: e.target.value }) }}
                />
                <TextField name="message"
                    variant="outlined"
                    label="message"
                    fullWidth value={postData.message}
                    onChange={(e) => { setPostData({ ...postData, message: e.target.value }) }}
                />
                <TextField name="tags"
                    variant="outlined"
                    label="tags"
                    fullWidth value={postData.tags}
                    onChange={(e) => { setPostData({ ...postData, tags: e.target.value }) }}
                />

                <div className={classes.fileInput}>
                    <FileBase type="file"
                        multiple={false}
                        onDone={({ base64 }) => { setPostData({ ...postData, selectedFile: base64 }) }}
                    />
                </div>
                <Button
                    className={classes.buttonSubmit}
                    variant="container"
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth
                >
                    Submit
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={clear}
                    fullWidth
                >
                    Clear
                </Button>
            </form>
        </Paper>
    )
}

export default Form;