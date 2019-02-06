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
        var cats = body;
        console.log("test");
        console.log(cats.length);

        //console.log(cats);
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://localhost:27017/catmash";

        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            console.log("Database created!");
            db.close();
        });

        MongoClient.connect(url, function(err, db) {
            if (err) throw err;
            var dbo = db.db("catmash");
            dbo.createCollection("cats", function(err, res) {
              if (err) throw err;
              console.log("Collection created!");
              db.close();
            });
          });    
        /*MongoClient.connect(url, function(err, db){
            if (err) throw err;
            var dbo = db.db("catmash");
            dbo.collection("cats").insertMany(, function(err,res){
                if (err) throw err;
                console.log("nb inserted: "+ res.insertedCount);
                db.close()
            });
        });*/
        
        
        res.status(200).send({message: 'Cats are here '+ cats});
    })
}