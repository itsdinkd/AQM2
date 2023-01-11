// Completed Angel ring quest
FTBQuestsEvents.completed("6912B0F3A6A06069", event => {
  event.onlineMembers.playSound('entity.experience_orb.pickup')
  if (event.player) {
    event.notifiedPlayers.tell(Text.of(`${event.player.name} Earned a cookie for getting the angel ring!`).green())
  }
});