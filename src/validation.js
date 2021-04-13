const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/reactJS', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('connected');
}).catch(err => {
    console.log('Error'+err);
});

// Schema
const playlistSchema = new mongoose.Schema({
    name:   { 
                type: String, 
                required: true 
            },
    ctype:  String,
    videos: Number,
    author: String,
    email:  {
                type: String,
                validate(value) {
                    if(!validator.isEmail(value)) {
                        throw new Error('Email not valid');
                    }
                }
            },
    active: Boolean,
    date:   { 
                type: Date, 
                default: Date.now 
            }   
});

// Collection create
const Playlist = new mongoose.model('Playlist', playlistSchema);

// Create document or insert data
const createDocument = async () => {
    try {
        const js = new Playlist({
            name:   'JS',
            ctype:  'Front END',
            videos: 0,
            author: 'Shubham',
            email: 'shubham@gmail.co',
            active: true,
        });

        const result = await Playlist.insertMany([js]);
        console.log(result);
    }
    catch(err) {
        console.log(err);
    }
    
}
createDocument();