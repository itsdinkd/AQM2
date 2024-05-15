BlockEvents.broken('spawner', e =>{
    if(e.player.mainHandItem.hasEnchantment('silk_touch', 1) && e.xp > 0){
        e.setXp(0)
    }
})