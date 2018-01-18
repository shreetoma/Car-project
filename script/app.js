var app = angular.module('myApp', ['ui.router','ngMessages']);
app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
    .state('about',{
           url:'/about',
        templateUrl: 'view/about.html',
        controller:'aboutController'
    })
    .state('discount',{
           url:'/discont',
        templateUrl: 'view/discount.html',
        controller:'discountController'
    })
    .state('driver',{
           url:'/driver',
        templateUrl: 'view/driver.html',
        controller:'driverController'
         
    })
    .state('quote',{
           url:'/quote',
        templateUrl: 'view/quote.html',
        controller:'quoteController'
         
    })
    .state('vehicle',{
           url:'/vehicle',
        templateUrl: 'view/vehicle.html',
         controller:'vehicleController'
    })
    .state('vehicle.suv', {
        url: '/suv',
        templateUrl: 'view/vehicle-suv.html'
    })
    .state('vehicle.traveller', {
        url: '/traveller',
        templateUrl: 'view/vehicle-traveller.html'
    })
    .state('vehicle.utility', {
        url: '/utility',
        templateUrl: 'view/vehicle-utility.html'
    })
    
})