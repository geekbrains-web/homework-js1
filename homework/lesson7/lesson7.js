// Глобальные переменные:                            
var FIELD_SIZE_X = 20;//строки
var FIELD_SIZE_Y = 20;//столбцы
var SNAKE_SPEED = 200; // Интервал между перемещениями змейки
var snake = []; // Сама змейка
var barriers = []; //список препятствий
var direction = 'y+'; // Направление движения змейки
var gameIsRunning = false; // Запущена ли игра
var snake_timer; // Таймер змейки
var food_timer; // Таймер для еды
var barrier_timer = 6000; // Таймер для препятствия
var barrier_live_timer = 10000; // Таймер для препятствия
var score = 0; // Результат

function init() {
    prepareGameField(); // Генерация поля

    var wrap = document.getElementsByClassName('wrap')[0];
    // Подгоняем размер контейнера под игровое поле
    
	/*
	if (16 * (FIELD_SIZE_X + 1) < 380) {
        wrap.style.width = '380px';
    }
    else {
        wrap.style.width = (16 * (FIELD_SIZE_X + 1)).toString() + 'px';
    }
    */
    wrap.style.width = '400px';
    // События кнопок Старт и Новая игра
    document.getElementById('snake-start').addEventListener('click', startGame);
    document.getElementById('snake-renew').addEventListener('click', refreshGame);

// Отслеживание клавиш клавиатуры
    addEventListener('keydown', changeDirection);
}

/**
 * Функция генерации игрового поля
 */
function prepareGameField() {
    // Создаём таблицу
    var game_table = document.createElement('table');
    game_table.setAttribute('class', 'game-table');
    document.getElementById("score").innerText = "score: " + score;

    // Генерация ячеек игровой таблицы
    for (var i = 0; i < FIELD_SIZE_X; i++) {
        // Создание строки
        var row = document.createElement('tr');
        row.className = 'game-table-row row-' + i;

        for (var j = 0; j < FIELD_SIZE_Y; j++) {
            // Создание ячейки
            var cell = document.createElement('td');
            cell.className = 'game-table-cell cell-' + i + '-' + j;

            row.appendChild(cell); // Добавление ячейки
        }
        game_table.appendChild(row); // Добавление строки
    }

    document.getElementById('snake-field').appendChild(game_table); // Добавление таблицы
}

/**
 * Старт игры
 */
function startGame() {
    gameIsRunning = true;
    respawn();//создали змейку

    snake_timer = setInterval(move, SNAKE_SPEED);//каждые 200мс запускаем функцию move
    setTimeout(createFood, 3000);
    barrier_create_interval = setInterval(createBarrier, barrier_timer);
}

/**
 * Функция расположения змейки на игровом поле
 */
function respawn() {
    // Змейка - массив td
    // Стартовая длина змейки = 2

    // Respawn змейки из центра
    var start_coord_x = Math.floor(FIELD_SIZE_X / 2);
    var start_coord_y = Math.floor(FIELD_SIZE_Y / 2);

    // Голова змейки
    var snake_head = document.getElementsByClassName('cell-' + start_coord_y + '-' + start_coord_x)[0];
    snake_head.setAttribute('class', snake_head.getAttribute('class') + ' snake-unit');
    // Тело змейки
    var snake_tail = document.getElementsByClassName('cell-' + (start_coord_y - 1) + '-' + start_coord_x)[0];
    snake_tail.setAttribute('class', snake_tail.getAttribute('class') + ' snake-unit');

    snake.push(snake_head);
    snake.push(snake_tail);
}

/**
 * Движение змейки
 */
function move() {
    //console.log('move',direction);
    // Сборка классов
    var snake_head_classes = snake[snake.length - 1].getAttribute('class').split(' ');

    // Сдвиг головы
    var new_unit;
    var snake_coords = snake_head_classes[1].split('-');//преобразовали строку в массив
    var coord_y = parseInt(snake_coords[1]);
    var coord_x = parseInt(snake_coords[2]);

    // Определяем новую точку
    // if (direction == 'x-') {
    //     new_unit = document.getElementsByClassName('cell-' + (coord_y) + '-' + (coord_x - 1))[0];
    // }
    // else if (direction == 'x+') {
    //     new_unit = document.getElementsByClassName('cell-' + (coord_y) + '-' + (coord_x + 1))[0];
    // }
    // else if (direction == 'y+') {
    //     new_unit = document.getElementsByClassName('cell-' + (coord_y - 1) + '-' + (coord_x))[0];
    // }
    // else if (direction == 'y-') {
    //     new_unit = document.getElementsByClassName('cell-' + (coord_y + 1) + '-' + (coord_x))[0];
    // }
    var newX=coord_x, newY=coord_y;
    if (direction == 'x-') {
        newX = coord_x-1;
        if (newX == -1) {
            newX = FIELD_SIZE_X-1;
        }
    }
    else if (direction == 'x+') {
        newX = coord_x + 1;
        if (newX == FIELD_SIZE_X) {
            newX = 0;
        }
    }
    else if (direction == 'y+') {
        newY = coord_y - 1;
        if (newY == -1) {
            newY = FIELD_SIZE_Y-1;
        }
    }
    else if (direction == 'y-') {
        newY = coord_y + 1;
        if (newY == FIELD_SIZE_Y) {
            newY = 0;
        }
    }
    new_unit = document.getElementsByClassName("cell-" + newY + "-" + (newX))[0];


    // Проверки
    // 1) new_unit не часть змейки
    // 2) Змейка не ушла за границу поля
    //console.log(new_unit);
    if (!isSnakeUnit(new_unit) && !isBarrierUnit(new_unit) && new_unit !== undefined) {
        // Добавление новой части змейки
        new_unit.setAttribute('class', new_unit.getAttribute('class') + ' snake-unit');
        snake.push(new_unit);

        // Проверяем, надо ли убрать хвост
        if (!haveFood(new_unit)) {
            // Находим хвост
            var removed = snake.splice(0, 1)[0];
            var classes = removed.getAttribute('class').split(' ');

            // удаляем хвост
            removed.setAttribute('class', classes[0] + ' ' + classes[1]);
        }
    }
    else {
        finishTheGame();
    }
}

