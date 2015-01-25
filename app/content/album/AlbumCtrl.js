angular.module('ihmAlzheimerApp').controller('AlbumCtrl', function ($scope, Sticker, Album, $routeParams) {

    var slides = $scope.slides = [];
    var albums = Album.query(function(albums){
        $scope.album = albums[$routeParams.albumId-1];
        addSlide();
        
    });

 // var slides = $scope.slides = [];
   var addSlide = function() {
    for(var i=0;i<$scope.album.slides.length;i++){
      slides.push({
      //image: 'http://placekitten.com/' + newWidth + '/300'
        image: $scope.album.slides[i]
    });
    }
    
  };
  
  
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
      if(score === game['lvl1']){$scope.gameState='lvl2';$scope.$apply();}
      break;
      case 'lvl2':
      if(score === game['lvl2']){$scope.gameState='lvl3';alert("GG!");}
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
                $scope.currentImageUrl = $("carousel active").find("img").attr("src");
                break;
            case 'treeMode':
                $( ".draggable" ).draggable({ revert: "invalid" });
                //zone dropables Level1 
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

                //zone droppable Level2
                $( ".droppable#mari1" ).droppable({ 
                    accept: "#mari1",
                    drop: function(event, ui) {
                        $(this).find("img").attr("src", $(ui.draggable).find("img").attr("src"));
                        $(ui.draggable).remove();
                        scorePlusOne();
                    }
                });
                $( ".droppable#mari2" ).droppable({ 
                    accept: "#mari2",
                    drop: function(event, ui) {
                        $(this).find("img").attr("src", $(ui.draggable).find("img").attr("src"));
                        $(ui.draggable).remove();
                        scorePlusOne();
                    }
                });
                $( ".droppable#pfille1" ).droppable({ 
                    accept: "#pfille1",
                    drop: function(event, ui) {
                        $(this).find("img").attr("src", $(ui.draggable).find("img").attr("src"));
                        $(ui.draggable).remove();
                        scorePlusOne();
                    }
                });
                $( ".droppable#pfille2" ).droppable({ 
                    accept: "#pfille2",
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




  

});