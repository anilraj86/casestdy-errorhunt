const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/Library');

const dbpath="mongodb+srv://anilfsd:rQycu5K5QIkTK2TK@cluster0.hlyik.mongodb.net/Library";
mongoose.connect(dbpath);

const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    title : String,
    image: String,
    about: String
});

const authordata = mongoose.model('authordata',AuthorSchema);

module.exports = authordata;