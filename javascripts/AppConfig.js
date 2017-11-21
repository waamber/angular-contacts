'use strict';

let isAuth = (AuthService) => new Promise((resolve, reject) => {
  if (AuthService.isAuthenticated()) {
    resolve();
  } else {
    reject();
  }
});

app.run(function ($location, $rootScope, AuthService, FIREBASE_CONFIG) {
  firebase.initializeApp(FIREBASE_CONFIG);

  $rootScope.$on('$routeChangeStart', function (event, currRoute, prevRoute) {
    const logged = AuthService.isAuthenticated();
    let appTo;
    if (currRoute.originalPath) {
      appTo = currRoute.originalPath.indexOf('/login') !== -1;
    }
    if (!appTo && !logged) {
      event.preventDefault();
      $location.path('/login');
    }
  });
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