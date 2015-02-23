'use strict';

describe('Serivce: Profile', function () {
    var ProfileService, rootScope, sessionStorage;
    beforeEach(module('unchatbar-user'));


    beforeEach(inject(function ($rootScope, $sessionStorage, Profile ) {
        rootScope = $rootScope;
        ProfileService = Profile;
        sessionStorage = $sessionStorage;
    }));

    describe('check methode', function () {

        describe('initStorage', function () {
            var sessionStorage = {};
            beforeEach(inject(function ($sessionStorage) {
                sessionStorage = $sessionStorage;
                spyOn(sessionStorage, '$default').and.returnValue({test: 'data'});
                ProfileService.initStorage();
            }));
            it('should call `$sessionStorage.$default` with object', function () {
                expect(sessionStorage.$default).toHaveBeenCalledWith({
                    profile: {label: '',image: ''}
                });
            });
            it('should set  `MessageTextService._storage` return value from `$sessionStorage.$default`', function () {
                expect(ProfileService._storageProfile).toEqual({test: 'data'});
            });
        });

        describe('get' , function(){
            it('should return profile from storage' , function(){
                ProfileService._storageProfile.profile = 'test';
                expect(ProfileService.get()).toBe('test');
            });
        });

        describe('set' , function(){
            it('should set data to storage' , function(){
                ProfileService._storageProfile.profile = '';
                ProfileService.set('test');
                expect(ProfileService._storageProfile.profile).toBe('test');
            });


        });
    });
});