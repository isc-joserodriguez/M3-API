const {
    signup,
    getUsers,
    updateUser,
    deleteUser,
} = require('./User.controller');

const {
    createPost,
    getPosts
} = require('./Post.controller')


module.exports = {
    signup,
    getUsers,
    updateUser,
    deleteUser,
    createPost,
    getPosts
}