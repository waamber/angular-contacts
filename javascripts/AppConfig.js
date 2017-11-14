'use strict';

app.run(function (FIREBASE_CONFIG) {
  firebase.initializeApp(FIREBASE_CONFIG);
});

//cannot run own code in app.config
app.config(function ($routeProvider) {
  $routeProvider
    .when("/contacts/favorites", {
      templateUrl: 'partials/favorites.html',
      controller: 'FavoritesCtrl'
    })
    .when("/contacts/view", {
      templateUrl: 'partials/view.html',
      controller: 'ViewCtrl'
    })
    .when("/contacts/new", {
      templateUrl: 'partials/new.html',
      controller: 'NewCtrl'
    })
    .when("/login", {
      templateUrl: 'partials/login.html',
      controller: 'LoginCtrl'
    })
    .otherwise("/login");
});