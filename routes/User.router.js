const express = require('express'),
    auth = require('../middlewares/auth'),
    router = express.Router(),
    {
        signup,
        getUsers,
        updateUser,
        deleteUser,
        login,
        getInfo
    } = require('../controllers');

router.post('/signup', signup);
router.post('/login', login);
router.get('/', getUsers);
router.get('/info', auth, getInfo);
router.put('/', auth, updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
