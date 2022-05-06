// priority: 0

console.info('Creating AQM2 Items...');

onEvent('item.registry', event => {
  event.create('corrupted_emerald').displayName('Corrupted Emerald').tooltip('§8A Worthy Trophy of a Hard Battle').maxStackSize(12).burnTime(20000);
  event.create('star_of_icon').displayName('Star of Icon').tooltip('§8Something about a Icon of Sin').maxStackSize(12).burnTime(20000);
  event.create('demon_pearl').displayName('Demon Pearl').tooltip('§8Gladiator and the Pearl').maxStackSize(12).burnTime(20000);
  event.create('cursed_gem').displayName('§cCursed Gem').tooltip('§9Flex').maxStackSize(3).burnTime(999999);
  event.create('aqm2').displayName('§7Another Quality Modpack 2').tooltip('§cThe Ultimate Logo').maxStackSize(1).burnTime(20);
  event.create('ultimate_ingot').displayName('§6Ultimate Ingot').maxStackSize(64).burnTime(8000);
});