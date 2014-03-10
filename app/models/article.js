'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Article Schema
 */
// function removeCharacters(string){
// 	return string.replace(/"yahoo"/g," ").replace(/\s{2,}/g," ");
// }

var ArticleSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    url:{
    	type: String,
    	// getter: removeCharacters
    },
    title: {
        type: String,
        default: '',
        trim: true
    },
    content: {
        type: String,
        // get: removeNewLine,
        default: '',
        trim: true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});
ArticleSchema.set('toJSON', { getters: true, virtuals: false });
/**
 * Validations
 */
ArticleSchema.path('title').validate(function(title) {
    return title.length;
}, 'Title cannot be blank');

/**
 * Statics
 */
ArticleSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('user', 'name username').exec(cb);
};

mongoose.model('Article', ArticleSchema);
