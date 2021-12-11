const mongoose = require('mongoose'),
    Post = mongoose.model('Post');

const createPost = async (req, res) => {
    try {
        const post = new Post(req.body);

        const resp = await post.save();

        return res.json({
            menssage: 'Post created successfully',
            detail: resp
        })
    } catch (e) {
        return res.json({
            menssage: 'Error',
            detail: e
        })
    }
}

const getPosts = async (req, res) => {
    try {
        const resp = await Post.find().populate('category');

        if (resp.length === 0) {
            return res.json({
                menssage: 'Error',
                detail: 'No hay registros'
            })
        } else {
            return res.json({
                menssage: 'Posts',
                detail: resp
            })
        }
    } catch (e) {
        return res.json({
            menssage: 'Error',
            detail: e
        })
    }
}

module.exports = {
    createPost,
    getPosts
}
