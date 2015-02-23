'use strict';

/**
 * @author Lars Wiedemann
 * @ngdoc service
 * @name unchatbar-user.ProfileProvider
 * @description
 * # peer
 * config storage for user profile
 */
angular.module('unchatbar-user')
    .provider('Profile', function () {
        var useLocalStorage = false;

        /**
         * @ngdoc methode
         * @name setLocalStorage
         * @methodOf unchatbar-user.ProfileProvider
         * @description
         *
         * use local storage for store peerId
         *
         */
        this.setLocalStorage = function () {
            useLocalStorage = true;
        };


        /**
         * @ngdoc service
         * @name unchatbar-user.Profile
         * @require $rootScope
         * @require $sessionStorage
         * @require $localStorage
         * @require Connection
         * @description
         *
         * manage user profile
         *
         */
        this.$get = ['$rootScope', '$localStorage', '$sessionStorage',
            function ($rootScope, $localStorage, $sessionStorage) {

                var api = {
                    /**
                     * @ngdoc methode
                     * @name _storageProfile
                     * @propertyOf unchatbar-user.Profile
                     * @private
                     * @returns {Object} user/group storage
                     *
                     */
                    _storageProfile:{
                        profile: {
                            label : '',
                            image : ''
                        }
                    },
                    /**
                     * @ngdoc methode
                     * @name initStorage
                     * @methodOf unchatbar-user.Profile
                     * @description
                     *
                     * init storage
                     */
                    initStorage : function(){
                        var storage = useLocalStorage ? $localStorage : $sessionStorage;
                        this._storageProfile = storage.$default({
                            profile: {
                                label : '',
                                image : ''
                            }
                        });

                    },

                    /**
                     * @ngdoc methode
                     * @name get
                     * @methodOf unchatbar-user.Profile
                     * @description
                     *
                     * get profile
                     *
                     */
                    get: function () {
                        return _.clone(this._storageProfile.profile);
                    },

                    /**
                     * @ngdoc methode
                     * @name set
                     * @methodOf unchatbar-user.Profile
                     * @parms {Object} profile information to profile
                     * @description
                     *
                     * set profile
                     *
                     */
                    set: function (profile) {
                        this._storageProfile.profile = profile;
                        /**
                         * @ngdoc event
                         * @name profileUpdate
                         * @eventOf unchatbar-user.Profile
                         * @eventType broadcast on root scope
                         * @description
                         *
                         * send notic profile update
                         *
                         */
                        $rootScope.$broadcast('profileUpdate');
                    }
                };
                return api;
            }
        ];
    }
);
