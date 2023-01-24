BlockEvents.modification( event => {
    event.modify("gobber2:gobber2_ore", block => {
      block.setDestroySpeed(13.0)
    })
    event.modify("gobber2:gobber2_ore_nether", block => {
        block.setDestroySpeed(15.0)
      })
      event.modify("gobber2:gobber2_ore_end", block => {
        block.setDestroySpeed(18.0)
      })
  })