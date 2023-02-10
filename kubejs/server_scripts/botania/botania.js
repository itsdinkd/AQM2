// Another Quality Modpack 2
/*
onEvent("recipes", event => {
    event.remove({ output: "botania:livingrock" })

    event.recipes.botania.mana_infusion("minecraft:acacia_boat", "minecraft:acacia_door", 200, "minecraft:acacia_log")
   
    event.recipes.botania.elven_trade(["minecraft:acacia_boat"], "minecraft:diamond")
    event.recipes.botania.elven_trade(["minecraft:acacia_boat", "minecraft:acacia_button"], ["minecraft:diamond_block", "minecraft:gold_ingot"])
   
    event.recipes.botania.pure_daisy("minecraft:acacia_button", "minecraft:acacia_leaves")
    event.recipes.botania.pure_daisy("minecraft:acacia_button", "minecraft:stone", 1)

    event.recipes.botania.brew("kubejs:torrent", ["minecraft:acacia_boat"])

    event.recipes.botania.petal_apothecary("minecraft:acacia_boat", ["minecraft:acacia_button"])

    event.recipes.botania.runic_altar("minecraft:acacia_boat", ["minecraft:acacia_button", "minecraft:acacia_door"], 5000)

    event.recipes.botania.terra_plate("minecraft:acacia_boat", ["minecraft:acacia_button", "minecraft:acacia_door"], 5000000)

    event.recipes.botania.orechid("minecraft:acacia_button", "minecraft:acacia_fence", 1)

    event.recipes.botania.orechid_ignem("minecraft:acacia_leaves", "minecraft:acacia_fence_gate", 1)

    event.recipes.botania.marimorphosis("minecraft:acacia_door", "minecraft:acacia_fence_gate", 1, ["plains"], 10)
*/

// const mageHandRemove = [
// 'mage_hand_copper',
// 'mage_hand_iron',
// 'mage_hand_diamond',
// 'mage_hand_gold',
// 'mage_hand_amethyst'
// ]
// onEvent("recipes", event => {

//     mageHandRemove.forEach(function(i,n) {
//         event.remove({id: 'magehand:'+i})
//     })
//     event.recipes.botania.runic_altar("magehand:copper_spawner_item", ["magehand:flesh_hand_item", "indrev:copper_chunk", "indrev:copper_chunk", "indrev:copper_chunk", "indrev:copper_chunk", "indrev:copper_chunk", "indrev:copper_chunk", "indrev:copper_chunk", "indrev:copper_chunk", ], 5000);
//     event.recipes.botania.runic_altar("magehand:iron_spawner_item", ["magehand:flesh_hand_item", "indrev:iron_chunk", "indrev:iron_chunk", "indrev:iron_chunk", "indrev:iron_chunk", "indrev:iron_chunk", "indrev:iron_chunk", "indrev:iron_chunk", "indrev:iron_chunk", ], 5000);
//     event.recipes.botania.runic_altar("magehand:gold_spawner_item", ["magehand:copper_spawner_item", "indrev:gold_chunk", "indrev:gold_chunk", "indrev:gold_chunk", "indrev:gold_chunk", "indrev:gold_chunk", "indrev:gold_chunk", "indrev:gold_chunk", "indrev:gold_chunk", ], 6000);
//     event.recipes.botania.runic_altar("magehand:diamond_spawner_item", ["magehand:gold_spawner_item", "magehand:iron_spawner_item", "magehand:copper_spawner_item", "techreborn:diamond_plate", "techreborn:diamond_plate", "techreborn:diamond_plate", "techreborn:diamond_plate", "techreborn:diamond_plate", "techreborn:diamond_plate", ], 10000);
//     event.recipes.botania.runic_altar("magehand:amethyst_spawner_item", ["magehand:copper_spawner_item", "mcda:gemstone_purple", "mcda:gemstone_purple", "mcda:gemstone_purple", "mcda:gemstone_purple", "mcda:gemstone_purple", "mcda:gemstone_purple", "mcda:gemstone_purple", "mcda:gemstone_purple", ], 4000);
// });

ServerEvents.recipes(event => {
event.replaceInput(
    { id: "botania:cloud_pendant" },
    "botania:manasteel_ingot",
    "botania:terrasteel_ingot"
  );
  event.replaceInput(
    { id: "botania:thunder_sword" },
    "botania:mana_diamond",
    "gobber2:dragon_star"
  );
  event.replaceInput(
    { id: "botania:clip" },
    "botania:dreamwood",
    "gobber2:dragon_star"
  );
  
  event.replaceInput(
    { id: "botania:mana_gun" },
    "botania:mana_diamond",
    Item.of("arcanus:master_wand").ignoreNBT()
  );
  
  event.replaceInput(
    { id: "botania:reach_ring" },
    "botania:elementium_ingot",
    "botania:gaia_ingot"
  );
})