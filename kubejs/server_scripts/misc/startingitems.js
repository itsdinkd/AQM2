// Another Quality Modpack 2
PlayerEvents.loggedIn( event => {
  if (!event.player.stages.has('starting_items')) {
    event.player.stages.add('starting_items')
    event.player.inventory.clear('byg:biomepedia');
    event.player.inventory.clear(Item.of('patchouli:guide_book', '{"patchouli:book":"hexcasting:thehexbook"}'));
    event.player.inventory.clear("doom:daisy");
    event.player.inventory.clear('prefab:item_house');
    event.player.give('ftbquests:book')
  }

  //  banned items
  event.player.inventory.clear("doom:daisy");
  event.player.inventory.clear("doom:soulcube");
})

//  let bannedItems = {
//    'doom:soulcube': "Not allowed due to Overpowered",
//    'doom:daisy': "Not allowed due to Overpowered"
//  }

// function checkBannedItems(items, reasons) {
//   Object.keys(items).forEach(item, reason => {
//     return item;
//   })
// }
//    PlayerEvents.inventoryChanged(checkBannedItems(bannedItems), event => {
//      event.player.tell([
//          "Item ", Text.yellow(item), " has been ", Text.red("removed"), 
//          ".\nReason: ", Text.red(bannedItems[item]),
//        ]);
//      event.player.inventory.removeItem(event.getSlot(), event.item.count)
//    })

//  bannedItems.forEach((item, reason) => {
//   PlayerEvents.inventoryChanged(item, event => {
//     event.player.tell([
//         "Item ", Text.yellow(item), " has been ", Text.red("removed"), 
//         ".\nReason: ", Text.red(bannedItems[item]),
//       ]);
//     event.player.inventory.removeItem(event.getSlot(), event.item.count)
//   })
// })