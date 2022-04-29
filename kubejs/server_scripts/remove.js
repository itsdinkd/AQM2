// Another Quality Modpack 2 //
///////////////////////////////
const arrRemove = [
'ae2:matter_cannon',
'agape_space:enhanced_helmet',
'bewitchment:prickly_belt',
'bewitchment:specter_bangle',
'bno:aluminum_ingot',
'bno:copper_nugget',
'botania:balance_cloak',
'botania:blood_pendant',
'botania:cocoon',
'botania:diving_rod',
'botania:fel_pumpkin',
'botania:flight_tiara',
'botania:flight_tiara_0',
'botania:laputa_shard',
'botania:missile_rod',
'botania:smelt_rod',
'botania:spawner_claw',
'botania:super_lava_pendant',
'botania:terraform_rod',
'botania:tornado_rod',
'botania:water_ring',
'consistency_plus:copper_nugget',
'doom:daisy',
'doom:invisiblesphere',
'hoverpets:blaze_pet',
'hoverpets:creeper_pet',
'hoverpets:panda_pet',
'kibe:angel_ring',
'kibe:chunk_loader',
'kibe:cursed_lasso',
'kibe:diamond_kibe',
'kibe:diamond_lasso',
'kibe:diamond_spikes',
'kibe:gold_spikes',
'kibe:golden_kibe',
'kibe:iron_spikes',
'kibe:magma_ring',
'kibe:stone_spikes',
'kibe:water_ring',
'mcdw:sword_the_starless_night',
'mining_dims:diamond_nugget',
'miningutility:escape_rope',
'miningutility:mining_helmet',
'modern_industrialization:gravichestplate',
'modern_industrialization:quantum_boots',
'modern_industrialization:quantum_chestplate',
'modern_industrialization:quantum_helmet',
'modern_industrialization:quantum_leggings',
'modern_industrialization:quantum_sword',
'modern_industrialization:replicator',
'mythicmetals:copper_nugget',
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
'quarryplus:flex_marker',
'quarryplus:marker16',
'quarryplus:remove_bedrock_module',
'spectrum:exchange_staff',
'things:hades_crystal',
'things:monocle',
'things:moss_necklace',
'valley:copper_nugget',
'winged:heart_of_the_sky',
'winged:wing_random',
'winged:wing_random_creative_flight'
];

onEvent('recipes', event => {
  arrRemove.forEach(function(item, index) {
    event.remove({output: item})
  });
  var doom_tools = [
    "axe",
    "pickaxe",
    "paxel",
  ];
  doom_tools.forEach(function (item, index) {
    event.remove({output: "doom:argent_" + item});
  });


  // Remove Kibe Generators due to ticking entity crashes
  var kibe_gen = [
    "mk1",
    "mk2",
    "mk3",
    "mk4",
    "mk5",
  ];
  kibe_gen.forEach(function(item, index) {
    event.remove({output: 'kibe:cobblestone_generator_' + item})
    event.remove({output: 'kibe:basalt_generator_' + item})
  });

  // Bewitchment Boats (Crashes due to TerraForm API)
  var bwBoats = [
    "juniper_boat",
    "cypress_boat",
    "elder_boat",
    "dragons_blood_boat"
  ];
  bwBoats.forEach(function(item, index) {
    event.remove({output: 'bewitchment:' + item})
  });
})