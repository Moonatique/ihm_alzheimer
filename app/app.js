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
