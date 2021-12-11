const express = require('express'),
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
router.put('/', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
