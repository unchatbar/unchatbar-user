'use strict';

/**
 * @author Lars Wiedemann
 * @ngdoc directive
 * @name unchatbar-user.directive:profile
 * @restrict E
 * @description
 *
 * save client connections , for recall
 *
 */
angular.module('unchatbar-user').directive('unProfileLabel', [
    function () {
        return {
            restrict: 'E', //E = element, A = attribute, C = class, M = comment
            templateUrl: 'views/unchatbarUser/profile.html',
            controller: 'profile'
        };
    }
]);

