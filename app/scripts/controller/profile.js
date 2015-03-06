'use strict';

/**
 * @ngdoc controller
 * @name  unchatbar-user.controller:profile
 * @require $scope
 * @require Profile
 * @require Broker
 * @description
 *
 * manage user profile
 *
 */
angular.module('unchatbar-user').controller('profile', ['$scope', 'Profile','Broker',
    function ($scope, Profile,Broker) {



        /**
         * @ngdoc property
         * @name profile
         * @propertyOf unchatbar-user.controller:profile
         * @returns {String} name of user
         */
        $scope.profile = {};

        /**
         * @ngdoc property
         * @name pass
         * @propertyOf unchatbar-user.controller:profile
         * @returns {String} npassword for peer server
         */
        $scope.pass = '';



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
            $scope.pass = Broker.getPass();
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