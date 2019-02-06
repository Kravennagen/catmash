'use strict';

var request = require('request');

exports.get_cats = function(req, res){
    var params = {
        "url": "true",
        "id": "true"
    };

    const getCats = {
        uri: "https://latelier.co/data/cats.json",
        headers: {
            'Content-Type': 'application/json'
        },
    };

    request.get(getCats, (error, response, body) =>{
        if(error){
            res.status(400).send(error);
        }
        let cats = [];
        cats = JSON.parse(body);
        res.status(200).send({message: 'Cats are here'+ cats.lenght});
    })
}