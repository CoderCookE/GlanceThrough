'use strict';
module.exports = function(app) {

    // Home route
    var bookmarkletError = require('../controllers/bookmarkletError');
    app.get('/bookmarkletError', bookmarkletError.render);
};
