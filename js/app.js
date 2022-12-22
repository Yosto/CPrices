var pricesApp = angular.module('pricesApp',[]);

pricesApp.controller('PricesCtrl', ['$scope','$http', function($scope,$http){
	var vm = $scope;
	vm.searchItem = Array();
	$http.get('data/prices.json').success(function(data){
		vm.priceList = data;
	})

	vm.search = function(ingredient){
		console.log(vm.searchItem);
		if(ingredient.price == '1'){
			vm.searchItem.item = ingredient.price1;
		}
	}
}])
