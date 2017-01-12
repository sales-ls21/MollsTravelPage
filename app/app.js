"use strict";

var app = angular.module("eurovacation", ["ngParallax", "ngRoute"]);

app.config(function($routeProvider){
	$routeProvider
	.when("/", {
		templateUrl: "partials/home.html",
		controller: "homeCtrl"
	})
	.when("/london", {
		templateUrl: "partials/london.html",
		controller: "londonCtrl"
	})
	.when("/paris",{
		templateUrl: "partials/paris.html",
		controller: "parisCtrl"
	})
	.when("/beaune", {
		templateUrl: "partials/beaune.html",
		controller: "beauneCtrl"
	})
	.when("/swissalps", {
		templateUrl: "partials/swissalps.html",
		controller: "swissalpsCtrl"
	})
	.when("/munich", {
		templateUrl: "partials/munich.html",
		controller: "munichCtrl"
	})
	.otherwise("/");

}).config(function($locationProvider){
	 $locationProvider.html5Mode(true);
});