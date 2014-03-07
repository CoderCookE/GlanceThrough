'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Article = mongoose.model('Article'),
    _ = require('lodash');


/**
 * Find article by id
 */
exports.bookmarklet = function(req, res){
	var AlchemyAPI = require('alchemy-api');
	var alchemy = new AlchemyAPI('<insert api key>');
		alchemy.title(req.query.url, {}, function(err, response) {
	  if (err) throw err;
	  	alchemy.text(req.query.url, {}, function(err, res2) {
	  		if (err) throw err;
		  	alchemy.keywords(req.query.url, {}, function(err, res3) {
		  		if (err) throw err;
	  				var title = response.title;
	  			  var text = res2.text;
	  			  var keywords = res3.keywords;
	  			  var article = new Article({title: title, content:text});
    				article.user = req.user;
    				article.save(function(err) {
			        if (err) {
			            return res.send('users/signup', {
			                errors: err.errors,
			                article: article
			            });
			        } else {
			            res.jsonp(article);
			        }
			    });
		  	});
	  	});
	});
}
exports.alchemy = function(req, res){
	var AlchemyAPI = require('alchemy-api');
	var alchemy = new AlchemyAPI('<insert api key>');
		alchemy.title(req.query.url, {}, function(err, response) {
	  if (err) throw err;
	  	alchemy.text(req.query.url, {}, function(err, res2) {
	  		if (err) throw err;
		  	alchemy.keywords(req.query.url, {}, function(err, res3) {
		  		if (err) throw err;
	  				var title = response.title;
	  			  var text = res2.text;
	  			  var keywords = res3.keywords;
	 				 res.json({title:title, text:text, keywords:keywords});
		  	});
	  	});
	});
}



exports.article = function(req, res, next, id) {
    Article.load(id, function(err, article) {
        if (err) return next(err);
        if (!article) return next(new Error('Failed to load article ' + id));
        req.article = article;
        next();
    });
};

/**
 * Create an article
 */
exports.create = function(req, res) {
    var article = new Article(req.body);
    article.user = req.user;

    article.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                article: article
            });
        } else {
            res.jsonp(article);
        }
    });
};

/**
 * Update an article
 */
exports.update = function(req, res) {
    var article = req.article;

    article = _.extend(article, req.body);

    article.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                article: article
            });
        } else {
            res.jsonp(article);
        }
    });
};

/**
 * Delete an article
 */
exports.destroy = function(req, res) {
    var article = req.article;

    article.remove(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                article: article
            });
        } else {
            res.jsonp(article);
        }
    });
};

/**
 * Show an article
 */
exports.show = function(req, res) {
	var article = req.article;
	res.jsonp(article);
};

/**
 * List of Articles
 */
exports.all = function(req, res) {
    Article.find().sort('-created').populate('user', 'name username').exec(function(err, articles) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(articles);
        }
    });
};
