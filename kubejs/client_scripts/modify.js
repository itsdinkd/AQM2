// Another Quality Modpack 2 //
//////////////////////////////
onEvent("rei.hide.items", event => { 

var aqmClientRemove = [
'agape_space:enhanced_helmet',
'bewitchment:prickly_belt',
'bewitchment:specter_bangle',
'bno:copper_nugget',
'botania:balance_cloak',
'botania:blood_pendant',
'botania:cocoon',
'botania:diving_rod',
'botania:fel_pumpkin',
'botania:flight_tiara',
'botania:flight_tiara_0',
'botania:flight_tiara_1',
'botania:flight_tiara_2',
'botania:flight_tiara_3',
'botania:flight_tiara_4',
'botania:flight_tiara_5',
'botania:flight_tiara_6',
'botania:flight_tiara_7',
'botania:flight_tiara_8',
'botania:laputa_shard',
'botania:missile_rod',
'botania:smelt_rod',
'botania:spawner_claw',
'botania:super_lava_pendant',
'botania:terraform_rod',
'botania:tornado_rod',
'botania:water_ring',
'doom:daisy',
'doom:invisiblesphere',
'doom:soulcube',
'darkutils:damage_plate',
'darkutils:damage_plate_maim',
'darkutils:damage_plate_player',
'darkutils:slowness_plate',
'darkutils:fatigue_plate',
'darkutils:poison_plate',
'darkutils:darkness_plate',
'darkutils:weakness_plate',
'darkutils:wither_plate',
'darkutils:levitation_plate',
'darkutils:misfortune_plate',
'darkutils:ominous_plate',
'darkutils:frost_plate',
'darkutils:flame_plate',
'kibe:chunk_loader',
'techreborn:chunk_loader',
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
'gobber2:gobber2_medallion_shielding',
'gobber2:gobber2_medallion_suffering',
'gobber2:gobber2_ring_airwalking',
'gobber2:gobber2_ring_farmer',
'gobber2:gobber2_ring_phoenix',
'gobber2:gobber2_ring_repair',
'gobber2:gobber2_ring_strength',
'gobber2:gobber2_ring_sunshine',
'gobber2:gobber2_staff_farmer',
'gobber2:gobber2_staff_hostile_ensnarement',
'mining_dims:caving_teleporter',
'mining_dims:climbing_teleporter',
'mining_dims:hunting_teleporter',
'mining_dims:mining_teleporter',
'mining_dims:nethering_portal_block',
'mining_dims:nethering_teleporter',
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
'myloot:loot_chest_minecart',
'myloot:loot_chest',
'myloot:loot_shulker_box',
'myloot:opened_loot_chest',
'mythicmetals:copper_nugget',
'quarryplus:adv_quarry',
'quarryplus:flex_marker',
'quarryplus:marker16',
'quarryplus:remove_bedrock_module',
'spectrum:emergency_boots',
'spectrum:emergency_chestplate',
'spectrum:emergency_helmet',
'spectrum:emergency_leggings',
'spectrum:exchange_staff',
'techreborn:nuke',
'things:hades_crystal',
'things:monocle',
'things:moss_necklace',
'valley:copper_nugget',
'winged:heart_of_the_sky',
'winged:heart_of_the_sky_25',
'winged:heart_of_the_sky_50',
'winged:heart_of_the_sky_75'
];

aqmClientRemove.forEach(function(item, index) {
  event.hide(item)
});

  // event.hide('lacrimis:rune/spawner',;
  // event.hide('croptosis:feather_meal',;
  // event.hide('croptosis:rotten_pile',;
  // event.hide('battletowers:boss_key',;

var k_g = ["mk1","mk2","mk3","mk4","mk5",];var kcg = 'kibe:cobblestone_generator_';var kbg = 'kibe:basalt_generator_';k_g.forEach(function(item,index){event.hide(kbg + item);event.hide(kcg + item)})
  // bewitchment boats (causes crash)
  var witchBoats = [
    "juniper",
    "cypress",
    "elder",
    "dragons_blood"
  ];

  witchBoats.forEach(function(item, index) {
    event.hide("bewitchment:" + item + "_boat")
  })


  // Reduce gliders, leaving 1 blue one.
  var kibeGliders = [
    "white",
    "magenta",
    "orange",
    "light_blue",
    "yellow",
    "green",
    "pink",
    "gray",
    "lime",
    "light_gray",
    "cyan",
    "purple",
    "brown",
    "red",
    "black"
  ];

  kibeGliders.forEach(function(item, index) {
    event.hide("kibe:" + item + "_glider")
    event.hide("kibe:" + item + "_sleeping_bag");
    event.hide("consistency_plus:" + item + "_dyed_bundle")
  });
  event.hide("consistency_plus:blue_dyed_bundle");
  var doomItems = [
    "axe",
    "pickaxe",
    "paxel",
  ];

  doomItems.forEach(function(item, index) {
  event.hide("doom:argent_" + item)
  });

  // remove duplicate armors/tools/weapons
  // var nullGear = [
  // "pickaxe",
  // "sword",
  // "axe",
  // "shovel",
  // "hoe",
  // "helmet",
  // "chestplate",
  // "leggings",
  // "boots"
  // ];

  // nullGear.forEach(function(item, index) {
  //   event.hide("indrev:bronze_" + item);
  //   event.hide("indrev:silver_" + item);
  //   event.hide("indrev:steel_" + item);
  //   event.hide("indrev:copper_" + item);
  //   event.hide("techreborn:bronze_" + item);
  //   event.hide("techreborn:ruby_" + item);
  // })

  // event.hide("crookedcrooks:ir_bronze_crook");

})