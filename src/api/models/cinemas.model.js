
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const cinemasSchema = new Schema(
    {
        name: {type: String, require: true},
        location: {type:String, require: true},
     movies:[{type: Schema.Types.ObjectId, ref:'movies'}],
    },
    {
        collection: 'cinema',
    }
);

const Cinema = mongoose.model('cinema',cinemasSchema);
module.exports = Cinema;