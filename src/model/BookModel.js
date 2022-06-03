const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/Library');
const dbpath="mongodb+srv://anilfsd:Csfsd@123@cluster0.hlyik.mongodb.net/?retryWrites=true&w=majority/Library";
mongoose.connect(dbpath);
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title : String,
    author: String,
    image: String,
    about: String
});

const bookdata = mongoose.model('bookdata',BookSchema);
module.exports = bookdata;