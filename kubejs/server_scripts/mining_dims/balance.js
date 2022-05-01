// Another Quality Modpack 2          //
////////////////////////////////////////

onEvent('recipes', event => {

const MiningDimBlocks = [
'mining_dims:caving_portal_block',
'mining_dims:climbing_portal_block',
'mining_dims:hunting_portal_block',
'mining_dims:mining_portal_block',
];

MiningDimBlocks.forEach(function(item,i) {
  event.remove({ output: item});
})

event.shaped("mining_dims:caving_portal_block", ["1  ", " 2 ", "  3"],
  {
    1: "minecraft:iron_ingot",
    2: "prefab:item_bundle_of_timber",
    3: "gobber2:gobber2_globette"
});

event.shaped("mining_dims:climbing_portal_block", ["1  ", " 2 ", "  3"],
  {
    1: "ae2:certus_quartz_crystal",
    2: "prefab:item_bundle_of_timber",
    3: "gobber2:gobber2_globette"
});

event.shaped("mining_dims:hunting_portal_block", ["1  ", " 2 ", "  3"],
  {
    1: "minecraft:lapis_lazuli",
    2: "prefab:item_bundle_of_timber",
    3: "gobber2:gobber2_globette"
});

event.shaped("mining_dims:mining_portal_block", ["1  ", " 2 ", "  3"],
  {
    1: "ae2:sky_stone_block",
    2: "prefab:item_bundle_of_timber",
    3: "gobber2:gobber2_globette"
});
//end
})