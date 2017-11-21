'use strict';

<<<<<<< HEAD
app.controller("FavoritesCtrl", function ($location, $rootScope, $scope, ContactService) {
=======
app.controller("FavoritesCtrl", function ($rootScope, $scope, ContactService) {
>>>>>>> master

  const getContacts = () => {
    ContactService.getFavoriteContacts($rootScope.uid).then((results) => {
      $scope.contacts = results;
    }).catch((error) => {
      console.log("Error in getContacts", error);
    });
  };

  getContacts();

<<<<<<< HEAD
=======

>>>>>>> master
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

<<<<<<< HEAD
  $scope.contactDetail = (contactId) => {
    $location.path(`/contacts/details/${contactId}`);
  };

  $scope.contactEdit = (contactId) => {
    $location.path(`/contacts/edit/${contactId}`);
  };
=======
  return { getContacts };
>>>>>>> master

});