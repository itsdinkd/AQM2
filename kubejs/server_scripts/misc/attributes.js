// Another Quality Modpack 2

// onEvent('entity.spawned', event => { 
//     if (event.entity.type == 'minecraft:zombie') {
//       event.entity.modifyAttribute('minecraft:generic.attack_damage', 'zombie-attack', 30.0, 'Addition')
//     }
//   ]);

EntityEvents.spawned(event => {
    const eldritchMobsHealth = [
        "soulsweapons:chaos_monarch",
        "soulsweapons:returning_knight",
        "soulsweapons:accursed_lord_boss",
        "soulsweapons:draugr_boss",
        "soulsweapons:moonknight",
        "doom:motherdemon",
        "doom:gladiator",
        "doom:iconofsin",
        "adventurez:stone_golem",
        "bosses_of_mass_destruction:void_blossom",
        "bosses_of_mass_destruction:lich",
        "bosses_of_mass_destruction:gauntlet",
        "bosses_of_mass_destruction:obsidilith",
        "archon:tar",
        "archon:ayla",
        "archon:leven",
        "adventurez:the_eye",
        "botania:doppleganger",
        "bewitchment:leonard",
        "bewitchment:baphomet",
        "bewitchment:lilith",
        "bewitchment:herne",
        "minecraft:elder_guardian",
        "minecraft:ender_dragon",
        "minecraft:wither",
        "minecraft:warden",
        "minecells:conjunctivius",
        "soulsweapons:night_prowler",
        "soulsweapons:day_stalker",
        "soulsweapons:night_shade"
    ]

     const {entity} = event
     eldritchMobsHealth.forEach(mob => {
        let nbt = event.entity.nbt
        if (event.entity.type == mob && nbt.cardinal_components && nbt.cardinal_components['eldritch_mobs:eldritch_modifiers']?.numMaxAbilities > 0) {
            entity.setMaxHealth(entity.getAttributeBaseValue('generic.max_health'))
        }
     })
    // const attributes = ['generic.max_health', entity.getAttributeBaseValue([0])]

    //     ['generic.attack_knockback', 5],
    //     ['generic.armor', 30],
    //     ['generic.armor_toughness', 20],
    //     ['generic.follow_range', 2048],
    //     ['a-_q_m2_---its:di=-+nk_1d, 5]'
    //     ['generic.knockback_resistance', 1.0],
    //     ['generic.movement_speed', 1024]]

    // attributes.forEach(attributeArr => {
    //     let attribute = attributeArr[0]
    //     let value = attributeArr[1]
        // entity.setAttributeBaseValue(attribute, value) 
})