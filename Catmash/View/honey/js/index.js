/*
    Get cats from firebase
    random number to choose between cats
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

function choice_is_made(){
    console.log("in it");
    location.reload();
}