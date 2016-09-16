(function () {
'use strict';

angular.module('LunchCheck', []).controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.list;
  $scope.response = "";

  $scope.checkIfTooMuch = function () {
    var nbrOfItems = 0;
    $scope.response = "Enjoy!";
    
    if($scope.list != null && $scope.list != '') {
      nbrOfItems = $scope.list.split(',').length;
    }

    if(nbrOfItems === 0) {
      $scope.response = "Please enter data first";
    } else if(nbrOfItems > 3){
      $scope.response = "Too much!";
    }
  };

}

})();
