// Another Quality Modpack 2
// LootTypes equal LootTYpe.CHEST, ENTITY, FISHING, GIFT, UNKNOWN, BLOCK
// EquipmentSlot.MAINHAND, OFFHAND, FEET, LEGS, CHEST, HEAD

const SimplySwordsLootRemove = [
    "simplyswords:runic_katana",
    "simplyswords:runic_sai",
    "simplyswords:runic_rapier",
    "simplyswords:runic_twinblade",
    "simplyswords:runic_glaive",
    "simplyswords:runic_longsword",
    "simplyswords:runic_spear",
    "simplyswords:runic_cutlass",
    "simplyswords:runic_claymore",
    "simplyswords:watcher_claymore",
    "simplyswords:brimstone_claymore",
    "simplyswords:storms_edge",
    "simplyswords:stormbringer",
    "simplyswords:bramblethorn",
    "simplyswords:watching_warglaive",
    "simplyswords:toxic_longsword",
    "simplyswords:emberblade",
    "simplyswords:frostfall",
    "simplyswords:soulpyre",
    "simplyswords:molten_edge",
    "simplyswords:livyatan",
    "simplyswords:icewhisper",
    "simplyswords:arcanethyst",
    "simplyswords:thunderbrand",
    "simplyswords:hearthflame",
    "simplyswords:twisted_blade",
    "simplyswords:soulrender",
    "simplyswords:soulkeeper",
    "simplyswords:soulstealer",
    "simplyswords:mjolnir",
    "simplyswords:slumbering_lichblade",
    "simplyswords:waking_lichblade",
    "simplyswords:awakened_lichblade",
    "simplyswords:shadowsting",
    "simplyswords:dormant_relic",
    "simplyswords:tainted_relic",
    "simplyswords:righteous_relic",
    "simplyswords:sunfire",
    "simplyswords:harbinger"
]

const TYPE_DISABLED_ITEMS = [
    "travelersbackpack:bat",
    "travelersbackpack:cow",
    "travelersbackpack:villager",
    "travelersbackpack:creeper",
    "travelersbackpack:cake",
    "travelersbackpack:lapis",
    "travelersbackpack:blaze",
    "travelersbackpack:dragon",
    "travelersbackpack:magma_cube",
    "travelersbackpack:squid",
    'travelersbackpack:standard',
    "mcda:red_mystery_armor_helmet",
    "mcda:red_mystery_armor_leggings",
    "mcda:red_mystery_armor_boots",
    "mcda:red_mystery_armor_chestplate",
    "mcda:purple_mystery_armor_helmet",
    "mcda:purple_mystery_armor_leggings",
    "mcda:purple_mystery_armor_boots",
    "mcda:purple_mystery_armor_chestplate",
    "mcda:green_mystery_armor_helmet",
    "mcda:green_mystery_armor_leggings",
    "mcda:green_mystery_armor_boots",
    "mcda:green_mystery_armor_chestplate",
    "mcda:white_mystery_armor_helmet",
    "mcda:white_mystery_armor_leggings",
    "mcda:white_mystery_armor_boots",
    "mcda:white_mystery_armor_chestplate",
    "mcda:blue_mystery_armor_helmet",
    "mcda:blue_mystery_armor_leggings",
    "mcda:blue_mystery_armor_boots",
    "mcda:blue_mystery_armor_chestplate",
    "farmersdelight:rope"
]

const EndGameBosses = [
    'doom:motherdemon',
    'doom:gladiator',
    'doom:iconofsin',
    'doom:arch_maykr', 
    "adventurez:void_shadow", 
    "soulsweapons:returning_knight", 
    "soulsweapons:accursed_lord_boss", 
    "soulsweapons:chaos_monarch", 
    "soulsweapons:night_shade",
    "soulsweapons:moonknight",
    "bosses_of_mass_destruction:void_blossom",
    "bosses_of_mass_destruction:lich"
    ];


const tagStacksWpns = Ingredient.of('aqm2:weapons/rare').stacks;
const tagStacksMCDW = Ingredient.of('aqm2:mcdw').stacks;

const EquipmentSlot = Java.loadClass('net.minecraft.world.entity.EquipmentSlot');

EntityEvents.checkSpawn(event => {
    if(event.type == "SPAWNER"){
        event.entity.addTag("FromSpawner");
    }
  })

