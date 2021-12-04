const express = require('express'),
    router = express.Router(),
    {
        signup,
        getUsers,
        updateUser,
        deleteUser,
    } = require('../controllers');

router.post('/', signup);
router.get('/', getUsers);
router.put('/', updateUser);
router.delete('/', deleteUser);

module.exports = router;
