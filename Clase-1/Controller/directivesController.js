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
    $scope.remove = function (index) { 
        var id = $scope.persons[index].Id;
        $scope.persons.splice(index, 1);
        personService.delete(id);
    }
}]);