'use strict';

/**
 * @author Lars Wiedemann
 * @ngdoc directive
 * @name unchatbar-user.directive:unProfileAdmin
 * @restrict E
 * @description
 *
 * save client connections , for recall
 *
 */
angular.module('unchatbar-user').directive('unProfileAdmin', [
    function () {
        return {
            restrict: 'E', //E = element, A = attribute, C = class, M = comment
            templateUrl: 'views/unchatbarUser/profile-admin.html',
            controller: 'profile',
            link: function (scope) {
                scope.newImage = '';
            }
        };
    }
]);
