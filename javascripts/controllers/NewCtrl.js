'use strict';

app.controller("NewCtrl", function ($location, $rootScope, $scope, ContactService) {

  $scope.submit = function () {
    let newContact = $scope.user;
    newContact.uid = $rootScope.uid;
    newContact.favorite = false;
    ContactService.postNewContact(newContact).then(() => {
      $location.path('contacts/view');

    }).catch((error) => {
      console.log("Error in submit", error);
    });
  };
});