LootJS.modifiers((event) => {

    // Loot Removal
    SimplySwordsLootRemove.forEach(function(item,index){
    event.addBlockLootModifier("graveyard:vase_block").removeLoot(item);
    });

    TYPE_DISABLED_ITEMS.forEach(function(item,index){
        event.addLootTypeModifier(LootType.CHEST, LootType.ENTITY).removeLoot(item);
        });    

    event.addLootTypeModifier(LootType.CHEST, LootType.ENTITY).removeLoot("minecraft:map");
    event.addLootTypeModifier(LootType.CHEST, LootType.ENTITY).removeLoot("minecraft:filled_map");


    // Loot Types
    event.addLootTypeModifier(LootType.CHEST).removeLoot("mobz:boss_ingot")

    event.addLootTypeModifier(LootType.CHEST, LootType.ENTITY).removeLoot("galosphere:silver_ingot")

    event.addLootTypeModifier(LootType.CHEST, LootType.ENTITY).removeLoot("tempad:he_who_remains_tempad")

    event.addLootTypeModifier(LootType.CHEST).removeLoot("gobber2:gobber2_arrow_end")

    event.addLootTypeModifier(LootType.CHEST).removeLoot("gobber2:gobber2_arrow_nether")

    event.addLootTypeModifier(LootType.CHEST).removeLoot("gobber2:gobber2_arrow")

    event.addLootTypeModifier(LootType.CHEST).removeLoot("archon:glisteel_ingot")

    event.addLootTypeModifier(LootType.BLOCK, LootType.CHEST).removeLoot("soulsweapons:verglas")

    event.addLootTypeModifier(LootType.BLOCK, LootType.CHEST).removeLoot("soulsweapons:moonstone")

    event.addLootTypeModifier(LootType.ENTITY, LootType.CHEST).removeLoot("soulsweapons:withered_wabbajack")
    event.addEntityLootModifier("soulsweapons:chaos_monarch").removeLoot("soulsweapons:withered_wabbajack")
    event.addEntityLootModifier("minecraft:ender_dragon").removeLoot("dragonloot:dragon_scale")
    event.addEntityLootModifier("minecraft:ender_dragon").pool((p) => { 
        p.addLoot("dragonloot:dragon_scale");
        p.limitCount([0, 2])
    });
    event.addEntityLootModifier("minecraft:ender_dragon", "minecraft:warden", "minecraft:wither", "minecraft:elder_guardian").removeLoot("soulsweapons:lord_soul_white")
    event.addEntityLootModifier("minecraft:ender_dragon", "minecraft:warden", "minecraft:wither", "minecraft:elder_guardian").removeLoot("soulsweapons:lord_soul_red")
    event.addEntityLootModifier("minecraft:ender_dragon", "minecraft:warden", "minecraft:wither", "minecraft:elder_guardian").removeLoot("soulsweapons:lord_soul_dark")
    event.addEntityLootModifier("minecraft:ender_dragon", "minecraft:warden", "minecraft:wither", "minecraft:elder_guardian").removeLoot("soulsweapons:lord_soul_rose")
    event.addEntityLootModifier("minecraft:ender_dragon", "minecraft:warden", "minecraft:wither", "minecraft:elder_guardian").removeLoot("soulsweapons:lord_soul_void")
    event.addEntityLootModifier("minecraft:ender_dragon", "minecraft:warden", "minecraft:wither", "minecraft:elder_guardian").removeLoot("soulsweapons:lord_soul_purple")

    // gems
    event.addEntityLootModifier("soulsweapons:returning_knight", "soulsweapons:accursed_lord_boss", "soulsweapons:chaos_monarch", "soulsweapons:night_shade", "soulsweapons:moonknight").addLoot("aqm2:legendary_gem")
    event.addLootTableModifier("bosses_of_mass_destruction:chests/gauntlet", "bosses_of_mass_destruction:chests/obsidilith").addLoot("aqm2:epic_gem")
    event.addEntityLootModifier("doom:motherdemon","doom:gladiator","doom:iconofsin","doom:arch_maykr","bosses_of_mass_destruction:void_blossom","bosses_of_mass_destruction:lich").addLoot("aqm2:epic_gem")
    event.addEntityLootModifier("minecraft:warden", "minecraft:ender_dragon","minecells:constructor","adventurez:void_shadow","adventurez:stone_golem").addLoot("aqm2:rare_gem")
    event.addEntityLootModifier("minecraft:wither", "minecraft:elder_guardian").addLoot("aqm2:common_gem")

    event.addLootTypeModifier(LootType.ENTITY, LootType.CHEST).removeLoot("soulsweapons:soul_ingot")

    event.addLootTypeModifier(LootType.BLOCK, LootType.CHEST).removeLoot("skylorlib:golden_wheat_item")
    event.addLootTypeModifier(LootType.BLOCK, LootType.CHEST).removeLoot("skylorlib:golden_seeds_item")

    // event.addLootTypeModifier(LootType.CHEST)
    // .pool((pool) => {
    //     pool.rolls([0, 6])
    //     pool.randomChance(0.15)
    // .addLoot("spelunkery:glowstick");
    // });

    
    // Entity Loot
    event.addLootTypeModifier(LootType.ENTITY).randomChance(0.03).pool((p) => { 
        p.addLoot("teenycoal:teeny_coal"); 
        p.limitCount([0, 4]); 
    });

    event.addLootTableModifier(/.*:entities\/.*zombie.*/).randomChance(0.10).pool((p) => { 
        p.addLoot("mobz:hardenedmetal_ingot"); 
        p.limitCount([0, 3]); 
    });

    event.addEntityLootModifier("soulsweapons:chaos_monarch", "soulsweapons:draugr_boss", "soulsweapons:accursed_lord_boss", "soulsweapons:returning_knight", "soulsweapons:moonknight").pool((p) => { 
        p.addLoot("soulsweapons:verglas");
        p.limitCount([1, 1], [2, 2])
    });

    event.addEntityLootModifier("adventurez:void_shadow").addLoot("friendsandfoes:wildfire_crown")
    event.addEntityLootModifier("soulsweapons:night_shade").addLoot("soulsweapons:moonstone")

    // Boss Drop Rare Wpns
    EndGameBosses.forEach(mob => {

        // Unique Simply Swords
        event.addEntityLootModifier(mob)
          .apply(ctx => {
            let item = tagStacksWpns[Math.floor(Math.random() * tagStacksWpns.length)];
            ctx.addLoot(item);
          });

        // Moonstones

          event.addEntityLootModifier(mob).pool((p) => {
            p.addLoot("soulsweapons:moonstone"); 
            p.limitCount([2, 3])
        });

   });

   event.addLootTableModifier("bosses_of_mass_destruction:chests/gauntlet", "bosses_of_mass_destruction:chests/obsidilith").pool((p) => {
    p.addLoot("soulsweapons:moonstone"); 
    p.limitCount([2, 3])
   });

   // Drop MCDW chance on all entities
   event.addLootTypeModifier(LootType.ENTITY)
   .entityPredicate(e => {for(let tag of e.getTags()) {if(tag == "FromSpawner") { return false; }} return true; })
   .randomChance(0.03)
   .matchEntity(entity => {
            return entity.matchSlot(EquipmentSlot.OFFHAND, ItemFilter.ENCHANTED) ||
                entity.matchSlot(EquipmentSlot.MAINHAND, ItemFilter.ENCHANTED);
        })
    .apply(ctx => {
            let item = tagStacksMCDW[Math.floor(Math.random() * tagStacksMCDW.length)];
            // let wpn = tagStacksMCDW[Math.floor(Math.random() * tagStacksMCDW.length)];
            ctx.addLoot(item);
    });

    event.addEntityLootModifier("minecraft:pig").removeLoot("aqm2:rare_gem")
});





  // Coins drop
  LootJS.modifiers(event => {
    event.addLootTypeModifier(LootType.ENTITY)
      .entityPredicate(e => {
        for(let tag of e.getTags()) {
          if(tag == "FromSpawner") {
            return false;
          }
        }
        return true;
      })
      .addLoot(LootEntry.of("aqm2:copper_coin").limitCount([2,20]).when(c => c.randomChance(0.049999)))
  })
  
  // Remove Travelers Backpacks
  LootJS.modifiers(event => {
    event.addLootTypeModifier(LootType.ENTITY)
      .entityPredicate(e => {
        for(let tag of e.getTags()) {
          if(tag == "FromSpawner") {
            return true;
          }
        }
        return false;
      })
      .removeLoot(/travelersbackpack.*/)
  });

// // Logging stuff
// LootJS.modifiers((event) => {
// event.enableLogging();
// const modifiers = event.getGlobalModifiers();
// modifiers.forEach((modifier) => {
//     console.log(modifier)
// });
// });