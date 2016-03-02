"use strict";

angular.module("ngapp", [ "ui.router", "ngCordova", "ngStorage" ])

.run(function($rootScope, $state, $localstorage, $cordovaDevice, $cordovaStatusbar){
    document.addEventListener("deviceready", function () {
        $cordovaStatusbar.overlaysWebView(false); // Always Show Status Bar
        $cordovaStatusbar.styleHex('#616161'); // Status Bar With Red Color, Using Angular-Material Style
        window.plugins.orientationLock.lock("portrait");
    }, false);
    document.addEventListener("backbutton", function (e) {
        if($state.is('init')){
            navigator.app.exitApp();
        }  else{
            e.preventDefault();
        }
        }, false);
        
    if(typeof $localstorage.DungeonsDices == 'undefined')
    {
        
    } 
});
