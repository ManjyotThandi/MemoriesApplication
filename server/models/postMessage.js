import mongoose from 'mongoose';

// This creates the schema
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});

// create the model using the schema
const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;
