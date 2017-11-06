angular.module('services', []).service('personService', function ($http, $q) {
    this.getAll = function () {
        var deferred = $q.defer();
        var promise = deferred.promise;

        $http.get("http://curso-api.azurewebsites.net/api/Persons").then(function (response) {
            deferred.resolve(response.data);
        }, function (Error) {
            console.log(Error);
            deferred.reject('Error calling all persons.');
        });
        return promise;
    }

    this.get= function (id) {
        var deferred = $q.defer();
        var promise = deferred.promise;

        $http.get("http://curso-api.azurewebsites.net/api/Persons/"+id).then(function (response) {
            deferred.resolve(response.data);
        }, function (Error) {
            console.log(Error);
            deferred.reject('Error calling get person byid.');
        });
        return promise;
    }
});


