import axios from 'axios';

const url = 'http://localhost:5000/posts';

export const fetchPosts = async () => {
    return await axios.get(url);
}

export const createPost = async (post) => {
    return await axios.post(url, post);
}

export const updatePost = async (id, updatedPost) => {
    return await axios.patch(`${url}/${id}`, updatedPost);
}