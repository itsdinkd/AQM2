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