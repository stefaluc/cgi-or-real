var imageDisplay = [
	{src: 'images/00.jpg', answer: 'cgi'},
	{src: 'images/01.jpg', answer: 'cgi'},
	{src: 'images/02.jpg', answer: 'cgi'},
	{src: 'images/03.jpg', answer: 'cgi'},
	{src: 'images/04.jpg', answer: 'cgi'},
	{src: 'images/05.jpg', answer: 'real'}
];

function shuffle(array) {
	let counter = array.length;
	// While there are elements in the array
	while (counter > 0) {
		// Pick a random index
		let index = Math.floor(Math.random() * counter);
		// Decrease counter by 1
		counter--;
		// And swap the last element with it
		let temp = array[counter];
		array[counter] = array[index];
		array[index] = temp;
	}
	return array;
}

var container = document.getElementById('container');

var Main = React.createClass({
	getInitialState: function() {
		var temp = [];
		for(var i = 0; i < imageDisplay.length; i++) {
			temp.push(imageDisplay[i]);
		}
		return {
			progression: 0, 
			score: 0,
			images: temp
		};
	},

	resetProgression: function() {
		var temp = [];
		for(var i = 0; i < imageDisplay.length; i++) {
			temp.push(imageDisplay[i]);
		}
		this.setState({
			progression: 0,
			score: 0,
			images: temp
		});
	},

	updateProgression: function() {
		this.setState({
			progression: this.state.progression + 1
		});
	},

	updateScore: function() {
		this.setState({
			progression: this.state.progression + 1,
 			score: this.state.score + 1
		});
	},
	
	getImage: function() {
		shuffle(this.state.images);
		return this.state.images.pop();
	},

	render: function() {
		var components;
		var state = this.state.progression;
		var score = this.state.score;

		// starting screen
		if(state === 0) {
			console.log(this.state.images);
			console.log(imageDisplay);
			components = (
				<div>
					<h1>Welcome!</h1>
					<button onClick={this.updateProgression}>Start</button>
				</div>
			);
		}
		// game screen
		else if(state > 0 && state < 7) {
			console.log('Progression: ' + this.state.progression);
			console.log('Score: ' + this.state.score);
			var image = this.getImage();
			var cgiCorrect = (image.answer == 'cgi') ? true : false;
			var realCorrect = (image.answer == 'real') ? true : false;

			components = (
				<div>
					<img src={image.src} height='200px' width='200px'></img>
					<br />
					<button onClick={cgiCorrect ? this.updateScore : this.updateProgression}>CGI</button>
					<button onClick={realCorrect ? this.updateScore : this.updateProgression}>Real</button>
					<br />
					Image Answer: {image.answer}
					<br />
					Score: {score}
					<br />
					Progression: {state}
				</div>
			);
		}
		// ending screen
		else {
			components = (
				<div>
					<h1>You correctly guessed {score} out of 10!</h1>
					<button onClick={this.resetProgression}>Restart</button>
				</div>
			);
		}
		return components;
	}
});

ReactDOM.render(<Main />, container);