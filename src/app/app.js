/**
 * The purpose of this module is to provide a registration layer
 * to for the application modules of the application.  You only
 * edit this module when you add or remove a module to the application.
 *
 * NOTE: If you need to add or remove an Angular dependency (like UI-Router)
 * you will need to modify the 'app' variable of this module
 *
 * @example
 *      var app = angular.module("app", ["ui.router","Your.New.Dependency"]);
 *
 * @module app
 * @namespace app
 */

    /**
     * The static object created form importing and registering the main Angular dependency.
     * @class angular
     * @static
     */
    var angular = require("angular");

    /**
     * Creates the main AngularJS application module
     * titled 'app' and injects the main module dependencies
     * @class app
     * @static
     * @uses ui.router
     */
    var app = angular.module("app", ["ui.router"]);

    /**
     * The static object created from importing and registering the Angular Configuration you created.
     *
     * @class registerAngularConfiguration
     * @constructor
     * @static
     * @param ngModule {Module} The parent module to be registered with
     * @return {Module}
     */
    var registerAngularConfiguration = require("./app.config.js")(app);

    /**
     * The static object created from importing and registering the Angular Controller you created.
     *
     * @class registerControllerComponents
     * @constructor
     * @static
     * @param ngModule {Module} The parent module to be registered with
     * @return {Module}
     */
    var registerControllerComponents = require("./components/registeredComponents.js")(app);

    /**
     * The static object created from importing and registering the Angular Core Controller you created.
     * Core controllers, or components, are used across the application. These are not specific use components like
     * directives, but shared components such as headers, footers, etc...
     *
     * @class registerControllerComponents
     * @constructor
     * @static
     * @param ngModule {Module} The parent module to be registered with
     * @return {Module}
     */

    var registerCore = require("./core/registeredCore.js")(app);

    /**
     * The static object created  from importing and registering the Angular Directives you created.
     *
     * @class registerDirectives
     * @static
     * @param ngModule {Module} The parent module to be registered with
     * @return {Module}
     */
    var registerDirectives = require("./directives/registeredDirectives.js")(app);

    /**
     * The static object created  from importing and registering the Angular Factories you created.
     *
     * @class registerFactories
     * @static
     * @param ngModule {Module} The parent module to be registered with
     * @return {Module}
     */
    var registerFactories = require("./models/registeredFactories.js")(app);

    /**
     * The static object created  from importing and registering the Angular Services you created.
     *
     * @class registerServices
     * @static
     * @param ngModule {Module} The parent module to be registered with
     * @return {Module}
     */
    var registerServices = require("./services/registeredServices.js")(app);
