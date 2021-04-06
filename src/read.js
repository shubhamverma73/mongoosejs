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

const getDocument = async () => {
    try {
        const result = await Playlist.find({ctype: 'Front END'})
        .select({name: 1, ctype: 1});
        console.info(result);    
    }
    catch(err) {
        console.log(err);
    }
}
getDocument();