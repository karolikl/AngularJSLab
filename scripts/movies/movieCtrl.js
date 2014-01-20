function MovieCtrl($scope) {
    $scope.movies = [
        { title: 'The Shawshank Redemption', rating: '9.2', length: '142 min', director: 'Frank Darabont', stars: [{ name: 'Tim Robbins' }, { name: 'Morgan Freeman' }, { name: 'Bob Gunton' }], budget: 25000000 },
        { title: 'The Godfather', rating: '9.2', length: '175 min', director: 'Francis Ford Coppola', stars: [{ name: 'Marlon Brando' }, { name: 'Al Pacino' }, { name: 'James Caan' }], budget: 6000000 },
        { title: 'The Godfather: Part II', rating: '9.0', length: '200 min', director: 'Francis Ford Coppola', stars: [{ name: 'Al Pacino' }, { name: 'Robert De Niro' }, { name: 'Robert Duvall' }], budget: 13000000 },
        { title: 'Pulp Fiction', rating: '8.9', length: '154 min', director: 'Quentin Tarantino', stars: [{ name: 'John Travolta' }, { name: 'Uma Thurman' }, { name: 'Samuel L. Jackson' }], budget: 8000000 }];
}
