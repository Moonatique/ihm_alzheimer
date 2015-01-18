angular.module('ihmAlzheimerApp').controller('AlbumCtrl', function ($scope, Sticker, Album, $routeParams) {
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
  $scope.stickers = Sticker.query();
  $scope.currentState = 'displayMode';
  $scope.changeState = function(state){

    if($scope.currentState === state ){
      $scope.currentState = 'displayMode';
    }
    else{
      $scope.currentState = state;
        switch(state){
            case 'drawMode':
                $( ".draggable" ).draggable({ revert: "invalid" });
                $( ".droppable" ).droppable({

                });
            break;
        }
    }
  }


  $scope.clickImage = function(){
    $( "#firstIcon" ).css("background-color", "red");
  }

  $scope.albums = Album.query(function(albums){
    $scope.album = albums[$routeParams.albumId-1];
  });


  

});