var pictures = document.getElementsByClassName("smallPicture");

for (var i = 0; i < pictures.length; i++) {
    pictures[i].addEventListener("click",function(e){
        var picturePath = "images/" + e.target.id.split("_")[1] + ".jpg";
        var bigPicture = document.getElementById("bigPicture");
        bigPicture.src = picturePath;
        bigPicture.onerror = function (e) {
            alert("no big image for this picture");
        }
    });

}