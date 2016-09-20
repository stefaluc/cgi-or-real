var images = [
	{src: 'images/00.jpg', answer: 'real'},
	{src: 'images/01.jpg', answer: 'cgi'}
];

var container = document.getElementById('container');

var Main = React.createClass({
	getImage: function() {
		return images[Math.floor((Math.random() * 2))];
	},

	render: function() {
		var image = this.getImage();
		return (
			<span>
				<img src={image.src} width="200px" height="200px"></img>
				<br />
				<Real answer={image}/>
				<br />
				<Cgi answer={image}/>
			</span>
		);
	}
});

var Real = React.createClass({
	isCorrect: function() {
		console.log(this.props.answer.answer);
		if(this.props.answer.answer == 'real') {
			return 'correct';
		} else {
			return 'incorrect';
		}
	},

	render: function() {
		return(
			<span>
				{this.isCorrect()}
			</span>
		);
	}
});

var Cgi = React.createClass({
	isCorrect: function() {
		console.log(this.props.answer.answer);
		if(this.props.answer.answer == 'cgi') {
			return 'correct';
		} else {
			return 'incorrect';
		}
	},

	render: function() {
		return(
			<span>
				{this.isCorrect()}
			</span>
		);
	}
});

ReactDOM.render(<Main />, container);