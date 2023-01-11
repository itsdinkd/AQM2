// priority: 0

console.info('Modifying AQM2 Items...');

ItemEvents.modification(event => {
  event.modify('kubejs:star_of_icon', item => {
    item.fireResistant = true
  });
  event.modify('kubejs:demon_pearl', item => {
    item.fireResistant = true
  });
  event.modify('kubejs:corrupted_emerald', item => {
    item.fireResistant = true
  });
  event.modify('kubejs:cursed_gem', item => {
    item.fireResistant = true
  });

});

ItemEvents.tooltip(tooltip => {

tooltip.add('croparia:battery', ["§6Store and Output Energy", "§eMax Storage: §2500000", '§eMax Output: §24400'])
tooltip.add("gobber2:gobber2_boots_dragon", ["§9- No Flight"])
tooltip.add("gobber2:gobber2_helmet_dragon", ["§9- No Flight"])
tooltip.add("gobber2:gobber2_chestplate_dragon", ["§9- No Flight"])
tooltip.add("gobber2:gobber2_leggings_dragon", ["§9- No Flight"])
});