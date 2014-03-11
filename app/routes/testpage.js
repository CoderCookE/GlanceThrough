'use strict';
module.exports = function(app) {

    // Home route
    var testpage = require('../controllers/testpage');
    app.get('/testpage', testpage.render);
    app.get('/testpage/:articleUrl', testpage.show);
};
