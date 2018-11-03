app.controller("myCtrl", function($scope, $http) {
    $scope.firstName = "Matthew";
    $scope.lastName= "Penning";

    $http.get("json.php").then(function (response) {
      $scope.myData = response.data.records;
    });
});
