/**
 * @module footer
 * @namespace app.core.footer
 */
module.exports = function(ngModule){

    /**
     * Controller for the Header directive.
     *
     * @class FooterController
     * @static
     * @uses $scope
     * @return {angualr.controller}
     */
    ngModule.controller('FooterController', ['$scope',function($scope){
        /**
         * Words of wisdom for the user
         *
         * @property $scope.wordsOfWisdom
         * @type {string}
         * @default null
         */
        $scope.wordsOfWisdom = "It's a beautiful day in the neighborhood...";
    }]);
};