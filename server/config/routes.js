let mongoose = require('mongoose');
let Note = mongoose.model('Note'); // alter as needed
let notes = require('../controllers/notes.js') // alter

module.exports = function(app) {
    // route handlers goes here
    // sample
    app.get('/api/notes', notes.getAllNotes);
    app.post('/api/notes/create', notes.addNote);

    // ------------------------
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./main/dist/index.html"))
    });
}