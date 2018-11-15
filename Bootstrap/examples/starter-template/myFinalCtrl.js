app.controller("myFinalCtrl", function($scope, $http) {

    $http.get("readCompleted.php").then(function (response) {
      $scope.myData = response.data.records;


    });
});
