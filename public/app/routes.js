var app = angular.module('appRoutes', ['ngRoute'])

.config(function ($routeProvider, $locationProvider) {
    $routeProvider

        .when('/dashboard', {
            templateUrl : 'app/views/dashboard/dashboard.html',
            controller : 'dashboardCtrl',
            controllerAs : 'dashboard'
        })

        .otherwise({ redirectTo : '/'})

    $locationProvider.html5Mode({
        enabled : true,
        requireBase : false
    })
});

