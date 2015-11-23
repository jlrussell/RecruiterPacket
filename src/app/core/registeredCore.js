/**
 * The purpose of this module is to provide a registration layer
 * to register dependencies for the Core Components of the application.  You only
 * edit this file when you add or remove a core component to your library.
 *
 * @module app
 * @submodule core
 * @namespace app.core
 */

module.exports = function registeredCore(ngModule){
    /**
     * The static object created from importing and registering your header module.
     *
     * @class registerHeader
     * @constructor
     * @static
     * @param ngModule {Module} The parent module to be registered with
     * @return {Module}
     */
    var registerHeaderModule = require('./header/header.js')(ngModule);

    /**
     * The static object created from importing and registering your footer module.
     *
     * @class registerFooter
     * @constructor
     * @static
     * @param ngModule {Object} The parent module to be registered with
     * @return {Module}
     */
    var registerFooterModule = require('./footer/footer.js')(ngModule);
};