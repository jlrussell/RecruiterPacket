/**
 * The purpose of this module is to provide a registration layer
 * to register dependencies for the header of the application.  You only
 * edit this file when you add or remove a footer component to your library.
 *
 * @module core
 * @submodule header
 * @namespace app.core.header
 *
 */
module.exports = function(ngModule) {

    /**
     * This implementation imports the Header Controller dependency
     * and passes through the angular module for registration.
     *
     * @class registeredHeaderController
     * @constructor
     * @static
     * @param ngModule {Module} The parent module to be registered with
     * @return {Module}
     */
     var registeredHeaderController = require('./header.controller.js')(ngModule);

    /**
     * This implementation imports the Header Directive dependency
     * and passes through the angular module for registration.
     *
     * @class registeredHeaderDirective
     * @constructor
     * @static
     * @param ngModule {Module} The parent module to be registered with
     * @return {Module}
     */
     var registeredHeaderDirective = require('./header.directive.js')(ngModule);

};