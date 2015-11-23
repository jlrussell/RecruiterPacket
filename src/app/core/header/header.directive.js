/**
 * @module header
 * @namespace app.core.header
 * @example
 *      <app-header></app-header>
 *
 */
module.exports = function (ngModule) {

    /**
     *  This directive creates the standard html page header.
     *
     *  @class HeaderDirective
     *  @static
     *  @return {angualr.directive}
     */
    ngModule.directive('appHeader', function(){
        return {
            template: require('./header.view.html'),
            restrict: 'E',
            controller: 'HeaderController'
        };
    });
};
