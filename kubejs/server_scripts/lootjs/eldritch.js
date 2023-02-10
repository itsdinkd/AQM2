// Another Quality Modpack 2

// LootTypes equal LootTYpe.CHEST, ENTITY, FISHING, GIFT, UNKNOWN, BLOCK
// EquipmentSlot.MAINHAND, OFFHAND, FEET, LEGS, CHEST, HEAD

// const blacklistedEntities = [
//     "me.steven.indrev.blockentities.farms.SlaughterBlockEntity",
//     "com.glisco.conjuring.blocks.conjurer.ConjuringBlockEntitiy"
// ];

// LootJS.modifiers(event => {
//     event
//         .addLootTableModifier(/eldritch_mobs:entities.*/)
//         .killerPredicate(entity => {
//             let entityClass = entity.getClass().getName();
//             console.log(entityClass);
//             blacklistedEntities.includes(entityClass);
//         })
//         .removeLoot('*');
// });

EntityEvents.checkSpawn(e => {
    let nbt = e.entity.fullNBT
    if (e.type == 'SPAWNER' && nbt.cardinal_components && nbt.cardinal_components['eldritch_mobs:eldritch_modifiers']?.numMaxAbilities > 0) {
      e.cancel()
    }
  })

// LootJS.modifiers(event => {
//     event
//         .addLootTableModifier(/eldritchmobs:entities.*/)
//         .entityPredicate((entity) => entity.getFullNBT().get('eldritchFromSpawner'))
//         .removeLoot('*');
// });


// LootJS.modifiers(event => {
//     event
//         .addLootTableModifier(/eldritch_mobs:entities.*/)
//         .entityPredicate((entity) => {
//             let fromSpawner = entity.getFullNBT().get('eldritchFromSpawner');
//             console.log(fromSpawner);
//             return false;
//         })
//         .removeLoot('*');
// });