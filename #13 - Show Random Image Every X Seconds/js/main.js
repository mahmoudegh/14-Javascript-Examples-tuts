/*jslint browser:true */
/*global console, document*/

var myElement = document.getElementById('myImage'),

    myImgs = ['img/03.jpg', 'img/04.jpg', 'img/05.jpg', 'img/06.jpg'];


function changeImage(myElement, myImgs) {

    'use strict';

    setInterval(function () {

        var randomKey = Math.floor(Math.random() * myImgs.length);

        myElement.src = myImgs[randomKey];

    }, 1000);
}

changeImage(myElement, myImgs);
































////////////////////////////////////////////////////////Height
