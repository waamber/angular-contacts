'use strict';

app.controller("ViewCtrl", function ($location, $rootScope, $scope, $window, ContactService) {

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

  $scope.deleteAll = () => {
    ContactService.deleteAllContacts().then(() => {
      getContacts();
      $window.alert("YOU HAVE NO FRIENDS");
    }).catch((error) => {
      console.log("Error in deleteAll", error);
    });
  };

  $scope.switchToFavorite = (contact) => {
    contact.favorite = true;
    let updatedContact = ContactService.createContactObject(contact);
    ContactService.updateContact(updatedContact, contact.id).then((results) => {
      getContacts();
    }).catch((error) => {
      console.log("Error in switchWatched", error);
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

  $scope.editContact = (contactId) => {
    $location.path(`/contacts/edit/${contactId}`);
  };

  $scope.contactDetail = (contactId) => {
    $location.path(`/contacts/details/${contactId}`);
  };

});
