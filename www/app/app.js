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
    
    $rootScope.BaseWeapon = {
        name: null,
        description: null,
        type: null,
        damage: null,
        effect: null,
        skill: null
    };
    
    $rootScope.BaseAmmo = {
        name: null,
        description: null,
        type: null,
        damage: null,
        effect: null,
        skill: null
    };
    
    $rootScope.BaseArmor = {
        name: null,
        description: null,
        type: null,
        slot: null,
        defense: null,
        weight: null,
        effect: null,
        skill: null
    };
});

/*
    # Information Table

        ## Weapon Type
            01- One-Hand Sword
            02- One-Hand Mace
            03- One-Hand Axe
            04- Dagger
            05- Fist Weapon
            06- Wand
            07- Thrown Weapon
            08- Off-Hand
            09- Two-Hand Sword
            10- Two-Hand Mace
            11- Two-Hand Axe
            12- Polearm
            13- Bow
            14- Crossbow
            13- Staff
            
        ## Ammo Type
            01- Bow Arrow
            02- Crossbow Arrow
            03- Thrown Weapon Ammo
            
        ## Armor Slot
            01- Head
            02- Shoulder
            03- Chest
            04- Back (Only Cloth)
            05- Wrist
            06- Hands
            07- Waist
            08- Legs
            09- Feet
            10- Neck
            11- Trinkets
            12- Finger
            
        ## Armor Type
            01- Cloth
            02- Leather
            03- Mail
            04- Plate
*/