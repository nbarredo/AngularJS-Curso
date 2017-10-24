var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        
        .when("/grid", {
            templateUrl: "grid.html"
        })
        .when("/details/:personId", {
            templateUrl: "Details.html"
        })
   // $locationProvider.html5Mode(true);
});