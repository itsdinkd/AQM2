// Another Quality Modpack 2 //
///////////////////////////////


onEvent('tags.item', event => {
  event.add('c:food/bacon', 'croptopia:bacon');
  event.add('c:food/bacon', 'farmersdelight:bacon');
  event.add('c:onion', 'farmersdelight:onion');
  event.add('c:food', 'farmersdelight:onion');
  event.add('c:crops', 'farmersdelight:rice');
  event.add('c:rice', 'farmersdelight:rice');
  event.add('c:tomato', 'farmersdelight:tomato');
  event.add('c:salts', 'expandeddelight:ground_salt');
	event.add('c:salt_dusts', 'expandeddelight:ground_salt');
	event.add('c:salt_dusts', 'expandeddelight:ground_salt');
})

// settings.useOriginalRecipeForFilters = true;
onEvent('recipes', event => {

  // salt
   event.replaceInput({}, "#c:salts", "bewitchment:salt");
   event.replaceInput({}, "valley:onion", "farmersdelight:onion");
   event.replaceOutput({}, "valley:tomato", "farmersdelight:tomato");
   event.replaceInput({}, "#c:salt_dusts", "bewitchment:salt");
   event.replaceInput({}, "techreborn:ruby_gem", "betternether:nether_ruby");
   event.replaceOutput({}, "techreborn:ruby_gem", "betternether:nether_ruby");
   event.replaceInput({}, "techreborn:ruby_ore", "betternether:nether_ruby_ore");
   event.shapeless("bewitchment:salt", ['#c:salts']);
  // event.shapeless("croptopia:rice", ['valley:rice_item']);
  // // rice
  // event.shapeless("croptopia:rice", ['farmersdelight:rice']);
  // event.shapeless("croptopia:rice", ['valley:rice_item']);
  // event.shapeless("farmersdelight:rice", ['croptopia:rice']);
  // event.shapeless("farmersdelight:rice", ['valley:rice_item']);
  // event.shapeless("valley:rice_item", ['croptopia:rice']);
  // event.shapeless("#c:grains/rice", ['farmersdelight:rice']);
  // // event.replaceInput({}, "#c:grains/rice", "farmersdelight:rice");
  // event.replaceOutput({}, "#c:grains/rice", "farmersdelight:rice");
  // // // onion
  // // event.shapeless("croptopia:onion", ['farmersdelight:onion']);
  // // event.shapeless("croptopia:onion", ['valley:onion']);
  // // event.shapeless("farmersdelight:onion", ['croptopia:onion']);
  // // event.shapeless("farmersdelight:onion", ['valley:onion']);
  // // event.shapeless("valley:onion", ['croptopia:onion']);
  // event.shapeless("#c:vegetables/onion", ['farmersdelight:onion']);
  // event.replaceInput({}, "#c:vegetables/onion", "farmersdelight:onion");
  // event.replaceOutput({}, "#c:vegetables/onion", "farmersdelight:onion");
  // tomato
  // // event.shapeless("croptopia:tomato", ['farmersdelight:tomato']);
  // // event.shapeless("croptopia:tomato", ['sandwichable:tomato']);
  // // event.shapeless("farmersdelight:tomato", ['croptopia:tomato']);
  // // event.shapeless("farmersdelight:tomato", ['sandwichable:tomato']);
  // // event.shapeless("sandwichable:tomato", ['croptopia:tomato']);
  // // event.shapeless("sandwichable:tomato", ['farmersdelight:tomato']);
//   event.replaceInput({}, "farmersdelight:tomato", "sandwichable:tomato");
  // event.replaceOutput({}, "#c:vegetables/tomatoes", "sandwichable:tomato");

  // // Cabbage
  // event.replaceInput({}, "#c:vegetables/cabbage", "farmersdelight:cabbage");
  // event.replaceOutput({}, "#c:vegetables/cabbage", "farmersdelight:cabbage");

  // // Dough
  // event.replaceInput({}, "#c:dough", "farmersdelight:wheat_dough");
  // event.replaceOutput({}, "#c:dough", "farmersdelight:wheat_dough");

  // // Bacon
  // event.replaceInput({}, "#c:food/bacon", "farmersdelight:bacon");
  // event.replaceOutput({}, "#c:food/bacon", "farmersdelight:bacon");

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

  // lignite Coal
  event.remove({output: 'modern_industrialization:lignite_coal_block', type: 'minecraft:crafting_shapeless'})
  event.remove({output: 'modern_industrialization:lignite_coal_block', type: 'minecraft:crafting_shaped'})
  event.shaped('modern_industrialization:lignite_coal_block', ['xxx', 'xxx', 'xxx'], {
    x: 'modern_industrialization:lignite_coal'
  })

  // Silver
  event.replaceOutput({}, "bewitchment:silver_ingot", "techreborn:silver_ingot");
  event.replaceOutput({}, "bewitchment:silver_nugget", "techreborn:silver_nugget");
  event.replaceOutput({}, "bewitchment:raw_silver", "techreborn:raw_silver");
  event.replaceOutput({}, "bewitchment:raw_silver_block", "techreborn:raw_silver_storage_block");


// Conflicting Recipes
  event.remove({id: "modern_industrialization:materials/salt/unpacker/dust"});
  event.shapeless("bewitchment:salt", ["2x modern_industrialization:salt_dust"]);
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
