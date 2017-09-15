// alter title of file as needed. Don't forget to change dependent files as well
let mongoose = require('mongoose');
let Note = mongoose.model('Note'); // change as needed

module.exports = {
    getAllNotes : (request, response) => {
        Note.find({}, function(error, notes) {
            if (error) {
                console.log('something went wrong');
                console.log(error);
            } else {
                console.log('Success Responding')
                response.json(notes);
            }
        });
    },

    addNote : (request, response) => {
        let note = new Note(request.body);
        note.save(function(err, newNote) {
            if(err) {
                console.log('something went wrong');
                response.json(err);
            } else {
                console.log('success')
                response.json(newNote);
            }
        })
    }
}