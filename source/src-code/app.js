/**
 * Created by Pratik on 6/28/2016.
 */
//import 'babel-polyfill';  //use if you want to have latest features
import '../assets/index.scss';

angular.module('weather', [])
	.controller('myCtrl', function ($scope) {
		$scope.products = ['Milk', 'Bread', 'Cheese'];
	});