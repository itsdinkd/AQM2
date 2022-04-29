onEvent('worldgen.remove', event => {
  event.removeOres(ores => {
    ores.blocks = [ 'techreborn:ruby_ore', 'techreborn:deepslate_ruby_ore', 'betternether:nether_redstone_ore', 'betternether:nether_lapis_ore', 'croparia:elematilius_ore', 'croparia:deepslate_elematilius_ore'] // Removes coal and iron ore
  })
});