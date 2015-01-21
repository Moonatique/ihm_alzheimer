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
  var game = {
    'lvl1' : 2,
    'lvl2' : 6,
    'lvl3' : 12
  };
  var score = 0;
  $scope.gameState = 'lvl1';
  var scorePlusOne = function(){

    score++;
    switch($scope.gameState){
      case 'lvl1':
      if(score === game['lvl1']){$scope.gameState='lvl2';location.reload();}
      break;
      case 'lvl2':
      if(score === game['lvl2']){$scope.gameState='lvl3';}
      break;
      case 'lvl3':
      if(score === game['lvl3']){alert("GG!");}
      break;
    }
  }

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
                    drop: function(event, ui) {

                    }
                });
                break;
            case 'treeMode':
                $( ".draggable" ).draggable({ revert: "invalid" });
                $( ".droppable#fille1" ).droppable({ 
                    accept: "#fille1",
                    drop: function(event, ui) {
                        $(this).find("img").attr("src", $(ui.draggable).find("img").attr("src"));
                        $(ui.draggable).remove();
                        scorePlusOne();                        
                    }
                });
                $( ".droppable#fille2" ).droppable({ 
                    accept: "#fille2",
                    drop: function(event, ui) {
                        $(this).find("img").attr("src", $(ui.draggable).find("img").attr("src"));
                        $(ui.draggable).remove();
                        scorePlusOne();
                    }
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