/**
 * @module app
 * @submodule component
 * @namespace app.component
 */
module.exports = function(ngModule){

    /**
     * The static object created when importing and registering the HomeController
     *
     * @class registerHomeController
     * @constructor
     * @static
     * @param ngModule {Module} The parent module to be registered with
     * @return {Module}
     */
    var registerHomeController = require('./home/home.controller.js')(ngModule);
};