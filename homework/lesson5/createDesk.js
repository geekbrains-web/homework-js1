var desk = document.getElementById("chessDesk");
create(8, true);
var newItem = document.createElement("div");
newItem.innerText = "==========================================================================";
desk.appendChild(newItem);
create(8);
var newItem = document.createElement("div");
newItem.innerText = "==========================================================================";
desk.appendChild(newItem);
create(8,false,false);

function create(deskSize, onlyDesk=false, onlyLetters=true) {
    //буквы сверху
    var newRow = document.createElement("div");
    newRow.style.display = "flex";
    var newItem = document.createElement("div");
    newItem.style.width = "15px";
    newItem.style.paddingLeft = "10px";
    newRow.appendChild(newItem);
    for (var j = 0; j < deskSize; j++) {
        var newItem = document.createElement("div");
        newItem.innerText = letters[j];
        newItem.style.fontSize = "bold";
        newItem.style.width = "52px";
        newItem.style.padding = "10px 0";
        newItem.style.textAlign = "center";
        newItem.style.transform = "rotate(180deg)";
        newItem.style.color = "black";
        newRow.appendChild(newItem);
    }
    var newItem = document.createElement("div");
    newRow.appendChild(newItem);
    desk.appendChild(newRow);

    //клетки
    for (var i = deskSize; i > 0;i--) {
        var newRow = document.createElement("div");
        newRow.style.display = "flex";
        var newItem = document.createElement("div");
        newItem.innerText = i;
        newItem.style.lineHeight = "50px";
        newItem.style.width = "15px";
        newItem.style.paddingLeft = "10px";
        newRow.appendChild(newItem);
        for (var j = 0; j < deskSize;j++) {
            var newItem = document.createElement("div");
            if (!onlyDesk) {
                if (onlyLetters) {
                    newItem.innerText = figures[(i-1)*deskSize+j].figure;
                } else {
                    newItem.innerHTML = figuresIcons[(i - 1) * deskSize + j].figure;
                }
                newItem.style.fontSize = "bold";
                if (figures[(i - 1) * deskSize + (j)].side == "w") {
                    newItem.style.color = "white";
                } else {
                    newItem.style.color = "black";
                }
            }
            newItem.style.width = "50px";
            newItem.style.height = "50px";
            newItem.style.border = "1px solid black";
            newItem.style.textAlign = "center";
            newItem.style.lineHeight = "50px";
            if (((i) + (j))%2 == 0) {
                newItem.style.backgroundColor = "gray";
            } else {
                newItem.style.backgroundColor = "brown";
            }
            newRow.appendChild(newItem);
       }
        var newItem = document.createElement("div");
        newItem.innerText = i;
        newItem.style.lineHeight = "50px";
        newItem.style.transform = "rotate(180deg)";
        newItem.style.padding = "0 10px";
        newRow.appendChild(newItem);
        desk.appendChild(newRow);
    }
    //буквы снизу
    var newRow = document.createElement("div");
    newRow.style.display = "flex";
    var newItem = document.createElement("div");
    newItem.style.width = "15px";
    newItem.style.paddingLeft = "10px";
    newRow.appendChild(newItem);
    for (var j = 0; j < deskSize; j++) {
      var newItem = document.createElement("div");
      newItem.innerText = letters[j];
      newItem.style.fontSize = "bold";
      newItem.style.width = "52px";
      newItem.style.padding = "10px 0";
      newItem.style.textAlign = "center";
      newItem.style.color = "black";
      newRow.appendChild(newItem);
    }
    var newItem = document.createElement("div");
    newRow.appendChild(newItem);
    desk.appendChild(newRow);
}