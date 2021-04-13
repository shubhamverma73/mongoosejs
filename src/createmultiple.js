const mongoose = require('mongoose');

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
            active: true,
        });

        const mongo = new Playlist({
            name:   'Mongo DB',
            ctype:  'DB',
            videos: 500,
            author: 'Shubham',
            active: true,
        }); 

        const php = new Playlist({
            name:   'PHP',
            ctype:  'Back END',
            videos: 1000,
            author: 'Shubham',
            active: true,
        });    

        const result = await Playlist.insertMany([js, mongo, php]);
        console.log(result);
    }
    catch(err) {
        console.log(err);
    }
    
}
createDocument();