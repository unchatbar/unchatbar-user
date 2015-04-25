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
            restrict: 'E',
            templateUrl: function(element){
                return element.attr('data-custom-template-url') || 'views/unchatbarUser/profile-admin.html';
            }
            controller: 'profile',
            link: function (scope) {

            }
        };
    }
]);
