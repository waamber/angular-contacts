'use strict';

app.controller("FavoritesCtrl", function ($location, $rootScope, $scope, ContactService) {

  const getContacts = () => {
    ContactService.getFavoriteContacts($rootScope.uid).then((results) => {
      $scope.contacts = results;
    }).catch((error) => {
      console.log("Error in getContacts", error);
    });
  };

  getContacts();

  $scope.deleteContact = (contactId) => {
    ContactService.deleteContact(contactId).then((result) => {
      getContacts();
    }).catch((error) => {
      console.log("Error in deleteContact", error);
    });
  };

  $scope.switchToUnfavorite = (contact) => {
    contact.favorite = false;
    let updatedContact = ContactService.createContactObject(contact);
    ContactService.updateContact(updatedContact, contact.id).then((results) => {
      getContacts();
    }).catch((error) => {
      console.log("Error in switchToUnfavorite", error);
    });
  };

  $scope.contactDetail = (contactId) => {
    $location.path(`/contacts/details/${contactId}`);
  };

  $scope.contactEdit = (contactId) => {
    $location.path(`/contacts/edit/${contactId}`);
  };

});