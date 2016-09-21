var images = [
	{src: 'images/00.jpg', answer: 'real'},
	{src: 'images/01.jpg', answer: 'cgi'}
];

var container = document.getElementById('container');

var Main = React.createClass({
	getInitialState: function() {
		return {
			progression: 0, 
			score: 0
		};
	},

	resetProgression: function() {
		this.setState({
			progression: 0,
			score: 0
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
		return images[Math.floor((Math.random() * 2))];
	},

	render: function() {
		var components;
		var state = this.state.progression;
		var score = this.state.score;

		// starting screen
		if(state === 0) {
			components = (
				<div>
					<h1>Welcome!</h1>
					<button onClick={this.updateProgression}>Start</button>
				</div>
			);
		}
		// game screen
		else if(state > 0 && state < 11) {
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
					<button onClick={this.resetProgression}>Restart</button>
				</div>
			);
		}
		return components;
	}
});

ReactDOM.render(<Main />, container);