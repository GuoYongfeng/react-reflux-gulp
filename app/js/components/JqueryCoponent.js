var React = require('react');

var RenderComponent = React.createClass({
	render: function(){
		return (
			<ul>
				{
					this.props['data-list'].map(function( item ){
						return (<li>{item}</li>);
					})
				}
			</ul>
		);
	}
});

module.exports = React.createClass({
	getInitialState: function(){
		return {
			list: ['xxx', 'yyy']
		}
	},
	handleClick: function(){
		var el = $(this.getDOMNode());

		console.log(el);

		this.setState({
			list: ['1111', '222']
		})
	},
	render: function(){
		return (
			<div>
				<button onClick = {this.handleClick}>click</button>
				<RenderComponent data-list={this.state.list} />
			</div>
		);
	}
})