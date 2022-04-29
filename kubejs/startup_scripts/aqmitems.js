// priority: 0

console.info('Creating AQM2 Items...');

onEvent('item.registry', event => {

 event.create('corrupted_emerald', item => {
   item.displayName('Corrupted Emerald').tooltip('§8A Worthy Trophy of a Hard Battle').maxStackSize(1).burnTime(3000);
 });

  event.create('star_of_icon', item => {
   item.displayName('Star of Icon').tooltip('§8Something about a Icon of Sin').maxStackSize(1).burnTime(3000);
 });
  event.create('demon_pearl', item => {
   item.displayName('Demon Pearl').tooltip('§8Gladiator and the Pearl').maxStackSize(1).burnTime(3000);
 });

 event.create('cursed_gem', item => {
   item.displayName('§cCursed Gem').tooltip('§9Flex').maxStackSize(1).burnTime(3000);
 });

 event.create('aqm2', item => {
   item.displayName('§7Another Quality Modpack 2').tooltip('§cThe Ultimate Logo').maxStackSize(1).burnTime(3000);
 });

 event.create('quality_ingot', item => {
   item.displayName('Quality Ingot').maxStackSize(64).burnTime(900);
 });
});