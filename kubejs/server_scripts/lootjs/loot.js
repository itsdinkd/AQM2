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

const doomBossesLootJS = ['doom:motherdemon','doom:gladiator','doom:iconofsin','doom:arch_maykr', "adventurez:void_shadow"];
const tagStacksWpns = Ingredient.of('aqm2:weapons_guarantee').stacks;
const tagStacksMCDW = Ingredient.of('aqm2:mcdw').stacks;

const EquipmentSlot = Java.loadClass('net.minecraft.world.entity.EquipmentSlot');
LootJS.modifiers((event) => {

    // Loot Removal
    SimplySwordsLootRemove.forEach(function(item,index){
    event.addBlockLootModifier("graveyard:vase_block").removeLoot(item);
    });

    event.addLootTypeModifier(LootType.CHEST).removeLoot("mobz:boss_ingot")

    event.addLootTypeModifier(LootType.CHEST).removeLoot("gobber2:gobber2_arrow_end")
    event.addLootTypeModifier(LootType.CHEST).removeLoot("gobber2:gobber2_arrow_nether")
    event.addLootTypeModifier(LootType.CHEST).removeLoot("gobber2:gobber2_arrow")


    // Chest Loot
    event.addLootTypeModifier(LootType.CHEST)
    .pool((pool) => {
        pool.rolls([2, 6])
        pool.randomChance(0.133)
    .addLoot("spelunkery:glowstick");
    });

    
    // Entity Loot
    event.addLootTypeModifier(LootType.ENTITY).randomChance(0.08).addLoot("2x spelunkery:glowstick")
    event.addLootTypeModifier(LootType.ENTITY).randomChance(0.05).addLoot("2x teenycoal:teeny_coal")

    // Doom Drop Rare Wpns
    doomBossesLootJS.forEach(mob => {
        event.addEntityLootModifier(mob)
          .apply(ctx => {
            let item = tagStacksWpns[Math.floor(Math.random() * tagStacksWpns.length)];
            ctx.addLoot(item);
          });
   });

   // Drop MCDW chance
   event.addLootTypeModifier(LootType.ENTITY)
   .randomChance(0.03)
   .matchEntity(entity => {
            return entity.matchSlot(EquipmentSlot.OFFHAND, ItemFilter.ENCHANTED) ||
                entity.matchSlot(EquipmentSlot.MAINHAND, ItemFilter.ENCHANTED);
        })
    .apply(ctx => {
            let item = tagStacksMCDW[Math.floor(Math.random() * tagStacksMCDW.length)];
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