
var React = require('react');
var ReactUI = require('rctui');
var Table = ReactUI.Table;

module.exports = React.createClass({

	getInitialState: function(){
		return {
			bordered: true,
			checkAble: true,
			striped: true,
			width: '100%',
			height: 'auto',
			data: [{
				name: 'guo',
				office: 'uap'
			}],
		}
	},

	render: function (){
		return (
			<Table ref="table"
			  bordered={this.state.bordered}
			  checkAble={this.state.checkAble}
			  striped={this.state.striped}
			  width={this.state.width}
			  height={this.state.height}
			  data={this.state.data}>
			</Table>
		);
		
	},

})