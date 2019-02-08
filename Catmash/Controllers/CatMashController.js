'use strict';

var request = require('request');

exports.get_cats = function(req, res){
	
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
		res.status(200).json(images);
	});
}

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
  }

exports.get_cat = function(req, res){
	const getCat = {
		uri: "https://latelier.co/data/cats.json",
		headers: {
			'Content-Type': 'application/json'
		},
	};

	request.get(getCat, (error, response, body) =>{
		if(error){
			res.status(400).send(error);
		}
		var cats = JSON.parse(body);
		var n = getRandomInt(101);
		//console.log(n);
		var images = cats.images;
		//console.log(images);
		var count = images.length;
		//console.log(count);
		//console.log(images[43]);

		res.status(200).json(images[n]);
	});
}