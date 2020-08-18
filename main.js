const settings = new Settings();
const status = new Status();
const board = new Board();
const game = new Game();
const menu = new Menu();
const snake = new Snake();
const food = new Food();

try {
    settings.init({speed: 7, winLength: 10});
    board.init(settings, snake);
    food.init(settings, snake, board);
    game.init(settings, status, board, snake, menu, food);

    board.renderBoard();
    board.renderSnake();
    food.setNewFood();
    game.run();
} catch (error) {
    console.log(error);
}