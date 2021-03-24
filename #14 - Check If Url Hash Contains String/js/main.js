/*jslint browser:true */
/*global console, document*/

/* Method 1 */

/*
if (window.location.hash) {

    if (window.location.hash.indexOf('mahmoud') === 1) {

        console.log('Good Mahmoud Hash Is Found');

    } else {

        console.log('Bad Mahmoud Hash Is Not Found');
    }

} else {

    console.log('Bad There Is No Hash.');
}
*/

/* Method 2 */


if (window.location.hash) {

    var hash = window.location.hash.substring(1);

    if (hash === 'mahmoud') {

        console.log('Good Mahmoud Hash Is Found');

    } else {

        console.log('Bad Mahmoud Hash Is Not Found');
    }

} else {

    console.log('Bad There Is No Hash.');
}




























////////////////////////////////////////////////////////Height
