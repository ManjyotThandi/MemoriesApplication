import express from 'express';
import mongoose from 'mongoose';
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

export const updatePost = async (req, res) => {
    const _id = req.params.id;
    const post = req.body;

    // check if this is an actual valid mongoose id without even hitting the db first
    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send('No post with that id found');
    }

    // if id is valid update that object in db and return it
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true });
    res.json(updatedPost);
}