angular.module('faceoff.newthread', [
	'ionic',
	'services'
	])

.config(function($compileProvider){
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})

.controller('NewThreadController', function($scope, $rootScope, $state, $ionicModal, Camera, $timeout) {

  $scope = $rootScope;
  // a better way using services and injection through resolve:
    // http://learn.ionicframework.com/formulas/sharing-data-between-views/

  // make countdown timer that visually updates on page, before launching camera

  $scope.shoot = function() {
    // check for device type and launch webcam or phone cam here
    Camera.getPicture().then(function(imageURI) {
      $rootScope.newThreadImageURI = imageURI;
      $state.go('newthreadselect');
    }, function(err) {
      console.err(err);
    });
  };

  // if ($state.current.name === 'newthreadgetready') {
  //   $timeout($scope.shoot, 500);
  // }

});