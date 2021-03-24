/*jslint browser:true */
/*global console, document*/

var seconds = 120,

    countDiv = document.getElementById('countdown'),

    secondPass, // Function Name

    countDown = setInterval(function () {

        'use strict';

        secondPass();

    }, 1000);

function secondPass() {

    'use strict';

    var minutes = Math.floor(seconds / 60),

        remSeconds = seconds % 60;

    if (remSeconds < 10) {

        remSeconds = '0' + remSeconds;
    }

    if (minutes < 10) {

        minutes = '0' + minutes;
    }

    countDiv.innerHTML = minutes + ':' + remSeconds;

    if (seconds >= 0) {

        seconds = seconds - 1; // Decrease One Second Every Second

    } else {

        clearInterval(countDown);

        countDiv.innerHTML = 'Done';
    }
}


























////////////////////////////////////////////////////////Height
