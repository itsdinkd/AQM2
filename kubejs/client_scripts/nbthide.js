// Another Quality Modpack 2 //
//////////////////////////////
onEvent('rei.hide.items', event => { 

  event.hide(Item.of('quarryplus:adv_quarry').enchant('minecraft:efficiency', 5).enchant('minecraft:unbreaking', 3).enchant('minecraft:silk_touch', 1))
  event.hide(Item.of('quarryplus:adv_quarry').enchant('minecraft:efficiency', 5).enchant('minecraft:unbreaking', 3).enchant('minecraft:fortune', 3))
})