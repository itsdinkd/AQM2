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
    "simplyswords:bramblethorn"
]

onEvent("lootjs", (event) => {
    SimplySwordsLootRemove.forEach(function(item,index){
    event.addBlockLootModifier("graveyard:vase_block").removeLoot(item);
    })
});