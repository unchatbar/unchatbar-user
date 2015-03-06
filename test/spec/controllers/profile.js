'use strict';

describe('Controller: profile', function () {

    beforeEach(module('unchatbar-user'));

    var profileCTRL, scope, profileService, BrokerService;

    beforeEach(inject(function ($controller, $rootScope, Profile,Broker) {
        profileService = Profile;
        scope = $rootScope.$new();
        BrokerService = Broker;
        profileCTRL = function () {
            $controller('profile', {
                $scope: scope,
                Profile : profileService,
                Broker : BrokerService
            });
        };
    }));

    describe('check init', function () {
        it('should set `$scope.profile` to emty object' , function(){
            profileCTRL();
            expect(scope.profile).toEqual({});
        });

        it('should set `$scope.showName` to false' , function(){
            profileCTRL();
            expect(scope.showName).toBeFalsy();
        });
    });
    describe('check methode', function () {
        beforeEach(function(){
            profileCTRL();
        });
        describe('init' , function(){
            beforeEach(function(){
                spyOn(profileService,'get').and.returnValue({name:'test'});
                spyOn(BrokerService,'getPass').and.returnValue('clientPasword');
            });
            it('should set return value from `Profile.get` to `$scope.profile`' , function(){
                scope.profile = {};
                scope.init();

                expect(scope.profile).toEqual({name:'test'});
            });

            it('should set return value from `Profile.get` to `$scope.profile`' , function(){
                scope.pass = '';
                scope.init();

                expect(scope.pass).toBe('clientPasword');
            });
        });

        describe('update' , function(){
            beforeEach(function(){
                spyOn(profileService,'get').and.returnValue({name:'test'});
                spyOn(profileService,'set').and.returnValue(true);
            });


            it('should call `Profile.set` with `$scope.profile`' , function(){
                scope.showName = true;
                scope.profile = {'name' : 'test'};
                scope.update();

                expect(profileService.set).toHaveBeenCalledWith({name:'test'});
            });

            it('should set return of `Profile.get` to `$scope.profile`' , function(){
                scope.showName = true;

                scope.update();

                expect(scope.profile).toEqual({name:'test'});
            });

        });

    });



});
