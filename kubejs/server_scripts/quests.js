// Completed Angel ring quest
onEvent('ftbquests.completed.angelring', event => {
  event.onlineMembers.playSound('entity.experience_orb.pickup')
  if (event.player) {
    event.notifiedPlayers.tell(Text.of(`${event.player.name} Earned a cookie for getting the angel ring!`).green())
  }
});