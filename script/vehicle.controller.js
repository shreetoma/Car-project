
angular.module('myApp').controller('vehicleController', function($scope, $http,$state){
    $scope.continueDriver= function(){
      
        
      $state.go('driver');
    }
    
});
