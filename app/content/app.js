'use strict';

/* App Module */

var phonecatApp = angular.module('ihmAlzheimerApp', [
  'ngRoute',
  'phonecatAnimations',
  'phonecatControllers',
  'phonecatFilters',
  'phonecatServices',
  'ihm_alzheimer_services',
  'utilFilters',
  'ui.bootstrap'
]);

phonecatApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/phones', {
                templateUrl: 'content/partials/phone-list.html',
                controller: 'PhoneListCtrl'
            }).
            when('/phones/:phoneId', {
                templateUrl: 'content/partials/phone-detail.html',
                controller: 'PhoneDetailCtrl'
            }).
            when('/',{
                templateUrl: 'content/menu/menu.html',
                controller: 'MenuCtrl'
            }).
            when('/albums/:albumId',{
                templateUrl: 'content/album/album.html',
                controller: 'AlbumCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);

/*
var phonecatApp = angular.module('phonecatApp', [
    'ngRoute',
    'phonecatAnimations',
    'phonecatControllers',
    'phonecatFilters',
    'phonecatServices'
]);

phonecatApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/phones', {
                templateUrl: 'content/partials/phone-list.html',
                controller: 'PhoneListCtrl'
            }).
            when('/phones/:phoneId', {
                templateUrl: 'content/partials/phone-detail.html',
                controller: 'PhoneDetailCtrl'
            }).
            otherwise({
                redirectTo: '/phones'
            });
    }]);
*/