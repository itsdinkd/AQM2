// Listen to player login event
onEvent('player.logged_in', event => {
  // Check if player doesn't have "starting_items" stage yet
  if (!event.player.stages.has('starting_items')) {
    // Add the stage
    event.player.stages.add('starting_items')
    // give items
    event.player.give('ftbquests:book')
    // clear item
    event.player.inventory.clear('prefab:item_start_house');
  }
})