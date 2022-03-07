const gameGuess = () => {
	let guessRandom = Math.round(Math.random() * 99 + 1);
	const message = document.getElementById('message');
	let numberRandom = Math.round(Math.random() * 9 + 1);
	const showEnter = document.getElementById('enterUser');
	
	console.log(guessRandom);
	
	function alertEndGame() {
		const divShow = document.querySelector('.enterNumber');
		const divReset = document.querySelector('.reset');
		const reset = document.getElementById('reset');
		let time = 5;

			divReset.classList.add('activeReset');
			divShow.classList.remove('activeReset');

			setInterval(() => {
				if(time >= 0){
					reset.textContent =+ parseFloat(time--);
				}
				if(time == 0){
					location.reload();
				}
			
			}, 1500);
	}

	let win = 0;
	function score() {
		const score = document.getElementById('score');
		score.textContent = win;
	}

	function generateLife() {
		const life = document.getElementById('life');
		life.textContent = numberRandom;
		if (numberRandom === 0) {
			message.textContent = 'upps!! Perdiste, Otro dia será';
			alertEndGame();
		}
	}

	function getValueUser() {
		let input = document.querySelector('input');
		let valueUser = document.getElementById('valueUser').value;

		if (Number(valueUser) < 1 || Number(valueUser) > 100) {
			input.classList.add('active');
			setTimeout(() => {
				input.classList.remove('active');
			}, 2000);
		} else if (valueUser.length < 1) {
			input.classList.add('active');
			setTimeout(() => {
				input.classList.remove('active');
			}, 2000);
			message.textContent = 'Digita un numero';
		} else {
			return Number(valueUser);
		}
	}

	function testGuess() {
		if (guessRandom === getValueUser()) {
			message.textContent = 'En hora buena, Adivinaste';
			numberRandom++;
			generateLife();
			win += Math.round(Math.random() * 99 + 1);
			score();
			showEnter.textContent += getValueUser() + ', ';
			setTimeout(() => {
				guessRandom = Math.round(Math.random() * 99 + 1);
				console.log(guessRandom);
				message.textContent = 'Nuevo Numero';
			}, 1000);
		} else if (guessRandom > getValueUser()) {
			message.textContent = 'UFF!! Falta mucho!! El numero es un poco MAYOR!!';
			if (numberRandom > 0) {
				numberRandom--;
				showEnter.textContent += getValueUser() + ', ';
			}
			generateLife();
		} else if (guessRandom < getValueUser()) {
			message.textContent = 'Casi cerca! El numero es un poco MENOR!!';
			if (numberRandom > 0) {
				numberRandom--;
				showEnter.textContent += getValueUser() + ', ';
			}
			generateLife();
		}
		generateLife();
		document.getElementById('valueUser').value = '';
	}
	const btnGuess = document.getElementById('getData');
	btnGuess.addEventListener('click', testGuess);

	addEventListener('keydown', (e) => {
		let keysCode = e.keyCode;
		if(keysCode == 13){
			testGuess();
			btnGuess.classList.add('activ');
			setTimeout(() => {
				btnGuess.classList.remove('activ');
			}, 2000);
		}
	})

	generateLife();
};
gameGuess();
