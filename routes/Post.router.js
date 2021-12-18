const express = require('express'),
    auth = require('../middlewares/auth'),
    router = express.Router(),
    {
        createPost,
        getPosts
    } = require('../controllers');

router.post('/', auth, createPost);
router.get('/', getPosts);


module.exports = router;
