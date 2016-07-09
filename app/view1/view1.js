'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
  $scope.showAddEmployeeForm = false;
  $scope.showEmployeeData = false;
  $scope.employeeData;
  $scope.emplyees =[
    {
      "employeeNumber": "32423",
      "employeeName": "sadsadf1",
      "employeeId": "32445",
      "employeeBirthDay": "1998-06-29T21:00:00.000Z",
      "employeeGender": "male",
      "$$hashKey": "object:17"
    },
    {
      "employeeNumber": "32424",
      "employeeName": "sadsadf2",
      "employeeId": "32446",
      "employeeBirthDay": "1998-06-29T21:00:00.000Z",
      "employeeGender": "male",
      "$$hashKey": "object:18"
    }
  ];
  $scope.tempEmployee = {employeeNumber:'' , employeeName:'',  employeeId:'' , employeeBirthDay:'' , employeeGender:''};
  var today = new Date();
  var minAge = 18;
  $scope.minAge = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());

  function showAddEmployee(){
    $scope.showEmployeeData =false;
    $scope.showAddEmployeeForm = true;
  }

  $scope.showAddEmployeeFormFunc = showAddEmployee;

  function hideAddEmployee(){
    $scope.showAddEmployeeForm = false;
  }

  $scope.hideAddEmployeeFormFunc = hideAddEmployee;

  function submitNewEmployee(){
    showEmployeeDataSetFalse();
    $scope.emplyees.push($scope.tempEmployee);
    $scope.tempEmployee = {employeeNumber:'' , employeeName:'',  employeeId:'' , employeeBirthDay:'' , employeeGender:''};
    $scope.hideAddEmployeeFormFunc();
  }

  $scope.submitNewEmployeeFunc = submitNewEmployee;

  function showEmployeeData(chossedEmployee) {
    hideAddEmployee();
    $scope.showEmployeeData = true;
    $scope.employeeData = chossedEmployee ;
  }
  $scope.showEmployeeDatafunc = showEmployeeData;
  

}]);