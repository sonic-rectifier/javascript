app.controller("myCtrl", function($scope, $http) {
    $scope.firstName = "Matthew";
    $scope.lastName= "Penning";

    $http.get("read.php").then(function (response) {
      $scope.myData = response.data.records;
    });
});
