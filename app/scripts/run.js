'use strict';
/**
 * @ngdoc overview
 * @name unchatbar-connection
 * @description
 * # unchatbar-connection
 *
 * Main module of the application.
 */
angular.module('unchatbar-user').run(['$rootScope', 'Profile',
    function ($rootScope, Profile) {
        Profile.initStorage();
        $rootScope.$on('BrokerPeerOpen', function () {
            Profile.initProfile();
        });
    }
]);
