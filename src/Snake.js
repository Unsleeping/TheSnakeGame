class Snake {
    constructor() {
        this.possibleDirection = ['up', 'down', 'left', 'right'];

        this.body = [{
            x: 1,
            y: 1,
        }];

        this.direction = 'down';
    }

    changeDirection(newDirection) {
        if (!this.possibleDirection.includes(newDirection)) {
            throw new Error(`impossible direction: ${newDirection}`);
        }
        if (this.isOppositeDirection(newDirection)) return;

        this.direction = newDirection;
    }

    isOppositeDirection(newDirection){
        if (this.direction === 'down' && newDirection === 'up') return true;
        if (this.direction === 'up' && newDirection === 'down') return true;
        if (this.direction === 'left' && newDirection === 'right') return true;
        if (this.direction === 'right' && newDirection === 'left') return true;
        return false;
    }

    performStep() {
        let currentHeadCoords = this.body[0];
        let newHeadCoords = {
            x: currentHeadCoords.x,
            y: currentHeadCoords.y
        };

        switch(this.direction){
            case 'down':
                newHeadCoords.y++;
                break;
            case 'up':
                newHeadCoords.y--;
                break;
            case 'left':
                newHeadCoords.x--;
                break;
            case 'right':
                newHeadCoords.x++;
                break;
        }

        this.body.unshift(newHeadCoords);
        this.body.pop();
    }

    increaseBody() {
        let bodyLastCell = this.body[this.body.length - 1];
        let newBodyLastCell = {
            x: bodyLastCell.x,
            y: bodyLastCell.y
        };

        this.body.push(newBodyLastCell);
    }
}