// Another Quality Modpack 2 //
//////////////////////////////
const disableInfo = [
'prefab:item_swift_blade_bronze',
'prefab:item_swift_blade_copper',
'prefab:item_swift_blade_diamond',
'prefab:item_swift_blade_gold',
'prefab:item_swift_blade_iron',
'prefab:item_swift_blade_netherite',
'prefab:item_swift_blade_obsidian',
'prefab:item_swift_blade_osmium',
'prefab:item_swift_blade_steel',
'prefab:item_swift_blade_stone',
'prefab:item_swift_blade_wood',
'givemehats:bunny_space_helmet',
'givemehats:strider_hat',
'givemehats:irish_hat',
'givemehats:dwarven_hat',
'givemehats:viking_hat',
'botania:dice',
'botania:infinite_fruit',
'botania:king_key',
'botania:flugel_eye',
'botania:thor_ring',
'botania:odin_ring',
'botania:loki_ring'
];
onEvent('rei.information', event => {
  disableInfo.forEach(function(item, index) {
    event.add(item, 'Disabled', ['This item has been disabled'])
  });
});