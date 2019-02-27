/*
    Get cats from firebase
    random number to choose between cats
*/


firebase.initializeApp(config);

var ref = firebase.database().ref("cats");
var ref2 = firebase.database().ref("nb_cats");
var nb_total;
var cats= [];
ref2.on("value", function(snapshot){
    snapshot.forEach(function(child){
        nb_total = child.val();
    });
    const randomIndex = Math.floor(Math.random() * nb_total);
    const randomIndex2 = Math.floor(Math.random() * nb_total);
    ref.on("value", function(snapshot2){
        snapshot2.forEach(function(child){
            cats.push(child.val());
        });
        document.getElementById("cat1").src = cats[randomIndex].url;
        document.getElementById("cat2").src = cats[randomIndex2].url;
        document.getElementById("cat1").alt = cats[randomIndex].id_cat;
        document.getElementById("cat2").alt = cats[randomIndex2].id_cat;
    })
});

function cat_one_choosen(){
    var id;
    id = document.getElementById("cat1").alt;
    var ref3 = firebase.database().ref("cats").child(id);
    ref3.once("value").then(function(snapshot){
        var score = snapshot.val().score;
        sc = score + 1;
        ref3.update({
            score : sc
        },
        function(error){
            if(error){
                console.log("error");
            }else{
                console.log("success");
            }
        }
        );
    })
    location.reload();

}

function cat_two_choosen(){
    var id;
    id = document.getElementById("cat2").alt;
    var ref3 = firebase.database().ref("cats").child(id);
    ref3.once("value").then(function(snapshot){
        var score = snapshot.val().score;
        sc = score + 1;
        ref3.update({
            score : sc
        },
        function(error){
            if(error){
                console.log("error");
            }else{
                console.log("success");
            }
        }
        );
    })
    location.reload();
}