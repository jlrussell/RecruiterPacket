/**
 * The purpose of this module is to provide a registration layer
 * to for the application modules of the application.  You only
 * edit this module when you add or remove a module to the application.
 *
 * This module manages configuration of the Angular application.
 * @module app
 * @submodule configuration
 * @namespace app
 */
module.exports = function(ngModule){

    /**
     * The application configuration function which establishes routing behavior.
     * NOTE: By default this application uses Angular UI-Router and does not use ngRoute.
     * To learn more about UI-Router visit: http://angular-ui.github.io/ui-router/
     *
     * @class config
     * @static
     * @uses $urlRouterProvider
     * @uses $locationProvider
     * @uses $stateProvider
     * @return {angluar.config}
     */
    ngModule.config(['$urlRouterProvider', '$locationProvider', '$stateProvider',
        function($urlRouterProvider,$locationProvider,$stateProvider) {

            /**
             * @method  $locationProvider.html5Mode
             * @param Mode {Boolean} Set the configuration for URL hashbang inclusion
             */
        $locationProvider.html5Mode(false);

            /**
             * @method $urlRouterProvider.otherwise
             * @param State {String} Sets the default view state route for
             * urls which are called, but do not exist as part of the application.
             */
        $urlRouterProvider.otherwise("/home");

            /**
             * @method  $stateProvider.state
             * @param State {String} Sets the name of the view state
             * @param Configuration {Object} Sets the routing configuration for the view state
             */
        $stateProvider
        .state("home",
            {
                url: "/home",
                template: require("./components/home/home.view.html"),
                controller: "HomeController"
            }
        );
    }]);

};