// // 1. ko
// var ko = require('knockout');
// var ViewModel = require('./ViewModel/vm.js');

// ko.applyBindings(ViewModel, document.getElementById('app'));

// // 2. ko + react
// var ko = require('knockout');
// var React = require('react');
// var GreetComponent = require('./components/GreetComponent.js');

// var App = React.render(
// 	<GreetComponent />, 
// 	document.getElementById('app')
// );

// 3. react
var React = require('react');
var ReactGreet = require('./components/ReactGreet.js');

var App = React.render(
	<ReactGreet />, 
	document.getElementById('app')
);
