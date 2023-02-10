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
    "simplyswords:watching_warglaive",
    "simplyswords:toxic_longsword",
    "simplyswords:stormbringer",
    "simplyswords:bramblethorn",
    "simplyswords:brimstone_claymore",
    "simplyswords:storms_edge",
    "simplyswords:sword_on_a_stick",
    "simplyswords:bramblethorn",
    "simplyswords:hearthflame",
    "simplyswords:emberblade",
    "simplyswords:mjolnir",
    "simplyswords:twisted_blade",
    "simplyswords:soulkeeper",
    "simplyswords:soulstealer",
    "simplyswords:frostfall",
    "simplyswords:soulpyre",
    "simplyswords:runic_tablet",
    "simplyswords:molten_edge",
    "simplyswords:livyatan",
    "simplyswords:soulrender"
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
    "mcda:blue_mystery_armor_chestplate"
]

const doomBossesLootJS = [
    'doom:motherdemon',
    'doom:gladiator',
    'doom:iconofsin',
    'doom:arch_maykr', 
    "adventurez:void_shadow", 
    "soulsweapons:returning_knight", 
    "soulsweapons:accursed_lord_boss", 
    "soulsweapons:chaos_monarch", 
    "soulsweapons:night_shade",
    "bosses_of_mass_destruction:void_blossom",
    "bosses_of_mass_destruction:lich",
    ];

const tagStacksWpns = Ingredient.of('aqm2:weapons/rare').stacks;
const tagStacksMCDW = Ingredient.of('aqm2:mcdw').stacks;

const EquipmentSlot = Java.loadClass('net.minecraft.world.entity.EquipmentSlot');
LootJS.modifiers((event) => {

    // Loot Removal
    SimplySwordsLootRemove.forEach(function(item,index){
    event.addBlockLootModifier("graveyard:vase_block").removeLoot(item);
    });

    TYPE_DISABLED_ITEMS.forEach(function(item,index){
        event.addLootTypeModifier(LootType.CHEST, LootType.ENTITY).removeLoot(item);
        });    

    event.addLootTypeModifier(LootType.CHEST, LootType.ENTITY).removeLoot("minecraft:map");


    // Loot Types
    event.addLootTypeModifier(LootType.CHEST).removeLoot("mobz:boss_ingot")

    event.addLootTypeModifier(LootType.CHEST, LootType.ENTITY).removeLoot("galosphere:silver_ingot")

    event.addLootTypeModifier(LootType.CHEST).removeLoot("gobber2:gobber2_arrow_end")

    event.addLootTypeModifier(LootType.CHEST).removeLoot("gobber2:gobber2_arrow_nether")

    event.addLootTypeModifier(LootType.CHEST).removeLoot("gobber2:gobber2_arrow")

    event.addLootTypeModifier(LootType.CHEST).removeLoot("archon:glisteel_ingot")

    event.addLootTypeModifier(LootType.ENTITY, LootType.CHEST).removeLoot("soulsweapons:withered_wabbajack")
    event.addEntityLootModifier("soulsweapons:chaos_monarch").removeLoot("soulsweapons:withered_wabbajack")

    event.addLootTypeModifier(LootType.ENTITY, LootType.CHEST).removeLoot("soulsweapons:soul_ingot")

    event.addLootTypeModifier(LootType.BLOCK, LootType.CHEST).removeLoot("chococraft:gold_gysahl")

    event.addLootTypeModifier(LootType.BLOCK, LootType.CHEST).removeLoot("soulsweapons:verglas")

    event.addLootTypeModifier(LootType.BLOCK, LootType.CHEST).removeLoot("soulsweapons:moonstone")
    event.addLootTypeModifier(LootType.BLOCK, LootType.CHEST).removeLoot("skylorlib:golden_wheat_item")
    event.addLootTypeModifier(LootType.BLOCK, LootType.CHEST).removeLoot("skylorlib:golden_seeds_item")

    event.addLootTableModifier('chococraft:blocks/gysahl_green').removeLoot("chococraft:gold_gysahl")

    // event.addLootTypeModifier(LootType.CHEST)
    // .pool((pool) => {
    //     pool.rolls([0, 6])
    //     pool.randomChance(0.15)
    // .addLoot("spelunkery:glowstick");
    // });

    
    // Entity Loot
    event.addLootTypeModifier(LootType.ENTITY).randomChance(0.03).pool((p) => { 
        p.addLoot("teenycoal:teeny_coal"); 
        p.limitCount([0, 1], [3, 4]); 
    });

    event.addLootTableModifier(/.*:entities\/.*zombie.*/).randomChance(0.10).pool((p) => { 
        p.addLoot("mobz:hardenedmetal_ingot"); 
        p.limitCount([1, 1], [2, 2]); 
    });

    event.addEntityLootModifier("soulsweapons:night_shade", "soulsweapons:chaos_monarch", "soulsweapons:draugr_boss", "soulsweapons:accursed_lord_boss", "soulsweapons:returning_knight").pool((p) => { 
        p.addLoot("soulsweapons:verglas");
        p.limitCount([1, 1], [2, 3])
    });

    event.addEntityLootModifier("adventurez:void_shadow").addLoot("friendsandfoes:wildfire_crown")
    event.addEntityLootModifier("soulsweapons:night_shade").addLoot("soulsweapons:moonstone")

    // Boss Drop Rare Wpns
    doomBossesLootJS.forEach(mob => {
        event.addEntityLootModifier(mob)
          .apply(ctx => {
            let item = tagStacksWpns[Math.floor(Math.random() * tagStacksWpns.length)];
            ctx.addLoot(item);
          });

          event.addEntityLootModifier(mob).pool((p) => {
            p.addLoot("soulsweapons:moonstone"); 
            p.limitCount([2, 2], [3, 4])
        });

   });

   // Drop MCDW chance on all entities
   event.addLootTypeModifier(LootType.ENTITY)
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
});

// // Logging stuff
// LootJS.modifiers((event) => {
// event.enableLogging();
// const modifiers = event.getGlobalModifiers();
// modifiers.forEach((modifier) => {
//     console.log(modifier)
// });
// });