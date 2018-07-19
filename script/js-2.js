var buttonOpenNav = document.getElementById('buttonOpenNav'),
    listNav = document.getElementsByClassName('nav-list-a');
function nav() {
            for (var i = 0; i < listNav.length; i++) {
        var element = listNav[i];
        element.children[0].style.visibility = "hidden";
        element.children[0].style.display = "none";
        element.children[0].style.paddingRight = "20px";
        element.children[0].style.whiteSpace = "nowrap";
        
    }
}
/* Designed by:https://goo.gl/B56o1U 
num:01061578345 +20 */
nav();
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    buttonOpenNav.setAttribute('onclick', "closeNav()");
    for (var i = 0; i < listNav.length; i++) {
        var element = listNav[i];
        
        element.children[0].style.visibility = "visible";
        element.children[0].style.display = "inline";
    }
}

var uppp = document.createElement('div'), 
    a = document.createElement('a'),   
    child = String.fromCharCode(77, 111, 104, 97, 109, 101, 100, 32, 89, 97, 104, 121, 97),
    myText = document.createTextNode(child),
    parent = String.fromCharCode(68, 101, 115, 105, 103, 110, 32, 66, 121, 32, 58, 32);
    myTextp = document.createTextNode(parent),
a.appendChild(myText);
uppp.appendChild(myTextp);
uppp.appendChild(a);
document.body.appendChild(uppp);
uppp.style.margin = String.fromCharCode(49, 48, 112, 120);
uppp.style.padding = String.fromCharCode(49, 48, 112, 120);
uppp.style.color = String.fromCharCode(35, 102, 102, 102);
a.style.color = String.fromCharCode(35, 102, 100, 51, 99, 51, 100);
a.setAttribute(String.fromCharCode(104, 114, 101, 102), 'https://mohamedelghandour.gitlab.io/cv/#');
a.setAttribute(String.fromCharCode(116, 97, 114, 103, 101, 116), String.fromCharCode(95, 108, 98, 110, 107));
function closeNav() {
    document.getElementById("mySidenav").style.width = "63px";
    buttonOpenNav.setAttribute('onclick', "openNav()");
        for (var i = 0; i < listNav.length; i++) {
        var element = listNav[i];
                element.children[0].style.visibility = "hidden";
        element.children[0].style.display = "none";
}}
/* Designed by:https://goo.gl/B56o1U 
num:01061578345 +20 */
var inputs = document.getElementsByTagName('input'),
    inputsNum = inputs.length,
    index;
for (index = 0; index < inputsNum;) {
    if (inputs[index].placeholder !== "") {
        inputs[index].onfocus = function () {
            'use strict';
            this.setAttribute('data-place', this.getAttribute('placeholder')), this.setAttribute('placeholder', '');
        };
        inputs[index].onblur = function () {
            'use strict';
            this.setAttribute('placeholder', this.getAttribute('data-place')), this.setAttribute('data-place', '');
        };
    }
    index++
}
