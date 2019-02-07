import {getCats} from "../../../Models/CatMashModel";
/*
Loop for the gallery.
Change < with the number of cats images.
Change id by cat's id.
Change image by cat's images.
*/

console.log("premier test");





/*var state = {
    cats : {}
};

getCats().then((cats) => {
    state({
        cats : cats
    });
}).catch((err) => alert(err + ""));
console.log("test");
console.log(state.cats);*/

for(var i = 0; i < 100; i++){
    $('#loop_gallery').append($('<div>', {id: 'a'+i, 'class': 'gallery_item'}));
    $('#a'+i).append($('<div>', {id: 'b'+i, 'class': 'h_gallery_item'}));
    $('#b'+i).append($('<img/>', {id: 'c'+i, 'src':'img/story/cat1.jpg'}));
    $('#c'+i).append($('<div>', {id: 'd'+i, 'class':'hover'}));
    $('#d'+i).append($('<a>', {id: 'e'+i, 'class':'light', 'href':'img/story/cat1.jpg'}));
    $('#e'+i).append($('<i/>', {id: 'f'+i, 'class':'fa fa-expand'}));
}