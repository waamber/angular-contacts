'use strict';

app.controller("NewCtrl", function ($location, $rootScope, $scope, ContactService) {

  $scope.submit = function () {
    let newContact = $scope.user;
<<<<<<< HEAD
    $scope.user.uid = $rootScope.uid;
=======
    newContact.uid = $rootScope.uid;
    newContact.favorite = false;
>>>>>>> master
    ContactService.postNewContact(newContact).then(() => {
      $location.path('contacts/view');
    }).catch((error) => {
      console.log("Error in submit", error);
    });
  };

});
