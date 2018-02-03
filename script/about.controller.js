//var app1=angular.module('myApp');
angular.module('myApp').controller('aboutController', function($scope, $http,$state,$rootScope){
      
    //console.log($rootScope.test);
    $scope.continueVehicle= function(){  
        $rootScope.test=$scope.firstName; 
        $rootScope.test1=$scope.lastName;
        $rootScope.test2=$scope.dateOfBirth;
      $state.go('vehicle');
    }
   
       
             
    
    
       
     
});