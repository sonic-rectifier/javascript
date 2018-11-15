app.controller("myFinalCtrl", function($scope, $http) {

    $http.get("read.php").then(function (response) {
      $scope.myData = response.data.records;
      // foreach (data in $scope.myData){
      //   if (data.finished = "0"){
      //     $scope.ToDoItems.push(data);
      //   }
      // }
      for (var index = 0; index < $scope.myData.length; index ++  ){
        //if ($scope.myData.finished === 0){
        //  $scope.ToDoItems.push($scope.myData[index]);
      //  }
      }

      $scope.ToDoItems = $scope.myData;

    });
});
