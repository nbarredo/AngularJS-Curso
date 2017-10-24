var app = angular.module('app', ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/persons", {
        templateUrl : "/Views/persons.html"
    })
    .when("/persons/:personId", {
        templateUrl : "/Views/personDetail.html"
    })
    .otherwise({
        redirectTo : "/persons"
    })
});