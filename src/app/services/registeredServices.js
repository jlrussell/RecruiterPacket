/**
 * The purpose of this module is to provide a registration layer
 * to for the Angular Services of the application.  You only
 * edit this module when you add or remove a service module to the application.
 *
 * @module app
 * @submodule service
 * @namespace app.service
 */
module.exports = function(ngModule){

    /**
     * The static object created when importing and registering the PageLinkService
     *
     * @class registerPageLinkService
     * @constructor
     * @static
     * @param ngModule {Module} The parent module to be registered with
     * @return {Module}
     */
    var registeredHeaderService = require("./pageLink.service.js")(ngModule);
};
