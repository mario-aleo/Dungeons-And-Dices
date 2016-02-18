"use strict";

angular.module("ngapp", [ "ngTouch", "ui.router", "ngMdIcons", "ngMaterial", "ngCordova", "ngStorage" ])
// ngTouch is No Longer Supported by Angular-Material

.run(function($rootScope, $cordovaDevice, $cordovaStatusbar, $localStorage){
    document.addEventListener("deviceready", function () {
        $cordovaStatusbar.overlaysWebView(false);
        $cordovaStatusbar.styleHex('#616161');
        window.plugins.orientationLock.lock("portrait");
    }, false);
    
    if(typeof $localStorage.DungeonsDices == "undefined"){
        $localStorage.DungeonsDices = {
            SheetBase: {
                AdventureName: null,
                MesterName: null,
                Sheet: {
                    BasicInformation: {
                        Name: null,
                        Class: null,
                        Race: null,
                        Alignment: null,
                        Deity: null,
                        Gender: null,
                        Age: null,
                        Size: null,
                        Height: null,
                        Weight: null,
                        Eyes: null,
                        Hair: null,
                        Skin: null
                    },
                    BasicAttributes: {
                        Strength: null,
                        Dexterity: null,
                        Constitution: null,
                        Intelligence: null,
                        Wisdom: null,
                        Charisma: null
                    },
                    DefenseAttributes: {
                        TotalHitPoint: null,
                        CurrentHitPoint: null,
                        ArmorClass: null,
                        Touch: null,
                        Grapple: null,
                        FlatFooted: null,
                        Fortitude: null,
                        Reflex: null,
                        Will: null,
                        SpellResistence: null,
                        DamageReduction: null
                    },
                    Skills: {
                        Appraise: null,
                        Balance: null,
                        Bluff: null,
                        Climb: null,
                        Concentration: null,
                        Craft: null,
                        DecipherScript: null,
                        Diplomacy: null,
                        DisableDevice: null,
                        Disguise: null,
                        EscapeArtist: null,
                        Forgery: null,
                        GatherInformation: null,
                        HandleAnimal: null,
                        Heal: null,
                        Hide: null,
                        Intimidate: null,
                        Jump: null,
                        Knowledge: null,
                        Listen: null,
                        MoveSilently: null,
                        OpenLock: null,
                        Perform: null,
                        Profession: null,
                        Ride: null,
                        Search: null,
                        SenseMotive: null,
                        SleightOfHand: null,
                        Spellcraft: null,
                        Spot: null,
                        Survival: null,
                        Swin: null,
                        Tumble: null,
                        UseMagicDevice: null,
                        UseRope: null
                    },
                    AttackAttributes: {
                        BaseAttackBonus: null
                    },
                    AttackList: []
                }
            },
            AttackBase: {
                Name: null,
                AttackBonus: null,
                WeaponType: null,
                Range: null,
                Attribute: null,
                Notes: null,
                TotalAttack: null,
                TotalDamage: null
            },
            WeaponType: [
                {
                    WeaponTypeId: 1,
                    WeaponType: "Sword",
                    Attribute: "Strength"                     
                }
            ],
            SheetLists: []
        }
    }
    
    /* Hijack Android Back Button (You Can Set Different Functions for Each View by Checking the $state.current)
    document.addEventListener("backbutton", function (e) {
        if($state.is('init')){
            navigator.app.exitApp();
        }  else{
            e.preventDefault();
        }
        }, false);*/
    })

.config(function($mdThemingProvider) { // Angular-Material Color Theming
    $mdThemingProvider.theme('default')
        .primaryPalette('grey')
        .accentPalette('light-blue');
});
