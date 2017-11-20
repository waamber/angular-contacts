'use strict';

app.controller("NewCtrl", function ($location, $rootScope, $scope, ContactService) {

  $scope.submit = function () {
    let newContact = $scope.user;
    $scope.user.uid = $rootScope.uid;
    console.log(newContact);
    ContactService.postNewContact(newContact).then(() => {
      $location.path('contacts/view');

    }).catch((error) => {
      console.log("Error in submit", error);
    });
  };
});
