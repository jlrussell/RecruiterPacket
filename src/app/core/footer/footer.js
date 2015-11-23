/**
 * The purpose of this module is to provide a registration layer
 * to register dependencies for the footer of the application.  You only
 * edit this file when you add or remove a footer component to your library.
 *
 * @module core
 * @submodule footer
 * @namespace app.core.footer
 */
module.exports = function(ngModule){

    /**
     * This implementation imports the Footer Controller dependency
     * and passes through the angular module for registration.
     *
     * @class registeredFooterController
     * @constructor
     * @static
     * @param ngModule {Module} The parent module to be registered with
     * @return {Module}
     */
    var registeredFooterController = require('./footer.controller.js')(ngModule);

    /**
     * This implementation imports the Footer Directive dependency
     * and passes through the angular module for registration.
     *
     * @class registeredFooterDirective
     * @constructor
     * @static
     * @param ngModule {Module} The parent module to be registered with
     * @return {Module}
     */
    var registeredFooterDirective = require('./footer.directive.js')(ngModule);


};