'use strict';

/**
 * @author Lars Wiedemann
 * @ngdoc directive
 * @name unchatbar-user.directive:fileModel
 * @restrict E
 * @description
 *
 * file upload
 *
 */
angular.module('unchatbar-user').directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            element.bind('change', function () {
                var file = element[0].files[0];
                var reader = new FileReader();
                reader.onload = function (evt) {
                    scope.$apply(function () {
                        modelSetter(scope, evt.target.result);
                    });
                };
                reader.readAsDataURL(file);
            });
        }
    };
}]);