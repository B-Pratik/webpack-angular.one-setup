/**
 * Created by Pratik on 6/28/2016.
 */

import '../assets/main.scss';

angular.module('weather', [])
    .controller('myCtrl', function ($scope) {
        $scope.products = ['Milk', 'Bread', 'Cheese'];
    });