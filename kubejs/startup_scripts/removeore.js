onEvent('worldgen.remove',
event => {
  event.removeOres(ores => {
    ores.blocks = [ 
      'betternether:nether_lapis_ore',
      'betternether:nether_redstone_ore',
      'croparia:deepslate_elematilius_ore',
      'croparia:elematilius_ore',
      'indrev:deepslate_lead_ore', 
      'indrev:deepslate_tin_ore', 
      'indrev:deepslate_tungsten_ore', 
      'techreborn:deepslate_ruby_ore',
      'techreborn:ruby_ore',
      'blockus:viridite'
      ]
  })
});