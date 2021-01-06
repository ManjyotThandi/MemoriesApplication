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
        const newPost = new PostMessage(req.body);
        const post = await newPost.save();
        res.status(201).json(post)
    }
    catch (err) {
        res.status(409).json({ message: err.message });
    }
}