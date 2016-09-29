var app = angular.module('fyle', []);

app.controller('searchCtrl', ['$scope','$http',function($scope,$http) {
  $scope.data={
    cities: [
      {id: 'BANGALORE', name: 'Bangalore'},
      {id: 'KOLKATA', name: 'Kolkata'},
      {id: 'DELHI', name: 'Delhi'},
      {id: 'MUMBAI', name: 'Mumbai'},
      {id: 'CHANDIGARH', name: 'Chandigarh'}
    ]};
    $scope.itemChanged = function() {
      var url="https://app.fyle.in/api/bank_branches?city="+$scope.selectedCity+"&offset=0&limit=70";
      console.log(url);
      $http.get(url).success(function(response){
        console.log(response);
        $scope.banks=response;
      });

      console.log($scope.selectedCity);
    }
}]);
