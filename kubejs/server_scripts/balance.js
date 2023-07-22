// Another Quality Modpack 2          //
////////////////////////////////////////

ServerEvents.recipes(event => {

event.remove({output: 'quarryplus:marker'})
event.shaped('quarryplus:marker', ['cQc', ' s '],
 {
   c: 'gobber2:gobber2_glob_end',
   Q: 'botania:cosmetic_questgiver_mark',
   s: 'betterend:leather_wrapped_stick'
 });

 event.shaped('artis:end_game_crafting', ['gs ', ' ge', 'c g'],
 {
   c: 'techreborn:auto_crafting_table',
   s: 'gobber2:dragon_elytra',
   e: 'betterend:elytra_crystalite',
   g: 'gobber2:dragon_star'
 })

event.replaceInput({id: 'modern_industrialization:armor/diesel_jetpack'}, 'modern_industrialization:aluminum_tank', 'techreborn:quantum_tank_unit')

event.remove({ output: "prefab:item_farm" });
event.shaped("prefab:item_farm", [
["minecraft:wheat_seeds","croptopia:corn_seed", "minecraft:wheat_seeds"],
["prefab:item_bundle_of_timber", "prefab:block_compressed_dirt","prefab:item_bundle_of_timber"],
["prefab:white_wool","minecraft:water_bucket", "minecraft:white_wool"],
]);

// event.shaped('kubejs:aqm2', [
// ['minecraft:apple', 'minecraft:apple', 'minecraft:apple'],
// ['minecraft:apple', 'minecraft:apple', 'minecraft:apple'],
// ['minecraft:apple', 'minecraft:white_wool', 'minecraft:apple'],
// ]);



// // Moderate Farm
 event.remove({ output: "prefab:item_farm_improved" });
 event.shaped("prefab:item_farm_improved", [
 ["prefab:block_double_compressed_dirt","prefab:block_compressed_obsidian", "prefab:block_double_compressed_dirt"],
 ["prefab:item_heap_of_timber", "prefab:item_farm","prefab:item_heap_of_timber"],
 ["prefab:item_pallet_of_bricks","prefab:item_compressed_chest", "prefab:item_pallet_of_bricks"],
 ]);

// // Advance Farm
 event.remove({ output: "prefab:item_farm_advanced" });
 event.shaped("prefab:item_farm_advanced", [
 ["prefab:block_triple_compressed_stone","prefab:block_double_compressed_obsidian", "prefab:block_triple_compressed_stone"],
 ["prefab:item_ton_of_timber", "prefab:item_farm_improved","prefab:item_ton_of_timber"],
 ["prefab:item_coil_of_lanterns","inmis:withered_backpack", "prefab:item_pallet_of_bricks"],
 ]);

///// Tech Reborn, Gobber, Kibe Recipe Changes
//
// Quantum Suit
event.remove({ output: "techreborn:quantum_chestplate" });
event.shaped("techreborn:quantum_chestplate", [
["techreborn:tungstensteel_plate","modern_industrialization:quantum_upgrade", "techreborn:tungstensteel_plate"],
["techreborn:superconductor_cable", "kibe:angel_ring","techreborn:superconductor_cable"],
["techreborn:data_storage_chip","techreborn:iridium_neutron_reflector", "techreborn:data_storage_chip"],
]);

// Light Ring
event.remove({ output: "kibe:light_ring" });
event.shaped("kibe:light_ring", [
 ['',"techreborn:data_storage_chip", ''],
 ["gobber2:dragon_star", "kibe:diamond_ring", "gobber2:dragon_elytra"],
 ['techreborn:iridum_plate',"techreborn:data_storage_chip", 'techreborn:iridum_plate'],
 ]);


// Gobber Vision Ring
event.remove({ output: "gobber2:gobber2_ring_vision" });
event.shaped("gobber2:gobber2_ring_vision", [
 ['bewitchment:demon_heart',"modern_industrialization:highly_advanced_upgrade", "ae2:spatial_cell_component_16"],
 ["gobber2:dragon_star", "gobber2:gobber2_ring_end", "gobber2:dragon_star"],
 ['bewitchment:demon_horn',"modern_industrialization:highly_advanced_upgrade", 'bewitchment:harbinger'],
 ]);

 event.replaceInput({output: "gobber2:gobber2_ring_teleport"}, "minecraft:ender_pearl", "minecraft:ender_eye")
// Luggage
event.remove({ output: "luggage:luggage" });
event.shaped("luggage:luggage", ['123', 'd d'], {
  1: "inmis:plated_backpack",
  2: "minecraft:chest",
  3: "minecraft:fishing_rod",
  d: "botania:pixie_dust"
}
  );
 
  // Fabric Furnace - Furnaces
  event.replaceInput({id: 'fabric-furnaces:end_furnace'}, 'minecraft:shulker_shell', 'minecraft:dragon_head')

  event.remove({id: 'fabric-furnaces:ethereal_furnace'});
  event.shaped('fabric-furnaces:ethereal_furnace', ["abc","def","g g"],
  {
    a: 'fabric-furnaces:end_furnace',
    b: 'fabric-furnaces:nether_furnace',
    c: 'fabric-furnaces:obsidian_furnace',
    d: 'fabric-furnaces:gold_furnace',
    e: 'fabric-furnaces:iron_furnace',
    f: 'fabric-furnaces:fabric_furnace',
    g: 'betterend:ender_shard'
  })

  // Abyss Watcher
  event.remove({output: 'fwaystones:abyss_watcher'});
  event.custom({
      "type": "minecraft:crafting_shaped",
      "pattern": [
        "FEF"
      ],
      "key": {
        "E": {
          "item": "minecraft:ender_pearl"
        },
        "F": {
          "item": "gobber2:gobber2_ingot"
        }
      },
      "result": {
        "item": "fwaystones:abyss_watcher",
        "count": 1
      }
    });

  // Pocket Wormhole
  event.remove({output: 'fwaystones:pocket_wormhole'});
  event.custom({
          "type": "minecraft:crafting_shaped",
      "pattern": [
        " A ",
        "PSP",
        " P "
      ],
      "key": {
        "P": {
          "item": "gobber2:dragon_star"
        },
        "A": {
          "item": "fwaystones:abyss_watcher"
        },
        "S": {
          "item": "gobber2:dragon_star"
        }
      },
      "result": {
        "item": "fwaystones:pocket_wormhole",
        "count": 1
      }
    });

event.remove({output: "kibe:chunk_loader"})
event.custom({
  "type": "artis:end_game_crafting_shaped",
  "pattern": [
    "D B D B",
    "PPPPPPP",
    "G     G",
    "  R R  ",
    "   A   "
  ],
  "key": {
    "D": {
      "item": "prefab:block_compressed_obsidian"
    },
    "B": {
      "item": "prefab:block_triple_compressed_stone"
    },
    "P": {
      "item": "create:polished_rose_quartz"
    },
    "G": {
      "item": "techreborn:red_garnet_plate"
    },
    "R": {
      "item": "farmersdelight:bacon_and_eggs"
    },
    "A": {
      "item": "lightestlamp:lanthanum_ingot"
    }
  },
  "result": {
    "item": "kibe:chunk_loader"
  }
})
// Quantum Sword
event.custom({
  "type": "artis:end_game_crafting_shaped",
  "pattern": [
    "D s w D",
    "D A H D",
    "D 1 2 D",
    "D c C D",
    "D 3 4 5"
  ],
  "key": {
    "D": {
      "item": "gobber2:dragon_star"
    },
    "A": {
      "item": "modern_industrialization:quantum_upgrade"
    },
    "H": {
      "item": "adventurez:stone_golem_heart"
    },
    "1": {
      "item": "techreborn:uu_matter"
    },
    "2": {
      "item": "aqm2:cursed_gem"
    },
    "s": {
      "item": "spectrum:neolith"
    },
    "w": {
      "item": "mobz:boss_ingot"
    },
    "c": {
      "item": "techreborn:lapotron_crystal"
    },
    "C": {
      "item": "ae2:cell_component_64k"
    },
    "3": {
      "item": "aqm2:lord_soul_ultimate"
    },
    "4": {
      "item": "bosses_of_mass_destruction:earthdive_spear"
    },
    "5": {
      "item": "soulsweapons:chaos_orb"
    }
  },
  "result": {
    "item": "modern_industrialization:quantum_sword"
  }
})

// Angel Ring
  event.remove({output: 'kibe:angel_ring'});
  event.custom({
   "type": "artis:end_game_crafting_shaped",
   "pattern": [
     "@NyCHCyN@",
     "gMAAaAAMg",
     " I1DDD4I ",
     "g82DND58g",
     " I1DDD6I ",
     "gMAA7AAMg",
     " NsCECsN ",
     "   3 Z   "
   ],
   "key": {
     "D": {
       "item": "gobber2:dragon_star"
     },
     "N": {
       "item": "modern_industrialization:quantum_upgrade"
     },
     "A": {
       "item": "ae2:cell_component_64k"
     },
     "1": {
       "item": "techreborn:uu_matter"
     },
     "2": {
       "item": "aqm2:cursed_gem"
     },
     "4": {
       "item": "bosses_of_mass_destruction:void_thorn"
     },
     "5": {
       "item": "bosses_of_mass_destruction:ancient_anima"
     },
     "6": {
       "item": "bosses_of_mass_destruction:blazing_eye"
     },
     "7": {
       "item": "bosses_of_mass_destruction:obsidian_heart"
     },
     "8": {
       "item": "modern_industrialization:quantum_circuit"
     },
     "M": {
       "item": "mobz:boss_ingot"
     },
     "H": {
       "item": "adventurez:stone_golem_heart"
     },
     "E": {
       "item": "ad_astra:tier_4_rocket"
     },
     "I": {
       "item": "techreborn:interdimensional_su"
     },
     "C": {
       "item": "techreborn:nak_coolant_cell_360k"
     },
     "s": {
       "item": "spectrum:midnight_aberration"
     },
     "y": {
       "item": "spectrum:refined_azurite"
     },
     "g": {
       "item": "botania:gaia_ingot"
     },
     "@": {
       "item": "bewitchment:heaven_extract"
     },
     "a": {
       "item": "minecraft:apple"
     },
     "Z": {
      "item": "aqm2:lord_soul_ultimate"
    },
     "3": {
       "item": "soulsweapons:chaos_orb"
      }
    },
    "result": {
      "item": "kibe:angel_ring"
    },
    "catalyst": {
      "item": "aqm2:ultimate_ingot"
    },
    "cost": 1
  });

event.remove({id: "spectrumjetpacks:gemstone_jetpack"})
event.custom({
  "type": "spectrum:pedestal",
  "time": 1600,
  "tier": "advanced",
  "cyan": 4,
  "magenta": 4,
  "yellow": 8,
  "black": 2,
  "white": 0,
  "experience": 2.0,
  "pattern": [
    "TPE",
    "ACA",
    "ASA"
  ],
  "key": {
    "T": {
      "item": "spectrum:blacker_lotus"
    },
    "E": {
      "item": "botania:ender_air_bottle"
    },
    "A": {
      "item": "spectrum:neolith"
    },
    "C": {
      "item": "soulsweapons:lord_soul_void"
    },
    "S": {
      "item": "spectrum:star_fragment"
    },
    "P": {
      "tag": "spectrum:pigments"
    }
  },
  "result": {
    "item": "spectrumjetpacks:gemstone_jetpack",
    "count": 1
  },
  "required_advancement": "spectrum:midgame/create_refined_azurite"
})
event.remove({ id: "spectrumjetpacks:bedrock_jetpack" })
event.custom(
  {
  "type": "spectrum:fusion_shrine",
  "time": 1200,
  "experience": 16.0,
  "fluid": "spectrum:midnight_solution",
  "copy_nbt": true,
  "ingredients": [
    {
      "item": "spectrumjetpacks:gemstone_jetpack"
    },
    {
      "item": "spectrum:bedrock_dust",
      "count": 6
    },
    {
      "item": "spectrum:black_pigment",
      "count": 6
    },
    {
      "item": "spectrum:onyx_powder",
      "count": 6
    },
    {
      "item": "spectrum:stratine_gem",
      "count": 3
    },
    {
      "item": "spectrum:midnight_aberration",
      "count": 4
    }
  ],
  "result": {
    "item": "spectrumjetpacks:bedrock_jetpack"
  },
  "required_advancement": "spectrum:midgame/create_midnight_aberration",
  "world_conditions": [],
  "start_crafting_effect": "nothing",
  "during_crafting_effects": [],
  "finish_crafting_effect": "single_visual_explosion_on_shrine"
})

// band aid terminite ingot fix for servers
event.custom(
  {
    "type": "techreborn:alloy_smelter",
    "power": 2,
    "time": 100,
    "ingredients" : [
      {
        "item": "betterend:thallasium_ingot",
        "count": 1
      },
      {
        "item": "betterend:ender_dust",
        "count": 1
      }
    ],
    "results" : [
      {
        "item": "betterend:terminite_ingot",
        "count": 1
      }
    ]
  }
)
//   event.custom({
//   "type": "botania:runic_altar",
//   "output": {
//     "item": "kibe:angel_ring"
//   },
//   "mana": 90000,
//   "ingedients": [{
//       "item": "botania:gaia_ingot"
//     },
//     {
//       "item": "modern_industrialization:quantum_circuit"
//     },
//     {
//       "item": "kubejs:cursed_gem"
//     },
//     {
//       "item": "techreborn:interdimensional_su"
//     }
//   ]
// });

///// Tech Reborn Removal

// TECH Reborn Solar Panels
event.remove({ id: "techreborn:crafting_table/solar_panel/ultimate_solar_panel_alt" });
event.remove({ id: "techreborn:crafting_table/solar_panel/industrial_solar_panel_alt" });
event.remove({ id: "techreborn:crafting_table/solar_panel/advanced_solar_panel_alt" });
event.remove({ id: "techreborn:crafting_table/solar_panel/advanced_solar_panel_alt" });

// Tech Reborn Gem Tools & Gear - Useless
var gems = [
"ruby"
];

gems.forEach(function (item, index) {
event.remove({ output: "techreborn:" + item + "_pickaxe"});
event.remove({ output: "techreborn:" + item + "_spade"});
event.remove({ output: "techreborn:" + item + "_axe"});
event.remove({ output: "techreborn:" + item + "_hoe"});
event.remove({ output: "techreborn:" + item + "_sword"});
event.remove({ output: "techreborn:" + item + "_chestplate"});
event.remove({ output: "techreborn:" + item + "_helmet"});
event.remove({ output: "techreborn:" + item + "_leggings"});
event.remove({ output: "techreborn:" + item + "_boots"});
});



///////////////////////////////////
// Single item in recipe replace //

// event.replaceInput(
//   {id: "plantinajar:plant_jar"},
//   "minecraft:iron_ingot",
//   "techreborn:aluminum_ingot"
// )
event.remove({id: "plantinajar:plant_jar"})
event.shaped("plantinajar:plant_jar", ["ggg", "gpg", "gig"],
  {
    g: "botania:mana_glass",
    p: "croptosis:potash_block",
    i: "mobz:hardenedmetal_ingot"
  })

// Resourceful Tools - Diamond Hammer
event.remove({id: 'resourceful_tools:crack_hammer_leather_diamond'})
event.replaceInput(
{ id: "resourceful_tools:crack_hammer_diamond" },
"minecraft:stick",
"betterend:leather_wrapped_stick"
);

event.replaceInput(
{ id: "resourceful_tools:crack_hammer_diamond" },
"minecraft:string",
"minecraft:diamond_block"
);

event.remove({id: "jamd:mine_portal_block"})
event.shaped("jamd:mine_portal_block", [
['gobber2:gobber2_globette', 'gobber2:gobber2_globette', 'gobber2:gobber2_globette'],
['gobber2:gobber2_globette', 'gobber2:gobber2_glob', 'gobber2:gobber2_globette'],
['gobber2:gobber2_globette', 'gobber2:gobber2_globette', 'gobber2:gobber2_globette']
]);

// Steam drill

event.replaceInput(
{ id: "modern_industrialization:tools/steam_mining_drill" },
"minecraft:furnace",
"gobber2:gobber2_rod"
);

event.replaceInput(
  { id: "modern_industrialization:tools/steam_mining_drill" },
  "minecraft:diamond",
  "techreborn:ruby_plate"
  );

// Building Gadgets - Destruction Gadget, end game. its too destructive.
event.replaceInput(
{ id: "buildinggadgets:gadget_destruction" },
"minecraft:lapis_lazuli",
"kibe:angel_ring"
);

////// Things

// Riot Gauntlet
event.replaceInput(
 { id: "things:empty_agglomeration" },
 "minecraft:slime_ball",
 "gobber2:dragon_star"
);

event.replaceInput(
  { id: "things:infernal_scepter" },
  "minecraft:blaze_rod",
  "gobber2:gobber2_rod_end"
 );

event.remove({id: "things:riot_gauntlet"})
event.shaped("things:riot_gauntlet", ['nhn', 'hch', 'hoh'],
{
  n: "minecraft:netherite_ingot",
  h: "techreborn:hot_tungstensteel_ingot",
  c: "things:gleaming_compound" ,
  o: "minecraft:crying_obsidian"
})



 // Mining
event.replaceInput(
{ id: "things:mining_gloves" },
"minecraft:leather",
"modern_industrialization:highly_advanced_upgrade"
);

// Enchanted Wax Gland -- old recipe
 event.replaceInput(
 { id: "things:enchanted_wax_gland" },
 "minecraft:pufferfish",
 "gobber2:gobber2_medallion_sea"
);

 // Compress Ruby Block
//  event.replaceInput(
// { id: "compress:compressed_ruby_block_1" },
// "compress:ruby_block",
// "betternether:nether_ruby_block"
// );

// Custom Portals Infinity Range
// event.replaceInput(
// { id: "customportals:infinity_rune" },
// "minecraft:netherite_ingot",
// "gobber2:dragon_star"
// );

event.shaped("minecraft:saddle", [' s ', 's s', 's s'],
{
  s: 'minecraft:leather'
})

// Dark Enchanter
event.remove({id: "dark-enchanting:dark_enchanter"})
event.shaped("dark-enchanting:dark_enchanter", ['bgb', 'gEg', 'GGG'],
{
  b: 'botania:mana_diamond',
  g: 'mythicmetals:midas_gold_ingot',
  E: 'minecraft:enchanting_table',
  G: 'gobber2:gobber2_glob_end'
})

// Dark Enchanter Upgrade
event.remove({id: "dark-enchanting:table_upgrade"})
event.shaped("dark-enchanting:table_upgrade", ['bgb', 'gAg', 'GGG'],
{
  b: 'botania:mana_diamond',
  g: 'mythicmetals:midas_gold_ingot',
  A: 'aqm2:aqm2',
  G: 'gobber2:gobber2_glob_end'
})

// SoulFire
event.remove({ output: "conjuring:soulfire_forge" });
event.shaped("conjuring:soulfire_forge", [
["minecraft:nether_star", "minecraft:dragon_head", "minecraft:nether_star"],
["gobber2:gobber2_ingot_end", null, "gobber2:gobber2_ingot_end"],
["minecraft:crying_obsidian", "gobber2:gobber2_links_end", "minecraft:crying_obsidian"],
]);



///////////////////////////////////////////////// EXTRA GENERATORS

// extra generators heavenly
event.replaceInput(
{ id: "extragenerators:heavenly_generator" },
"minecraft:netherite_block",
"gofish:aquatic_astral_stew"
);

// extra generators infernal
event.replaceInput(
{ id: "extragenerators:infernal_generator" },
"minecraft:netherite_block",
"modern_industrialization:superconductor_ingot"
);
// extra generators dragon
event.replaceInput(
{ id: "extragenerators:dragon_generator" },
"#c:iron_ingots",
"gobber2:dragon_star"
);
// extra generators withered
event.replaceInput(
{ id: "extragenerators:withered_generator" },
"#c:iron_ingots",
"conjuring:soul_slice"
);

// extra generators burnable
event.replaceInput(
{ id: "extragenerators:burnable_generator" },
"#c:iron_ingots",
"modern_industrialization:copper_double_ingot"
);

// extra generators sludgy
// event.replaceInput(
// { id: "extragenerators:sludgy_generator" },
// "#c:iron_ingots",
// "betternether:cincinnasite_ingot"
// );

// extra generators teleport
event.replaceInput(
{ id: "extragenerators:teleport_generator" },
"#c:iron_ingots",
"minecraft:beacon"
);
// extra generators scalding
event.replaceInput(
{ id: "extragenerators:scalding_generator" },
"#c:iron_ingots",
"blockus:chiseled_lava_bricks"
);
// extra generators steam
event.replaceInput(
{ id: "extragenerators:steam_generator" },
"#c:iron_ingots",
"modern_industrialization:steam_blast_furnace"
);
// extra generators demise
event.replaceInput(
{ id: "extragenerators:demise_generator" },
"#c:iron_ingots",
"conjuring:soul_alloy"
);
// extra generators enchanted
event.replaceInput(
{ id: "extragenerators:enchanted_generator" },
"#c:iron_ingots",
"things:enchanted_wax_gland"
);
// extra generators gluttony
event.replaceInput(
{ id: "extragenerators:gluttony_generator" },
"#c:iron_ingots",
"gofish:smokey_salmon"
);
// extra generators gluttony
event.replaceInput(
{ id: "extragenerators:redstone_generator" },
"#c:iron_ingots",
"techreborn:redstone_plate"
);
//////////////////////////////////////////////////////////////////////

////// Bewitchment

// Juniper Brooms
event.remove({id: "bewitchment:juniper_broom"})
event.shaped("bewitchment:juniper_broom", [" d ", "h 1", "ses"],
{
  d: "aqm2:demon_pearl",
  h: "bewitchment:demon_heart",
  1: "spectrum:paltaeria_gem",
  s: "bewitchment:juniper_sapling",
  e: "bewitchment:heaven_extract"
})

// // Cypress Brooms
event.remove({id: "bewitchment:cypress_broom"})
event.shaped("bewitchment:cypress_broom", [" d ", "h 1", "ses"],
{
  d: "aqm2:demon_pearl",
  h: "bewitchment:demon_heart",
  1: "spectrum:paltaeria_gem",
  s: "bewitchment:cypress_sapling",
  e: "bewitchment:heaven_extract"
})

// // Elder Broom
event.remove({id: "bewitchment:elder_broom"})
event.shaped("bewitchment:elder_broom", [" d ", "h 1", "ses"],
{
  d: "aqm2:demon_pearl",
  h: "bewitchment:demon_heart",
  1: "spectrum:paltaeria_gem",
  s: "bewitchment:elder_sapling",
  e: "bewitchment:heaven_extract"
})

// // Dragon Blood Broom
event.remove({id: "bewitchment:dragons_blood_broom"})
event.shaped("bewitchment:dragons_blood_broom", [" d ", "h 1", "ses"],
{
  d: "aqm2:demon_pearl",
  h: "bewitchment:demon_heart",
  1: "spectrum:paltaeria_gem",
  s: "bewitchment:dragons_blood_sapling",
  e: "bewitchment:heaven_extract"
})

// Final Broom
event.replaceInput({id: "besmirchment:final_broom"}, "minecraft:nether_star", "gobber2:dragon_star")

////// Gobber2

// Dragon Armor Chestplate recipe change
event.replaceInput(
{ id: "gobber2:gobber2_chestplate_dragon" },
"minecraft:dragon_head",
"gobber2:dragon_elytra"
);

// drdagon elytra 
event.replaceInput(
{ id: "gobber2:dragon_elytra" },
"minecraft:dragon_head",
"gobber2:dragon_star"
);

// Dragon Armor Leggings recipe change
event.replaceInput(
{ id: "gobber2:gobber2_leggings_dragon" },
"minecraft:dragon_head",
"gobber2:dragon_star"
);

// Dragon Armor Boots recipe change
event.replaceInput(
{ id: "gobber2:gobber2_boots_dragon" },
"minecraft:dragon_head",
"gobber2:dragon_star"
);

// Dragon Armor Helmet recipe change
event.replaceInput(
{ id: "gobber2:gobber2_helmet_dragon" },
"minecraft:dragon_head",
"gobber2:dragon_star"
);

// Doom Argent Ingot
event.replaceInput(
{ id: "doom:argent_plate" },
"minecraft:netherite_scrap",
"deeperdarker:soul_dust"
);

event.remove({id: "doom:axe_marauder_open"})
event.custom({"type":"doom:gun_table","pattern":"abcd","key":{"a":{"item":"doom:argent_plate","count":20},"b":{"item":"gobber2:dragon_star","count":6},"c":{"item":"doom:axe_marauder_closed","count":1},"d":{"item":"aqm2:cursed_gem","count":1}},"result":{"item":"doom:axe_marauder_open"}})

event.remove({id: "doom:cruciblesword_closed"})
event.custom({"type":"doom:gun_table","pattern":"abc","key":{"a":{"item":"doom:argent_plate","count":20},"b":{"item":"gobber2:gobber2_ingot_nether","count":10},"c":{"item":"aqm2:star_of_icon","count":1}},"result":{"item":"doom:cruciblesword_closed"}})

event.remove({id: "doom:sentinelhammer"})
event.custom({"type":"doom:gun_table","pattern":"abcd","key":{"a":{"item":"doom:argent_energy","count":20},"b":{"item":"doom:argent_plate","count":10},"c":{"item":"aqm2:corrupted_emerald","count":1},"d":{"item":"aqm2:demon_pearl","count":1}},"result":{"item":"doom:sentinelhammer"}})

// temp gold dim door removal until fix
event.remove({output:"dimdoors:gold_dimensional_door"})
//  dim doors - gold
//  event.replaceInput(
//  { id: "dimdoors:gold_dimensional_door" },
//  "minecraft:ender_pearl",
//  "compressed:gold_block_iv"
//  );

//  dim doors - iron
 event.replaceInput(
 { id: "dimdoors:iron_dimensional_door" },
 "minecraft:ender_pearl",
 "gobber2:gobber2_ingot_nether"
 );

 event.replaceInput(
  {id: "prefab:ender_gateway"},
  "minecraft:prismarine",
  "betterend:amber_gem"
 )

//  dim doors - oak
 event.replaceInput(
 { id: "dimdoors:oak_dimensional_door" },
 "minecraft:ender_pearl",
 "prefab:item_heap_of_timber"
 );

//  dim doors - quartz
 event.replaceInput(
 { id: "dimdoors:quartz_dimensional_door" },
 "minecraft:ender_pearl",
 "gobber2:gobber2_ingot_end"
 );

// dim door blade
 event.replaceInput(
 { id: "dimdoors:rift_blade" },
 "minecraft:iron_sword",
 "gobber2:gobber2_sword_nether"
 );


// // Dim Doors - stabrift signature
 event.remove({ output: "dimdoors:stabilized_rift_signature" });
 event.shaped(Item.of("dimdoors:stabilized_rift_signature"), [
 ["","gobber2:gobber2_rod_end", ""],
 ["gobber2:gobber2_rod_end", "dimdoors:rift_signature","gobber2:gobber2_rod_end"],
 ["","gobber2:gobber2_rod_end", ""],
 ]);

// // dim doors - rift sig
 event.remove({ output: "dimdoors:rift_signature" });
 event.shaped(Item.of("dimdoors:rift_signature"), [
 ["","gobber2:gobber2_rod_nether", ""],
 ["gobber2:gobber2_rod_nether", "dimdoors:stable_fabric","gobber2:gobber2_rod_nether"],
 ["","gobber2:gobber2_rod_nether", ""],
 ]);

// kibe Slime Boots
event.replaceInput(
{ id: "kibe:slime_boots" },
"minecraft:slime_ball",
"gofish:slimefish"
);

// kibe Slime Sling
event.replaceInput(
{ id: "kibe:slime_sling" },
"minecraft:slime_ball",
"gofish:slimefish"
);

event.shaped("bewitchment:demon_horn", ["12 ", "34 ", "   "],
  {
    1: "bewitchment:grim_elixir",
    2: "bewitchment:fiery_serum",
    3: "doom:argent_energy",
    4: "minecraft:blaze_rod"
  })

  // event.remove({id: "techreborn:crafting_table/tool/nanosaber"})
  // event.shaped("techreborn:nanosaber", ["p S", "paS", "1 2"],
  //   {
  //     1: "soulsweapons:verglas",
  //     2: "techreborn:lapotronic_orbpack",
  //     p: "modern_industrialization:invar_large_plate",
  //     a: "mythicmetals:unobtainium_block",
  //     S: "gobber2:dragon_star"
  //   })

// comet spear soulsweapon
// event.replaceInput({output: "soulsweapons:comet_spear"}, "minecraft:gold_ingot", "gobber2:dragon_star")
event.remove({output: "soulsweapons:comet_spear"})
event.shaped("soulsweapons:comet_spear", [" 11", "2s1", "s1 "],
  {
    1: "gobber2:dragon_star",
    2: "soulsweapons:moonstone",
    s: "soulsweapons:lord_soul_void"
  })

  event.remove({id: "soulsweapons:featherlight_recipe"})
  event.shaped("soulsweapons:featherlight", ["BSB", "BSB", " p "], 
    {
      B: "betternether:blue_crying_obsidian",
      S: "minecraft:echo_shard",
      p: "minecraft:diamond_pickaxe"
    })
// event.replaceInput({output: "soulsweapons:bloodthirster"}, "minecraft:iron_ingot", "soulsweapons:soul_ingot")
event.remove({output: "soulsweapons:bloodthirster"})
event.shaped("soulsweapons:bloodthirster", ["121", "121", " s "],
  {
    1: "soulsweapons:soul_ingot",
    2: "soulsweapons:crimson_ingot",
    s: "minecraft:stick"
  })
event.replaceInput({output: "soulsweapons:soul_ingot"}, "minecraft:iron_ingot", "gobber2:gobber2_ingot_end")
event.remove({output: "soulsweapons:leviathan_axe"})
event.shaped("soulsweapons:leviathan_axe", ["21 ", "s1 ", "1  "],
  {
    1: "soulsweapons:moonstone",
    2: "soulsweapons:lord_soul_purple",
    s: "minecraft:stick"
  })
  event.remove({output: "soulsweapons:lich_bane"})
event.shaped("soulsweapons:lich_bane", ["  r", "12 ", "i1 "],
  {
    1: "botania:mana_diamond",
    r: "gobber2:gobber2_rod_end",
    2: "soulsweapons:lord_soul_dark",
    i: "minecraft:copper_ingot"
  })
event.remove({output: "soulsweapons:lord_soul_red"})
event.shaped("soulsweapons:lord_soul_red", ["SSS", "SSS", "ASS"],
  {
    S: "soulsweapons:lost_soul",
    A: "soulsweapons:verglas"
  })
event.remove({output: "soulsweapons:dragon_staff"})
event.shaped("soulsweapons:dragon_staff", ["r  ", "g  ", "gim"],
  {
    g: "gobber2:gobber2_rod_end",
    r: "adventurez:stone_golem_heart",
    i: "soulsweapons:soul_ingot",
    m: "soulsweapons:moonstone"
  })
event.remove({output: "soulsweapons:guts_sword"})
event.shaped("soulsweapons:guts_sword", [" o ", "ooo", "oso"],
  {
    o: "mythicmetals:osmium_block",
    s: "minecraft:stick"
  })
// event.replaceInput({output: "soulsweapons:dragonslayer_swordspear"}, "minecraft:gold_ingot", "dragonloot:dragon_scale")
event.remove({output: "soulsweapons:dragonslayer_swordspear"})
event.shaped("soulsweapons:dragonslayer_swordspear", [" 1 ", "121", "1s1"],
  {
    1: "dragonloot:dragon_scale",
    2: "#soulsweapons:lord_soul",
    s: "minecraft:stick"
  })
event.replaceInput({output: "soulsweapons:galeforce"}, "minecraft:string", "botania:mana_string")
event.replaceInput({output: "soulsweapons:rageblade"}, "minecraft:blaze_rod", "gobber2:gobber2_rod_end")
// event.replaceInput({output: "soulsweapons:whirligig_sawblade"}, "minecraft:iron_ingot", "mobz:boss_ingot")
event.remove({output: "soulsweapons:whirligig_sawblade"})
event.shaped("soulsweapons:whirligig_sawblade", [" 1 ", "121", "s1 "],
  {
    1: "mobz:boss_ingot",
    2: "#soulsweapons:lord_soul",
    s: "minecraft:stick"
  })
event.remove({output: "soulsweapons:freyr_sword"})
// event.shaped("soulsweapons:freyr_sword", [" 1 ", " 2 ", "s3s"],
//   {
//     1: "soulsweapons:moonstone",
//     2: "soulsweapons:verglas",
//     3: "#soulsweapons:lord_soul",
//     s: "gobber2:dragon_star"
//   })
  event.custom({
    "type": "botania:runic_altar",
    "output": {
      "item": "soulsweapons:freyr_sword"
    },
    "mana": 50000,
    "ingredients": [
      {
        "item": "soulsweapons:moonstone",
      },
      {
        "item": "soulsweapons:moonstone",
      },
      {
        "item": "soulsweapons:moonstone",
      },
      {
        "item": "soulsweapons:verglas",
      },
      {
        "item": "soulsweapons:verglas",
      },
      {
        "tag": "soulsweapons:lord_soul",
      },
      {
        "item": "gobber2:dragon_star",
      },
      {
        "item": "bosses_of_mass_destruction:void_thorn"
      }
      ]
    })
  
    event.remove({output: "soulsweapons:mjolnir"})
    event.custom({
      "type": "botania:runic_altar",
      "output": {
        "item": "soulsweapons:mjolnir"
      },
      "mana": 50000,
      "ingredients": [
        {
          "item": "soulsweapons:moonstone",
        },
        {
          "item": "soulsweapons:moonstone",
        },
        {
          "item": "soulsweapons:moonstone",
        },
        {
          "item": "soulsweapons:verglas",
        },
        {
          "item": "soulsweapons:verglas",
        },
        {
          "item": "soulsweapons:chaos_orb"
        },
        {
          "item": "aqm2:cursed_gem"
        },
        {
          "item": "bosses_of_mass_destruction:void_thorn"
        }
        ]
      })

// Gobber2 - Ring of haste
event.replaceInput(
{ id: "gobber2:gobber2_ring_haste" },
"minecraft:emerald",
"modern_industrialization:highly_advanced_upgrade"
);

// Gobber2 - Medallion healing lesser
event.replaceInput(
{ id: "gobber2:gobber2_medallion_healing" },
"minecraft:rabbit_foot",
"bewitchment:glowing_bramble"
);

// Gobber2 - Medallion healing lesser 2
event.replaceInput(
{ id: "gobber2:gobber2_medallion_healing2" },
"minecraft:weeping_vines",
"minecraft:nether_star"
);

// Gobber2 - Medallion healing lesser 3
event.replaceInput(
{ id: "gobber2:gobber2_medallion_healing3" },
"minecraft:nether_star",
"adventurez:warthog_shell_piece"
);

// Gobber2 - Ring of Void
event.replaceInput(
{ id: "gobber2:gobber2_ring_void" },
"minecraft:ender_eye",
"minecraft:shulker_shell"
);

// Gobber2 - Ring of Above
event.replaceInput(
{ id: "gobber2:gobber2_ring_above" },
"minecraft:emerald",
"adventurez:orc_skin"
);

// Gobber2 - Ring of Above pt2
event.replaceInput(
{ id: "gobber2:gobber2_ring_above" },
"minecraft:lapis_lazuli",
"adventurez:warthog_shell_piece"
);

// Gobber2 - Ring of Return
event.replaceInput(
{ id: "gobber2:gobber2_ring_return" },
"minecraft:ender_pearl",
"fwaystones:abyss_watcher"
);

// Gobber2 - Ring of Explorer
event.replaceInput(
{ id: "gobber2:gobber2_ring_explorer" },
"gobber2:gobber2_ring_return",
"bosses_of_mass_destruction:void_thorn"
);

event.remove({ output: "gobber2:gobber2_ring_curing" });
event.custom({
  "type": "botania:runic_altar",
  "output": {
    "item": "gobber2:gobber2_ring_curing"
  },
  "mana": 33333,
  "ingredients": [
    {
      "item": "adventurez:stone_golem_heart"
    },
    {
      "item": "aqm2:cursed_gem"
    },
    {
      "item": "gobber2:gobber2_rod_end"
    },
    {
      "item": "artifacts:antidote_vessel"
    },
    {
      "item": "gobber2:gobber2_ring_end"
    }
    ]
  })

event.remove({id: "gobber2:gobber2_ring_miner"})
// event.shaped("gobber2:gobber2_ring_miner", ['123', '456', '789'],
// {
//   1: '#c:diamond_ores',
//   2: 'minecraft:ancient_debris',
//   3: '#c:emerald_ores',
//   4: 'gobber2:gobber2_ore',
//   5: 'gobber2:gobber2_ring',
//   6: 'lightestlamp:lanthanum_ore',
//   7: '#c:emerald_ores',
//   8: 'minecraft:ancient_debris',
//   9: '#c:diamond_ores'
// })
event.custom({
  "type": "botania:runic_altar",
  "output": {
    "item": "gobber2:gobber2_ring_miner"
  },
  "mana": 5000,
  "ingredients": [
    {
      "tag": 'c:diamond_ores',
    },
    {
      "item": 'minecraft:ancient_debris',
    },
    {
      "tag": 'c:emerald_ores',
    },
    {
      "item": 'gobber2:gobber2_ore',
    },
    {
      "item": 'gobber2:gobber2_ring',
    },
    {
      "item": 'lightestlamp:lanthanum_ore',
    },
    {
      "tag": 'c:emerald_ores',
    },
    {
      "item": 'minecraft:ancient_debris',
    },
    {
      "tag": 'c:diamond_ores',
    }
    ]
  })

//Gobber2 - Swiftness
event.remove({ output: "gobber2:gobber2_ring_swiftness" });
event.shaped("gobber2:gobber2_ring_swiftness", [
["","mcdar:boots_of_swiftness", ""],
["lightestlamp:lanthanum_ore","gobber2:gobber2_ring","adventurez:warthog_shell_piece"],
["","botania:rune_water", ""],
]);

// Kibe Escape Rope
event.remove({ output: "kibe:escape_rope" });
event.shaped("kibe:escape_rope", [
["minecraft:string","minecraft:string", ""],
["minecraft:string","minecraft:string",""],
["minecraft:string","minecraft:string", "adventurez:gilded_stone"],
]);
// Compact Machine - Removed from AQM2 v1.2 - 1.19.2
// event.remove({id: "compactmachines:wall"})
// event.custom({
//   "type": "indrev:fluid_infuse",
//   "ingredients": [
//     {
//       "item": "dml-refabricated:soot_redstone",
//       "count": 1
//     }
//   ],
//   "fluidInput": {
//     "fluid": "indrev:coolant_still",
//     "amount": 81000
//   },
//   "output": {
//     "item": "compactmachines:wall",
//     "count": 1
//   },
//   "processTime": 200
// })

// event.replaceInput({id: "compactmachines:machine_tiny"}, "#minecraft:planks", "indrev:plank_block")
// event.replaceInput({id: "compactmachines:machine_small"}, "minecraft:iron_block", "compactmachines:machine_tiny")
// event.replaceInput({id: "compactmachines:machine_normal"}, "minecraft:gold_block", "compactmachines:machine_small")
// event.replaceInput({id: "compactmachines:machine_large"}, "minecraft:obsidian", "compactmachines:machine_normal")
// event.replaceInput({id: "compactmachines:machine_giant"}, "minecraft:diamond_block", "compactmachines:machine_large")
// event.replaceInput({id: "compactmachines:machine_maximum"}, "minecraft:emerald_block", "compactmachines:machine_giant")

// Tools and Sword

var doom_tools = [
  "shovel",
  "hoe",
  "sword",
]

doom_tools.forEach(function (item, index) {
event.replaceInput(
  { id: "doom:argent_" + item},
  "minecraft:stick",
  "doom:argent_plate"
  );
});

  // Quarry Plus
  //  event.replaceInput(
  //    { id: "quarryplus:quarry" },
  //    "minecraft:iron_ingot",
  //    "techreborn:hot_tungstensteel_ingot"
  //    );

  //  event.replaceInput(
  //    { id: "quarryplus:quarry" },
  //    "minecraft:dropper",
  //    "modern_industrialization:electric_quarry"
  //    );

  //  event.replaceInput(
  //    { id: "quarryplus:quarry" },
  //    "minecraft:redstone_block",
  //    "modern_industrialization:advanced_upgrade"
  //    );

  //   event.replaceInput(
  //     { id: "quarryplus:quarry" },
  //     "minecraft:golden_pickaxe",
  //     "gobber2:gobber2_pickaxe_nether"
  //   );
  event.remove({id: "quarryplus:quarry"})
  event.shaped("quarryplus:quarry", ["iti", "pqp", "iai"],
    {
      i: "techreborn:hot_tungstensteel_ingot",
      t: "minecraft:obsidian",
      p: "gobber2:gobber2_pickaxe_nether",
      q: "modern_industrialization:electric_quarry",
      a: "modern_industrialization:advanced_upgrade"
    })

  // kibe gliders

    var kibeGlidersX = [
    "white",
    "magenta",
    "orange",
    "light_blue",
    "yellow",
    "green",
    "pink",
    "gray",
    "lime",
    "blue",
    "light_gray",
    "cyan",
    "purple",
    "brown",
    "red",
    "black"
  ];

  // kibeGlidersX.forEach(function (item, index) {
    event.replaceInput(
      { id: "kibe:glider_left_wing"},
      "minecraft:white_wool",
      "gobber2:gobber2_rod"
      )

    event.replaceInput(
      { id: "kibe:glider_right_wing"},
      "minecraft:white_wool",
      "gobber2:gobber2_rod"
      )
    // });

  // Remove Doom OP items
event.remove({output: 'doom:daisy'});
event.remove({output: 'doom:soulcube'});

// Origins Orb
event.remove({output: 'origins:orb_of_origin'});
event.shaped('origins:orb_of_origin', [
['doom:argent_energy', 'bewitchment:cleansing_balm', 'minecraft:nether_star'],
]);

// QoL Sticks
event.shaped("16x minecraft:stick", [
  ["#minecraft:logs"],
  ["#minecraft:logs"],
]);


// Tanks

const tanksRem =[
  "stone",
  "copper",
  "iron",
  "gold",
  "diamond",
  "emerald",
  "star",
  "bronze",
  "silver",
  "lead",
  "tin" 
];

tanksRem.forEach(function(item,index) {
  event.remove({output: "fluidtank:tank_" + item})
});

event.shaped("fluidtank:tank_stone", ["iti", "tit", "iti"],
{
  i: "minecraft:cracked_stone_bricks",
  t: "fluidtank:tank_wood"
})

event.shaped("fluidtank:tank_copper", ["iti", "tit", "iti"],
{
  i: "techreborn:copper_plate",
  t: "fluidtank:tank_stone"
})


event.shaped("fluidtank:tank_iron", ["iti", "tit", "iti"],
{
  i: "techreborn:iron_plate",
  t: "fluidtank:tank_copper"
})


event.shaped("fluidtank:tank_gold", ["iti", "tit", "iti"],
{
  i: "techreborn:gold_plate",
  t: "fluidtank:tank_iron"
})


event.shaped("fluidtank:tank_diamond", ["iti", "tit", "iti"],
{
  i: "techreborn:diamond_plate",
  t: "fluidtank:tank_gold"
})


event.shaped("fluidtank:tank_emerald", ["iti", "tit", "iti"],
{
  i: "techreborn:emerald_plate",
  t: "fluidtank:tank_diamond"
})

event.shaped("fluidtank:tank_star", ["iti", "tit", "iti"],
{
  i: "techreborn:industrial_tank_unit",
  t: "fluidtank:tank_emerald"
})

event.remove({ output: "things:enchanted_wax_gland" });
event.custom({
  "type": "botania:runic_altar",
  "output": {
    "item": "things:enchanted_wax_gland"
  },
  "mana": 50000,
  "ingredients": [
    {
      "item": "gobber2:gobber2_medallion_sea"
    },
    {
      "item": "gobber2:gobber2_medallion_sea"
    },
    {
      "item": "minecraft:heart_of_the_sea"
    },
    {
      "item": "things:gleaming_compound"
    },
    {
      "item": "things:gleaming_compound"
    },
    {
      "item": "botania:rune_water"
    }
    ]
  })

//AE2 SkyBlocks
event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": "minecraft:crying_obsidian"
  },
  "output": {
    "item": "ae2:sky_stone_block",
    "count": 2
  },
  "mana": 200,
  "catalyst": {
    "type": "block",
    "block": "botania:alchemy_catalyst"
  }
});
//AE2 calculation_processor_press
event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": "ae2:certus_quartz_crystal"
  },
  "output": {
    "item": "ae2:calculation_processor_press"
  },
  "mana": 125
});
//AE2 engineering press
event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": "techreborn:diamond_nugget"
  },
  "output": {
    "item": "ae2:engineering_processor_press"
  },
  "mana": 200
});
//AE2 logic press
event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": "minecraft:gold_nugget"
  },
  "output": {
    "item": "ae2:logic_processor_press"
  },
  "mana": 200
});
//AE2 silicon press
event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": "ae2:silicon"
  },
  "output": {
    "item": "ae2:silicon_press"
  },
  "mana": 200
});

