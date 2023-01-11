// Another Quality Modpack 2 //
///////////////////////////////


ServerEvents.tags('item', event => {
  event.add('c:food/bacon', 'croptopia:bacon');
  event.add('c:food/bacon', 'farmersdelight:bacon');
  event.add('c:onion', 'farmersdelight:onion');
  event.add('c:food', 'farmersdelight:onion');
  event.add('c:crops', 'farmersdelight:rice');
  event.add('c:rice', 'farmersdelight:rice');
  event.add('c:tomato', 'farmersdelight:tomato');
})

// settings.useOriginalRecipeForFilters = true;
ServerEvents.recipes(event => {
event.replaceOutput({}, "ae2:ender_dust", "techreborn:ender_pearl_dust")
  // salt
   event.replaceInput({}, "#c:salts", "bewitchment:salt");
  //  event.replaceInput({}, "valley:onion", "farmersdelight:onion");
  //  event.replaceOutput({}, "valley:tomato", "farmersdelight:tomato");
   event.replaceInput({}, "#c:salt_dusts", "bewitchment:salt");
   event.replaceInput({}, "techreborn:ruby_gem", "betternether:nether_ruby");
   event.replaceOutput({}, "techreborn:ruby_gem", "betternether:nether_ruby");
   event.replaceInput({}, "techreborn:ruby_ore", "betternether:nether_ruby_ore");
   event.shapeless("bewitchment:salt", ['#c:salts']);

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

// event.replaceInput({type: 'minecraft:crafting_shapeless'}, 'minecraft:copper_ingot', '#c:copper_ingots')
event.remove({ output: "ad_astra:steel_ingot"})
event.blasting("techreborn:refined_iron_ingot", 'ad_astra:steel_ingot')
// Garlic Choice
event.replaceInput({}, 'croptopia:garlic', 'bewitchment:garlic')

event.remove({id: 'consistency_plus:black_dye1'})
event.remove({id: "ad_astra:recipes/copper_ingot_from_blasting_glacio_copper_ore"})
});
