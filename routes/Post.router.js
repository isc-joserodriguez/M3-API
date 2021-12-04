const express = require('express'),
    router = express.Router(),
    {
        createPost,
        getPosts
    } = require('../controllers');

router.post('/', createPost);
router.get('/', getPosts);


module.exports = router;
