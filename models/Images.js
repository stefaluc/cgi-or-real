var mongoose = require('mongoose');

var ImagesSchema = new mongoose.Schema({
	name: String,
	stats: {
		total: Number,
		correct: Number,
		incorrect: Number
	},
	modified: {
		type: Date, 
		default: Date.now
	}
});

module.exports = mongoose.model('Images', ImagesSchema);