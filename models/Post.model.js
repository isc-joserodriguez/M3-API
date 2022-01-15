/* Instanciamos mongoose */
const mongoose = require('mongoose');

/* Creamos nuestro Schema */
const PostSchema = new mongoose.Schema({
    title: { type: String },
    body: { type: String },
    image: { type: String },
    visibility: { type: Boolean, default: true},
    category: { type: mongoose.ObjectId, ref: 'Category' },
    user: { type: mongoose.ObjectId, ref: 'User' },
    test1: {
        campoA: { type: String },
        campoB: { type: Number },
    },
    test2: [
        {
            campoC: { type: String },
            campoD: { type: Number },
        }
    ]
});

mongoose.model('Post', PostSchema, 'collectionPost');