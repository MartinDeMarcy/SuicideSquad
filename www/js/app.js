/**
 * Déclaration de l'application routeApp
 */
var routeApp = angular.module('SAURApp', [
    // Dépendances du "module"
    'ngRoute',
    'routeAppControllers'
]);

/**
 * Configuration du module principal : routeApp
 */
routeApp.config(['$routeProvider',
    function($routeProvider) { 
        
        // Système de routage
        $routeProvider
        .when('/homepage', {
            templateUrl: 'index.html',
            controller: 'indexCtrl'
        })
        .otherwise({
            redirectTo: '/home'
        });
    }
]);

**
 * Définition des contrôleurs
 */
var routeAppControllers = angular.module('routeAppControllers', []);


// Contrôleur de la page d'accueil
routeAppControllers.controller('homeCtrl', ['$scope',
    function($scope){
        $scope.message = "Bienvenue sur la page d'accueil";
    }
]);
