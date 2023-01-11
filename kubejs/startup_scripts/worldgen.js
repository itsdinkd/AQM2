// WorldgenEvents.add(event => {
//     event.addOre(ore => {
//     ore.block = 'minecraft:glowstone' // Block ID (Use [] syntax for properties)
//     ore.spawnsIn.blacklist = false // Inverts spawn whitelist
//     ore.spawnsIn.values = [ // List of valid block IDs or tags that the ore can spawn in
//       '#minecraft:base_stone_overworld' // Default behavior - ores spawn in all stone types
//     ]
    
//     ore.biomes.blacklist = false // Inverts biome whitelist
//     ore.biomes.values = [ // Biomes this ore can spawn in
//       'pureminingdimension:mining_dimension_biome', // Biome ID
//     ]
    
//     ore.clusterMinSize = 1 // Min blocks per cluster (currently ignored, will be implemented later, it's always 1)
//     ore.clusterMaxSize = 5 // Max blocks per cluster
//     ore.clusterCount = 5 // Clusters per chunk
//     ore.minHeight = 0 // Min Y ore spawns in
//     ore.maxHeight = 64 // Max Y ore spawns in
//     ore.squared = true // Adds random value to X and Z between 0 and 16. Recommended to be true
//     // ore.chance = 4 // Spawns the ore every ~4 chunks. You usually combine this with clusterCount = 1 for rare ores
//   })