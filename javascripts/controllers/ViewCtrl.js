'use strict';

app.controller("ViewCtrl", function ($location, $rootScope, $scope, ContactService) {

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

<<<<<<< HEAD
=======

  // $scope.savedFavorite = (contact) => {
  //   contact.uid = $rootScope.uid;
  //   contact.favorite = true;
  //   let favoriteContact = ContactService.createContactObject(contact);
  //   ContactService.postNewContact(favoriteContact).then(() => {
  //     getContacts();
  //     $location.path('/contacts/favorites');
  //   }).catch((error) => {
  //     console.log("Error in savedFavorite", error);
  //   });
  // }; //where does this function go??

>>>>>>> master
  $scope.switchToFavorite = (contact) => {
    contact.favorite = true;
    let updatedContact = ContactService.createContactObject(contact);
    ContactService.updateContact(updatedContact, contact.id).then((results) => {
      getContacts();
    }).catch((error) => {
      console.log("Error in switchWatched", error);
    });
  };

<<<<<<< HEAD
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
=======
});
>>>>>>> master
