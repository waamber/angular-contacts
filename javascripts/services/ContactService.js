'use strict';

app.service("ContactService", function ($http, $q, $rootScope, FIREBASE_CONFIG) {

  const getSavedContacts = (userUid) => {
    let contacts = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json?orderBy="uid"&equalTo="${userUid}"`).then((results) => {
        let fbContacts = results.data;
        Object.keys(fbContacts).forEach((key) => {
          fbContacts[key].id = key;
          contacts.push(fbContacts[key]);
        });
        resolve(contacts);
      }).catch((error) => {
        reject(error);
      });
    });
  };

  const getFavoriteContacts = (userUid) => {
    let contacts = [];
    return $q((resolve, reject) => {
      $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts.json?orderBy="uid"&equalTo="${userUid}"`).then((results) => {
        let fbContacts = results.data;
        Object.keys(fbContacts).forEach((key) => {
          fbContacts[key].id = key;
          if (fbContacts[key].favorite) {
            contacts.push(fbContacts[key]);
          }
          resolve(contacts);
        });
      }).catch((error) => {
        reject(error);
      });
    });
  };

  const postNewContact = (newContact) => {
    return $http.post(`${FIREBASE_CONFIG.databaseURL}/contacts.json`, JSON.stringify(newContact));
  };

  const deleteContact = (contactId) => {
    return $http.delete(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`);
  };

  const updateContact = (contact, contactId) => {
    return $http.put(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`, JSON.stringify(contact));
  };

  const createContactObject = (contact) => {
    return {
      "firstName": contact.firstName,
      "lastName": contact.lastName,
      "address": contact.address,
      "phoneNumber": contact.phoneNumber,
      "email": contact.email,
      "birthday": contact.birthday,
      "favorite": contact.favorite,
      "website": contact.website,
      "uid": contact.uid
    };
  };

<<<<<<< HEAD
  const getSingleContact = (contactId) => {
    return $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`);
  };

  return { createContactObject, getSingleContact, getFavoriteContacts, getSavedContacts, deleteContact, postNewContact, updateContact };
});
=======
  // const getSingleContact = (contactId) => {
  //   return $http.get(`${FIREBASE_CONFIG.databaseURL}/contacts/${contactId}.json`);
  // };

  return { createContactObject, getFavoriteContacts, getSavedContacts, deleteContact, postNewContact, updateContact };
});
>>>>>>> master
