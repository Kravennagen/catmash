'use strict';

var request = require('request');
var mysql = require('mysql');

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
		var cats = JSON.parse(body);
		
		//var count = Object.keys(cats.images).length;
		
		/*var con = mysql.createConnection({
			host: "localhost",
			user: "catmash",
			password: "catmash123", 
			database: "catmash"
		});
		con.connect(function(err) {
			
					
			var dict_cat = [];
			cats.images.forEach(element => {
				dict_cat.push([element.id, element.url]);
				
			});
			var sql = "INSERT INTO cats (id_cat, url) VALUES ?";
			var values = dict_cat;
			console.log(values);
			//var que = "SELECT * FROM cats WHERE id_cats = '"+values.id+"'";
			con.query(sql, [values], function (err, result) {
				if (err) throw err;
				console.log("Number of records inserted: " + result.affectedRows);
			});
			
		});*/
		
		res.status(200).send({message: cats.images});
		return cats.images;
	})
}