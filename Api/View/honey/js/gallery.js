/*
CORS is handle by apache2
Ajax get all cats from server
Loop for the gallery.
*/
var cats;
var i = 0;
$.ajax({
    url : 'http://192.168.233.155:3000/cats',
    type : 'GET',
    dataType : 'html',
    async : false,
    success : function(response, status){
        console.log("success");
    },

    error : function(response, status, erreur){
        console.log("error");
    },
    complete : function(response){
        //console.log(response.responseText);
        cats = response.responseText;
    }
 });

 var obj = JSON.parse(cats);
 var count = Object.keys(obj).length;
 console.log(obj[0].id);


while(i < count){
    console.log(i);
    console.log(obj[i].id)
    $('#loop_gallery').append($('<div>', {id: "1"+obj[i].id, 'class': 'gallery_item'}));
    $('#1'+obj[i].id).append($('<div>', {id: "2"+obj[i].id, 'class': 'h_gallery_item'}));
    $('#2'+obj[i].id).append($('<img/>', {id: "3"+obj[i].id, 'src':obj[i].url}));
    $('#3'+obj[i].id).append($('<div>', {id: "4"+obj[i].id, 'class':'hover'}));
    $('#4'+obj[i].id).append($('<a>', {id: "5"+obj[i].id, 'class':'light', 'href':'img/story/cat1.jpg'}));
    $('#5'+obj[i].id).append($('<i/>', {id: "6"+obj[i].id, 'class':'fa fa-expand'}));
    i++;
}