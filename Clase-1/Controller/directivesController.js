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
        $scope.persons.splice(index, 1);
    }

    var _newObj = {};

    $scope.newObj = _newObj;

    $scope.add = function(){
        personService.post($scope.newObj).then(function(data){
            alert('Element has been added');
            personService.getAll().then(function(persons){
                $scope.persons = persons;
            });
        }, function(error) {
            alert('Error')
        });
    }

}]);