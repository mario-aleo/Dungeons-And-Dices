(function(document) {
  'use strict';
    
  var app = document.querySelector('#app');

  // Listen for template bound event to know when bindings
  // have resolved and content has been stamped to the page
  app.addEventListener('dom-change', function() {
    // console.log('Our app is ready to rock!');
  });

  // See https://github.com/Polymer/polymer/issues/1381
  window.addEventListener('WebComponentsReady', function() {
    // imports are loaded and elements have been registered
  });

  app.closeDrawer = function() {
    app.$.paperDrawerPanel.closeDrawer();
  };

})(document);

/*
baseSheet = {
    name: "",
    class: "",
    race: "",
    level: 1,
    system: "",
    status: {},
    // *vit: { value: SUM, *baseValue: 10, *levelModifier: 0, persistBonus: 0, volatileBonus: 0 }, ...
    resources: {},
    // *hp: { value: SUM, *baseValue: 10, *statusBase: Vit, *statusBaseModifier: 1, *levelModifier: 0, persistBonus: 0, volatileBonus: 0 }, ...
    defenses: {},
    // *armor: { value: SUM, *baseValue: 10, *statusBase: Vit, *statusBaseModifier: 1, *levelModifier: 0, persistBonus: 0, volatileBonus: 0 }, ...
    attacks: {},
    // *attackName: { AttackValue: SUM, DamageValue: SUM, *baseAttack: 10, *attackStatusBase: Vit, *attackStatusBaseModifier: 1, *attackLevelModifier: 0, attackpersistBonus: 0, attackVolatileBonus: 0, *baseDamage: 10, *damageStatusBase: Vit, *damageStatusBaseModifier: 1, *damageLevelModifier: 0, damagepersistBonus: 0, damageVolatileBonus: 0 }, ...
    skills: {},
    // *skillName: { value: SUM, *baseValue: 10, *statusBase: Vit, *statusBaseModifier: 1, *levelModifier: 0, persistBonus: 0, volatileBonus: 0 }, ...
    equipments: {
        head: {},
        // *equipmentName: { effect1: { *value: 10, *affect: Armor }, ... }
        chest: {},
        // *equipmentName: { effect1: { *value: 10, *affect: Armor }, ... }
        legs: {},
        // *equipmentName: { effect1: { *value: 10, *affect: Armor }, ... }
        feet: {},
        // *equipmentName: { effect1: { *value: 10, *affect: Armor }, ... }
        hands: {},
        // *equipmentName: { effect1: { *value: 10, *affect: Armor }, ... }
        cloak: {},
        // *equipmentName: { effect1: { *value: 10, *affect: Armor }, ... }
        waist: {},
        // *equipmentName: { effect1: { *value: 10, *affect: Armor }, ... }
        wrist: {},
        // *equipmentName: { effect1: { *value: 10, *affect: Armor }, ... }
        trinkets: {},
        // *equipmentName: { effect1: { *value: 10, *affect: Armor }, ... }, ...
        weapon: {},
        // *equipmentName: { *type: 1, *attack: 10, *damage: 10, effect1: { *value: 10, *affect: Armor }, ... }
        shield: {}
        // *equipmentName: { effect1: { *value: 10, *affect: Armor }, ... }
    },
    persistBonus: {},
    // bonusName: { *value: 10, *affect: Vit }, ...  Sample: Equipment Bonus 
    volatileBonus: {}
    // *bonusName: { *value: 10, *affect: Vit }, ...  Sample: Potion Bonus 
}
*/