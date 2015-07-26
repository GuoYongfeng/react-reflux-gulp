var Reflux = require('reflux');
var QuestionAction = require('../actions/QuestionAction.js');

module.exports = Reflux.createStore({
	items: [
		{
			key: 1,
			title:'数据展现',
			description:'使用UI组件最基本的事情是做数据的展现. React可以让数据展示变得更加便捷和自动化，当数据变化的时候可以保持及时更新。',
			voteCount: 10,
		},
		{
			key: 2,
			title:'可交互可动态的UI',
			description: "You've already learned how to display data with React. Now let's look at how to make our UIs interactive.",
			voteCount: 8,
		},
		{
			key: 3,
			title:'组件可复用',
			description: "So far, we've looked at how to write a single component to display data and handle user input. Next let's examine one of React's finest features: composability.",
			voteCount: 1,
		},
		{
			key: 4,
			title:'Interactivity and Dynamic UIs',
			description: "You've already learned how to display data with React. Now let's look at how to make our UIs interactive.",
			voteCount: 2,
		},
		{
			key: 5,
			title:'Interactivity and Dynamic UIs',
			description: "You've already learned how to display data with React. Now let's look at how to make our UIs interactive.",
			voteCount: 3,
		}
	],
	listenables: [QuestionAction],
	onAddItem: function(newQuestion){
		console.log(newQuestion);

		var newQuestions = this.items.concat( newQuestion );
		this.trigger(newQuestions);
		// $.post('/add', model, function (data) {
            // this.items.unshift(data);
            // this.trigger(this.items);
        // }.bind(this));
	},
	onGetAll: function(){
		this.trigger(this.items);

		// $.get('/all', function (data) {
            // this.items = data;
            // this.trigger(this.items);
        // }.bind(this));
	}
});









