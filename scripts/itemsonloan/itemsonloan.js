var itemsOnLoanModule = angular.module('itemsOnLoan', ['ngRoute', 'itemsOnLoanFilters']);

itemsOnLoanModule.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'ItemsOverviewCtrl',
            templateUrl: 'overview.html'
        })
        .when('/details/:name', {
            controller: 'ItemDetailsCtrl',
            templateUrl: 'details.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});

itemsOnLoanModule.controller('ItemsOverviewCtrl', function ($scope) {
    $scope.loandata = [
        { name: 'Sue', items: [{ description: 'HTML5 book', status: 'Borrowed' }, { description: 'Jacket', status: 'On Loan' }] },
        { name: 'Dave', items: [{ description: '2 Chairs', status: 'On Loan' }] },
        { name: 'Nick', items: [{ description: '100 Dollars', status: 'Borrowed' }] },
        { name: 'Tracy', items: [{ description: 'Hammer', status: 'Borrowed' }, { description: 'Screwdriver', status: 'Borrowed' }] }];
});

itemsOnLoanModule.controller('ItemDetailsCtrl', function ($scope, $routeParams) {
    var loanData = [
        { name: 'Sue', items: [{ description: 'HTML5 book', status: 'Borrowed' }, { description: 'Jacket', status: 'On Loan' }] },
        { name: 'Dave', items: [{ description: '2 Chairs', status: 'On Loan' }] },
        { name: 'Nick', items: [{ description: '100 Dollars', status: 'Borrowed' }] },
        { name: 'Tracy', items: [{ description: 'Hammer', status: 'Borrowed' }, { description: 'Screwdriver', status: 'Borrowed' }] }];

    $scope.data = loanData.filter(function (item) { return item.name == $routeParams.name; })[0];
});