const smallBoxes = document.querySelectorAll('.canvas-game div');
const allSpan = document.querySelectorAll('.canvas-game div span');
const rol = document.getElementById('choice-defaul');
// Score
const playerPointX = document.getElementById('playerX');
const playerPointO = document.getElementById('playerO');
// Message
const message = document.getElementById('message');
// Reset Btn
const resetGame = document.getElementById('reset');

let flag = true;
let tieTest = 0; //Para determinar cuando esta lleno
//Me ayudar con el empate.

smallBoxes.forEach((e, index) => {
	e.addEventListener('click', () => {
		if (flag === true) {
			if (allSpan[index].textContent === '') {
				playerX(index);
				flag = false;
			}
		} else if (flag === false) {
			if (allSpan[index].textContent === '') {
				PlayerO(index);
				flag = true;
			}
		}
	});
});

function playerX(index) {
	if (allSpan[index].textContent === '') {
		allSpan[index].textContent = 'X';
		allSpan[index].style.color = '#359aec';
		allSpan[index].classList.add('active');
		rol.textContent = 'O';
		rol.style.backgroundColor = '#ff0000';
	}
	tieTest += index;
	gameLogical();
}
function PlayerO(index) {
	if (allSpan[index].textContent === '') {
		allSpan[index].textContent = 'O';
		allSpan[index].style.color = '#ff0000';
		allSpan[index].classList.add('active');
		rol.textContent = 'X';
		rol.style.backgroundColor = '#359aec';
	}

	tieTest += index;
	gameLogical();
}

let pointX = 0;
let pointO = 0;

function gameLogical() {
	if (
		allSpan[0].textContent === 'X' &&
		allSpan[1].textContent === 'X' &&
		allSpan[2].textContent === 'X'
	) {
		message.textContent = 'La X gana!';
		tieTest = 0;
		reset();
		pointX++;
	} else if (
		allSpan[3].textContent === 'X' &&
		allSpan[4].textContent === 'X' &&
		allSpan[5].textContent === 'X'
	) {
		message.textContent = 'La X gana!';
		tieTest = 0;
		reset();
		pointX++;
	} else if (
		allSpan[6].textContent === 'X' &&
		allSpan[7].textContent === 'X' &&
		allSpan[8].textContent === 'X'
	) {
		message.textContent = 'La X gana!';
		tieTest = 0;
		reset();
		pointX++;
	} else if (
		allSpan[0].textContent === 'X' &&
		allSpan[3].textContent === 'X' &&
		allSpan[6].textContent === 'X'
	) {
		message.textContent = 'La X gana!';
		tieTest = 0;
		reset();
		pointX++;
	} else if (
		allSpan[1].textContent === 'X' &&
		allSpan[4].textContent === 'X' &&
		allSpan[7].textContent === 'X'
	) {
		message.textContent = 'La X gana!';
		tieTest = 0;
		reset();
		pointX++;
	} else if (
		allSpan[2].textContent === 'X' &&
		allSpan[5].textContent === 'X' &&
		allSpan[8].textContent === 'X'
	) {
		message.textContent = 'La X gana!';
		tieTest = 0;
		reset();
		pointX++;
	} else if (
		allSpan[0].textContent === 'X' &&
		allSpan[4].textContent === 'X' &&
		allSpan[8].textContent === 'X'
	) {
		message.textContent = 'La X gana!';
		tieTest = 0;
		reset();
		pointX++;
	} else if (
		allSpan[2].textContent === 'X' &&
		allSpan[4].textContent === 'X' &&
		allSpan[6].textContent === 'X'
	) {
		message.textContent = 'La X gana!';
		tieTest = 0;
		reset();
		pointX++;
	} else if (
		allSpan[0].textContent === 'O' &&
		allSpan[1].textContent === 'O' &&
		allSpan[2].textContent === 'O'
	) {
		message.textContent = 'La O gana!';
		tieTest = 0;
		reset();
		pointO++;
	} else if (
		allSpan[3].textContent === 'O' &&
		allSpan[4].textContent === 'O' &&
		allSpan[5].textContent === 'O'
	) {
		message.textContent = 'La O gana!';
		tieTest = 0;
		reset();
		pointO++;
	} else if (
		allSpan[6].textContent === 'O' &&
		allSpan[7].textContent === 'O' &&
		allSpan[8].textContent === 'O'
	) {
		message.textContent = 'La O gana!';
		tieTest = 0;
		reset();
		pointO++;
	} else if (
		allSpan[0].textContent === 'O' &&
		allSpan[3].textContent === 'O' &&
		allSpan[6].textContent === 'O'
	) {
		message.textContent = 'La O gana!';
		tieTest = 0;
		reset();
		pointO++;
	} else if (
		allSpan[1].textContent === 'O' &&
		allSpan[4].textContent === 'O' &&
		allSpan[7].textContent === 'O'
	) {
		message.textContent = 'La O gana!';
		tieTest = 0;
		reset();
		pointO++;
	} else if (
		allSpan[2].textContent === 'O' &&
		allSpan[5].textContent === 'O' &&
		allSpan[8].textContent === 'O'
	) {
		message.textContent = 'La O gana!';
		tieTest = 0;
		reset();
		pointO++;
	} else if (
		allSpan[0].textContent === 'O' &&
		allSpan[4].textContent === 'O' &&
		allSpan[8].textContent === 'O'
	) {
		message.textContent = 'La O gana!';
		tieTest = 0;
		reset();
		pointO++;
	} else if (
		allSpan[2].textContent === 'O' &&
		allSpan[4].textContent === 'O' &&
		allSpan[6].textContent === 'O'
	) {
		message.textContent = 'La O gana!';
		tieTest = 0;
		reset();
		pointO++;
	} else {
		if (tieTest === 36) {
			message.textContent = 'Empate';
			setTimeout(() => {
				message.textContent = ' ... ';
			}, 1200);
			tieTest = 0;
			reset();
		}
	}

	playerPointX.textContent = pointX;
	playerPointO.textContent = pointO;
}

function reset() {
	setTimeout(() => {
		for (let i = 0; i < allSpan.length; i++) {
			allSpan[i].textContent = '';
			allSpan[i].classList.remove('active');
		}
	}, 1200);
}
function ResetGame() {
	pointX = 0;
	pointO = 0;
	playerPointX.textContent = pointX;
	playerPointO.textContent = pointO;
	for (let i = 0; i < allSpan.length; i++) {
		allSpan[i].textContent = '';
	}
	message.textContent = ' ... ';
}
resetGame.addEventListener('click', () => {
	ResetGame();
});
