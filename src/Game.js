import React from 'react';
import './Game.css';

const CELL_SIZE = 20;
const WIDTH = 1000;
const HEIGHT = 600;


const maxDensityStillLife = [[5, 26], [5, 28], [5, 29], [5, 31], [5, 32], [5, 34], [5, 36], [5, 37], [5, 39], [5, 40], [5, 42], [5, 44], [5, 45], [6, 26], [6, 27], [6, 29], [6, 31], [6, 33], [6, 34], [6, 35], [6, 37], [6, 39], [6, 41], [6, 42], [6, 44], [7, 29], [7, 31], [7, 37], [7, 39], [7, 45], [8, 26], [8, 27], [8, 29], [8, 31], [8, 32], [8, 33], [8, 34], [8, 35], [8, 36], [8, 38], [8, 40], [8, 41], [8, 42], [8, 43], [8, 44], [8, 45], [9, 27], [9, 29], [9, 36], [9, 38], [9, 40], [10, 26], [10, 29], [10, 30], [10, 31], [10, 32], [10, 33], [10, 34], [10, 36], [10, 38], [10, 40], [10, 42], [10, 43], [10, 44], [10, 45], [11, 26], [11, 27], [11, 28], [11, 34], [11, 36], [11, 38], [11, 40], [11, 42], [11, 45], [12, 29], [12, 30], [12, 31], [12, 32], [12, 34], [12, 36], [12, 38], [12, 40], [12, 42], [12, 44], [13, 26], [13, 27], [13, 28], [13, 32], [13, 34], [13, 36], [13, 38], [13, 40], [13, 42], [13, 44], [13, 45], [14, 26], [14, 29], [14, 30], [14, 32], [14, 34], [14, 36], [14, 38], [14, 40], [14, 42], [14, 44], [15, 27], [15, 29], [15, 31], [15, 33], [15, 35], [15, 37], [15, 39], [15, 40], [15, 42], [15, 45], [16, 26], [16, 27], [16, 29], [16, 31], [16, 33], [16, 35], [16, 37], [16, 42], [16, 43], [16, 44], [16, 45], [17, 27], [17, 29], [17, 31], [17, 33], [17, 35], [17, 37], [17, 38], [17, 39], [17, 40], [17, 41], [18, 26], [18, 29], [18, 31], [18, 33], [18, 35], [18, 42], [18, 43], [18, 44], [18, 45], [19, 26], [19, 27], [19, 28], [19, 29], [19, 31], [19, 33], [19, 35], [19, 36], [19, 37], [19, 38], [19, 39], [19, 40], [19, 42], [19, 45], [20, 31], [20, 33], [20, 40], [20, 42], [20, 44], [21, 26], [21, 27], [21, 28], [21, 29], [21, 30], [21, 31], [21, 33], [21, 34], [21, 35], [21, 36], [21, 37], [21, 38], [21, 40], [21, 42], [21, 44], [21, 45], [22, 26], [22, 32], [22, 38], [22, 40], [22, 42], [22, 44], [23, 27], [23, 29], [23, 30], [23, 32], [23, 34], [23, 35], [23, 36], [23, 38], [23, 40], [23, 42], [23, 45], [24, 26], [24, 27], [24, 29], [24, 30], [24, 32], [24, 33], [24, 35], [24, 37], [24, 38], [24, 40], [24, 41], [24, 44], [24, 45], [5, 4], [5, 6], [5, 7], [5, 9], [5, 10], [5, 12], [5, 14], [5, 15], [5, 17], [5, 18], [5, 20], [5, 22], [5, 23], [6, 4], [6, 5], [6, 7], [6, 9], [6, 11], [6, 12], [6, 13], [6, 15], [6, 17], [6, 19], [6, 20], [6, 22], [7, 7], [7, 9], [7, 15], [7, 17], [7, 23], [8, 4], [8, 5], [8, 7], [8, 9], [8, 10], [8, 11], [8, 12], [8, 13], [8, 14], [8, 16], [8, 18], [8, 19], [8, 20], [8, 21], [8, 22], [8, 23], [9, 5], [9, 7], [9, 14], [9, 16], [9, 18], [10, 4], [10, 7], [10, 8], [10, 9], [10, 10], [10, 11], [10, 12], [10, 14], [10, 16], [10, 18], [10, 20], [10, 21], [10, 22], [10, 23], [11, 4], [11, 5], [11, 6], [11, 12], [11, 14], [11, 16], [11, 18], [11, 20], [11, 23], [12, 7], [12, 8], [12, 9], [12, 10], [12, 12], [12, 14], [12, 16], [12, 18], [12, 20], [12, 22], [13, 4], [13, 5], [13, 6], [13, 10], [13, 12], [13, 14], [13, 16], [13, 18], [13, 20], [13, 22], [13, 23], [14, 4], [14, 7], [14, 8], [14, 10], [14, 12], [14, 14], [14, 16], [14, 18], [14, 20], [14, 22], [15, 5], [15, 7], [15, 9], [15, 11], [15, 13], [15, 15], [15, 17], [15, 18], [15, 20], [15, 23], [16, 4], [16, 5], [16, 7], [16, 9], [16, 11], [16, 13], [16, 15], [16, 20], [16, 21], [16, 22], [16, 23], [17, 5], [17, 7], [17, 9], [17, 11], [17, 13], [17, 15], [17, 16], [17, 17], [17, 18], [17, 19], [18, 4], [18, 7], [18, 9], [18, 11], [18, 13], [18, 20], [18, 21], [18, 22], [18, 23], [19, 4], [19, 5], [19, 6], [19, 7], [19, 9], [19, 11], [19, 13], [19, 14], [19, 15], [19, 16], [19, 17], [19, 18], [19, 20], [19, 23], [20, 9], [20, 11], [20, 18], [20, 20], [20, 22], [21, 4], [21, 5], [21, 6], [21, 7], [21, 8], [21, 9], [21, 11], [21, 12], [21, 13], [21, 14], [21, 15], [21, 16], [21, 18], [21, 20], [21, 22], [21, 23], [22, 4], [22, 10], [22, 16], [22, 18], [22, 20], [22, 22], [23, 5], [23, 7], [23, 8], [23, 10], [23, 12], [23, 13], [23, 14], [23, 16], [23, 18], [23, 20], [23, 23], [24, 4], [24, 5], [24, 7], [24, 8], [24, 10], [24, 11], [24, 13], [24, 15], [24, 16], [24, 18], [24, 19], [24, 22], [24, 23], [0, 0], [0, 1], [1, 0], [1, 1], [28, 0], [28, 1], [29, 0], [29, 1], [29, 48], [29, 49], [28, 48], [28, 49], [0, 48], [0, 49], [1, 48], [1, 49]];
const firstGenPulsar = [[13, 24], [14, 23], [14, 24], [14, 25], [15, 23], [15, 25], [16, 23], [16, 24], [16, 25], [17, 24]];
const gliderGun = [[5, 1], [5, 2], [6, 1], [6, 2], [5, 11], [6, 11], [7, 11], [4, 12], [8, 12], [3, 13], [9, 13], [3, 14], [9, 14], [6, 15], [4, 16], [8, 16], [7, 17], [6, 17], [5, 17], [6, 18], [3, 21], [4, 21], [5, 21], [3, 22], [4, 22], [5, 22], [2, 23], [6, 23], [1, 25], [2, 25], [6, 25], [7, 25], [3, 35], [4, 35], [3, 36], [4, 36]];
const crazyCorners = [[0, 1], [0, 2], [1, 0], [1, 2], [1, 4], [2, 0], [2, 1], [2, 4], [2, 5], [2, 6], [4, 1], [4, 2], [5, 2], [6, 2], [0, 47], [0, 48], [1, 45], [1, 47], [1, 49], [2, 43], [2, 44], [2, 45], [2, 48], [2, 49], [4, 47], [4, 48], [5, 47], [6, 47], [29, 1], [29, 2], [28, 0], [28, 2], [28, 4], [27, 0], [27, 1], [27, 4], [27, 5], [27, 6], [25, 1], [25, 2], [24, 2], [23, 2], [29, 48], [29, 47], [28, 49], [28, 47], [28, 45], [27, 49], [27, 48], [27, 45], [27, 44], [27, 43], [25, 48], [25, 47], [24, 47], [23, 47], [12, 25], [11, 25], [10, 25], [15, 20], [15, 21], [15, 22], [15, 28], [15, 29], [15, 30], [18, 25], [19, 25], [20, 25]];
const pulsar = [[10, 21], [10, 22], [10, 26], [10, 27], [9, 21], [9, 27], [8, 21], [8, 27], [12, 17], [12, 18], [12, 19], [12, 22], [12, 23], [12, 25], [12, 26], [12, 29], [12, 30], [12, 31], [13, 19], [13, 21], [13, 23], [13, 25], [13, 27], [13, 29], [14, 21], [14, 22], [14, 26], [14, 27], [16, 21], [16, 22], [16, 26], [16, 27], [17, 19], [17, 21], [17, 23], [17, 25], [17, 27], [17, 29], [18, 17], [18, 18], [18, 19], [18, 22], [18, 23], [18, 25], [18, 26], [18, 29], [18, 30], [18, 31], [20, 21], [20, 22], [20, 26], [20, 27], [21, 21], [21, 27], [22, 21], [22, 27]];
const pentadecathlon = [[10, 14], [11, 14], [12, 13], [12, 15], [13, 14], [14, 14], [15, 14], [16, 14], [17, 13], [17, 15], [18, 14], [19, 14], [10, 35], [11, 35], [12, 34], [12, 36], [13, 35], [14, 35], [15, 35], [16, 35], [17, 34], [17, 36], [18, 35], [19, 35]];


