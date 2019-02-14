/*
CORS is handle by apache2
Ajax get all cats from server
Loop for the gallery.
*/
var config = {
    apiKey: "AIzaSyAPZ36nT3IvIzeY4XlsO06yBOBpDrQI8Co",
    authDomain: "catmash-4c534.firebaseapp.com",
    databaseURL: "https://catmash-4c534.firebaseio.com",
    projectId: "catmash-4c534",
    storageBucket: "catmash-4c534.appspot.com",
    messagingSenderId: "582397968867"
  };
firebase.initializeApp(config);
var cats_firebase;
var nb_total;
var cats_id= [];
var cats_url= [];
var ref = firebase.database().ref("cats");                           
ref.on("value", function(snapshot){
    var ref2 = firebase.database().ref("nb_cats");
    snapshot.forEach(function(child){
        cats_id.push(child.val().id_cat);
        cats_url.push(child.val().url);
    })
    
    ref2.on("value", function(snapshot2){
        snapshot2.forEach(function(child) {
            nb_total =child.val();
        });
        var i = 0;
        while(i < nb_total){
            $('#loop_gallery').append($('<div>', {id: "1"+cats_id[i], 'class': 'gallery_item'}));
            $('#1'+cats_id[i]).append($('<div>', {id: "2"+cats_id[i], 'class': 'h_gallery_item'}));
            $('#2'+cats_id[i]).append($('<img/>', {id: "3"+cats_id[i], 'src':cats_url[i]}));
            $('#3'+cats_id[i]).append($('<div>', {id: "4"+cats_id[i], 'class':'hover'}));
            $('#4'+cats_id[i]).append($('<a>', {id: "5"+cats_id[i], 'class':'light', 'href':'img/story/cat1.jpg'}));
            $('#5'+cats_id[i]).append($('<i/>', {id: "6"+cats_id[i], 'class':'fa fa-expand'}));
            i++;
        }
    });
    
});

