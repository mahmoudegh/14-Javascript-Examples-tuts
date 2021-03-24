/*jslint browser:true */
/*global console, document*/

var myButton = document.getElementById('my-button');

window.onscroll = function () {

    'use strict';

    if (window.pageYOffset >= 400) {

        myButton.style.display = "block";

    } else {

        myButton.style.display = "none";
    }
};

myButton.onclick = function () {

    'use strict';

    window.scrollTo(0, 0);
};



































////////////////////////////////////////////////////////Height
