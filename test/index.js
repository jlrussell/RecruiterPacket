/* Import angular dependency and angular application module*/
var angular = require("angular");
var app = angular.module("app");

/* Register tests here */
require ("./components/home/home.controller.spec.js")(app);