// Magictek Mechs
event.replaceInput(
  { id: "mtmechs:magicite_item" },
  "minecraft:soul_sand",
  "botania:mana_diamond"
);

event.replaceInput(
  { id: "mtmechs:magicite_item" },
  "minecraft:quartz",
  "gobber2:gobber2_rod"
);


// Heartbond heart
event.replaceInput(
{ id: "heartbond:ender_heart" },
"minecraft:nether_star",
"gobber2:gobber2_ingot"
);


// Doom Gun table
event.replaceInput(
{ id: "doom:gun_table" },
"minecraft:comparator",
"doom:argent_block"
);

// Things
// event.replaceInput(
// { id: "things:item_magnet" },
// "minecraft:iron_ingot",
// "dml-refabricated:glitch_ingot"
// );
event.remove({id: "things:item_magnet"})
event.shaped("things:item_magnet", ['a a', 'i i', 'ipi'],
{
  a: "things:gleaming_powder",
  i: "dml-refabricated:glitch_ingot",
  p: "minecraft:ender_pearl"
})

// event.replaceInput(
// { id: "things:recall_potion" },
// "minecraft:ender_pearl",
// "mythicmetals:aquarium_pearl"
// );

event.replaceInput(
{ id: "bosses_of_mass_destruction:brimstone_nectar"},
"minecraft:ghast_tear",
"gobber2:dragon_star"
);

