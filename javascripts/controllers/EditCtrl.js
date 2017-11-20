'use strict';

app.controller("EditCtrl", function ($location, $rootScope, $routeParams, $scope, ContactService) {
  $scope.contact = {};

  const getContact = () => {
    ContactService.getSingleContact($routeParams.id).then((results) => {
      $scope.contact = results.data;
    }).catch((error) => {
      console.log("Error in getContact", error);
    });
  };

  getContact();

  $scope.editSubmit = function (contact) {
    let updatedContact = ContactService.createContactObject(contact);
    ContactService.updateContact(updatedContact, $routeParams.id).then(() => {
      getContact();
      $location.path('contacts/view');
    }).catch((error) => {
      console.log("Error in editSubmit", error);
    });
  };

});