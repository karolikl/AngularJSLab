shoppingListModule.controller('ShoppingListCtrl', function ($scope) {
    $scope.itemlist = [{ name: 'Apples', amount: 10 },
        { name: 'Milk', amount: 1 },
        { name: 'Juice', amount: 2 },
        { name: 'Bread', amount: 2 }
    ];

    $scope.add = function () {
        var newItem = { name: $scope.itemName, amount: $scope.itemAmount };
        $scope.itemlist.push(newItem);
    };
    
    $scope.delete = function (item) {
        var index = $scope.itemlist.indexOf(item);
        $scope.itemlist.splice(index, 1);
    };

    //$scope.addOne = function(item) {
    //    item.amount++;
    //};
})