event.remove({id:"things:socks"})
event.custom({
  "type": "botania:runic_altar",
  "output": {
    "item": "things:socks"
   },
  "mana": 10000,
  "ingredients": [
    {
      "item": "winged:phoenix_feather"
    },
    {
      "item": "winged:phoenix_feather"
    },
    {
      "item": "things:gleaming_compound"
    },
    {
      "item": "things:gleaming_compound"
    },
    {
      "item": "things:gleaming_compound"
    },
    {
      "item": "spectrum:upgrade_speed2"
    }
    ]
  });


event.remove({output:"things:rabbit_foot_charm"})
event.custom({
  "type": "botania:runic_altar",
  "output": {
    "item": "things:rabbit_foot_charm"
  },
  "mana": 10000,
  "ingredients": [
    {
      "item": "spectrum:rabbit_head"
    },
    {
      "item": "things:gleaming_compound"
    },
    {
      "item": "things:gleaming_compound"
    },
    {
      "item": "betternether:cincinnasite_chain"
    }
    ]
  });
  // event.remove({output:Item.of('patchouli:guide_book', '{"patchouli:book":"agape_space:space_guide"}')})
  // event.shapeless(Item.of('patchouli:guide_book', '{"patchouli:book":"agape_space:space_guide"}'), ['minecraft:book', 'minecraft:amethyst_shard'])
  event.shapeless('aqm2:aqm2', ['minecraft:apple',"minecraft:purple_banner",'minecraft:stick'])
  event.remove({output:"things:arm_extender"})
  //  event.custom({
  //    "type": "botania:runic_altar",
  //    "output": {
  //      "item": "things:arm_extender"
  //     },
  //    "mana": 25000,
  //    "ingredients": [
  //      {
  //        "item": "techreborn:lead_ingot"
  //      },
  //      {
  //        "item": "things:gleaming_compound"
  //      },
  //      {
  //        "item": "minecraft:fishing_rod"
  //      },
  //      {
  //        "item": "bosses_of_mass_destruction:ancient_anima"
  //      },
  //      {
  //        "item": "lightestlamp:xenon_rod"
  //      }
  //      ]
  //    });
  
    event.custom({ 
        "type": "create:mechanical_crafting",
        "pattern": [
            " L ",
            " R ",
            "ASA",
            " G ",
            " H "
        ],
        "key": {
            "L": {
                "item": "techreborn:lead_ingot"
            },
            "R": {
                "item": "things:gleaming_compound"
            },
            "H": {
                "item": "create:brass_hand"
            },
            "A": {
                "item": "minecraft:fishing_rod"
            },
            "S": {
              "item": "lightestlamp:xenon_rod"
            },
            "G": {
              "item": "bosses_of_mass_destruction:ancient_anima"
          }
        },
        "result": {
            "item": "things:arm_extender"
        },
        "acceptMirrored": false
    })

    event.remove({output:"things:moss_necklace"})
    event.custom({ 
      "type": "create:mechanical_crafting",
      "pattern": [
          " M ",
          " 1 ",
          "CCC",
          " C "
      ],
      "key": {
          "M": {
              "item": "gobber2:gobber2_medallion_healing"
          },
          "1": {
              "item": "gobber2:gobber2_medallion_healing2"
          },
          "C": {
              "item": "things:gleaming_compound"
          }
      },
      "result": {
          "item": "things:moss_necklace"
      },
      "acceptMirrored": false
  })
