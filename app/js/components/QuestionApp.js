var React = require('react');
var ShowAddButton = require('./ShowAddButton.js');
var QuestionForm = require('./QuestionForm.js');
var QuestionList = require('./QuestionList.js');
var _ = require('lodash');
var Reflux = require('reflux');
var QuestionStore = require('../stores/QuestionStore.js');
var QuestionAction = require('../actions/QuestionAction.js');

module.exports = React.createClass({
	mixins: [Reflux.connect(QuestionStore, 'questions')],
	componentDidMount: function(){
		QuestionAction.getAll();
	},
	getInitialState:function(){
		return {
			questions: [],
			formDisplayed: false,
		}
	},
	onToggleForm:function(){
		this.setState({
			formDisplayed: !this.state.formDisplayed,
		})
	},
	onNewQuestion:function( newQuestion ){
		newQuestion.key = this.state.questions.length + 1;

		var newQuestions = this.state.questions.concat( newQuestion );

		QuestionAction.addItem(newQuestion);

	},
	sortQuestion:function(questions){
		questions.sort(function(a,b){
			return b.voteCount - a.voteCount;
		});

		return questions;

	},
	onVote:function(key,newCount){
		var questions = _.uniq( this.state.questions );
		var index = _.findIndex( questions, function(qst){
			return qst.key == key;
		} )

		questions[index].voteCount = newCount;

		questions = this.sortQuestion(questions);

		this.setState({
			questions: questions
		})
	},
	render:function(){
		return (
			<div>
				<div className="jumbotron text-center">
				    <div className="container">
				      <h1>走进React</h1>
				      <ShowAddButton onToggleForm={this.onToggleForm} />
				    </div>
				</div>
				<div className="main container">
				  <QuestionForm  
				  	onNewQuestion={this.onNewQuestion }
				  	onToggleForm={this.onToggleForm} 
				  	formDisplayed={this.state.formDisplayed } />
				  
				  <QuestionList onVote={this.onVote} questions={this.state.questions } />

				</div>
			</div>
		);
	}
})