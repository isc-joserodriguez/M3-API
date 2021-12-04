/* Instanciamos mongoose */
const mongoose = require('mongoose');

/* Creamos nuestro Schema */
const UserSchema = new mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, default: 'Perez' },
    dob: { type: Date },
    mail: { type: String, required: [true, 'Se requiere el email'] },
    password: { type: String, required: [true, 'Se requiere el password'] }
});

mongoose.model('User', UserSchema, 'collectionUser');
