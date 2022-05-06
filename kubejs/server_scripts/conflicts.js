// Another Quality Modpack 2 //
///////////////////////////////
onEvent('tags.item', event => {
  event.add('c:food/bacon', 'croptopia:bacon');
  event.add('c:food/bacon', 'farmersdelight:bacon')
})

settings.useOriginalRecipeForFilters = true;
onEvent('recipes', event => {

  // salt
   event.replaceInput({}, "#c:salts", "bewitchment:salt");
   event.replaceInput({}, "#c:salt_dusts", "bewitchment:salt");

  // // rice
  // event.shapeless("croptopia:rice", ['farmersdelight:rice']);
  // event.shapeless("croptopia:rice", ['valley:rice_item']);
  // event.shapeless("farmersdelight:rice", ['croptopia:rice']);
  // event.shapeless("farmersdelight:rice", ['valley:rice_item']);
  // event.shapeless("valley:rice_item", ['croptopia:rice']);
  // event.shapeless("valley:rice_item", ['farmersdelight:rice']);
  event.replaceInput({}, "#c:grains/rice", "farmersdelight:rice");

  // // onion
  // event.shapeless("croptopia:onion", ['farmersdelight:onion']);
  // event.shapeless("croptopia:onion", ['valley:onion']);
  // event.shapeless("farmersdelight:onion", ['croptopia:onion']);
  // event.shapeless("farmersdelight:onion", ['valley:onion']);
  // event.shapeless("valley:onion", ['croptopia:onion']);
  // event.shapeless("valley:onion", ['farmersdelight:onion']);
  event.replaceInput({}, "#c:vegetables/onion", "farmersdelight:onion");
  //// tomato
  // event.shapeless("croptopia:tomato", ['farmersdelight:tomato']);
  // event.shapeless("croptopia:tomato", ['sandwichable:tomato']);
  // event.shapeless("farmersdelight:tomato", ['croptopia:tomato']);
  // event.shapeless("farmersdelight:tomato", ['sandwichable:tomato']);
  // event.shapeless("sandwichable:tomato", ['croptopia:tomato']);
  // event.shapeless("sandwichable:tomato", ['farmersdelight:tomato']);
  event.replaceInput({}, "#c:vegetables/tomatoes", "sandwichable:tomato");

  // Cabbage
  event.replaceInput({}, "#c:vegetables/cabbage", "farmersdelight:cabbage");

  // Dough
  event.replaceInput({}, "#c:dough", "farmersdelight:wheat_dough");

  // Bacon
  event.replaceInput({}, "#c:food/bacon", "farmersdelight:bacon");

  // lettuce
  // event.shapeless("croptopia:lettuce", ['sandwichable:lettuce_leaf']);
  // event.shapeless("sandwichable:lettuce_leaf", ['croptopia:lettuce']);
  // event.replaceInput({}, "#c:vegetables/lettuce", "sandwichable:lettuce_leaf");

  // event.replaceInput({},"croptopia:cheese","#c:cheeses")

  // Blockus QoL
  event.remove({ output: "blockus:oak_small_logs" });
  event.shaped("3x blockus:oak_small_logs", [
    ["minecraft:oak_log", "minecraft:oak_log", "minecraft:oak_log"],
  ]);

  event.remove({ output: "blockus:spruce_small_logs" });
  event.shaped("3x blockus:spruce_small_logs", [
    ["minecraft:spruce_log", "minecraft:spruce_log", "minecraft:spruce_log"],
  ]);

  event.remove({ output: "blockus:birch_small_logs" });
  event.shaped("3x blockus:birch_small_logs", [
    ["minecraft:birch_log", "minecraft:birch_log", "minecraft:birch_log"],
  ]);

  event.remove({ output: "blockus:jungle_small_logs" });
  event.shaped("3x blockus:jungle_small_logs", [
    ["minecraft:jungle_log", "minecraft:jungle_log", "minecraft:jungle_log"],
  ]);

  event.remove({ output: "blockus:acacia_small_logs" });
  event.shaped("3x blockus:acacia_small_logs", [
    ["minecraft:acacia_log", "minecraft:acacia_log", "minecraft:acacia_log"],
  ]);

  event.remove({ output: "blockus:dark_oak_small_logs" });
  event.shaped("3x blockus:dark_oak_small_logs", [
    ["minecraft:dark_oak_log","minecraft:dark_oak_log","minecraft:dark_oak_log"],
  ]);

  event.remove({ output: "blockus:white_oak_small_logs" });
  event.shaped("3x blockus:white_oak_small_logs", [
    ["blockus:white_oak_log", "blockus:white_oak_log", "blockus:white_oak_log"],
  ]);

  // Silver
  event.replaceOutput({}, "bewitchment:silver_ingot", "techreborn:silver_ingot");
  event.replaceOutput({}, "bewitchment:silver_nugget", "techreborn:silver_nugget");
  event.replaceOutput({}, "bewitchment:raw_silver", "techreborn:raw_silver");
  event.replaceOutput({}, "bewitchment:raw_silver_block", "techreborn:raw_silver_storage_block");

// mcdw:dagger_dagger
event.remove({output: 'mcdw:dagger_dagger'});
event.shaped('mcdw:dagger_dagger', [
[null, null, null],
['mythicmetals:osmium_ingot', null, null],
[null, 'minecraft:stick', null],
]);

// chisel chisel
event.remove({output: 'chisel:chisel'});
event.shaped('chisel:chisel', [
[null, null, null],
['minecraft:stick', null, null],
['minecraft:iron_ingot', null, null],
]);

// bits n chisel chisel
event.remove({output: 'bitsandchisels:iron_chisel'});
event.shaped('bitsandchisels:iron_chisel', [
['chisel:chisel', null, null],
['minecraft:stick', null, null],
['minecraft:iron_ingot', null, null],
]);
//Blockus Golden bars
event.remove({ output: "blockus:golden_bars" });

// event.shapeless('blockus:golden_bars', ['charm:gold_bars'])
// event.shapeless('charm:gold_bars', ['blockus:golden_bars'])

// event.replaceInput({type: 'minecraft:crafting_shapeless'}, 'minecraft:copper_ingot', '#c:copper_ingots')

// Garlic Choice
event.replaceInput('croptopia:garlic', 'bewitchment:garlic')
});
