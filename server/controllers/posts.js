import express from 'express';
import PostMessage from '../models/postMessage';

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();

        console.log(postMessages)

        res.status(200).json(postMessages);
    }
    catch (err) {
        res.status(404).json({ message: err.message });
    }

}

export const createPosts = async (req, res) => {
    try {
        const newPost = new PostMessage();

        await newPost.save(req.body);

        res.status(201).json({ message: `Post uploaded ${newPost}` })
    }
    catch (err) {
        res.status(409).json({ message: err.message });
    }
}