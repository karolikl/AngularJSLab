var contactlistModule = angular.module('contactlist', ['ngRoute']);

contactlistModule.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'ContactListCtrl',
            templateUrl: 'table.html'
        })
        .when('/list', {
            controller: 'ContactListCtrl',
            templateUrl: 'list.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

contactlistModule.controller('ContactListCtrl', function ($scope) {
    $scope.friends = [
        { name: 'John', email: 'john@mymail.com' },
        { name: 'Sue', email: 'sue@mymail.com' },
        { name: 'Dave', email: 'dave@mymail.com' },
        { name: 'Tracy', email: 'tracy@mymail.com' },
        { name: 'Hank', email: 'hank@mymail.com' },
        { name: 'Thomas ', email: 'thomas@mymail.com' },
        { name: 'Jonas', email: 'jonas@mymail.com' },
        { name: 'Catherine', email: 'catherine@mymail.com' },
        { name: 'Casie', email: 'casie@mymail.com' },
        { name: 'Luise', email: 'luise@mymail.com' },
        { name: 'Dan', email: 'dan@mymail.com' }];
});