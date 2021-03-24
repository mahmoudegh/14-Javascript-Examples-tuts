/*jslint browser:true */
/*global console, document*/


var myInput = document.getElementById('my-input');

myInput.onfocus = function () {

    'use strict';

    // Store Placeholder Attr In Backup Atrr.
    this.setAttribute('data-place', this.getAttribute('placeholder'));

    // Empty Placeholder Attr.
    this.setAttribute('placeholder', '');
};

myInput.onblur = function () {

    'use strict';

    // Get Placeholder Attr From Backup Attr.
    this.setAttribute('placeholder', this.getAttribute('data-place'));
};



////////////////////////////////  Training  ////////////////////////////////////

/*
function hideShowPlaceholder() {

    'use strict';

    var myInput = document.getElementById('my-input');

    myInput.onfocus = function () {

        this.setAttribute('data-place', this.getAttribute('placeholder'));

        this.setAttribute('placeholder', '');
    };

    myInput.onblur = function () {

        this.setAttribute('placeholder', this.getAttribute('data-place'));

        //this.setAttribute('data-place', '');
    };

}

*/



































////////////////////////////////////////////////////////Height
