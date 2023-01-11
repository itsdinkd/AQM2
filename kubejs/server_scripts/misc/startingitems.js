// Another Quality Modpack 2
PlayerEvents.loggedIn( event => {
  // Check if player doesn't have "starting_items" stage yet
  if (!event.player.stages.has('starting_items')) {
    // Add the stage
    event.player.stages.add('starting_items')
    // give items
    event.player.give('ftbquests:book')
    // clear item
    event.player.inventory.clear('prefab:item_house');
  }

  //  banned items
  event.player.inventory.clear("doom:daisy");
  event.player.inventory.clear("doom:soulcube");
})

// let bannedItems = {
//   'doom:soulcube': "Not allowed due to Overpowered",
//   'doom:daisy': "Not allowed due to Overpowered"
// }

// bannedItems.forEach((item, reason) => {
//   PlayerEvents.inventoryChanged(item, event => {
//     event.player.tell([
//         "Item ",
//         Text.yellow(item),
//         " has been ",
//         Text.red("removed"),
//         ".\nReason: ",
//         Text.red(reason),
//       ]);
//     event.player.inventory.removeItem(event.getSlot(), event.item.count)
//   })
// })