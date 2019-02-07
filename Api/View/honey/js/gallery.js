/*
Loop for the gallery.
Change < with the number of cats images.
Change id by cat's id.
Change image by cat's images.
*/


$.ajax({
    "url": "http://192.168.233.155:3000/cats",
    "type": "GET",
    "dataType": "json",
}).done(function(resultat, textStatus, jqxhr) {
    //Write code to be executed when the request SUCCEEDS.
    console.log(resultat);
}).fail(function(resultat, jqxhr, textStatus, errorThrown) {
    console.log(resultat);
    console.log(jqxhr);
    console.log(textStatus);
    console.log(errorThrown);
    //Write code to be executed when the request FAILS.
});

/*$.ajax({
    url : 'http://192.168.233.155:3000/cats',
    type : 'GET',
    dataType : 'html',
    success : function(resultat, status){
        console.log(resultat);
        console.log(status);
    },

    error : function(resultat, status, erreur){
        console.log(resultat);
        console.log(status);
        console.log(erreur);
    },

    complete : function(resultat, status){
        console.log(resultat);
        console.log(status);
    }

 });*/

/*$.ajax({
    type : "GET",
    url :"http://192.168.233.155:3000/cats",
    data: {
        format: 'json'
     },
    dataType: 'jsonp',
    success: function(result){
        console.log(result);
    },
    error : function(e) {
        console.log("ERROR: ", e);
    }
});	*/


for(var i = 0; i < 100; i++){
    $('#loop_gallery').append($('<div>', {id: 'a'+i, 'class': 'gallery_item'}));
    $('#a'+i).append($('<div>', {id: 'b'+i, 'class': 'h_gallery_item'}));
    $('#b'+i).append($('<img/>', {id: 'c'+i, 'src':'img/story/cat1.jpg'}));
    $('#c'+i).append($('<div>', {id: 'd'+i, 'class':'hover'}));
    $('#d'+i).append($('<a>', {id: 'e'+i, 'class':'light', 'href':'img/story/cat1.jpg'}));
    $('#e'+i).append($('<i/>', {id: 'f'+i, 'class':'fa fa-expand'}));
}