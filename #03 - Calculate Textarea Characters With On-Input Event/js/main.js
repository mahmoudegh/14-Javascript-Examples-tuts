/*jslint browser:true */
/*global console, document*/

var $count = document.getElementById('count'),
    $textarea = document.getElementById('text'),
    $maxLength = $textarea.getAttribute('maxlength');

$textarea.oninput = function () {

    'use strict';

    $count.innerHTML = $maxLength - this.value.length;

    if ($count.innerHTML == 0) {

        $count.classList.add('red');

    } else {

        $count.classList.remove('red');
    }
};







































////////////////////////////////////////////////////////Height
