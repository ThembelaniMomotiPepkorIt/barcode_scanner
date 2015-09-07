angular.module('starter.controllers', ['ionic','ngCordova'])

.controller('SelectionCtrl', function($scope, $cordovaBarcodeScanner){
	
	$scope.scanBarcode = function(){
		$cordovaBarcodeScanner.scan()
		.then(function(data){
				alert('format '+data.format);
			},function(error){
				console.log('Error '+error);
			})
	}
				
})

.controller('LandingCtrl', function(){

});