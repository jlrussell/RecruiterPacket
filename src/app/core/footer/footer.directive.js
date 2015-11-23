/**
 * @module footer
 * @namespace app.core.footer
 * @example
 *      <app-footer></app-footer>
 */
module.exports = function (ngModule) {

    /**
     *  This directive creates the standard html page footer.
     *
     *  @class FooterDirective
     *  @static
     *  @return {angular.directive}
     */
    ngModule.directive('appFooter', function(){
        return {
            template: require('./footer.view.html'),
            restrict: 'E',
            controller: 'FooterController'
        };
    });
};
