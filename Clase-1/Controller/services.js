//ng-class ejemplo
app.service('personService', function ($http, $q) {
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

    this.post = function(data){
        var deferred = $q.defer();
        var promise = deferred.promise;

        $http.post("http://curso-api.azurewebsites.net/api/Persons", data).then(function (response) {
            deferred.resolve(true);
        }, function (Error) {
            console.log(Error);
            deferred.reject(false);
        });
        return promise;
    }
});