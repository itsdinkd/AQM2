// Another Quality Modpack 2 //
//////////////////////////////
// const disableInfo = [ ----- Using Hide instead 
// 'prefab:item_swift_blade_bronze',
// 'prefab:item_swift_blade_copper',
// 'prefab:item_swift_blade_diamond',
// 'prefab:item_swift_blade_gold',
// 'prefab:item_swift_blade_iron',
// 'prefab:item_swift_blade_netherite',
// 'prefab:item_swift_blade_obsidian',
// 'prefab:item_swift_blade_osmium',
// 'prefab:item_swift_blade_steel',
// 'prefab:item_swift_blade_stone',
// 'prefab:item_swift_blade_wood',
// 'givemehats:bunny_space_helmet',
// 'givemehats:strider_hat',
// 'givemehats:irish_hat',
// 'givemehats:dwarven_hat',
// 'givemehats:jojo_hat',
// 'givemehats:viking_hat',
// 'givemehats:hippie_vibes',
// 'botania:dice',
// 'botania:infinite_fruit',
// 'botania:king_key',
// 'botania:flugel_eye',
// 'botania:thor_ring',
// 'botania:odin_ring',
// 'botania:loki_ring'
// ];

const greenhouseColors =[
    "white",
    "magenta",
    "orange",
    "light_blue",
    "yellow",
    "green",
    "pink",
    "gray",
    "lime",
    "blue",
    "light_gray",
    "cyan",
    "purple",
    "brown",
    "red",
    "black"
  ];

  REIEvents.information(event => {

  event.addItem('croparia:greenhouse', 'WARNING', ['You will crash and corrupt chunk if you use this on modded crops'])
  event.addItem("ae2:silicon_press", 'How to Craft', ['No Meteors in AQM2. Use the Botania Mana Pool to Craft this Press. Check Recipe in REI'])
  event.addItem("ae2:calculation_processor_press", 'How to Craft', ['No Meteors in AQM2. Use the Botania Mana Pool to Craft this Press. Check Recipe in REI'])
  event.addItem("ae2:logic_processor_press", 'How to Craft', ['No Meteors in AQM2. Use the Botania Mana Pool to Craft this Press. Check Recipe in REI'])
  event.addItem("ae2:engineering_processor_press", 'How to Craft', ['No Meteors in AQM2. Use the Botania Mana Pool to Craft this Press. Check Recipe in REI'])
  event.addItem("soulsweapons:verglas", 'How to Obtain', ['Drops from all Soul weapons bosses'])
  event.addItem("soulsweapons:moonstone", 'How to Obtain', ['Drops from Bosses from', 'Soul Weapons', 'Doom', 'BOMD Void Shadow, Void Blossom, Gauntlet, Obsidilith, Lich Bosses'])

  greenhouseColors.forEach(function(item, index) {
    event.addItem('croparia:greenhouse_' + item, 'WARNING', ['You will crash and corrupt chunk if you use this on modded crops'])
  });
});

REIEvents.hide('item', (event) => { 
  event.hide("croparia:greenhouse")
  greenhouseColors.forEach(function(item,index) {
    event.hide( "croparia:greenhouse_" + item)
  })
})