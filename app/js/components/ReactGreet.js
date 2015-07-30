var React = require('react');

module.exports = React.createClass({
	getInitialState: function(){
		return {
			firstName: 'Guo',
			lastName: 'Yongfeng',
			fullName: this.firstName
		}
	},

	handleFirst: function(e){
		var value = e.target.value;
		this.setState({
			firstName: value
		})
	},

	render: function(){
		return (
			<div>
				<p>First name: <input value={this.state.firstName} onChange={this.handleFirst} /></p>  
				<p>Last name: <input value={this.state.lastName} /></p>  
				<h2>Hello, <span>{this.state.fullName}</span>!</h2>
			</div>
		);
	}
});