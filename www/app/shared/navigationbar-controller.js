"use strict";

angular.module("ngapp").controller("NavBarController", function( $state, $rootScope, $mdSidenav, $mdComponentRegistry){

    var ctrl = this;

    $rootScope.title = $state.current.title;
    
    this.openSideNav = function() {
        $mdSidenav('left').toggle();
    };

    this.closeSideNav = function() {
        $mdSidenav("left").close();
    };
});