/* Instanciamos mongoose */
const mongoose = require('mongoose'),
    jwt = require('jsonwebtoken'),
    crypto = require('crypto');

/* Creamos nuestro Schema */
const UserSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, default: 'Perez' },
    type: { type: String, default: 'client' },
    dob: { type: Date },
    mail: { type: String, required: [true, 'Se requiere el email'] },
    password: { type: String },
    salt: { type: String }
});

/* Agregamos método para generar token */
UserSchema.methods.generateJWT = function () {
    return jwt.sign({ idUser: this._id, type: this.type }, process.env.SECRET_JWT);
}

/* Agregamos método para encriptar la contraseña */
UserSchema.methods.hashPassword = function (password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.password = crypto.pbkdf2Sync(password, this.salt, 1000, 512, 'sha512').toString('hex');
}

/* Agregamos método para verificar la contraseña */
UserSchema.methods.verifyPassword = function (password) {
    const hashedPassword = crypto.pbkdf2Sync(password, this.salt, 1000, 512, 'sha512').toString('hex');
    return hashedPassword === this.password;
}

mongoose.model('User', UserSchema, 'collectionUser');
