angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
	$scope.bill = {};
	// $scope.chargesUpTo100 = {'st0end50':1.45, 'st51end100':2.60};
	// $scope.chargesUpTo200 = {'st0end50':2.60, 'st51end100':2.60, 'st101end150':3.60, 'st151end200':3.60};
	// $scope.chargesAbove200 = {'st0end50':2.60, 'st51end100':2.60, 'st101end150':3.60, 'st151end200':3.60};
	$scope.chargesUpTo100 = [1.45,2.60];
	$scope.chargesUpTo200 = [2.60,2.60,3.60,3.60];
	$scope.chargesAbove200 = [2.60,3.25,4.88,5.63,6.38,6.88,7.38,7.38,7.88,7.88,8.38];

	var getBillAmount = function(charges,div,rem){
		var sum = (div > 9) ? rem*charges[10] : rem*charges[div];
		var qtyAbove200 = (div>10) ? (div - 10) : 0;
		for (var i = 0; i<div-qtyAbove200; i++) {
			sum = sum + 50*charges[i];
		};
		for (var i = 0; i<qtyAbove200; i++) {
			sum = sum + 50*charges[10];
		};
		return sum;
	};

	$scope.calcBill = function(unit){
		var div = Math.floor(unit/50);
		var rem = unit % 50;
		if (unit<=100){
			$scope.bill.amount = getBillAmount($scope.chargesUpTo100, div,rem);
		}else if (unit>100 && unit<=200){
			$scope.bill.amount = getBillAmount($scope.chargesUpTo200, div,rem);
		}else if (unit>200){
			$scope.bill.amount = getBillAmount($scope.chargesAbove200, div,rem);
		}
	};
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
