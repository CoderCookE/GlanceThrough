'use strict';

exports.render = function(req, res) {
    res.json({hello:"hello"});
};

exports.show = function(req, res) {
	var article = req.article;
	res.jsonp(article);
};