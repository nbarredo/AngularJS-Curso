app.controller('DirectivesController',['$scope', 'personService', function ($scope, personService) {
    $scope.persons = [];
    var promise = personService.getAll();
    promise.then(function (data) {
        $scope.persons = data;

    }, function(error) {

        });
    $scope.isFemale = function (person) {
        return person.Gender == 'Female';
    }
}]);