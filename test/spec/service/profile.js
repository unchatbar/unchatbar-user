'use strict';

describe('Serivce: Profile', function () {
    var ProfileService, rootScope, sessionStorage, BrokerService;
    beforeEach(module('unchatbar-user'));


    beforeEach(inject(function ($rootScope, $sessionStorage, Profile, Broker) {
        rootScope = $rootScope;
        ProfileService = Profile;
        BrokerService = Broker;
        sessionStorage = $sessionStorage;
    }));

    describe('check methode', function () {

        describe('initStorage', function () {
            var sessionStorage = {};
            beforeEach(inject(function ($sessionStorage) {
                sessionStorage = $sessionStorage;
                spyOn(sessionStorage, '$default').and.returnValue( {test: 'data'});
                ProfileService.initStorage();
            }));
            it('should call `$sessionStorage.$default` with object', function () {
                expect(sessionStorage.$default).toHaveBeenCalledWith({
                    user: {label: '',id:'', image: ''}
                });
            });
            it('should set  `MessageTextService._storage` return value from `$sessionStorage.$default`', function () {
                expect(ProfileService._storageProfile).toEqual({test: 'data'});
            });
        });
        describe('initProfile', function () {
            beforeEach(function () {
                spyOn(BrokerService, 'getPeerId').and.returnValue('ownPeerId');
                spyOn(ProfileService, 'set').and.returnValue(true);
                spyOn(ProfileService, '_getIdenticons').and.returnValue('baseImage');
            });
            describe('profile.id is empty', function () {
                beforeEach(function () {
                    ProfileService._storageProfile.user = {};
                });
                it('should call `Profile._getIdenticons` with peerId', function () {
                    ProfileService.initProfile();
                    expect(ProfileService._getIdenticons).toHaveBeenCalledWith('ownPeerId');
                });
                it('should create profile', function () {
                    ProfileService.initProfile();
                    expect(ProfileService.set).toHaveBeenCalledWith({
                        id: 'ownPeerId',
                        label: 'ownPeerId',
                        image: 'baseImage'
                    });
                });
            });
            describe('profile.id is nt empty', function () {
                beforeEach(function () {
                    ProfileService._storageProfile.user = {id: 'ownPeerId', name: 'test'};
                });
                it('should create profile', function () {
                    ProfileService.initProfile();
                    expect(ProfileService._storageProfile.user).toEqual({id: 'ownPeerId', name: 'test'});
                });
            });

        });

        describe('get', function () {
            it('should return profile from storage', function () {
                ProfileService._storageProfile.user = 'test';
                expect(ProfileService.get()).toBe('test');
            });
        });

        describe('set', function () {
            it('should set data to storage', function () {
                ProfileService._storageProfile.user = {};
                ProfileService.set({data : 'test'});
                expect(ProfileService._storageProfile.user).toEqual({data : 'test'});
            });


        });
    });
})
;