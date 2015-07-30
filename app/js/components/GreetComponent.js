var React = require('react');

module.exports = React.createClass({
	render: function(){
		return (
			<div>
				<p>First name: <input data-bind="value: firstName" /></p>  
				<p>Last name: <input data-bind="value: lastName" /></p>  
				<h2>Hello, <span data-bind="text: fullName"></span>!</h2>
			</div>
		);
	}
});