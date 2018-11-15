app.controller("myFinalCtrl", function($scope, $http) {

    $http.get("read.php").then(function (response) {
      $scope.myData = response.data.records;
      // foreach (data in $scope.myData){
      //   if (data.finished = "0"){
      //     $scope.ToDoItems.push(data);
      //   }
      // }
      $scope.myData.forEach(function(data){
        if (data.finished = "0"){
          $scope.ToDoItems.push(data);
        }
      });

      //$scope.ToDoItems = $scope.myData;

    });
});
