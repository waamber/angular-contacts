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

<<<<<<< Updated upstream
=======
  $scope.switchToFavorite = (contact) => {
    contact.favorite = true;
    let updatedContact = ContactService.createContactObject(contact);
    ContactService.updateContact(updatedContact, contact.id).then((results) => {
      getContacts();
    }).catch((error) => {
      console.log("Error in switchWatched", error);
    });
  };

  $scope.editContact = (contactId) => {
    $location.path(`/contacts/edit/${contactId}`);
  };

  $scope.contactDetail = (contactId) => {
    $location.path(`/contacts/details/${contactId}`);
  };

>>>>>>> Stashed changes
});