event.remove({output:"things:hardening_catalyst"})
event.custom({
  "type": "botania:runic_altar",
  "output": {
    "item": "things:hardening_catalyst"
  },
  "mana": 33333,
  "ingredients": [
    {
      "item": "gobber2:dragon_star"
    },
    {
      "item": "gobber2:dragon_star"
    },
    {
      "item": "spectrum:refined_azurite"
    },
    {
      "item": "spectrum:refined_azurite"
    },
    {
      "item": "botania:corporea_spark_master"
    },
    {
      "item": "techreborn:uu_matter"
    },
    {
      "item": "techreborn:uu_matter"
    }
    ]
  });

event.remove({ output: Item.of('things:displacement_tome')})
event.custom(
  {
  "type": "botania:runic_altar",
  "output": {
    "item": "things:displacement_tome"
  },
  "mana": 50000,
  "ingredients": [
    {
      "item": "fwaystones:pocket_wormhole"
    },
    {
      "item": "fwaystones:pocket_wormhole"
    },
    {
      "item": "aqm2:cursed_gem"
    }
  ]
});

event.remove({output:"things:displacement_page"})
event.shaped("things:displacement_page", ["123", "4  "],
  {
    1: "winged:phoenix_feather",
    2: "techreborn:ender_eye_dust",
    3: "betterend:twisted_umbrella_moss", 
    4: "betternether:soul_vein"
});

