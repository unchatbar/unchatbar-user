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
         * @require Broker
         * @description
         *
         * manage user profile
         *
         */
        this.$get = ['$rootScope', '$localStorage', '$sessionStorage', 'Broker',
            function ($rootScope, $localStorage, $sessionStorage, Broker) {

                var api = {
                    /**
                     * @ngdoc methode
                     * @name _storageProfile
                     * @propertyOf unchatbar-user.Profile
                     * @private
                     * @returns {Object} user/group storage
                     *
                     */
                    _storageProfile: {
                        user: {
                            id: '',
                            label: '',
                            image: '',
                            description: ''
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
                    initStorage: function () {
                        var storage = useLocalStorage ? $localStorage : $sessionStorage;
                        this._storageProfile = storage.$default({
                            user: {
                                id: '',
                                label: '',
                                image: '',
                                description: ''
                            }
                        });
                    },

                    /**
                     * @ngdoc methode
                     * @name initProfile
                     * @methodOf unchatbar-user.Profile
                     * @description
                     *
                     * init profile
                     */
                    initProfile: function () {
                        var peerId = Broker.getPeerId();
                        if (!this._storageProfile.user.id) {
                            this.set({
                                id: peerId,
                                label: peerId,
                                image: this._getIdenticons(peerId)
                            });
                        }
                    },

                    /**
                     * @ngdoc methode
                     * @name _getIdenticons
                     * @methodOf unchatbar-user.Profile
                     * @return {String} base64 jpg
                     * @description
                     *
                     * get a identicons
                     */
                    _getIdenticons: function (id) {
                        return blockies.create({ // All options are optional
                            seed: id, // seed used to generate icon data, default: random
                            size: 5, // width/height of the icon in blocks, default: 10
                            scale: 5 // width/height of each block in pixels, default: 5
                        }).toDataURL("image/jpg");
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
                        return _.clone(this._storageProfile.user);
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
                        this._storageProfile.user = profile;
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
