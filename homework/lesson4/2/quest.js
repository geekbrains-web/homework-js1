var event, ok;

do {
    ok = false;
    event = +prompt("Введите номер хода от 1 до " + works.length +" (-1 - Выход из игры).");
    if (event == -1) {
        break;
    }
    else {
        ok = isAnswer(works.length, event);
    }
} while (!ok);
doGame(event);
//------------------------------------------
function doGame(n=1) {
    var stepSize = 0;
    var endlessGame = n != 1;
    do {
      for (var i = n - 1; i < works.length; i += stepSize) {
        var promptText = works[i].situation;
        for (j = 1; j <= works[i].numOptions; j++) {
          promptText += works[i]["option" + j];
        }
        promptText += "-1 - Выход из игры";
        do {
          ok = false;
          event = +prompt(promptText);
          if (event == -1) {
            break;
          } else {
            ok = isAnswer(works[i].numOptions, event);
          }
        } while (!ok);
        if (event == -1) {
          break;
        }
        if (i < works.length-1 && i+event >= works.length) {
            stepSize = works.length - i - 1;
        } 
        else {
            stepSize = event;
        }
      }
      n = 1;
    } while (endlessGame && event != -1);
    alert("Спасибо за игру");
}
//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;

}