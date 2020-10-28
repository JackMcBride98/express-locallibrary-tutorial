var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
    {
        name: {type: String, minlength: 3, maxlength: 100, required: true}
    }
);

GenreSchema
.virtual('url')
.get(function (){
    return '/catalog/genre/' + this._id;
});

//Export Model
module.exports = mongoose.model('Genre', GenreSchema);