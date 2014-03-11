'use strict';

module.exports = {
    db: 'mongodb://heroku_app22918578:5umji2jstcd9pfobanm3pfebf2@ds033499.mongolab.com:33499/heroku_app22918578',
    app: {
        name: 'GlanceThrough - Production'
    },
    facebook: {
        clientID: '1389136721306914',
        clientSecret: 'b4ef81f255cc0af33d9d778760091284',
        callbackURL: 'http://www.glancethrough.info/auth/facebook/callback:'
    },
    twitter: {
        clientID: 'CONSUMER_KEY',
        clientSecret: 'CONSUMER_SECRET',
        callbackURL: 'http://localhost:3000/auth/twitter/callback'
    },
    github: {
        clientID: 'APP_ID',
        clientSecret: 'APP_SECRET',
        callbackURL: 'http://localhost:3000/auth/github/callback'
    },
    google: {
        clientID: 'APP_ID',
        clientSecret: 'APP_SECRET',
        callbackURL: 'http://localhost:3000/auth/google/callback'
    },
    linkedin: {
        clientID: 'API_KEY',
        clientSecret: 'SECRET_KEY',
        callbackURL: 'http://localhost:3000/auth/linkedin/callback'
    }
};
