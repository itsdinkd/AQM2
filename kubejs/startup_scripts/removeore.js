WorldgenEvents.remove(event => {
  event.removeOres(ores => {
    ores.blocks = [ 
      'blockus:viridite',
      'byg:lignite_ore',
      'croparia:deepslate_elematilius_ore',
      'croparia:elematilius_ore',
      'croptopia:salt_ore',
      'expandeddelight:deepslate_salt_ore',
      'expandeddelight:salt_ore',
      'indrev:deepslate_lead_ore', 
      'indrev:deepslate_tin_ore', 
      'indrev:deepslate_tungsten_ore',
      'indrev:lead_ore',
      'indrev:tin_ore',
      'indrev:tungsten_ore',
      'indrev:silver_ore',
      'indrev:deepslate_silver_ore',
      "modern_industrialization:nickel_ore",
      "modern_industrialization:deepslate_nickel_ore",
      'modern_industrialization:deepslate_salt_ore',
      'modern_industrialization:salt_ore',
      'techreborn:deepslate_ruby_ore',
      'techreborn:ruby_ore',
      'croptopia:salt_ore',
      'galosphere:silver_ore',
      'galosphere:deepslate_silver_ore',
      "soulsweapons:moonstone_ore",
      "soulsweapons:moonstone_ore_deepslate",
      "soulsweapons:verglas_ore_deepslate",
      "soulsweapons:verglas_ore",
      "rocks:seashell"
      ]
  })

  // event.removeOres(ores => {
  //   ores.blocks = [ 'minecraft:coal_ore', 'minecraft:iron_ore' ] // Removes coal and iron ore
  //   ores.biomes.values = [ 'pureminingdimension:mining_dimension_biome' ] // Removes it only from plains biomes
  // })
  
});