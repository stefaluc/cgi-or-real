var imageDisplay = [
	{src: 'images/00.jpg', answer: 'cgi'},
	{src: 'images/01.jpg', answer: 'cgi'},
	{src: 'images/02.jpg', answer: 'cgi'},
	{src: 'images/03.jpg', answer: 'cgi'},
	{src: 'images/04.jpg', answer: 'cgi'},
	{src: 'images/05.jpg', answer: 'real'},
	{src: 'images/06.jpg', answer: 'real'},
	{src: 'images/07.jpg', answer: 'real'},
	{src: 'images/08.jpg', answer: 'real'},
	{src: 'images/09.jpg', answer: 'real'},
	{src: 'images/10.jpg', answer: 'real'},
	{src: 'images/11.jpg', answer: 'cgi'},
	{src: 'images/12.jpg', answer: 'cgi'},
	{src: 'images/13.jpg', answer: 'cgi'},
	{src: 'images/14.jpg', answer: 'cgi'},
	{src: 'images/15.jpg', answer: 'cgi'},
	{src: 'images/16.jpg', answer: 'cgi'},
	{src: 'images/17.jpg', answer: 'real'},
	{src: 'images/18.jpg', answer: 'real'},
	{src: 'images/19.jpg', answer: 'real'},
	{src: 'images/20.jpg', answer: 'real'},
	{src: 'images/21.jpg', answer: 'cgi'}
];

var scoreClass = 'score';

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
		scoreClass = 'score';
		this.setState({
			progression: 0,
			score: 0,
			images: temp
		});
	},

	updateProgression: function() {
		if(this.state.progression > 0 && this.state.progression < 11) {
			//scoreClass = 'incorrect';
			document.getElementById('score').style.color = 'red';
			$("#score").animate({color: "white"}, 1000);
		}
		this.setState({
			progression: this.state.progression + 1
		});
	},

	updateScore: function() {
		//scoreClass = 'correct';
		document.getElementById('score').style.color = 'green';
		$("#score").animate({color: "white"}, 1000);
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
			components = (
				<div>

					<img src="images/logo.png" className="animated bounceIn"></img>
					<div className="title animated bounceIn">CGI or Real?</div>
					<span className="animated bounceIn welcome">CGI has been able to perform some amazing feets of hyperrealism. Test your skills at identifying what is fake and what is real.</span>
					<br /><br />
					<a className="waves-effect waves-light btn-large animated bounceIn" onClick={this.updateProgression}>Start</a>
					<br /><br />
				</div>
			);
		}
		// game screen
		else if(state > 0 && state < 11) {
			var image = this.getImage();
			var cgiCorrect = (image.answer == 'cgi') ? true : false;
			var realCorrect = (image.answer == 'real') ? true : false;


			console.log(image.src);
			components = (
				<div>
					<img src={image.src} className='image' height='500px' width='500px'></img>
					<br />
					<br />
					<div className="waves-effect waves-light btn-large cgi" onClick={cgiCorrect ? this.updateScore : this.updateProgression}>CGI</div>
					<div className="waves-effect waves-light btn-large real" onClick={realCorrect ? this.updateScore : this.updateProgression}>Real</div>
					<span id='score' className='animated bounceIn'>Score: {score}</span>
				</div>
			);
		}
		// ending screen
		else {
			components = (
				<div>
					<div className='title'>You correctly guessed {score} out of 10!</div>
					 <a className="waves-effect waves-light btn-large" onClick={this.resetProgression}>Play Again</a>
				</div>
			);
		}
		return components;
	}
});

ReactDOM.render(<Main />, container);
