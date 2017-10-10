app.controller('Clase1Controller', function ($scope) {

    $scope.Name ='Nico'

    var person = {
        id:1,
        firstName:"John",
        lastName:"Doe",
        ip:"192.168.0.1",
        gender:"male"
    };
    $scope.person = person;
});