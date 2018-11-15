app.controller("myFinalCtrl", function($scope, $http) {

    $http.get("read.php").then(function (response) {
      $scope.myData = response.data.records;
    });

    $http.get("readCompleted.php").then(function (response) {
      $scope.myCompletedData = response.data.records;
    });
});
