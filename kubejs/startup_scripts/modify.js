// priority: 0

console.info('Modifying AQM2 Items...');

ItemEvents.modification(event => {
  event.modify('aqm2:star_of_icon', item => {
    item.fireResistant = true
  });
  event.modify('aqm2:demon_pearl', item => {
    item.fireResistant = true
  });
  event.modify('aqm2:corrupted_emerald', item => {
    item.fireResistant = true
  });
  event.modify('aqm2:cursed_gem', item => {
    item.fireResistant = true
  });

  event.modify("soulsweapons:moonstone", item => {
    item.fireResistant = true
  });
  event.modify("soulsweapons:verglas", item => {
    item.fireResistant = true
  });

});

// credits to E6E vvvv
StartupEvents.postInit(event => {
  var loadPowahAPI = Java.loadClass('owmii.powah.api.PowahAPI');
  loadPowahAPI.registerSolidCoolant(Item.of('betterend:emerald_ice').item, 400, -20);
  loadPowahAPI.registerSolidCoolant(Item.of('betterend:dense_emerald_ice').item, 800, -40);
  loadPowahAPI.registerSolidCoolant(Item.of('betterend:ancient_emerald_ice').item, 1200, -100);
});