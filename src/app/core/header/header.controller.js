/**
 * @module header
 * @namespace app.core.header
 */
module.exports = function(ngModule){

    /**
     * Controller for the Header directive.
     *
     * @class HeaderController
     * @static
     * @user $scope
     * @uses PageLinkService
     * @return {angular.controller}
     */
    ngModule.controller('HeaderController', ['$scope','PageLinkService',function($scope,PageLinkService){

        /**
         * Holds the array of link for the view model.
         *
         * @property $scope.links
         * @type {Object}
         * @default null
         */
        $scope.links = PageLinkService;
    }]);
};