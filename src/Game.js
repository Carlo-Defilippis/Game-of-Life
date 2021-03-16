import React from 'react';
import './Game.css';

const CELL_SIZE = 20;
const WIDTH = 1000;
const HEIGHT = 600;


const maxDensityStillLife = [{ y: 5, x: 26 }, { y: 5, x: 28 }, { y: 5, x: 29 }, { y: 5, x: 31 }, { y: 5, x: 32 }, { y: 5, x: 34 }, { y: 5, x: 36 }, { y: 5, x: 37 }, { y: 5, x: 39 }, { y: 5, x: 40 }, { y: 5, x: 42 }, { y: 5, x: 44 }, { y: 5, x: 45 }, { y: 6, x: 26 }, { y: 6, x: 27 }, { y: 6, x: 29 }, { y: 6, x: 31 }, { y: 6, x: 33 }, { y: 6, x: 34 }, { y: 6, x: 35 }, { y: 6, x: 37 }, { y: 6, x: 39 }, { y: 6, x: 41 }, { y: 6, x: 42 }, { y: 6, x: 44 }, { y: 7, x: 29 }, { y: 7, x: 31 }, { y: 7, x: 37 }, { y: 7, x: 39 }, { y: 7, x: 45 }, { y: 8, x: 26 }, { y: 8, x: 27 }, { y: 8, x: 29 }, { y: 8, x: 31 }, { y: 8, x: 32 }, { y: 8, x: 33 }, { y: 8, x: 34 }, { y: 8, x: 35 }, { y: 8, x: 36 }, { y: 8, x: 38 }, { y: 8, x: 40 }, { y: 8, x: 41 }, { y: 8, x: 42 }, { y: 8, x: 43 }, { y: 8, x: 44 }, { y: 8, x: 45 }, { y: 9, x: 27 }, { y: 9, x: 29 }, { y: 9, x: 36 }, { y: 9, x: 38 }, { y: 9, x: 40 }, { y: 10, x: 26 }, { y: 10, x: 29 }, { y: 10, x: 30 }, { y: 10, x: 31 }, { y: 10, x: 32 }, { y: 10, x: 33 }, { y: 10, x: 34 }, { y: 10, x: 36 }, { y: 10, x: 38 }, { y: 10, x: 40 }, { y: 10, x: 42 }, { y: 10, x: 43 }, { y: 10, x: 44 }, { y: 10, x: 45 }, { y: 11, x: 26 }, { y: 11, x: 27 }, { y: 11, x: 28 }, { y: 11, x: 34 }, { y: 11, x: 36 }, { y: 11, x: 38 }, { y: 11, x: 40 }, { y: 11, x: 42 }, { y: 11, x: 45 }, { y: 12, x: 29 }, { y: 12, x: 30 }, { y: 12, x: 31 }, { y: 12, x: 32 }, { y: 12, x: 34 }, { y: 12, x: 36 }, { y: 12, x: 38 }, { y: 12, x: 40 }, { y: 12, x: 42 }, { y: 12, x: 44 }, { y: 13, x: 26 }, { y: 13, x: 27 }, { y: 13, x: 28 }, { y: 13, x: 32 }, { y: 13, x: 34 }, { y: 13, x: 36 }, { y: 13, x: 38 }, { y: 13, x: 40 }, { y: 13, x: 42 }, { y: 13, x: 44 }, { y: 13, x: 45 }, { y: 14, x: 26 }, { y: 14, x: 29 }, { y: 14, x: 30 }, { y: 14, x: 32 }, { y: 14, x: 34 }, { y: 14, x: 36 }, { y: 14, x: 38 }, { y: 14, x: 40 }, { y: 14, x: 42 }, { y: 14, x: 44 }, { y: 15, x: 27 }, { y: 15, x: 29 }, { y: 15, x: 31 }, { y: 15, x: 33 }, { y: 15, x: 35 }, { y: 15, x: 37 }, { y: 15, x: 39 }, { y: 15, x: 40 }, { y: 15, x: 42 }, { y: 15, x: 45 }, { y: 16, x: 26 }, { y: 16, x: 27 }, { y: 16, x: 29 }, { y: 16, x: 31 }, { y: 16, x: 33 }, { y: 16, x: 35 }, { y: 16, x: 37 }, { y: 16, x: 42 }, { y: 16, x: 43 }, { y: 16, x: 44 }, { y: 16, x: 45 }, { y: 17, x: 27 }, { y: 17, x: 29 }, { y: 17, x: 31 }, { y: 17, x: 33 }, { y: 17, x: 35 }, { y: 17, x: 37 }, { y: 17, x: 38 }, { y: 17, x: 39 }, { y: 17, x: 40 }, { y: 17, x: 41 }, { y: 18, x: 26 }, { y: 18, x: 29 }, { y: 18, x: 31 }, { y: 18, x: 33 }, { y: 18, x: 35 }, { y: 18, x: 42 }, { y: 18, x: 43 }, { y: 18, x: 44 }, { y: 18, x: 45 }, { y: 19, x: 26 }, { y: 19, x: 27 }, { y: 19, x: 28 }, { y: 19, x: 29 }, { y: 19, x: 31 }, { y: 19, x: 33 }, { y: 19, x: 35 }, { y: 19, x: 36 }, { y: 19, x: 37 }, { y: 19, x: 38 }, { y: 19, x: 39 }, { y: 19, x: 40 }, { y: 19, x: 42 }, { y: 19, x: 45 }, { y: 20, x: 31 }, { y: 20, x: 33 }, { y: 20, x: 40 }, { y: 20, x: 42 }, { y: 20, x: 44 }, { y: 21, x: 26 }, { y: 21, x: 27 }, { y: 21, x: 28 }, { y: 21, x: 29 }, { y: 21, x: 30 }, { y: 21, x: 31 }, { y: 21, x: 33 }, { y: 21, x: 34 }, { y: 21, x: 35 }, { y: 21, x: 36 }, { y: 21, x: 37 }, { y: 21, x: 38 }, { y: 21, x: 40 }, { y: 21, x: 42 }, { y: 21, x: 44 }, { y: 21, x: 45 }, { y: 22, x: 26 }, { y: 22, x: 32 }, { y: 22, x: 38 }, { y: 22, x: 40 }, { y: 22, x: 42 }, { y: 22, x: 44 }, { y: 23, x: 27 }, { y: 23, x: 29 }, { y: 23, x: 30 }, { y: 23, x: 32 }, { y: 23, x: 34 }, { y: 23, x: 35 }, { y: 23, x: 36 }, { y: 23, x: 38 }, { y: 23, x: 40 }, { y: 23, x: 42 }, { y: 23, x: 45 }, { y: 24, x: 26 }, { y: 24, x: 27 }, { y: 24, x: 29 }, { y: 24, x: 30 }, { y: 24, x: 32 }, { y: 24, x: 33 }, { y: 24, x: 35 }, { y: 24, x: 37 }, { y: 24, x: 38 }, { y: 24, x: 40 }, { y: 24, x: 41 }, { y: 24, x: 44 }, { y: 24, x: 45 }, { y: 5, x: 4 }, { y: 5, x: 6 }, { y: 5, x: 7 }, { y: 5, x: 9 }, { y: 5, x: 10 }, { y: 5, x: 12 }, { y: 5, x: 14 }, { y: 5, x: 15 }, { y: 5, x: 17 }, { y: 5, x: 18 }, { y: 5, x: 20 }, { y: 5, x: 22 }, { y: 5, x: 23 }, { y: 6, x: 4 }, { y: 6, x: 5 }, { y: 6, x: 7 }, { y: 6, x: 9 }, { y: 6, x: 11 }, { y: 6, x: 12 }, { y: 6, x: 13 }, { y: 6, x: 15 }, { y: 6, x: 17 }, { y: 6, x: 19 }, { y: 6, x: 20 }, { y: 6, x: 22 }, { y: 7, x: 7 }, { y: 7, x: 9 }, { y: 7, x: 15 }, { y: 7, x: 17 }, { y: 7, x: 23 }, { y: 8, x: 4 }, { y: 8, x: 5 }, { y: 8, x: 7 }, { y: 8, x: 9 }, { y: 8, x: 10 }, { y: 8, x: 11 }, { y: 8, x: 12 }, { y: 8, x: 13 }, { y: 8, x: 14 }, { y: 8, x: 16 }, { y: 8, x: 18 }, { y: 8, x: 19 }, { y: 8, x: 20 }, { y: 8, x: 21 }, { y: 8, x: 22 }, { y: 8, x: 23 }, { y: 9, x: 5 }, { y: 9, x: 7 }, { y: 9, x: 14 }, { y: 9, x: 16 }, { y: 9, x: 18 }, { y: 10, x: 4 }, { y: 10, x: 7 }, { y: 10, x: 8 }, { y: 10, x: 9 }, { y: 10, x: 10 }, { y: 10, x: 11 }, { y: 10, x: 12 }, { y: 10, x: 14 }, { y: 10, x: 16 }, { y: 10, x: 18 }, { y: 10, x: 20 }, { y: 10, x: 21 }, { y: 10, x: 22 }, { y: 10, x: 23 }, { y: 11, x: 4 }, { y: 11, x: 5 }, { y: 11, x: 6 }, { y: 11, x: 12 }, { y: 11, x: 14 }, { y: 11, x: 16 }, { y: 11, x: 18 }, { y: 11, x: 20 }, { y: 11, x: 23 }, { y: 12, x: 7 }, { y: 12, x: 8 }, { y: 12, x: 9 }, { y: 12, x: 10 }, { y: 12, x: 12 }, { y: 12, x: 14 }, { y: 12, x: 16 }, { y: 12, x: 18 }, { y: 12, x: 20 }, { y: 12, x: 22 }, { y: 13, x: 4 }, { y: 13, x: 5 }, { y: 13, x: 6 }, { y: 13, x: 10 }, { y: 13, x: 12 }, { y: 13, x: 14 }, { y: 13, x: 16 }, { y: 13, x: 18 }, { y: 13, x: 20 }, { y: 13, x: 22 }, { y: 13, x: 23 }, { y: 14, x: 4 }, { y: 14, x: 7 }, { y: 14, x: 8 }, { y: 14, x: 10 }, { y: 14, x: 12 }, { y: 14, x: 14 }, { y: 14, x: 16 }, { y: 14, x: 18 }, { y: 14, x: 20 }, { y: 14, x: 22 }, { y: 15, x: 5 }, { y: 15, x: 7 }, { y: 15, x: 9 }, { y: 15, x: 11 }, { y: 15, x: 13 }, { y: 15, x: 15 }, { y: 15, x: 17 }, { y: 15, x: 18 }, { y: 15, x: 20 }, { y: 15, x: 23 }, { y: 16, x: 4 }, { y: 16, x: 5 }, { y: 16, x: 7 }, { y: 16, x: 9 }, { y: 16, x: 11 }, { y: 16, x: 13 }, { y: 16, x: 15 }, { y: 16, x: 20 }, { y: 16, x: 21 }, { y: 16, x: 22 }, { y: 16, x: 23 }, { y: 17, x: 5 }, { y: 17, x: 7 }, { y: 17, x: 9 }, { y: 17, x: 11 }, { y: 17, x: 13 }, { y: 17, x: 15 }, { y: 17, x: 16 }, { y: 17, x: 17 }, { y: 17, x: 18 }, { y: 17, x: 19 }, { y: 18, x: 4 }, { y: 18, x: 7 }, { y: 18, x: 9 }, { y: 18, x: 11 }, { y: 18, x: 13 }, { y: 18, x: 20 }, { y: 18, x: 21 }, { y: 18, x: 22 }, { y: 18, x: 23 }, { y: 19, x: 4 }, { y: 19, x: 5 }, { y: 19, x: 6 }, { y: 19, x: 7 }, { y: 19, x: 9 }, { y: 19, x: 11 }, { y: 19, x: 13 }, { y: 19, x: 14 }, { y: 19, x: 15 }, { y: 19, x: 16 }, { y: 19, x: 17 }, { y: 19, x: 18 }, { y: 19, x: 20 }, { y: 19, x: 23 }, { y: 20, x: 9 }, { y: 20, x: 11 }, { y: 20, x: 18 }, { y: 20, x: 20 }, { y: 20, x: 22 }, { y: 21, x: 4 }, { y: 21, x: 5 }, { y: 21, x: 6 }, { y: 21, x: 7 }, { y: 21, x: 8 }, { y: 21, x: 9 }, { y: 21, x: 11 }, { y: 21, x: 12 }, { y: 21, x: 13 }, { y: 21, x: 14 }, { y: 21, x: 15 }, { y: 21, x: 16 }, { y: 21, x: 18 }, { y: 21, x: 20 }, { y: 21, x: 22 }, { y: 21, x: 23 }, { y: 22, x: 4 }, { y: 22, x: 10 }, { y: 22, x: 16 }, { y: 22, x: 18 }, { y: 22, x: 20 }, { y: 22, x: 22 }, { y: 23, x: 5 }, { y: 23, x: 7 }, { y: 23, x: 8 }, { y: 23, x: 10 }, { y: 23, x: 12 }, { y: 23, x: 13 }, { y: 23, x: 14 }, { y: 23, x: 16 }, { y: 23, x: 18 }, { y: 23, x: 20 }, { y: 23, x: 23 }, { y: 24, x: 4 }, { y: 24, x: 5 }, { y: 24, x: 7 }, { y: 24, x: 8 }, { y: 24, x: 10 }, { y: 24, x: 11 }, { y: 24, x: 13 }, { y: 24, x: 15 }, { y: 24, x: 16 }, { y: 24, x: 18 }, { y: 24, x: 19 }, { y: 24, x: 22 }, { y: 24, x: 23 }, { y: 0, x: 0 }, { y: 0, x: 1 }, { y: 1, x: 0 }, { y: 1, x: 1 }, { y: 28, x: 0 }, { y: 28, x: 1 }, { y: 29, x: 0 }, { y: 29, x: 1 }, { y: 29, x: 48 }, { y: 29, x: 49 }, { y: 28, x: 48 }, { y: 28, x: 49 }, { y: 0, x: 48 }, { y: 0, x: 49 }, { y: 1, x: 48 }, { y: 1, x: 49 }];
const firstGenPulsar = [{ y: 13, x: 24 }, { y: 14, x: 23 }, { y: 14, x: 24 }, { y: 14, x: 25 }, { y: 15, x: 23 }, { y: 15, x: 25 }, { y: 16, x: 23 }, { y: 16, x: 24 }, { y: 16, x: 25 }, { y: 17, x: 24 }];
const gliderGun = [{ y: 5, x: 1 }, { y: 5, x: 2 }, { y: 6, x: 1 }, { y: 6, x: 2 }, { y: 5, x: 11 }, { y: 6, x: 11 }, { y: 7, x: 11 }, { y: 4, x: 12 }, { y: 8, x: 12 }, { y: 3, x: 13 }, { y: 9, x: 13 }, { y: 3, x: 14 }, { y: 9, x: 14 }, { y: 6, x: 15 }, { y: 4, x: 16 }, { y: 8, x: 16 }, { y: 7, x: 17 }, { y: 6, x: 17 }, { y: 5, x: 17 }, { y: 6, x: 18 }, { y: 3, x: 21 }, { y: 4, x: 21 }, { y: 5, x: 21 }, { y: 3, x: 22 }, { y: 4, x: 22 }, { y: 5, x: 22 }, { y: 2, x: 23 }, { y: 6, x: 23 }, { y: 1, x: 25 }, { y: 2, x: 25 }, { y: 6, x: 25 }, { y: 7, x: 25 }, { y: 3, x: 35 }, { y: 4, x: 35 }, { y: 3, x: 36 }, { y: 4, x: 36 }];
const crazyCorners = [{ y: 0, x: 1 }, { y: 0, x: 2 }, { y: 1, x: 0 }, { y: 1, x: 2 }, { y: 1, x: 4 }, { y: 2, x: 0 }, { y: 2, x: 1 }, { y: 2, x: 4 }, { y: 2, x: 5 }, { y: 2, x: 6 }, { y: 4, x: 1 }, { y: 4, x: 2 }, { y: 5, x: 2 }, { y: 6, x: 2 }, { y: 0, x: 47 }, { y: 0, x: 48 }, { y: 1, x: 45 }, { y: 1, x: 47 }, { y: 1, x: 49 }, { y: 2, x: 43 }, { y: 2, x: 44 }, { y: 2, x: 45 }, { y: 2, x: 48 }, { y: 2, x: 49 }, { y: 4, x: 47 }, { y: 4, x: 48 }, { y: 5, x: 47 }, { y: 6, x: 47 }, { y: 29, x: 1 }, { y: 29, x: 2 }, { y: 28, x: 0 }, { y: 28, x: 2 }, { y: 28, x: 4 }, { y: 27, x: 0 }, { y: 27, x: 1 }, { y: 27, x: 4 }, { y: 27, x: 5 }, { y: 27, x: 6 }, { y: 25, x: 1 }, { y: 25, x: 2 }, { y: 24, x: 2 }, { y: 23, x: 2 }, { y: 29, x: 48 }, { y: 29, x: 47 }, { y: 28, x: 49 }, { y: 28, x: 47 }, { y: 28, x: 45 }, { y: 27, x: 49 }, { y: 27, x: 48 }, { y: 27, x: 45 }, { y: 27, x: 44 }, { y: 27, x: 43 }, { y: 25, x: 48 }, { y: 25, x: 47 }, { y: 24, x: 47 }, { y: 23, x: 47 }, { y: 12, x: 25 }, { y: 11, x: 25 }, { y: 10, x: 25 }, { y: 15, x: 20 }, { y: 15, x: 21 }, { y: 15, x: 22 }, { y: 15, x: 28 }, { y: 15, x: 29 }, { y: 15, x: 30 }, { y: 18, x: 25 }, { y: 19, x: 25 }, { y: 20, x: 25 }];
const pulsar = [{ y: 10, x: 21 }, { y: 10, x: 22 }, { y: 10, x: 26 }, { y: 10, x: 27 }, { y: 9, x: 21 }, { y: 9, x: 27 }, { y: 8, x: 21 }, { y: 8, x: 27 }, { y: 12, x: 17 }, { y: 12, x: 18 }, { y: 12, x: 19 }, { y: 12, x: 22 }, { y: 12, x: 23 }, { y: 12, x: 25 }, { y: 12, x: 26 }, { y: 12, x: 29 }, { y: 12, x: 30 }, { y: 12, x: 31 }, { y: 13, x: 19 }, { y: 13, x: 21 }, { y: 13, x: 23 }, { y: 13, x: 25 }, { y: 13, x: 27 }, { y: 13, x: 29 }, { y: 14, x: 21 }, { y: 14, x: 22 }, { y: 14, x: 26 }, { y: 14, x: 27 }, { y: 16, x: 21 }, { y: 16, x: 22 }, { y: 16, x: 26 }, { y: 16, x: 27 }, { y: 17, x: 19 }, { y: 17, x: 21 }, { y: 17, x: 23 }, { y: 17, x: 25 }, { y: 17, x: 27 }, { y: 17, x: 29 }, { y: 18, x: 17 }, { y: 18, x: 18 }, { y: 18, x: 19 }, { y: 18, x: 22 }, { y: 18, x: 23 }, { y: 18, x: 25 }, { y: 18, x: 26 }, { y: 18, x: 29 }, { y: 18, x: 30 }, { y: 18, x: 31 }, { y: 20, x: 21 }, { y: 20, x: 22 }, { y: 20, x: 26 }, { y: 20, x: 27 }, { y: 21, x: 21 }, { y: 21, x: 27 }, { y: 22, x: 21 }, { y: 22, x: 27 }];
const pentadecathlon = [{ y: 10, x: 14 }, { y: 11, x: 14 }, { y: 12, x: 13 }, { y: 12, x: 15 }, { y: 13, x: 14 }, { y: 14, x: 14 }, { y: 15, x: 14 }, { y: 16, x: 14 }, { y: 17, x: 13 }, { y: 17, x: 15 }, { y: 18, x: 14 }, { y: 19, x: 14 }, { y: 10, x: 35 }, { y: 11, x: 35 }, { y: 12, x: 34 }, { y: 12, x: 36 }, { y: 13, x: 35 }, { y: 14, x: 35 }, { y: 15, x: 35 }, { y: 16, x: 35 }, { y: 17, x: 34 }, { y: 17, x: 36 }, { y: 18, x: 35 }, { y: 19, x: 35 }];


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
        interval: 100,
    }

    makeEmptyBoard() {
        let board = [];
        for (let y = 0; y < this.rows; y++) {
            board[y] = [];
            for (let x = 0; x < this.cols; x++) {
                board[y][x] = false;
            }
        }
        console.log('Empty board ', board)
        return board;
    }

    getElementOffset() {
        const rect = this.boardRef.getBoundingClientRect();
        const doc = document.documentElement;

        return {
            y: (rect.left + window.pageXOffset) - doc.clientLeft,
            y: (rect.top + window.pageYOffset) - doc.clientTop,
        };
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
        console.log(firstGenPulsar)
        console.log(cells)
        return cells;
    }

    handleClick = (event) => {

        const elemOffset = this.getElementOffset();
        const offsetX = event.clientX - elemOffset.x;
        const offsetY = event.clientY - elemOffset.y;

        const x = Math.floor(offsetX / CELL_SIZE);
        const y = Math.floor(offsetY / CELL_SIZE);

        if (x >= 0 && x <= this.cols && y >= 0 && y <= this.rows) {
            this.board[y][x] = !this.board[y][x];
        }

        this.setState({ cells: this.makeCells() });
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
        const dirs = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
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
        this.board = this.makeEmptyBoard();
        this.setState({ cells: this.makeCells() });
    }

    handlePattern = (pattern) => {
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                if (pattern.map(index => { return index.x }).includes(x) && pattern.map(index => { return index.y }).includes(y)) {
                    console.log('Equal ', x + y)
                    this.board[y][x] = 1;
                } else {
                    console.log('Else ', x, y)
                    this.board[y][x] = 0;
                }
            }
        }
        console.log('Map ', pattern.map(index => { return index.x }))
        this.setState({ cells: this.makeCells() }, () => console.log(this.state.cells));
    }

    handleRandom = () => {
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.cols; x++) {
                this.board[y][x] = (Math.random() >= 0.5);
            }
        }
        this.setState({ cells: this.makeCells() });
    }

    render() {
        const { cells, interval, isRunning } = this.state;
        return (
            <div>
                <div className="Board"
                    style={{ width: WIDTH, height: HEIGHT, backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px` }}
                    onClick={this.handleClick}
                    ref={(n) => { this.boardRef = n; }}>

                    {cells.map(cell => (
                        <Cell x={cell.x} y={cell.y} key={`${cell.x},${cell.y}`} />
                    ))}
                </div>

                <div className="controls">
                    Update every <input value={this.state.interval} onChange={this.handleIntervalChange} /> msec
                    {isRunning ?
                        <button className="button btn btn-primary" onClick={this.stopGame}>Stop</button> :
                        <button className="button btn btn-primary" onClick={this.runGame}>Run</button>
                    }
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Choose Pattern
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <button className="button btn btn-primary" onClick={this.handleRandom}>Random</button>
                            <button className="button btn btn-primary" onClick={() => this.handlePattern(maxDensityStillLife)}>Max Density Still Life</button>
                            <button className="button btn btn-primary" onClick={() => this.handlePattern(firstGenPulsar)}>First Gen Pulsar</button>
                            {/* <button className="button btn btn-primary" onClick={() => this.handlePattern(gliderGun)}>Glider Gun</button> */}
                            <button className="button btn btn-primary" onClick={() => this.handlePattern(crazyCorners)}>Crazy Corners</button>
                            <button className="button btn btn-primary" onClick={() => this.handlePattern(pulsar)}>Pulsar</button>
                            <button className="button btn btn-primary" onClick={() => this.handlePattern(pentadecathlon)}>Penta Decathlon</button>
                        </div>
                    </div>
                    <button className="button btn btn-primary" onClick={this.handleClear}>Clear</button>
                </div>
            </div>
        );
    }
}


export default Game;