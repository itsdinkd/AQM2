onEvent('block.modification', event => {
    event.modify("gobber2:gobber2_ore", block => {
      block.setDestroySpeed(9.0)
    })
    event.modify("gobber2:gobber2_ore_nether", block => {
        block.setDestroySpeed(12.0)
      })
      event.modify("gobber2:gobber2_ore_end", block => {
        block.setDestroySpeed(15.0)
      })
  })