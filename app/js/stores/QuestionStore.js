var Reflux = require('reflux');
var QuestionAction = require('../actions/QuestionAction.js');

module.exports = Reflux.createStore({
	items: [
		{
			key: 1,
			title:'一些概念',
			description:'React 元素、JSX 、虚拟DOM',
			voteCount: 10,
		},
		{
			key: 2,
			title:'渲染(Render)',
			description: "第一步是渲染虚拟元素（React 元素或 component）。注意，虚拟元素只存在于内存中，必须显式地告诉 React 将它渲染到浏览器上。",
			voteCount: 8,
		},
		{
			key: 3,
			title:'组件(Components)',
			description: "组件是 React 的精髓所在。它们是自定义的 React 元素，通常有一些功能和结构定义。",
			voteCount: 7,
		},
		{
			key: 4,
			title:'属性(Props)',
			description: "以把属性看做组件的配置参数，看起来非常像 HTML 属性。",
			voteCount: 5,
		},
		{
			key: 5,
			title:'状态(State)',
			description: "状态对象用来记录随时可能变化的数据。",
			voteCount: 3,
		},
		{
			key: 6,
			title: "组合组件(Composition)",
			description: "将一些小的组件(components)链接起来形成一个大的组合组件。",
			voteCount: 2
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









