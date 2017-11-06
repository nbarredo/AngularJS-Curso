var app = angular.module('app', ['ngRoute', 'services']);

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

app.config(function ($provide) {
    $provide.decorator('personService', function ($delegate, $q, $http) {
        $delegate.delete = function (id) {
            var deferred = $q.defer();
            var promise = deferred.promise;

            $http.delete("http://curso-api.azurewebsites.net/api/Persons/" + id).then(function (response) {
                deferred.resolve(response.data);
            }, function (Error) {
                console.log(Error);
                deferred.reject('Error calling delete');
            });
            return promise;
        }
        return $delegate;
    });
});