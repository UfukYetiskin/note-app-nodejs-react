import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    id : Number,
    title: String,
    content: String,
    createdAt : {
        type: Date,
        default : new Date(),
    },
})

const Post = mongoose.model("Post", postSchema);

export default Post;