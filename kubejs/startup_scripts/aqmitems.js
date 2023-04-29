// priority: 0

console.info('Creating AQM2 Items...');

StartupEvents.registry('item', event => {
  event.create('aqm2:corrupted_emerald').displayName('Corrupted Emerald').tooltip('§8A Worthy Trophy of a Hard Battle').maxStackSize(12).burnTime(20000).fireResistant(true)
  event.create('aqm2:star_of_icon').displayName('Star of Icon').tooltip('§8Something about a Icon of Sin').maxStackSize(12).burnTime(20000).fireResistant(true)
  event.create('aqm2:demon_pearl').displayName('Demon Pearl').tooltip('§8Gladiator and the Pearl').maxStackSize(12).burnTime(20000).fireResistant(true)
  event.create('aqm2:cursed_gem').displayName('§cCursed Gem').tooltip('§9Flex').maxStackSize(3).burnTime(999999).fireResistant(true)
  event.create('aqm2:aqm2').displayName('§7AQM2 §9Token').maxStackSize(64).burnTime(20).fireResistant(true)
  event.create('aqm2:ultimate_ingot').displayName('§6Ultimate Ingot').maxStackSize(64).burnTime(8000).fireResistant(true)
  event.create('aqm2:gold_coin').displayName('§eGold Coin').tooltip('§8Used in the Quest Shop (WIP)').maxStackSize(9999).fireResistant(true)
  event.create('aqm2:silver_coin').displayName('§7Silver Coin').tooltip('§8Used in the Quest Shop (WIP)').maxStackSize(9999).fireResistant(true)
  event.create('aqm2:copper_coin').displayName('§6Copper Coin').tooltip('§8Used in the Quest Shop (WIP)').maxStackSize(9999).fireResistant(true)
  event.create('aqm2:common_gem').displayName('§3Common Gem').tooltip('§cBoss Drop -- Used in the Quest Shop (WIP)').maxStackSize(64).fireResistant(true)
  event.create('aqm2:rare_gem').displayName('§dRare Gem').tooltip('§cBoss Drop -- Used in the Quest Shop (WIP)').maxStackSize(64).fireResistant(true)
  event.create('aqm2:epic_gem').displayName('§aEpic Gem').tooltip('§cBoss Drop -- Used in the Quest Shop (WIP)').maxStackSize(64).fireResistant(true)
  event.create('aqm2:legendary_gem').displayName('§6Legendary Gem').tooltip('§cBoss Drop -- Used in the Quest Shop (WIP)').maxStackSize(64).fireResistant(true)
  event.create('aqm2:lord_soul_ultimate').displayName('§dUltimate Lord Soul').tooltip('§8Collect all the Lord Souls and assemble in an Assembler to create this ultimate crafting material').maxStackSize(64).fireResistant(true)
});