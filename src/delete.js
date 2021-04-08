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

const updateDocument = async (_id) => {
    try {        
        const result = await Playlist.deleteOne(
            {
                _id
            }
        )
        console.info(result); 
    }
    catch(err) {
        console.log(err);
    }
}
updateDocument('606c37477395561af0417883');