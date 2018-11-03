app.controller("myCtrl", function($scope, $http) {
    $scope.firstName = "Matthew";
    $scope.lastName= "Penning";

    $http.get("jason.php").then(function (response) {
      $scope.myData = response.data.records;
    });
});
