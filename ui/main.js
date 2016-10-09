console.log('Loaded!');

//Change the text of the main-text div
var element = document.getElementById('main-text'
);
element.innerHTML = "New value" ;

//move the image
var image = document.getElementById('madi');
var margin = 0;
function moveRight(){
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginleft + 'px';
}
madi.onclick = function (){
    var interval = setInterval(moveLeft, 100);
    madi.style.marginRight = '100px';
};