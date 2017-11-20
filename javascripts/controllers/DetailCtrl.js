'use strict';

app.controller("DetailCtrl", function ($location, $routeParams, $scope, ContactService) {
  $scope.contact = {};

  const getContacts = () => {
    ContactService.getSingleContact($routeParams.id).then((results) => {
      $scope.contact = results.data;
    }).catch((error) => {
      console.log("Error in getSingleContact in DetailCtrl", error);
    });
  };

  getContacts();

  $scope.switchToUnfavorite = (contact) => {
    contact.favorite = false;
    let updatedContact = ContactService.createContactObject(contact);
    ContactService.updateContact(updatedContact, $routeParams.id).then((results) => {
      getContacts();
    }).catch((error) => {
      console.log("Error in switchToUnfavorite in DetailCtrl", error);
    });
  };

  $scope.switchToFavorite = (contact) => {
    contact.favorite = true;
    let updatedContact = ContactService.createContactObject(contact);
    ContactService.updateContact(updatedContact, $routeParams.id).then((results) => {
      getContacts();
    }).catch((error) => {
      console.log("Error in switchToFavorite in DetailCtrl", error);
    });
  };

  $scope.editContact = (contactId) => {
    $location.path(`/contacts/edit/${$routeParams.id}`);
  };

});
