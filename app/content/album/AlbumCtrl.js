angular.module('ihmAlzheimerApp').controller('AlbumCtrl', function ($scope) {
  $scope.myInterval = 0;
  var slides = $scope.slides = [];
  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      image: 'http://placekitten.com/' + newWidth + '/300',
      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
    });
  };
  for (var i=0; i<4; i++) {
    $scope.addSlide();
  }

  $scope.currentState = 'displayMode';
  $scope.changeState = function(state){

    if($scope.currentState === state ){
      $scope.currentState = 'displayMode';
    }
    else{
      $scope.currentState = state; 
    }
  }



  

});