/**
 * Проверка на змейку
 * @param unit
 * @returns {boolean}
 */
function isSnakeUnit(unit) {
    var check = false;

    if (snake.includes(unit)) {
        check = true;
    }
    return check;
}
/**
 * Проверка на препятствие
 * @param unit
 * @returns {boolean}
 */
function isBarrierUnit(unit) {
  var check = false;

  if (barriers.includes(unit)) {
    check = true;
  }
  return check;
}
/**
 * проверка на еду
 * @param unit
 * @returns {boolean}
 */
function haveFood(unit) {
    var check = false;

    var unit_classes = unit.getAttribute('class').split(' ');

    // Если еда
    if (unit_classes.includes('food-unit')) {
        check = true;
        createFood();

        score++;
        document.getElementById("score").innerText = "score: " + score;
    }
    return check;
}

/**
 * Создание еды
 */
function createFood() {
    var foodCreated = false;

    while (!foodCreated) { //пока еду не создали
        // рандом
        var food_x = Math.floor(Math.random() * FIELD_SIZE_X);
        var food_y = Math.floor(Math.random() * FIELD_SIZE_Y);

        var food_cell = document.getElementsByClassName('cell-' + food_y + '-' + food_x)[0];
        var classes = food_cell.getAttribute('class');
        var food_cell_classes = classes.split(' ');

        // проверка на змейку
        if (!food_cell_classes.includes("snake-unit") && !food_cell_classes.includes("barrier-unit")) {
          food_cell.setAttribute("class", classes + " food-unit");
          foodCreated = true;
        }
    }
}
/**
 * Создание препятствия
 */
function createBarrier() {
  var barrierCreated = false;

    while (!barrierCreated) {
        //пока препятствие не создали
        // рандом
        var barrier_x = Math.floor(Math.random() * FIELD_SIZE_X);
        var barrier_y = Math.floor(Math.random() * FIELD_SIZE_Y);

        var barrier_cell = document.getElementsByClassName(
        "cell-" + barrier_y + "-" + barrier_x
        )[0];
        var classes = barrier_cell.getAttribute("class");
        var barrier_cell_classes = classes.split(" ");

        // проверка на занятую клетку
        if (!barrier_cell_classes.includes("snake-unit") && !barrier_cell_classes.includes("food-unit") && !barrier_cell_classes.includes("barrier-unit")) {
            barrier_cell.setAttribute("class", classes + " barrier-unit");
            barrierCreated = true;
            barriers.push(barrier_cell);
        }
    }
    setTimeout(destroyBarrier, barrier_live_timer);
}
/**
 * Уничтожение препятствия
 */
function destroyBarrier() {
    if (barriers.length > 0) {
        needToDestroy = barriers[0];
        barriers.shift();
        var barriersClasses = needToDestroy.getAttribute("class").split(" ");
        var classes;
        for (var i = 0; i < barriersClasses.length; i++) {
            if (barriersClasses[i] != "barrier-unit") {
              classes += barriersClasses[i] + " ";
            }
        }
        needToDestroy.setAttribute("class", classes);
    }
}

/**
 * Изменение направления движения змейки
 * @param e - событие
 */
function changeDirection(e) {
    console.log(e);
	switch (e.keyCode) {
        case 37: // Клавиша влево
            if (direction != 'x+') {
                direction = 'x-'
            }
            break;
        case 38: // Клавиша вверх
            if (direction != 'y-') {
                direction = 'y+'
            }
            break;
        case 39: // Клавиша вправо
            if (direction != 'x-') {
                direction = 'x+'
            }
            break;
        case 40: // Клавиша вниз
            if (direction != 'y+') {
                direction = 'y-'
            }
            break;
    }
}

/**
 * Функция завершения игры
 */
function finishTheGame() {
    gameIsRunning = false;
    clearInterval(snake_timer);
    clearInterval(barrier_create_interval);
    alert('Игра закончена! Ваш результат: ' + score.toString());
}

/**
 * Новая игра
 */
function refreshGame() {
    location.reload();
}

// Инициализация
window.onload = init;