'use strict';

var request = require('request');
var firebase = require('firebase-admin');
var serviceAccount = require('/home/kraven/Documents/catmash/catmash/Catmash/serviceAccount.json');

firebase.initializeApp({
	credential: firebase.credential.cert(serviceAccount),
	databaseURL: 'https://catmash-4c534.firebaseio.com/'
  });

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
		for(var i=0; i < images.length; i++){
			firebase.database().ref('cats').child(images[i].id).set({
				id_cat: images[i].id,
				url: images[i].url,
				score: 0
			  });
			
		}
		firebase.database().ref('nb_cats').set({
			nb_total: images.length
		});
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
		var images = cats.images;
		var count = images.length;

		res.status(200).json(images[n]);
	});
}