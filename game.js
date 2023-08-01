const player = document.getElementById('player');
const gameBoard = document.getElementById('gameBoard');

gameBoard.addEventListener('touchstart', handleTouchStart, false);
gameBoard.addEventListener('touchmove', handleTouchMove, false);

let xDown = null;
let yDown = null;

function handleTouchStart(event) {
const firstTouch = event.touches[0];
xDown = firstTouch.clientX;
yDown = firstTouch.clientY;
};

function handleTouchMove(event) {
if (!xDown || !yDown) {
return;
}

let xUp = event.touches[0].clientX;
let yUp = event.touches[0].clientY;

let xDiff = xDown - xUp;
let yDiff = yDown - yUp;

if (Math.abs(xDiff) > Math.abs(yDiff)) {
if (xDiff > 0) {
moveLeft();
} else {
moveRight();
}
} else {
if (yDiff > 0) {
moveUp();
} else {
moveDown();
}
}

xDown = null;
yDown = null;
};

function moveUp() {
player.style.top = parseInt(player.style.top) - 10 + 'px';
}

function moveDown() {
player.style.top = parseInt(player.style.top) + 10 + 'px';
}

function moveLeft() {
player.style.left = parseInt(player.style.left) - 10 + 'px';
}

function moveRight() {
player.style.left = parseInt(player.style.left) + 10 + 'px';
}
```
