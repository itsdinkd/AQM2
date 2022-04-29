// Another Quality Modpack 2 //
//////////////////////////////
onEvent("rei.hide.items", event => { event.hide('kibe:chunk_loader');  event.hide('doom:invisiblesphere');   event.hide('kibe:diamond_kibe');  event.hide('kibe:golden_kibe');  event.hide('things:moss_necklace');  event.hide('things:hades_crystal');  event.hide('things:hardening_catalyst');  var k_g = ["mk1","mk2","mk3","mk4","mk5",];var kcg = 'kibe:cobblestone_generator_';var kbg = 'kibe:basalt_generator_';k_g.forEach(function(item,index){event.hide(kbg + item);event.hide(kcg + item)})

  // event.hide('blast:cold_digger');
  // event.hide('blast:stripminer');
  event.hide('agape_space:enhanced_helmet');
  // event.hide('battletowers:boss_key');
  event.hide('bewitchment:prickly_belt');
  event.hide('bewitchment:specter_bangle');
  event.hide('bno:copper_nugget');
  event.hide('botania:balance_cloak')
  event.hide('botania:blood_pendant')
  event.hide('botania:cocoon')
  event.hide('botania:diving_rod')
  event.hide('botania:fel_pumpkin')
  event.hide('botania:flight_tiara')
  event.hide('botania:flight_tiara_0')
  event.hide('botania:flight_tiara_1')
  event.hide('botania:flight_tiara_2')
  event.hide('botania:flight_tiara_3')
  event.hide('botania:flight_tiara_4')
  event.hide('botania:flight_tiara_5')
  event.hide('botania:flight_tiara_6')
  event.hide('botania:flight_tiara_7')
  event.hide('botania:flight_tiara_8')
  event.hide('botania:laputa_shard')
  event.hide('botania:missile_rod')
  event.hide('botania:smelt_rod')
  event.hide('botania:spawner_claw')
  event.hide('botania:super_lava_pendant')
  event.hide('botania:terraform_rod')
  event.hide('botania:tornado_rod')
  event.hide('botania:water_ring')
  event.hide('mining_dims:diamond_nugget')
  event.hide('mythicmetals:copper_nugget');
  event.hide('spectrum:exchange_staff')
  event.hide('techreborn:nuke')
  event.hide('valley:copper_nugget');
  // event.hide('croptosis:feather_meal');
  // event.hide('croptosis:rotten_pile');
  event.hide('doom:daisy');
  event.hide('doom:soulcube');
  // event.hide('givemehats:bunny_space_hat');
  // event.hide('givemehats:irish_hat');
  // event.hide('givemehats:strider_hat');
  event.hide('kibe:cursed_lasso');
  event.hide('kibe:diamond_lasso');
  event.hide('kibe:diamond_spikes');
  event.hide('kibe:gold_spikes');
  event.hide('kibe:iron_spikes');
  event.hide('kibe:stone_spikes');
  event.hide('kibe:water_ring');
  event.hide('kibe:magma_ring');
  // event.hide('lacrimis:rune/spawner');
  event.hide('mcdw:sword_the_starless_night')
  event.hide('things:monocle');
  event.hide('winged:heart_of_the_sky');
   event.hide('winged:heart_of_the_sky_25')
   event.hide('winged:heart_of_the_sky_50')
   event.hide('winged:heart_of_the_sky_75')

  event.hide('miningutility:escape_rope');
  event.hide('miningutility:mining_helmet');
  // Modern Industrialization
  event.hide('modern_industrialization:quantum_chestplate');
  event.hide('modern_industrialization:quantum_leggings');
  event.hide('modern_industrialization:quantum_boots');
  event.hide('modern_industrialization:quantum_helmet');
  event.hide('modern_industrialization:quantum_sword');
  event.hide('modern_industrialization:gravichestplate');
  event.hide('modern_industrialization:replicator');

  // QuarryPlus
  event.hide('quarryplus:flex_marker');
  event.hide('quarryplus:marker16');
  event.hide('quarryplus:remove_bedrock_module');
  event.hide('quarryplus:adv_quarry')

// Spectrum emergency armor
  event.hide('spectrum:emergency_chestplate');
  event.hide('spectrum:emergency_leggings');
  event.hide('spectrum:emergency_boots');
  event.hide('spectrum:emergency_helmet')

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

  // // copper nugget duplicates
  // event.hide('consistency_plus:copper_nugget');
  // event.hide('valleycraft:copper_nugget');
})