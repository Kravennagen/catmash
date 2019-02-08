'use strict';

module.exports = function(app){
    //route catmash
    var catmash = require('../Controllers/CatMashController');

    //route to get all cats
    app.route('/cats')
        .get(catmash.get_cats);
    app.route('/cat')
        .get(catmash.get_cat);
}