/*
launch route catmashcontroller 
to get cats 
*/
function reset(){
    $.ajax({
        url : 'http://192.168.233.157:3000/cats',
        type : 'GET',
        dataType : 'html',
        async : false,
        success : function(response, status){
            console.log("success");
        },
    
        error : function(response, status, erreur){
            console.log("error");
        }
     });
}

