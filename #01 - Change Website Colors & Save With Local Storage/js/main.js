/*jslint browser:true */
/*global console*/

// Add Local Storage To Body Or Add Red Color As Default If There Is No Local Storage.
document.body.classList.add(localStorage.getItem('pageColor') || 'red');

var switcher = document.querySelectorAll('ul li'),

    classesList = [],// Used Only With Third Way.

    heading = document.getElementsByTagName('h3')[0],// Used Only With First & Seconde Way.

    test = document.getElementById('test'),// Used Only With First & Seconde Way.

    i;// For Loop.

////////////////////////////////////////////////////////////////////////////////
// Third Way By Using ClassList With Using Loop ////////////////////////////////

function changeColor() {

    'use strict';

    classesList.push(switcher[i].getAttribute('data-color'));

    switcher[i].onclick = function () {

        document.body.classList.remove(...classesList);

        document.body.classList.add(this.getAttribute('data-color'));

        // Add Data To Local Storage.
        localStorage.setItem('pageColor', this.getAttribute('data-color'));
    };
}

for (i = 0; i < switcher.length;  i = i + 1) {

    changeColor();
}


////////////////////////////////////////////////////////////////////////////////
// Fourth Way By Using ClassList With Using Loop  & addEventListener ///////////
/*
for (i = 0; i < switcher.length;  i = i + 1) {

    classesList.push(switcher[i].getAttribute('data-color'));

    switcher[i].addEventListener('click', function () {

        'use strict';

        document.body.classList.remove(...classesList);

        document.body.classList.add(this.getAttribute('data-color'));

        // Add Data To Local Storage.
        localStorage.setItem('pageColor', this.getAttribute('data-color'));
    }, false);
}
*/


////////////////////////////////////////////////////////////////////////////////
// First Way By Changing Style Without Using Loop //////////////////////////////

/*
switcher[0].onclick = function () {

    'use strict';

    heading.style.color = 'red';

    test.style.backgroundColor = 'red';
};

switcher[1].onclick = function () {

    'use strict';

    heading.style.color = 'green';

    test.style.backgroundColor = 'green';
};

switcher[2].onclick = function () {

    'use strict';

    heading.style.color = 'purple';

    test.style.backgroundColor = 'purple';
};

switcher[3].onclick = function () {

    'use strict';

    heading.style.color = 'black';

    test.style.backgroundColor = 'black';
};

*/

////////////////////////////////////////////////////////////////////////////////
// Seconde Way By Changing Style With Using Loop ///////////////////////////////

/*
function changeColor() {

    'use strict';

    switcher[i].onclick = function () {

        heading.style.color = this.getAttribute('data-color');

        test.style.backgroundColor = this.getAttribute('data-color');

        localStorage.setItem('pageColor', this.getAttribute('data-color'));
    };
}

for (i = 0; i < switcher.length;  i = i + 1) {

    changeColor();
}
*/











































////////////////////////////////////////////////////////Height
