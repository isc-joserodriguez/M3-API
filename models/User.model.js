/* Instanciamos mongoose */
const mongoose = require('mongoose'),
    jwt = require('jsonwebtoken');

/* Creamos nuestro Schema */
const UserSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, default: 'Perez' },
    dob: { type: Date },
    mail: { type: String, required: [true, 'Se requiere el email'] },
    password: { type: String, required: [true, 'Se requiere el password'] }
});

/* Agregamos método para generar token */
UserSchema.methods.generateJWT = function () {
    return jwt.sign({ idUser: this._id }, process.env.SECRET_JWT);
}

mongoose.model('User', UserSchema, 'collectionUser');
