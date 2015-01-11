/**
 * Created by moonatique on 1/11/15.
 */
angular.module('ihmAlzheimerApp').
    controller('MenuCtrl', ['$scope', 'Album',
        function($scope, Album) {
            $scope.albums = Album.query();
            $scope.application = 'toto';
            $scope.currentDate = new Date();
        }]);
