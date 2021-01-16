(function() {
    "use strict";
    var app = angular.module("MainApp", ["ngRoute"]);
    app.config(["$routeProvider", "$locationProvider",
        function ($routeProvider, $locationProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "home.html",
                    title: "Home - Andre Nguyen"
                })
                .when("/videos", {
                    templateUrl: "videos.html",
                    title: "Videos - Andre Nguyen"
                })
                .when("/about", {
                    templateUrl: "about.html",
                    title: "About - Andre Nguyen"
                })
                .when("/contact", {
                    templateUrl: "contact.html",
                    title: "Contact - Andre Nguyen"
                });
            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
        }]);

    app.controller("MainController", [
        "$scope",
        "$route",
        "$location",
        mainController
    ]);

    app.controller("ContactController", [
        "$scope",
        contactController
    ]);

    function mainController($scope, $route, $location) {
        var vm = this;
        if($location.path() != '/') {
            let path = localStorage.getItem("path");
            $location.path(path);
        }
        $scope.$on("$routeChangeSuccess", function handleRouteChangeSuccessEvent(evt) {
            vm.view = {
                title: $route.current.title
            }
        });
    }

    function contactController($scope) {
        var vm = this;
    }
}()); 