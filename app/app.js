/**
 * Created by moonatique on 1/7/15.
 */
'use strict';
angular.module('ihm_alzheimer',['ngRoute','ngResource'])
.controller('TextC',function($scope){
    $scope.application={
        name:'toto'
    };
})
.config(function($routeProvider){
   $routeProvider.
       when('/',{
        templateURL: 'content/menu/view.html',
        controller: 'MenuCtrl'
       }).
       when('/game',{

       }).
       otherwise({
            redirectTo: '/phone'
       });
});