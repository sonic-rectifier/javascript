app.controller("myFinalCtrl", function($scope, $http) {

    $http.get("read.php").then(function (response) {
      $scope.myData = response.data.records;
    });

    $http.get("readCompleted.php").then(function (response) {
      $scope.myCompletedData = response.data.records;
    });

    $scope.add = function(){
               $http({
               method: 'post',
               url: 'add.php',
               data: {item:$scope.item_to_add_text},

               }).then(function successCallback(response) {
                   $scope.users.push(response.data[0]);
               });
           }

});
