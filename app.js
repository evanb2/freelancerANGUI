var freelancer = angular.module('freelancer', ['ui.router']);

freelancer.config(function($stateProvider) {
    $stateProvider.state('home', {
        url: "",
        templateUrl: "partials/home.html"
    });
});

//directives
freelancer.directive("border", function() {
    return function (scope, element, attrs) {
        element.bind("mouseenter", function() {
            
        });
    }
});
