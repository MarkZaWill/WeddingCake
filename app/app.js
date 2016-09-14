"use strict";

/*exported Wedding App*/

let Wedding = angular.module("Wedding",['ngRoute']);

/*Setting up the routes for the Wedding app*/

Wedding.config(["$routeProvider",
	function($routeProvider){
		$routeProvider.

		// when("/", {
		// 	templateUrl: "partials/login.html",
		// 	// controller:"loginController"
		// }).
		when("/",{
			templateUrl: "partials/main",
			controller: "mainController"
		}).
		when("/twitter",{
			templateUrl: "partials/twitter",
			// controller: "twitterController"
		});
  }]);