var React = require('react');
// var TableComponent = require('./components/TableComponent.js');
var Table = require('rctui/table');
// var Table = ReactUI.Table;

var App = React.render(
	<Table ref="table"
	  bordered={this.state.bordered}
	  checkAble={this.state.checkAble}
	  striped={this.state.striped}
	  width={this.state.width}
	  height={this.state.height}
	  data={this.state.data}

	</Table>,
	document.getElementById('app')
);