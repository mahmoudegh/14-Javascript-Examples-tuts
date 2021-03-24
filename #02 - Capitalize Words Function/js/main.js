/*jslint browser:true */
/*global console*/

function capitalizeLetters(string) {

    'use strict';

    var oldArray = string.split(' '),

        newArray = [],

        i;

    for (i = 0; i < oldArray.length; i = i + 1) {

        newArray.push(oldArray[i].charAt(0).toUpperCase() + oldArray[i].slice(1));
    }

    return newArray.join(' ');
}

console.log(capitalizeLetters('mahmoud galal hussein ali hussein al tahtawy'));







































////////////////////////////////////////////////////////Height
