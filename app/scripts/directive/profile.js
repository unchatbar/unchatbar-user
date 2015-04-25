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
            restrict: 'E',
            templateUrl: function(element,scope){
                return scope.customTemplateUrl || 'views/unchatbarUser/profile.html';
            },
            scope : {
                customTemplateUrl: '@'
            },
            controller: 'profile'
        };
    }
]);

