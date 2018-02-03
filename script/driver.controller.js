angular.module('myApp').controller('driverController', function($scope, $http,$state,$rootScope){
   
     $scope.heading = "Tell us about  " + $rootScope.test;
       $scope.heading2= $rootScope.test  + "  " + $rootScope.test1;       
        $scope.dob= $rootScope.test2;
      $scope.dateOfBirth1= $rootScope.test2;

});


