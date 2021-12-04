const mongoose = require('mongoose'),
    User = mongoose.model('User');

/* const User = require('mongoose').model('User'); */

const signup = async (req, res) => {
    try {
        const user = new User(req.body);

        const resp = await user.save();

        return res.json({
            menssage: 'User created successfully',
            detail: resp
        })
    } catch (e) {
        return res.json({
            menssage: 'Error',
            detail: e
        })
    }
}

const getUsers = async (req, res) => {
    try {
        const resp = await User.find();

        if (resp.length === 0) {
            return res.json({
                menssage: 'Error',
                detail: 'No hay registros'
            })
        } else {
            return res.json({
                menssage: 'USers',
                detail: resp
            })
        }
    } catch (e) {
        return res.json({
            menssage: 'Error',
            detail: e
        })
    }
}

const updateUser = async (req, res) => {
    try {
        const newData = req.body;

        const resp = await User.findByIdAndUpdate(
            newData.userId,
            { $set: newData },
            { new: true }
        )

        return res.json({
            menssage: 'User updated successfully',
            detail: resp
        })
    } catch (e) {
        return res.json({
            menssage: 'Error',
            detail: e
        })
    }
}

const deleteUser = async (req, res) => {
    try {
        const resp = await User.findByIdAndDelete(req.params.id)

        return res.json({
            menssage: 'User deleted successfully',
            detail: resp
        })
    } catch (e) {
        return res.json({
            menssage: 'Error',
            detail: e
        })
    }
}

module.exports = {
    signup,
    getUsers,
    updateUser,
    deleteUser,
}
