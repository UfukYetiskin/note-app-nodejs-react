import Post from "../models/posts"

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({message : error.message})
    }
}


export const createPosts = async (req, res) => {
    const newPost = new Post(req.body)
    try {
       await newPost.save();
    } catch (error) {
        res.status(409).json({
            message : error.message
        })
    }
}
