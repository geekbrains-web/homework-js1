var rightAnswer = true;
for (var num=0;num<questions.length;num++) {
    question = questions[num];
    do {
        var answer = +prompt("Вопрос за " + rewards[num] + "\n" + question.question + "\n1." + question.answer1 + " 2." + question.answer2 + "\n"
            + "3." + question.answer3 + " 4." + question.answer4);
        answer = (isNaN(answer) || !isFinite(answer)) ? 0 : answer;
    } while (answer < 1 || answer > 4);
    if (answer != question.rightAnswer) {
        break;
    }
}
if (num == questions.length) {
    alert("Поздравляем, вы выиграли " + rewards[rewards.length - 1]);
}
else {
    alert("Жаль, что вы ответили правильно только на " + num + " вопросов из " + questions.length);
}