event.remove({ id: "tempad:tempad" });
event.custom({
  "type": "botania:runic_altar",
  "output": {
    "item": "tempad:tempad"
  },
  "mana": 99999,
  "ingredients": [
    {
      "item": "things:displacement_tome"
    },
    {
      "item": "botania:gaia_ingot"
    },
    {
      "item": "techreborn:interdimensional_su"
    },
    {
      "item": "bosses_of_mass_destruction:earthdive_spear"
    },
    {
      "item": "modern_industrialization:quantum_upgrade"
    }
    ]
  })
  // mod is not ported to 1.19.2
  // event.remove({ id: "nomadbooks:craft_nomad_book"});
  // event.shaped("nomadbooks:nomad_book", ["ppp", " b ", " B "],
  // {
  //   p: "nomadbooks:grass_page",
  //   b: "minecraft:campfire",
  //   B: "inmis:bejeweled_backpack"
  // });


  // Travelers Backpack
  // event.remove({output: 'travelersbackpack:backpack_tank'});
  // event.shaped('travelersbackpack:backpack_tank', ['gig', ' g '],
  // {
  //   g: 'fluidtank:tank_copper',
  //   i: "mythicmetals:mythril_ingot"
  // })  


  // Croptosis Watering Cans
  event.remove({output: 'croptosis:iron_watering_can'});
  event.shaped("croptosis:iron_watering_can", ['AAA','D  '],
  {
    A: "gobber2:gobber2_rod",
    D: "minecraft:bucket"
  })

  event.remove({output: 'croptosis:gold_watering_can'});
  event.shaped("croptosis:gold_watering_can", ['AAA','D  '],
  {
    A: "gobber2:gobber2_rod_nether",
    D: "minecraft:bucket"
  })

  event.remove({output: 'croptosis:diamond_watering_can'});
  event.shaped("croptosis:diamond_watering_can", ['AAA','D  '],
  {
    A: "gobber2:gobber2_rod_end",
    D: "minecraft:bucket"
  })

  event.remove({output: 'croptosis:netherite_watering_can'});
  event.shaped("croptosis:netherite_watering_can", ['AAA','D  '],
  {
    A: "gobber2:dragon_star",
    D: "minecraft:bucket"
  })

  const autoCraftingExtraRem = [
    'autoworkstations:gold_auto_crafting_table',
    'autoworkstations:gold_auto_furnace',
    'autoworkstations:gold_auto_enchanting_table',
    'autoworkstations:gold_auto_anvil'
  ];

  autoCraftingExtraRem.forEach(function(item, index) {
    event.remove({id: item})
  })
  event.replaceInput({id: "resourceful_tools:lavaspring"}, "minecraft:black_concrete", "minecraft:obsidian");
  event.replaceInput({id: "resourceful_tools:wellspring"}, "minecraft:black_concrete", "minecraft:obsidian");
  event.replaceInput({id: "autoworkstations:iron_auto_enchanting_table"}, "minecraft:enchanting_table", "dark-enchanting:dark_enchanter");
  event.replaceInput({id: "autoworkstations:iron_auto_enchanting_table"}, "minecraft:glass", "modern_industrialization:iridium_curved_plate");
  event.replaceInput({id: "autoworkstations:iron_auto_crafting_table"}, "minecraft:redstone", "techreborn:tungsten_storage_block");
  event.replaceInput({id: "autoworkstations:iron_auto_crafting_table"}, "minecraft:copper_block", "techreborn:auto_crafting_table");
  event.replaceInput({id: "autoworkstations:iron_auto_furnace"}, "minecraft:furnace", "fabric-furnaces:ethereal_furnace");
  event.replaceInput({id: "autoworkstations:iron_auto_furnace"}, "minecraft:copper_block", "blockus:nether_stars_block");
  event.replaceInput({id: "autoworkstations:iron_auto_furnace"}, "minecraft:redstone", "modern_industrialization:he_mox_dust");

  event.remove({output: 'autoworkstations:iron_auto_anvil'});
  event.shaped("autoworkstations:iron_auto_anvil", ['121','2A2','3B3'],
    {
      1: "minecraft:chain",
      2: "spectrum:onyx_block",
      A: "dragonloot:dragon_anvil",
      3: "techreborn:zinc_plate",
      B: "gobber2:gobber2_block_nether"
    })

  event.remove({output: "harvest_scythes:star_platinum_machete"});
  event.shaped("harvest_scythes:star_platinum_machete", ['AA ',' A ',' S '],
    {
      A: "mythicmetals:star_platinum",
      S: "minecraft:stick"
    })

  event.remove({output: 'harvest_scythes:star_platinum_scythe'});
  event.shaped("harvest_scythes:star_platinum_scythe", ['AAA','  S','  S'],
    {
      A: "mythicmetals:star_platinum",
      S: "minecraft:stick"
    })

  event.remove({output: "immersive_aircraft:engine"})
  // event.shaped("immersive_aircraft:engine", [" C ","PFP","CIC"],
  //   {
  //     C: "techreborn:uu_matter",
  //     P: "modern_industrialization:turbo_upgrade",
  //     F: "gobber2:gobber2_ingot_end",
  //     I: "immersive_aircraft:boiler"
  //   });

    event.custom({ 
      "type": "create:mechanical_crafting",
      "pattern": [
          "C P",
          "FFF",
          "I  ",
          "  I"
      ],
      "key": {
          "C": {
              "item": "techreborn:uu_matter"
          },
          "P": {
              "item": "modern_industrialization:turbo_upgrade"
          },
          "F": {
              "item": "gobber2:gobber2_ingot_end"
          },
          "I": {
              "item": "immersive_aircraft:boiler"
          }
      },
      "result": {
          "item": "immersive_aircraft:engine"
      },
      "acceptMirrored": false
  })


  event.replaceInput({id: "immersive_aircraft:gyrodyne"}, "immersive_aircraft:propeller", "immersive_aircraft:engine");

  });