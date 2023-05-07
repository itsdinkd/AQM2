//  //script by ChiefArug

//  let bannedItems = [{'soulsweapons:withered_wabbajack': "unstable, overpowered"}, {"doom:daisy": "overpowered"}, {"doom:soulcube": "overpowered"}]
//  bannedItems.forEach((item, reason) => {
//    PlayerEvents.inventoryChanged(item, event => {
//      event.player.tell([
//          "Item ",
//          Text.yellow(item),
//          " has been ",
//          Text.red("removed"),
//          ".\nReason: ",
//          Text.red(reason),
//        ]);
//      event.player.inventory.removeItem(event.getSlot(), event.item.count)
//    })
//  })