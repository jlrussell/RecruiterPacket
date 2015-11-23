/**
 * The purpose of this module is to provide a registration layer
 * to for the Angular Services of the application.  You only
 * edit this module when you add or remove a service module to the application.
 *
 * @module service
 * @submodule PageLinkService
 * @namespace app.service
 */

module.exports = function (ngModule) {

    /**
     * Service which provides application navigation links
     *
     * @class PageLinkService
     * @static
     * @return {angular.service}
     */
    ngModule.service('PageLinkService', function(){
        return {
            brand: 'DBS Angular Template',
            index: { state:'home', desc:'Home'},
            about: { state:'about', desc:'About Me'},
            profile: {
                states: [
                    {state: 'account', desc: 'Account Settings'},
                    {state: 'profile', desc: 'Edit Profile'}
                ],
                desc: 'Your Stuff'
            }
        };
    });
};
