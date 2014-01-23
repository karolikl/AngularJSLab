var itemsOnLoanModule = angular.module('itemsOnLoan', ['ngRoute']);

itemsOnLoanModule.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'ItemsOverviewCtrl',
            templateUrl: '/partials/itemsonloan/overview.html'
        })
        //.when('/list', {
        //    controller: 'ContactListCtrl',
        //    templateUrl: '/partials/contactlist/list.html'
        //})
         //.when('/plaintext', {
         //    controller: 'ContactListCtrl',
         //    templateUrl: '/static/contactlist/plaintext.html'
         //})
        .otherwise({
            redirectTo: '/'
        });
});

itemsOnLoanModule.controller('ItemsOverviewCtrl', function ($scope) {
    $scope.loandata = [
        { name: 'Sue', items: [{ description: 'HTML5 book', status: 'Borrowed' }, { description: 'Jacket', status: 'Onloan' }] },
        { name: 'Dave', items: [{ description: '2 Chairs', status: 'Onloan' }] },
        { name: 'Nick', items: [{ description: '100 Dollars', status: 'Borrowed' }] },
        { name: 'Tracy', items: [{ description: 'Hammer', status: 'Borrowed' }, { description: 'Screwdriver', status: 'Borrowed' }] }];
});