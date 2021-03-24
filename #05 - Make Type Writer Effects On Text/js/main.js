/*jslint browser:true */
/*global console, document*/

var myText = document.getElementById('type').getAttribute('data-text'),

    myButton = document.getElementById('button'),

    i = 0;

myButton.onclick = function () {

    'use strict';

    var typeWriter = setInterval(function () {

        document.getElementById('type').textContent += myText[i];

        i = i + 1;

        if (i >= myText.length) {

            clearInterval(typeWriter);
        }

    }, 200);
};



































////////////////////////////////////////////////////////Height
