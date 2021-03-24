/*jslint browser:true */
/*global console, document*/

function generateSerial() {

    'use strict';

    var chars = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghigklmnopqrstuvwxyz',

        randomSerial = '',

        randomNumber, // Used In Loop

        serialLength = 10, // Used In Loop Head

        i; // Used In Loop Head

    for (i = 0; i < serialLength; i = i + 1) {

        randomNumber = Math.floor(Math.random() * chars.length);

        //randomSerial += chars.substring(randomNumber, randomNumber + 1);

        // Anothe Method (Best)
        randomSerial += chars[randomNumber];
    }

    document.getElementById('serial').innerHTML = randomSerial;
}




























////////////////////////////////////////////////////////Height
