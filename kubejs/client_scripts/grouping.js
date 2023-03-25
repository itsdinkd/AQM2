// Another Quality Modpack 2

REIEvents.groupEntries(event => {

    event.groupItemsByTag('supplementaries:rei_groups/hanging_signs', 'Hanging Signs', 'supplementaries:hanging_signs')
    event.groupItemsByTag('supplementaries:rei_groups/sign_posts', 'Sign Posts', 'supplementaries:sign_posts')
    event.groupItems("techreborn:rei_groups/cells", 'Cells', 'techreborn:cell')

    const consistencyPlusGroupings= [
      "andesite",
      "basalt",
      "blackstone",
      "bone",
      "calcite",
      "concrete",
      "copper",
      "crimson_wart",
      "crying_obsidian",
      "dark_prismarine",
      "deepslate",
      "diorite",
      "dirt",
      "dripstone",
      "end_stone",
      "glazed_terracotta",
      "glowstone",
      "granite",
      "grass",
      "ice",
      "mycelium",
      "netherrack",
      "obsidian",
      "prismarine",
      "purpur",
      "quartz",
      "red_sandstone",
      "sandstone",
      "soul_sandstone",
      "stone",
      "terracotta",
      "tinted_glass",
      "tuff",
      "warped_wart",
      "withered_bone"
    ]


    consistencyPlusGroupings.forEach(id => {
      event.groupItemsByTag(`consistency_plus:rei_groups/` + id, id, 'consistency_plus:materials/'+id)
    })
    
    // Spawn Eggs grouped
    event.groupItems('kubejs:rei_groups/spawn_eggs', 'Spawn Eggs', [
        /spawn_egg/,
        'supplementaries:red_merchant_spawn_egg',
        /mobz:spawn_.*/,
        /adventurez:spawn_.*/
    ])
    event.groupItems('kubejs:rei_groups/techreborn/cells', 'Cells', [/techreborn:.*cell/])

    // chisel
    event.groupItems('chisel:rei_groups/materials/acacia', 'Acacia', [/chisel:.*acacia.*/])
    event.groupItems('chisel:rei_groups/materials/andesite', 'Andesite', [/chisel:.*andesite/]) 
    event.groupItems('chisel:rei_groups/materials/birch', 'Birch', [/chisel:.*birch.*/])
    event.groupItems('chisel:rei_groups/materials/concrete', 'Concrete', [/chisel:.*concrete.*/])
    event.groupItems('chisel:rei_groups/materials/bricks', 'Bricks', [/chisel:.*bricks/]) 
    event.groupItems('chisel:rei_groups/materials/wool', 'Wool', [/chisel:.*wool.*/]) 
    event.groupItems('chisel:rei_groups/materials/coal', 'Coal', [/chisel:.*coal.*/])
    event.groupItems('chisel:rei_groups/materials/cobblestone', 'Cobblestone', [/chisel:.*cobblestone.*/]) 
    event.groupItems('chisel:rei_groups/materials/crimson', 'Crimson', [/chisel:.*crimson.*/]) 
    event.groupItems('chisel:rei_groups/materials/dark_oak', 'Dark Oak', [/chisel:.*dark_oak.*/])
    event.groupItems('chisel:rei_groups/materials/deepslate', 'Deepslate', [/chisel:.*deepslate.*/]) 
    event.groupItems('chisel:rei_groups/materials/diamond', 'Diamond', [/chisel:.*diamond.*/]) 
    event.groupItems('chisel:rei_groups/materials/diorite', 'Diorite', [/chisel:.*diorite.*/]) 
    event.groupItems('chisel:rei_groups/materials/dirt', 'Dirt', [/chisel:.*dirt.*/]) 
    event.groupItems('chisel:rei_groups/materials/emerald', 'Emerald', [/chisel:.*emerald.*/]) 
    event.groupItems('chisel:rei_groups/materials/end_stone', 'End Stone', [/chisel:.*end_stone.*/]) 
    event.groupItems('chisel:rei_groups/materials/glass', 'Glass', [/chisel:.*glass.*/]) 
    event.groupItems('chisel:rei_groups/materials/glowstone', 'Glowstone', [/chisel:.*glowstone.*/]) 
    event.groupItems('chisel:rei_groups/materials/gold', 'Gold', [/chisel:.*gold.*/]) 
    event.groupItems('chisel:rei_groups/materials/granite', 'Granite', [/chisel:.*granite.*/]) 
    event.groupItems('chisel:rei_groups/materials/nether', 'Nether Bricks', [/chisel:.*nether.*/]) 
    event.groupItems('chisel:rei_groups/materials/ice', 'Ice', [/chisel:.*ice.*/]) 
    event.groupItems('chisel:rei_groups/materials/iron', 'Iron', [/chisel:.*iron.*/]) 
    event.groupItems('chisel:rei_groups/materials/jungle', 'Jungle', [/chisel:.*jungle.*/]) 
    event.groupItems('chisel:rei_groups/materials/lapis', 'Lapis', [/chisel:.*lapis.*/]) 
    event.groupItems('chisel:rei_groups/materials/oak', 'Oak', [/chisel:.*\/oak.*/]) 
    event.groupItems('chisel:rei_groups/materials/prismarine', 'Prismarine', [/chisel:.*prismarine.*/]) 
    event.groupItems('chisel:rei_groups/materials/purpur', 'Purpur', [/chisel:.*purpur.*/]) 
    event.groupItems('chisel:rei_groups/materials/quartz', 'Quartz', [/chisel:.*quartz.*/]) 
    event.groupItems('chisel:rei_groups/materials/redstone', 'Redstone', [/chisel:.*redstone.*/]) 
    event.groupItems('chisel:rei_groups/materials/sandstone', 'Sandstone', [/chisel:.*sandstone.*/]) 
    event.groupItems('chisel:rei_groups/materials/spruce', 'Spruce', [/chisel:.*spruce.*/]) 
    event.groupItems('chisel:rei_groups/materials/stone', 'Stone', [/chisel:.*stone.*/]) 

    // dim doors
  event.groupItems('dimdoors:rei_groups/type/trapdoors', 'Trapdoors', [/dimdoors:.*_door.*/])
  event.groupItems('dimdoors:rei_groups/type/doors', 'Doors', [/dimdoors:.*trapdoor/]) 

    //simplysword
event.groupItems('simplyswords:rei_groups/type/copper', 'Copper Weapons', [/simplyswords:.*copper.*/]) 
event.groupItems('simplyswords:rei_groups/type/iron', 'Iron Sword Weapons', [/simplyswords:.*iron.*/]) 
event.groupItems('simplyswords:rei_groups/type/gold', 'Gold Weapons', [/simplyswords:.*gold.*/]) 
event.groupItems('simplyswords:rei_groups/type/diamond', 'Diamond Weapons', [/simplyswords:.*diamond.*/]) 
event.groupItems('simplyswords:rei_groups/type/netherite', 'Metherite Weapons', [/simplyswords:.*netherite.*/]) 
event.groupItems('simplyswords:rei_groups/type/adamantite', 'Adamantite Weapons', [/simplyswords:.*adamantite.*/]) 
event.groupItems('simplyswords:rei_groups/type/aquarium', 'Aquarium Weapons', [/simplyswords:.*aquarium.*/]) 
event.groupItems('simplyswords:rei_groups/type/banglum', 'Banglum Weapons', [/simplyswords:.*banglum.*/]) 
event.groupItems('simplyswords:rei_groups/type/carmot', 'Carmot Weapons', [/simplyswords:.*carmot.*/]) 
event.groupItems('simplyswords:rei_groups/type/kyber', 'Kyber Weapons', [/simplyswords:.*kyber.*/]) 
event.groupItems('simplyswords:rei_groups/type/mythril', 'Mythril Weapons', [/simplyswords:.*mythril.*/]) 
event.groupItems('simplyswords:rei_groups/type/orichalcum', 'Orichalcum Weapons', [/simplyswords:.*orichalcum.*/]) 
event.groupItems('simplyswords:rei_groups/type/osmium', 'Greataxe Weapons', [/simplyswords:.*osmium.*/]) 
event.groupItems('simplyswords:rei_groups/type/prometheum', 'Prometheum Weapons', [/simplyswords:.*prometheum.*/])
event.groupItems('simplyswords:rei_groups/type/quadrillum', 'Quadrillum Weapons', [/simplyswords:.*quadrillum.*/]) 
event.groupItems('simplyswords:rei_groups/type/runite', 'Runite Weapons', [/simplyswords:.*runite.*/]) 
event.groupItems('simplyswords:rei_groups/type/star_platinum', 'Star Platinum Weapons', [/simplyswords:.*star_platinum.*/]) 
event.groupItems('simplyswords:rei_groups/type/bronze', 'Bronze Weapons', [/simplyswords:.*bronze.*/]) 
event.groupItems('simplyswords:rei_groups/type/steel', 'Steel Weapons', [/simplyswords:.*steel.*/]) 
event.groupItems('simplyswords:rei_groups/type/stormyx', 'Stormyx Weapons', [/simplyswords:.*stormyx.*/]) 
event.groupItems('simplyswords:rei_groups/type/palladium', 'Palladium Weapons', [/simplyswords:.*palladium.*/]) 
event.groupItems('simplyswords:rei_groups/type/metallurgium', 'Metallurgium Weapons', [/simplyswords:.*metallurgium.*/]) 
event.groupItems('simplyswords:rei_groups/type/celestium', 'Celestium Weapons', [/simplyswords:.*celestium.*/]) 
event.groupItems('simplyswords:rei_groups/type/gobber', 'Gobber Weapons', [/simplyswords:.*gobber.*/]) 
event.groupItems('simplyswords:rei_groups/type/gobber_nether', 'Nether Gobber Weapons', [/simplyswords:.*gobber_nether.*/]) 
event.groupItems('simplyswords:rei_groups/type/gobber_end', 'End Gobber Weapons', [/simplyswords:.*gobber_end.*/]) 
event.groupItems('simplyswords:rei_groups/type/runic', 'Runic Weapons', [/simplyswords:.*runic.*/]) 

const useNbt = ['potion', 'enchanted_book', 'splash_potion', 'tipped_arrow', 'lingering_potion']

useNbt.forEach(id => {
  const item = Item.of(id)
  const { namespace, path } = Utils.id(item.id)
  event.groupSameItem(`kubejs:rei_groups/${namespace}/${path}`, Text.translate(item.descriptionId), item)
})  
  });