class Cell extends React.Component {

    render() {
        const { x, y } = this.props;
        return (
            <div className="Cell" style={{
                left: `${CELL_SIZE * x + 1}px`,
                top: `${CELL_SIZE * y + 1}px`,
                width: `${CELL_SIZE - 1}px`,
                height: `${CELL_SIZE - 1}px`,
            }} />
        );
    }
}


class Game extends React.Component {

    constructor() {
        super();
        this.rows = HEIGHT / CELL_SIZE;
        this.cols = WIDTH / CELL_SIZE;

        this.board = this.makeEmptyBoard();
    }

    state = {
        cells: [],
        isRunning: false,
        interval: 80,
    }

    makeEmptyBoard() {
        let board = [];
        for (let y = 0; y < this.rows; y++) {
            board[y] = [];
            for (let x = 0; x < this.cols; x++) {
                board[y][x] = false;
            }
        }
        return board;
    }

    makeCells() {
        let cells = [];
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                if (this.board[y][x]) {
                    cells.push({ x, y });
                }
            }
        }
        return cells;
    }

    runGame = () => {
        this.setState({ isRunning: true });
        this.runIteration();
    }

    stopGame = () => {
        this.setState({ isRunning: false });
        if (this.timeoutHandler) {
            window.clearTimeout(this.timeoutHandler);
            this.timeoutHandler = null;
        }
    }

    runIteration() {
        let newBoard = this.makeEmptyBoard();

        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                let neighbors = this.calculateNeighbors(this.board, x, y);
                if (this.board[y][x]) {
                    if (neighbors === 2 || neighbors === 3) {
                        newBoard[y][x] = true;
                    } else {
                        newBoard[y][x] = false;
                    }
                } else {
                    if (!this.board[y][x] && neighbors === 3) {
                        newBoard[y][x] = true;
                    }
                }
            }
        }

        this.board = newBoard;
        this.setState({ cells: this.makeCells() });

        this.timeoutHandler = window.setTimeout(() => {
            this.runIteration();
        }, this.state.interval);
    }

    /**
     * Calculate the number of neighbors at point (x, y)
     * @param {Array} board 
     * @param {int} x 
     * @param {int} y 
     */
    calculateNeighbors(board, x, y) {
        let neighbors = 0;
        const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
        for (let i = 0; i < dirs.length; i++) {
            const dir = dirs[i];
            let y1 = y + dir[0];
            let x1 = x + dir[1];

            if (x1 >= 0 && x1 < this.cols && y1 >= 0 && y1 < this.rows && board[y1][x1]) {
                neighbors++;
            }
        }

        return neighbors;
    }

    handleIntervalChange = (event) => {
        this.setState({ interval: event.target.value });
    }

    handleClear = () => {
        this.stopGame()
        this.board = this.makeEmptyBoard();
        this.setState({ cells: this.makeCells() });
    }

    handlePattern = (arr) => {
        this.stopGame()
        this.board = this.makeEmptyBoard();
        for (let i = 0; i < arr.length; i++) {
            let row = arr[i][0];
            let cell = arr[i][1];
            this.board[row][cell] = 1;
        }
        this.setState({ cells: this.makeCells() })
    }

    handleRandom = () => {
        this.stopGame()
        this.board = this.makeEmptyBoard();
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                this.board[y][x] = (Math.random() >= 0.5);
            }
        }
        this.setState({ cells: this.makeCells() });
    }

    render() {
        const { cells, isRunning } = this.state;
        return (
            <div>
                <div className="Board"
                    style={{ width: WIDTH, height: HEIGHT, backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px` }}
                    ref={(n) => { this.boardRef = n; }}>
                    {cells.map(cell => (
                        <Cell x={cell.x} y={cell.y} key={`${cell.x},${cell.y}`} />
                    ))}
                </div>
                <div className="container-fluid controls" align="center" style={{ width: '400px'}}>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon3">Update every</span>
                        </div>
                        <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" value={this.state.interval} onChange={this.handleIntervalChange} />
                        <span className="input-group-text" id="basic-addon3">MilliSeconds</span>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Choose Pattern
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <button className="button btn btn-primary" onClick={this.handleRandom}>Random</button>
                            <button className="button btn btn-primary" onClick={() => this.handlePattern(maxDensityStillLife)}>Max Density Still Life</button>
                            <button className="button btn btn-primary" onClick={() => this.handlePattern(firstGenPulsar)}>First Gen Pulsar</button>
                            <button className="button btn btn-primary" onClick={() => this.handlePattern(gliderGun)}>Glider Gun</button>
                            <button className="button btn btn-primary" onClick={() => this.handlePattern(crazyCorners)}>Crazy Corners</button>
                            <button className="button btn btn-primary" onClick={() => this.handlePattern(pulsar)}>Pulsar</button>
                            <button className="button btn btn-primary" onClick={() => this.handlePattern(pentadecathlon)}>Penta Decathlon</button>
                        </div>
                    </div>
                    {isRunning ?
                        <button className="button btn btn-primary" onClick={this.stopGame}>Stop</button> :
                        <button className="button btn btn-primary" onClick={this.runGame}>Run</button>
                    }
                    <button className="button btn btn-primary" onClick={this.handleClear}>Clear</button>
                </div>
                <br></br>
            </div>

        );
    }
}


export default Game;