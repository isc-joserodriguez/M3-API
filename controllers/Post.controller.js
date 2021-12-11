const mongoose = require('mongoose'),
    Post = mongoose.model('Post');

const createPost = async (req, res) => {
    try {
        const post = new Post(req.body);

        //const resp = await (await post.save()).populate('category');

        const resp = await post.save();

        return res.json({
            menssage: 'Post created successfully',
            detail: await resp.populate('category'),
        })
    } catch (e) {
        return res.json({
            menssage: 'Error',
            detail: e.message
        })
    }
}

const getPosts = async (req, res) => {
    try {
        const resp = await Post.find().populate('category').populate('user');

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
            detail: e.message
        })
    }
}

module.exports = {
    createPost,
    getPosts
}
