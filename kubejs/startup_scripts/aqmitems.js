// priority: 0

console.info('Creating AQM2 Items...');

onEvent('item.registry', event => {
  event.create('corrupted_emerald').displayName('Corrupted Emerald').tooltip('§8A Worthy Trophy of a Hard Battle').maxStackSize(1).burnTime(3000);
  event.create('star_of_icon').displayName('Star of Icon').tooltip('§8Something about a Icon of Sin').maxStackSize(1).burnTime(3000);
  event.create('demon_pearl').displayName('Demon Pearl').tooltip('§8Gladiator and the Pearl').maxStackSize(1).burnTime(3000);
  event.create('cursed_gem').displayName('§cCursed Gem').tooltip('§9Flex').maxStackSize(1).burnTime(3000);
  event.create('aqm2').displayName('§7Another Quality Modpack 2').tooltip('§cThe Ultimate Logo').maxStackSize(1).burnTime(3000);
  event.create('quality_ingot').displayName('Quality Ingot').maxStackSize(64).burnTime(900);
});