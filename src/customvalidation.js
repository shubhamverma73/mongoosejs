//https://mongoosejs.com/docs/schematypes.html
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/reactJS', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => {
    console.log('connected');
}).catch(err => {
    console.log('Error'+err);
});

// Schema
const playlistSchema = new mongoose.Schema({
    name:   { type: String, required: true, unique: true, uppercase: true, minlength: [2, 'Minimum 2 characters are allowed'], maxlength: 15 },
    ctype:  String,
    videos: {
                type: Number,
                validate(value) {
                    if(value< 0) {
                        throw new Error('Video count could be be less than 0');
                    }
                }
            },
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
            name:   'Pithon',
            ctype:  'Back END',
            videos: -12,
            author: 'Shubham',
            active: true,
        });        
        const result = await reactPlaylist.save();
        console.log(result);
    }
    catch(err) {
        console.log(err);
    }
    
}
createDocument();