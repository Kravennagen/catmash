var cat1;
var cat2;

$.ajax({
    url : 'http://192.168.233.155:3000/cat',
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
        cat1 = response.responseText;
    }
});

$.ajax({
    url : 'http://192.168.233.155:3000/cat',
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
        cat2 = response.responseText;
    }
});

c1 = JSON.parse(cat1);
c2 = JSON.parse(cat2);

document.getElementById("cat1").src = c1.url;
document.getElementById("cat2").src = c2.url;
document.getElementById("cat1").alt = c1.id;
document.getElementById("cat2").alt = c2.id;
console.log(c1.id);
console.log(c2.id);

function choice_is_made(){
    console.log("in it");
    location.reload();
}