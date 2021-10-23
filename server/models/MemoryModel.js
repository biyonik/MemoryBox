const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MemorySchema = new Schema({
    title: {
        type: String,
        required: [true, '{PATH} alanı boş bırakılamaz']
    },
    content: {
        type: String,
        required: [true, '{PATH} alanı boş bırakılamaz']
    },
    creator: {
        type: String,
        required: [true, '{PATH} alanı boş bırakılamaz']
    },
    image: {
        type: String
    }
}, {
    collection: 'memories',
    timestamps: true
});


const MemoryModel = mongoose.model('memories', MemorySchema);
module.exports = MemoryModel;

