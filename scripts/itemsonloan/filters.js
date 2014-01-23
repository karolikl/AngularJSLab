var itemsOnLoanFilters = angular.module('itemsOnLoanFilters', []);

itemsOnLoanFilters.filter('numBorrowed', function () {
    return function (loanitems) {
        return loanitems.filter(function (item) { return item.status == 'Borrowed'; }).length;
    };
});

//itemsOnLoanFilters.filter('numOnLoan', function () {
//    return function (loanitems) {
//        return loanitems.filter(function (item) { return item.status == 'On Loan'; }).length;
//    };
//});

//itemsOnLoanFilters.filter('borrowed', function () {
//    return function (loanitems) {
//        return loanitems.filter(function (item) { return item.status == 'Borrowed'; });
//    };
//});

//itemsOnLoanFilters.filter('onLoan', function () {
//    return function (loanitems) {
//        return loanitems.filter(function (item) { return item.status == 'On Loan'; });
//    };
//});