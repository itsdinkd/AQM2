// Another Quality Modpack 2 //
//////////////////////////////
onEvent('rei.hide.items', event => { 

var aqmClientRemove = [
'advanced_reborn:advanced_forge_hammer',
'advanced_reborn:dynamite',
'advanced_reborn:forge_hammer',
'advanced_reborn:freq_trans',
'advanced_reborn:ray_generator_10',
'advanced_reborn:ray_generator_2',
'advanced_reborn:ray_generator_3',
'advanced_reborn:ray_generator_4',
'advanced_reborn:ray_generator_5',
'advanced_reborn:ray_generator_6',
'advanced_reborn:ray_generator_7',
'advanced_reborn:ray_generator_8',
'advanced_reborn:ray_generator_9',
'advanced_reborn:ray_generator',
'advanced_reborn:sticky_dynamite',
'advanced_reborn:teleporter',
'agape_space:enhanced_helmet',
'artifacts:cross_necklace',
'artifacts:eternal_steak',
'artifacts:scarf_of_invisibility',
'artifacts:villager_hat',
'bewitchment:prickly_belt',
'bewitchment:specter_bangle',
'bno:copper_nugget',
'botania:balance_cloak',
'botania:blood_pendant',
'botania:cocoon',
'botania:dice',
'botania:diving_rod',
'botania:fel_pumpkin',
'botania:flight_tiara_0',
'botania:flight_tiara_1',
'botania:flight_tiara_2',
'botania:flight_tiara_3',
'botania:flight_tiara_4',
'botania:flight_tiara_5',
'botania:flight_tiara_6',
'botania:flight_tiara_7',
'botania:flight_tiara_8',
'botania:flight_tiara',
'botania:flugel_eye',
'botania:infinite_fruit',
'botania:king_key',
'botania:laputa_shard',
'botania:loki_ring',
'botania:missile_rod',
'botania:odin_ring',
'botania:smelt_rod',
'botania:spawner_claw',
'botania:super_lava_pendant',
'botania:terraform_rod',
'botania:thor_ring',
'botania:tornado_rod',
'botania:water_ring',
'buildinggadgets:gadget_exchanging',
'coxinhautilities:diamond_coxinha',
'coxinhautilities:golden_coxinha',
'create:extendo_grip',
'croptosis:feather_meal',
'croptosis:rotten_pile',
'darkutils:damage_plate_maim',
'darkutils:damage_plate_player',
'darkutils:damage_plate',
'darkutils:darkness_plate',
'darkutils:fatigue_plate',
'darkutils:flame_plate',
'darkutils:frost_plate',
'darkutils:levitation_plate',
'darkutils:misfortune_plate',
'darkutils:ominous_plate',
'darkutils:poison_plate',
'darkutils:slowness_plate',
'darkutils:weakness_plate',
'darkutils:wither_plate',
'dimdoors:gold_dimensional_door',
'doom:daisy',
'doom:invisiblesphere',
'doom:soulcube',
'givemehats:bunny_space_helmet',
'givemehats:dwarven_hat',
'givemehats:hippie_vibes',
'givemehats:irish_hat',
'givemehats:jojo_hat',
'givemehats:strider_hat',
'givemehats:viking_hat',
'gobber2:gobber2_medallion_shielding',
'gobber2:gobber2_medallion_suffering',
'gobber2:gobber2_ring_airwalking',
'gobber2:gobber2_ring_farmer',
'gobber2:gobber2_ring_phoenix',
'gobber2:gobber2_ring_repair',
'gobber2:gobber2_ring_stealth',
'gobber2:gobber2_ring_strength',
'gobber2:gobber2_ring_sunshine',
'gobber2:gobber2_staff_farmer',
'gobber2:gobber2_staff_hostile_ensnarement',
'hyperlighting:switch_board',
'indrev:bronze_axe', 
'indrev:bronze_boots', 
'indrev:bronze_chestplate', 
'indrev:bronze_helmet', 
'indrev:bronze_hoe', 
'indrev:bronze_leggings', 
'indrev:bronze_pickaxe', 
'indrev:bronze_shovel', 
'indrev:bronze_sword', 
'indrev:copper_axe', 
'indrev:copper_boots', 
'indrev:copper_chestplate', 
'indrev:copper_helmet', 
'indrev:copper_hoe', 
'indrev:copper_leggings', 
'indrev:copper_pickaxe', 
'indrev:copper_shovel', 
'indrev:copper_sword', 
'indrev:damage_enhancer',
'indrev:rancher_creative',
'indrev:rancher_mk1',
'indrev:rancher_mk2',
'indrev:rancher_mk3',
'indrev:rancher_mk4',
'indrev:silver_boots', 
'indrev:silver_chestplate', 
'indrev:silver_helmet', 
'indrev:silver_leggings', 
'indrev:slaughter_mk1',
'indrev:slaughter_mk2',
'indrev:slaughter_mk3',
'indrev:slaughter_mk4',
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
'mining_dims:caving_teleporter',
'mining_dims:climbing_teleporter',
'mining_dims:diamond_nugget',
'mining_dims:hunting_teleporter',
'mining_dims:mining_teleporter',
'mining_dims:nethering_portal_block',
'mining_dims:nethering_teleporter',
'miningutility:escape_rope',
'miningutility:mining_helmet',
'modern_industrialization:gravichestplate',
'modern_industrialization:quantum_boots',
'modern_industrialization:quantum_chestplate',
'modern_industrialization:quantum_helmet',
'modern_industrialization:quantum_leggings',
'modern_industrialization:replicator',
'myloot:loot_chest_minecart',
'myloot:loot_chest',
'myloot:loot_shulker_box',
'myloot:opened_loot_chest',
'mythicmetals:bronze_axe', 
'mythicmetals:bronze_boots', 
'mythicmetals:bronze_chestplate', 
'mythicmetals:bronze_helmet', 
'mythicmetals:bronze_hoe', 
'mythicmetals:bronze_leggings', 
'mythicmetals:bronze_pickaxe', 
'mythicmetals:bronze_shovel', 
'mythicmetals:bronze_sword', 
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
'quarryplus:adv_quarry',
'quarryplus:flex_marker',
'quarryplus:marker16',
'quarryplus:remove_bedrock_module',
'quarryplus:waterlogged_flex_marker',
'quarryplus:waterlogged_marker16',
'resourceful_tools:crack_hammer_copper',
'resourceful_tools:crack_hammer',
'spectrum:ashen_circlet',
'spectrum:block_flooder',
'spectrum:emergency_boots',
'spectrum:emergency_chestplate',
'spectrum:emergency_helmet',
'spectrum:emergency_leggings',
'spectrum:ender_splice',
'spectrum:exchange_staff',
'spectrum:multitool',
'spectrum:voiding_pickaxe',
'techreborn:chunk_loader',
'techreborn:deepslate_ruby_ore',
'techreborn:deepslate_sheldonite_ore',
'techreborn:deepslate_sodalite_ore',
'techreborn:deepslate_tungsten_ore',
'techreborn:nuke',
'techreborn:ruby_gem',
'techreborn:ruby_ore',
'techreborn:steel_boots', 
'techreborn:steel_chestplate', 
'techreborn:steel_helmet', 
'techreborn:steel_leggings', 
"indrev:hammer",
'things:hades_crystal',
'things:monocle',
'things:moss_necklace',
'twilightforest:uncrafting_table',
'valley:copper_nugget',
'waystones:void_totem',
'winged:heart_of_the_sky_25',
'winged:heart_of_the_sky_50',
'winged:heart_of_the_sky_75',
'winged:heart_of_the_sky',
"hoverpets:blaze_pet",
"hoverpets:cow_pet",
"hoverpets:creeper_pet",
"hoverpets:enderman_pet",
"hoverpets:ocelot_pet",
"hoverpets:panda_pet",
"modern_industrialization:wrench",
"techreborn:rock_cutter",
"travelersbackpack:bat",
"travelersbackpack:dragon",
"travelersbackpack:magma_cube",
"travelersbackpack:squid",
"veggie_way:watering_can_copper",
"xps:xp_berries_seeds",
"xps:xp_berries",
"advanced_reborn:enchantment_extractor",
"autoworkstations:gold_auto_experience_orb_vacuum",
"autoworkstations:iron_auto_experience_orb_vacuum",
"autoworkstations:auto_enchanting_table_xp_inside",
"autoworkstations:netherite_auto_crafting_table",
"autoworkstations:gold_auto_experience_orb_emitter",
"autoworkstations:iron_auto_experience_orb_emitter",
"autoworkstations:gold_auto_brewing_stand",
"autoworkstations:iron_auto_brewing_stand",
"createplus:crushed_adamantite_ore",
"createplus:crushed_aquarium_ore",
"createplus:crushed_banglum_ore",
"createplus:crushed_carmot_ore",
"createplus:crushed_kyber_ore",
"createplus:crushed_midas_gold_ore",
"createplus:crushed_mythril_ore",
"createplus:crushed_orichalcum_ore",
"createplus:crushed_palladium_ore",
"createplus:crushed_prometheum_ore",
"createplus:crushed_quadrillum_ore",
"createplus:crushed_runite_ore",
"createplus:crushed_stormyx_ore"
];

aqmClientRemove.forEach(function(item, index) {
  event.hide(item)
});

  // event.hide('lacrimis:rune/spawner',;
  // event.hide('croptosis:feather_meal',;
  // event.hide('croptosis:rotten_pile',;
  // event.hide('battletowers:boss_key',;

var k_g = ['mk1','mk2','mk3','mk4','mk5',];var kcg = 'kibe:cobblestone_generator_';var kbg = 'kibe:basalt_generator_';k_g.forEach(function(item,index){event.hide(kbg + item);event.hide(kcg + item)})
  // bewitchment boats (causes crash)
  var witchBoats = [
    'juniper',
    'cypress',
    'elder',
    'dragons_blood'
  ];

  witchBoats.forEach(function(item, index) {
    event.hide('bewitchment:' + item + '_boat')
  })


  // Reduce gliders, leaving 1 blue one.
  var kibeGliders = [
    'white',
    'magenta',
    'orange',
    'light_blue',
    'yellow',
    'green',
    'pink',
    'gray',
    'lime',
    'light_gray',
    'cyan',
    'purple',
    'brown',
    'red',
    'black'
  ];

  kibeGliders.forEach(function(item, index) {
    event.hide('kibe:' + item + '_glider')
    event.hide('kibe:' + item + '_sleeping_bag');
    event.hide('consistency_plus:' + item + '_dyed_bundle')
  });
  event.hide('consistency_plus:blue_dyed_bundle');
  var doomItems = [
    'axe',
    'pickaxe',
    'paxel',
  ];

  doomItems.forEach(function(item, index) {
  event.hide('doom:argent_' + item)
  });

  // remove duplicate armors/tools/weapons
  var nullGear = [
   'pickaxe',
   'sword',
   'axe',
   'shovel',
   'hoe',
   'helmet',
   'chestplate',
   'leggings',
   'boots'
   ];

  nullGear.forEach(function(item, index) {
    event.hide('techreborn:ruby_' + item);
  //   event.hide('indrev:silver_' + item);
  //   event.hide('indrev:steel_' + item);
  //   event.hide('indrev:copper_' + item);
  //   event.hide('techreborn:bronze_' + item);
  //   event.hide('techreborn:ruby_' + item);
  })

  // event.hide('crookedcrooks:ir_bronze_crook');

  const tanksRemRei =[
    "stone",
    "bronze",
    "silver",
    "lead",
    "tin"
  ];
  
  tanksRemRei.forEach(function(item,i) {
    event.hide("fluidtank:tank_" + item)
  })

  // const doomArmorRemREI = [
  //   "boots",
  //   "chestplate",
  //   "leggings",
  //   "helmet"
  //   ]
    
  //   doomArmorRemREI.forEach(function(item) {
  //     event.hide(`/doom:.*${item}/`)
  //   })

})