/*jslint browser:true */
/*global console, document*/


var myTextarea = document.getElementById('my-text'),

    mySpan = document.getElementById('my-span');

myTextarea.onkeyup = function () {

    'use strict';

    mySpan.textContent = 50 - this.value.length;

// reduced if condition
    mySpan.textContent < 0 ? mySpan.style.color = 'red' : mySpan.style.color = 'black';
    
    /*
    if (mySpan.textContent < 0) {

        mySpan.style.color = 'red';

    } else {

        mySpan.style.color = 'black';
    }*/
};


































////////////////////////////////////////////////////////Height
