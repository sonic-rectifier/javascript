app.controller("myFinalCtrl", function($scope, $http) {

    $http.get("read.php").then(function (response) {
      $scope.myData = response.data.records;
    });

    $http.get("readCompleted.php").then(function (response) {
      $scope.myCompletedData = response.data.records;
    });

    $scope.add = function(){
              //alert("entered add");
            //  alert($scope.item_to_add_text);
               $http({
               method: 'post',
               url: 'add.php',
               data: {item:$scope.item_to_add_text},
               //data: {item:"test"},

               }).then(function successCallback(response) {
                  $scope.myData.push(response.data[0]);
               });
           }

     $scope.delete = function(){
                alert("entered delete");
                // let tableRow = document.getElementsByClassName('not_completed');
                // for (var index = 0; index < tableRow.length; ++index) {
                //   alert ("index")
                //   alert(tableRow.children[1]);
                // }

                $http({
                method: 'post',
                url: 'delete.php',
                //data: {item:$scope.item_to_add_text},
                data: {item:"eggs"},

                }).then(function successCallback(response) {
                    $scope.myData.push(response.data[0]);
                });
            }

});
