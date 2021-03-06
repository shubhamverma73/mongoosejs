//https://docs.mongodb.com/manual/reference/operator/query-comparison/
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

const getDocument = async () => {
    try {
        const result = await Playlist.
        find({$or: [{ctype: 'Front END', author: 'Shubham'}]}) //$and
        .select({name: 1, ctype: 1})
        .countDocuments()
        //.sort({name: 1}); //1 is ASC order and -1 is DESC
        console.info(result);    
    }
    catch(err) {
        console.log(err);
    }
}
getDocument();