/* Instanciamos mongoose */
const mongoose = require('mongoose');

/* Creamos nuestro Schema */
const PostSchema = new mongoose.Schema({
    title: { type: String },
    body: { type: String },
    image: { type: String },
    state: { type: Boolean },
    category: { type: mongoose.ObjectId, ref: 'Category' }
});

mongoose.model('Post', PostSchema, 'collectionPost');