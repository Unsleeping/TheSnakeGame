class Game {
    constructor() {
        this.timer = null;
        this.messageElement = document.getElementById('message');
    }

    init(settings, status, board, snake, menu, food) {
        this.settings = settings;
        this.status = status;
        this.board = board;
        this.snake = snake;
        this.menu = menu;
        this.food = food;
    }

    start() {
        if (this.status.isPaused()) {
            this.status.setPlaying();
            this.timer = setInterval(this.doTick.bind(this), 1000 / this.settings.speed);
        }
    }

    pause() {
        if (this.status.isPlaying()) {
            this.status.setPaused();
            clearInterval(this.timer);
        }
    }

    doTick() {
        this.snake.performStep();
        if (this.isGameLose()) return;
        if (this.isGameWin()) return;
        
        if (this.board.isHeadOnFoodSnake()) {
            this.snake.increaseBody();
            this.food.setNewFood();
        }

        this.board.clear();
        this.food.setFood();
        this.board.renderSnake();
    }

    isGameWin() {
        if (this.snake.body.length === this.settings.winLength) {
            clearInterval(this.timer);
            this.setMessage('Win');
            return true;
        }
        return false;
    }

    isGameLose() {
        if(this.board.isNextStepWall(this.snake.body[0])) {
            clearInterval(this.timer);
            this.setMessage('Lose');
            return true;
        }
        return false;
    }

    setMessage(message) {
        this.messageElement.textContent = message;
    }

    pressKeyHandler(event) {
        switch(event.key) {
            case 'ArrowUp':
                this.snake.changeDirection('up');
                break;
            case 'ArrowDown':
                this.snake.changeDirection('down');
                break;
            case 'ArrowRight':
                this.snake.changeDirection('right');
                break;
            case 'ArrowLeft':
                this.snake.changeDirection('left');
                break;
        }
    }

    run() {
        this.menu.addButtonsClickListeners(this.start.bind(this), this.pause.bind(this));
        document.addEventListener('keydown', this.pressKeyHandler.bind(this));
    }
}