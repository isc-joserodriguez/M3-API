const {
    signup,
    getUsers,
    updateUser,
    deleteUser,
    login
} = require('./User.controller');

const {
    createPost,
    getPosts,
    getPublicPosts,
    getMyPosts
} = require('./Post.controller')

const {
    createCategory,
    getCategories,
} = require('./Category.controller')


module.exports = {
    signup,
    getUsers,
    updateUser,
    deleteUser,
    createPost,
    getPosts,
    getPublicPosts,
    getMyPosts,
    login,
    createCategory,
    getCategories
}