'use strict';

var request = require('request');

exports.get_cats = function(req, res){
	console.log('in it');
	
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
		var cats = JSON.parse(body);
		var images = cats.images;
		console.log(images);
		res.status(200).send(images);		
	})
}