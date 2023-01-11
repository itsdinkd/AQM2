// Another Quality Modpack 2

ServerEvents.recipes(event => {

    event.custom(
        {
            "type": "farmersdelight:cutting",
            "ingredients": [
              {
                "item": "minecraft:bamboo"
              }
            ],
            "tool": {
              "type": "farmersdelight:tool",
              "tag": "c:tools/knives"
            },
            "result": [
              {
                "item": "twigs:stripped_bamboo"
              }
            ],
            "sound": "minecraft:item.axe.strip"
          }
    )

event.remove({output:"resourceful_tools:bamboo_sheet"})
event.shapeless("resourceful_tools:bamboo_sheet", ["4x twigs:stripped_bamboo"])
event.remove({output:"resourceful_tools:large_bamboo_sheet"})
event.shapeless("resourceful_tools:large_bamboo_sheet", ["4x resourceful_tools:bamboo_sheet"])
})