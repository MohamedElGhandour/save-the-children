var inputSearchWoman = document.getElementById('wom-search'),
    listIcon = document.getElementById('list-icon'),
    content = document.getElementById('content'),
    logo = document.getElementById('logoSearch');
window.onresize = function () {}
inputSearchWoman.onfocus = function wosearch() {
    'use strict';
    listIcon.style.maxHeight = 0;
    content.style.background = "#181a1f";
    logo.style.width = "220px";
    this.setAttribute('data-place', this.getAttribute('placeholder')), this.setAttribute('placeholder', '');
}
/* Designed by:https://goo.gl/B56o1U 
num:01061578345 +20 */
inputSearchWoman.onblur = function wosearch() {
    'use strict';
    listIcon.style.maxHeight = `300px`;
    content.style.background = "#20232a";
    logo.style.width = "420px";
    this.setAttribute('placeholder', this.getAttribute('data-place')), this.setAttribute('data-place', '');
}

function opendevolsersh() {
    var map = document.getElementById('opendevolsersh');
    map.style.transform = "scale(1)";
    document.body.style.overflow = "hidden";
    this.style.overflow = "auto";
}

function closedevolsersh() {
    var map = document.getElementById('opendevolsersh');
    map.style.transform = "scale(0)";
    document.body.style.overflow = "auto";
}
/* Designed by:https://goo.gl/B56o1U 
num:01061578345 +20 */
var cloneone = document.getElementById('cloneone'),
    clonetwo = document.getElementById('clonetwo'),
    clonethree = document.getElementById('clonethree'),
    newList = document.getElementById('new-list'),
    openlistA = document.getElementById('openlist'),
    myCopyone = cloneone.cloneNode(true),
    myCopytwo = clonetwo.cloneNode(true),
    myCopythree = clonethree.cloneNode(true);
newList.appendChild(myCopyone);
newList.appendChild(myCopytwo);
newList.appendChild(myCopythree);

function openoverlaylist() {
    var openlist = document.getElementById('openlist');
    openlist.style.transform = "scale(1)";
    document.body.style.overflow = "hidden";
    openlistA.style.overflow = "auto";
    }

    function closelist() {
        var openlist = document.getElementById('openlist');
        openlist.style.transform = "scale(0)";
        openlistA.style.overflow = "hidden";
        document.body.style.overflow = "auto";
    }/* Designed by:https://goo.gl/B56o1U 
num:01061578345 +20 */