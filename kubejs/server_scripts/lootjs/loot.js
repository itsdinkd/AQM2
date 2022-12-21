// Another Quality Modpack 2
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
    "simplyswords:soulrender"
]

onEvent("lootjs", (event) => {
    SimplySwordsLootRemove.forEach(function(item,index){
    event.addBlockLootModifier("graveyard:vase_block").removeLoot(item);
    })

    // Remove soul cube and daisy from all chests
    event.addLootTableModifier(/.*/).removeLoot("doom:soulcube");
    event.addLootTableModifier(/.*/).removeLoot("doom:daisy");
    // Below will be added to aqm2 1.7
    // event.addEntityLootModifier("adventurez:stone_golem").addLoot("#aqm2:weapons/rare");
    // event.addEntityLootModifier("adventurez:stone_golem").addLoot("#aqm2:weapons/rare");
});
