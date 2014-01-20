imageModule.controller('ImageCtrl', function ($scope) {
    $scope.dogs = [{ size: 'Large', breed: 'Golden Retriever' },
        { size: 'Medium', breed: 'Kleiner Münsterländer' }];

    $scope.dogsize = $scope.dogs[0];
})