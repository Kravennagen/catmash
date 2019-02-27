/*
CORS is handle by apache2
Get cats from firebase realtime database
Loop for the gallery.
*/
firebase.initializeApp(config);
var nb_total;
var cats_id= [];
var cats_url= [];
var cats_score = [];
var ref = firebase.database().ref("cats");                           
ref.on("value", function(snapshot){
    var ref2 = firebase.database().ref("nb_cats");
    snapshot.forEach(function(child){
        cats_id.push(child.val().id_cat);
        cats_url.push(child.val().url);
        cats_score.push(child.val().score);
    })
    
    ref2.on("value", function(snapshot2){
        snapshot2.forEach(function(child) {
            nb_total =child.val();
        });
        var i = 0;
        var j = 0;
        while(i < nb_total){
            
            $('#loop_gallery').append($('<div>', {id: "1"+cats_id[i], 'class': 'gallery_item'}));
            $('#1'+cats_id[i]).append($('<div>', {id: "2"+cats_id[i], 'class': 'h_gallery_item'}));
            $('#2'+cats_id[i]).append($('<img/>', {id: "3"+cats_id[i], 'src':cats_url[i], 'alt':cats_id[i]}));
            $('#3'+cats_id[i]).append($('<div>', {id: "4"+cats_id[i], 'class':'hover'}));
            $('#4'+cats_id[i]).append($('<p/>', {id: "5"+cats_id[i]}));
            i++;
        }

        
    });
    
});