const express = require('express'),
    auth = require('../middlewares/auth'),
    router = express.Router(),
    {
        createPost,
        getPosts,
        getPublicPosts,
        getMyPosts
    } = require('../controllers');

router.post('/', auth, createPost);
router.get('/', auth, getPosts);
router.get('/public', getPublicPosts);
router.get('/my-posts', auth, getMyPosts);


module.exports = router;
