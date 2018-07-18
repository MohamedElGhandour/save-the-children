var circle = document.getElementsByClassName('circle')[0],
    drowCircle = document.getElementsByClassName('drow-circle')[0],
    buttonLeft = document.getElementsByClassName('butleft')[0],
    buttonRight = document.getElementsByClassName('butright')[0],
    value = 0,
    arrayImages = ['oneImg', 'twoImg', 'threeImg', 'fourImg', 'fiveImg', 'sixImg', 'sevenImg', 'eightImg'];
/* Designed by:https://goo.gl/B56o1U 
num:01061578345 +20 */
buttonRight.onmouseover = function () {
        drowCircle.style.transform = 'scale(1.1)';
    drowCircle.style.transition = 'all .5s';
    buttonLeft.style.bottom = "380px";
    buttonLeft.style.right = "265px";
    buttonRight.style.bottom = "551px";
    buttonRight.style.left = "265px";
    refreshIntervalId = setInterval(function () {
        value++;
        circle.style.transform = `rotate(${value}deg)`;
   }, 10);
}
buttonRight.onmouseout = function () {
    clearInterval(refreshIntervalId);
}
/* Designed by:https://goo.gl/B56o1U 
num:01061578345 +20 */
buttonLeft.onmouseover = function () {
        drowCircle.style.transform = 'scale(1.1)';
    drowCircle.style.transition = 'all .5s';
    buttonLeft.style.bottom = "380px";
    buttonLeft.style.right = "265px";
    buttonRight.style.bottom = "551px";
    buttonRight.style.left = "265px";
    refreshIntervalIdtwo = setInterval(function () {
        value--;
        circle.style.transform = `rotate(${value}deg)`;
   }, 10);
}
buttonLeft.onmouseout = function () {
    clearInterval(refreshIntervalIdtwo);
}
/* Designed by:https://goo.gl/B56o1U 
num:01061578345 +20 */
circle.onmouseover = function drowCircles() {
    'use strict';
    drowCircle.style.transform = 'scale(1.1)';
    drowCircle.style.transition = 'all .5s';
    buttonLeft.style.bottom = "380px";
    buttonLeft.style.right = "265px";
    buttonRight.style.bottom = "551px";
    buttonRight.style.left = "265px";
}
drowCircle.onmouseout = function drowCircles() {
    'use strict';
    drowCircle.style.transform = 'scale(1)';
        buttonLeft.style.bottom = "274px";
    buttonLeft.style.right = "197px";
    buttonRight.style.bottom = "429px";
    buttonRight.style.left = "197px";
}
for (var arimg = 0; arimg < arrayImages.length;) {
    document.getElementsByClassName(arrayImages[arimg])[0].onmouseover = function () {
        this.style.filter = "grayscale(100%)";
    }
        document.getElementsByClassName(arrayImages[arimg])[0].onmouseout = function () {
        this.style.filter = "grayscale(0%)";
    }
    console.log(arimg)
    arimg++;
}/* Designed by:https://goo.gl/B56o1U 
num:01061578345 +20 */