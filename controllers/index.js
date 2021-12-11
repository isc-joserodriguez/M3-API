const {
    signup,
    getUsers,
    updateUser,
    deleteUser,
    login
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
    getPosts,
    login
}