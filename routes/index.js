const express = require('express'),
    router = express.Router(),
    userRouter = require('./User.router'),
    postRouter = require('./Post.router');

router.get('/',(req,res)=>{
    res.send(`
    <h1>Welcome </h1>
    `)
})

router.use('/user', userRouter);
router.use('/post', postRouter);

module.exports = router;