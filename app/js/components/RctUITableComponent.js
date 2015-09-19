var React = require('react');
var ReactUI = require('react-ui');
var Table = ReactUI.Table;

module.exports = React.createClass({

	getInitialState: function(){
		return {
			
		}
	},

	render: function (){
		return (
			<Grid
				columns={columns}
				data={data}
				onCellClick={onCellClick}
				onHeaderClick={sortColumn} />
		);
	},

})