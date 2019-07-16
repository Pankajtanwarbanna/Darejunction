angular.module('mainController', [])

.controller('mainCtrl', function ($rootScope) {

    var app = this;

    app.home = true;

    $rootScope.$on('$routeChangeStart', function (event, next, current) {
        if(next.$$route) {
            app.home = false;
        } else {
            app.home = true;
        }
    })

});