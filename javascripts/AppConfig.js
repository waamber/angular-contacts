'use strict';

app.run(function (FIREBASE_CONFIG) {
  firebase.initializeApp(FIREBASE_CONFIG);
});

//cannot run own code in app.config
app.config(function ($routeProvider) {
  $routeProvider
    .when("/favorites", {
      templateUrl: 'partials/favorites.html',
      controller: 'FavoritesCtrl'
    })
    .when("/view", {
      templateUrl: 'partials/view.html',
      controller: 'ViewCtrl'
    })
    .when("/new", {
      templateUrl: 'partials/new.html',
      controller: 'NewCtrl'
    })
    .when("/login", {
      templateUrl: 'partials/login.html',
      controller: 'LoginCtrl'
    })
    .otherwise("/login");
});