'use strict';

app.controller("ViewCtrl", function ($rootScope, $scope, ContactService) {

  $scope.contacts = [];

  const getContacts = () => {
    ContactService.getSavedContacts($rootScope.uid).then((results) => {
      $scope.contacts = results;
    }).catch((error) => {
      console.log("Error in ContactService", error);
    });
  };

  getContacts();

  $scope.deleteContact = (contactId) => {
    ContactService.deleteContact(contactId).then((result) => {
      getContacts();
    }).catch((error) => {
      console.log("Error in deleteContacts", error);
    });
  };

});