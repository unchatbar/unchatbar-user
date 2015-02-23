'use strict';

/**
 * @ngdoc controller
 * @name  unchatbar-user.controller:profile
 * @require $scope
 * @require Profile
 * @description
 *
 * manage user profile
 *
 */
angular.module('unchatbar-user').controller('profile', ['$scope', 'Profile',
    function ($scope, Profile) {



        /**
         * @ngdoc property
         * @name profile
         * @propertyOf unchatbar-user.controller:profile
         * @returns {String} name of user
         */
        $scope.profile = {};


        /**
         * @ngdoc methode
         * @name init
         * @methodOf unchatbar-user.controller:profile
         * @description
         *
         * init controller
         *
         */
        $scope.init = function(){
            $scope.profile =  Profile.get();
        };
        /**
         * @ngdoc methode
         * @name update
         * @methodOf unchatbar-user.controller:profile
         * @description
         *
         * update user profile
         *
         */
        $scope.update = function () {
            Profile.set($scope.profile);
            $scope.profile =  Profile.get();

        };

        $scope.$on('profileUpdate' , function(){
           $scope.init();
        });
    }
]);