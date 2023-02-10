// priority: 0

console.info('Creating AQM2 Items...');

StartupEvents.registry('item', event => {
  event.create('corrupted_emerald').displayName('Corrupted Emerald').tooltip('§8A Worthy Trophy of a Hard Battle').maxStackSize(12).burnTime(20000);
  event.create('star_of_icon').displayName('Star of Icon').tooltip('§8Something about a Icon of Sin').maxStackSize(12).burnTime(20000);
  event.create('demon_pearl').displayName('Demon Pearl').tooltip('§8Gladiator and the Pearl').maxStackSize(12).burnTime(20000);
  event.create('cursed_gem').displayName('§cCursed Gem').tooltip('§9Flex').maxStackSize(3).burnTime(999999);
  event.create('aqm2').displayName('§7AQM2 §9Token').tooltip('§cUse these tokens in your quest book').maxStackSize(64).burnTime(20);
  event.create('ultimate_ingot').displayName('§6Ultimate Ingot').maxStackSize(64).burnTime(8000);
  event.create('gold_coin').displayName('§eGold Coin').tooltip('§8Found and used in Quests').maxStackSize(9999)
  event.create('silver_coin').displayName('§7Silver Coin').tooltip('§8Found and used in Quests').maxStackSize(9999)
  event.create('copper_coin').displayName('§6Copper Coin').tooltip('§8Found and used in Quests').maxStackSize(9999)
  event.create('common_gem').displayName('§3Common Gem').maxStackSize(64)
  event.create('rare_gem').displayName('§dRare Gem').maxStackSize(64)
  event.create('epic_gem').displayName('§aEpic Gem').maxStackSize(64)
  event.create('legendary_gem').displayName('§6Legendary Gem').maxStackSize(64)
});