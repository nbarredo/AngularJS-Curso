app.controller('DetailsController', ['$scope', 'personService', '$routeParams', function ($scope, personService, $routeParams) {
    $scope.person = {};
   
    var personId = $routeParams.personId;
    var promise = personService.get(personId);
    promise.then(function (data) {
        
        $scope.person = data;
        $scope.person.dirty = false;
       
    }, function (error) {

        });  
    $scope.$watch('person.FirstName', function (newValue, oldValue) { 
        $scope.person.oldName = oldValue; 
    });
}]);