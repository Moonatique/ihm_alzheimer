'use strict';

/* App Module */

var app = angular.module('ihmAlzheimerApp', [
  'ngRoute',
  'ihm_alzheimer_services',
  'utilFilters',
  'ui.bootstrap'
]);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/',{
                templateUrl: 'partials/menu.html',
                controller: 'MenuCtrl'
            }).
            when('/albums/:albumId',{
                templateUrl: 'partials/album.html',
                controller: 'AlbumCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);
