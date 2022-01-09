const express = require('express'),
    auth = require('../middlewares/auth'),
    router = express.Router(),
    {
        signup,
        getUsers,
        updateUser,
        deleteUser,
        login
    } = require('../controllers');

router.post('/signup', signup);
router.post('/login', login);
router.get('/', getUsers);
router.put('/', auth, updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
