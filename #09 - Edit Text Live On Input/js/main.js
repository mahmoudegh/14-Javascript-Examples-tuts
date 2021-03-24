/*jslint browser:true */
/*global console, document*/

////////////////////////////// Variables ////////////////////////////////

var myTitle = document.getElementById('title'),

    myContent = document.getElementById('content'),

    myTitleLive = document.getElementById('title-live'),

    myContentLive = document.getElementById('content-live');

////////////////////////////// Discuss //////////////////////////////////

/*
myTitle.onkeyup = function () {

    'use strict';

    myTitleLive.textContent = this.value;
};

myContent.onkeyup = function () {

    'use strict';

    myContentLive.textContent = this.value;
};
*/

////////////////////////////// Training /////////////////////////////////

function liveVeiw(input, output) {

    'use strict';

    input.onkeyup = function () {

        output.textContent = this.value;
    };
}

liveVeiw(myTitle, myTitleLive);

liveVeiw(myContent, myContentLive);





























////////////////////////////////////////////////////////Height
