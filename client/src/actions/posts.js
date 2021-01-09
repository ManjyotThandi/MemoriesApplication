import * as api from '../api';
import axios from 'axios';

// create action creaters. These are functions which return actions
// thunk lets us use async (dispatch) to return the FETCH_ALL async
export const getPosts = () => async (dispatch) => {
    try {
        // This will make a call to backend to get all posts. We are destructing to {data}
        const { data } = await api.fetchPosts();
        const action = { type: 'FETCH_ALL', payload: [data] };
        // with redux thunk you have to dispatch the action
        dispatch(action);
    }
    catch (error) {
        console.log(error.message);
    }

}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post)
        console.log(data.data)
        const action = { type: 'CREATE', payload: [data] };
        dispatch(action);
    }
    catch (error) {
        console.log(error.message);
    }
}

export const updatePost = (id, updatedPost) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, updatedPost);

        // what is returned in data is the updated post
        const action = { type: 'UPDATE', payload: data }

        dispatch(action);
    }
    catch (err) {
        console.log(err.message);
    }
}
