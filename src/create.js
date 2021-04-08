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
    name:   { type: String, required: true },
    ctype:  String,
    videos: Number,
    author: String,
    active: Boolean,
    date: { type: Date, default: Date.now }
});

// Collection create
const Playlist = new mongoose.model('Playlist', playlistSchema);

// Create document or insert data
const createDocument = async () => {
    try {
        const reactPlaylist = new Playlist({
            name:   'Express JS',
            ctype:  'Back END',
            videos: 420,
            author: 'Shubham',
            active: true,
        });        
        const result = await reactPlaylist.save(); //Asynchronous data transaction
        console.log(result);
    }
    catch(err) {
        console.log(err);
    }
    
}
createDocument();