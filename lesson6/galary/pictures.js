var pictures = [];
pictures.push("images/1.jpg");
pictures.push("images/2.jpg");
pictures.push("images/3.jpg");
pictures.push("images/4.jpg");
pictures.push("images/5.jpg");
pictures.push("images/6.jpg");

var currentPicture = 0;
var imgHTML = document.getElementById("bigPicture");
imgHTML.src = pictures[currentPicture];
document.getElementById("prev").addEventListener("click", function() {
    currentPicture--;
    if (currentPicture < 0) {
        currentPicture = pictures.length - 1;
    }
    imgHTML.src = pictures[currentPicture];
});
document.getElementById("next").addEventListener("click", function() {
    currentPicture++;
    if (currentPicture == pictures.length) {
        currentPicture = 0;
    }
    imgHTML.src = pictures[currentPicture];
});