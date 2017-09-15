let mongoose = require('mongoose');

var NoteSchema = new mongoose.Schema({
    message: {
        type: String,
        required: [true, 'Note message is required'],
        minlength: [3, 'Message should have a minimum of 3 characters']
    }
}, {timestamps: true})

var Note = mongoose.model('Note', NoteSchema);