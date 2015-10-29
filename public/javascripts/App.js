(function(window, angular) {
  angular.module('kpi', [
    'ui.router',
    'nvd3',
    'kpi.controllers.MainController'
  ])
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/");
      //
      // Now set up the states
      $stateProvider
        .state('main', {
          url: "/",
          templateUrl: "/partials/main",
          controller: 'MainController'
        })
    })
})(window, window.angular);
