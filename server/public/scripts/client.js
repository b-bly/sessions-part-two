console.log('js');

var app = angular.module('JokeApp', []);

app.controller('JokeController', ['$http', function($http) {
    console.log('Message Controller has been loaded');
    var self = this;
    self.data = [];

    self.getInfo = function() {
        $http({
            method: 'GET',
            url: '/',
        }).then(function(response) {
            console.log(response.data);
            self.data = response.data;
        });
    }
    // self.postJokes = function() {
    //     $http({
    //         method: 'POST',
    //         url: '/jokes',
    //         data: self.newJoke
    //     }).then(function(response) {
    //         console.log(response);
    //         self.getJokes();
    //     });
    // }
    self.getInfo();
}]);