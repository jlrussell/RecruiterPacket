/**
 * @module component
 * @submodule home
 * @namespace app.component.home
 */
module.exports = function(ngModule){

    /**
     * Controller for the Home view models
     *
     * @class HomeController
     * @static
     * @uses $scope
     * @return {angular.controller}
     */
    ngModule.controller('HomeController', ['$scope',function($scope){

        /**
         * A welcome message for a user
         * @property $scope.welcome
         * @type {string}
         * @default null
         */
        $scope.welcome = "Welcome Home ET, welcome home...";

        /**
         * Logs message to browser console.  Takes any generic object
         * and prints it out.
         * @method log
         * @param {object} obj
         * @return void
         */
        function log(obj){
            console.log(obj);
        }

    }]);
};