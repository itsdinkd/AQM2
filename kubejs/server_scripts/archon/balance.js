// Another Quality Modpack 2
ServerEvents.recipes(event => {
    event.remove({id: 'archon:channeling/diamond'})
    event.custom(
        {
            "type": "archon:channeling",
            "block": "minecraft:diamond_ore",
            "result": {
              "item": "minecraft:diamond",
              "count": 2
            },
            "manaCost": 55
          });

        event.remove({id: 'archon:channeling/redstone'})
        event.custom(
            {
                "type": "archon:channeling",
                "block": "minecraft:redstone_ore",
                "result": {
                  "item": "minecraft:redstone",
                  "count": 7
                },
                "manaCost": 25
            });

        event.remove({id: 'archon:channeling/spry_dust'})
        event.custom(
                {
                    "type": "archon:channeling",
                    "block": "minecraft:sand",
                    "result": {
                      "item": "archon:spry_dust",
                      "count": 1
                    },
                    "manaCost": 10
                });

                event.remove({id: 'archon:channeling/raw_iron'})
                event.custom(
                    {
                        "type": "archon:channeling",
                        "block": "minecraft:iron_ore",
                        "result": {
                          "item": "minecraft:raw_iron",
                          "count": 3
                        },
                        "manaCost": 45
                    });
                    event.remove({id: 'archon:channeling/emerald'})
                    event.custom(
                        {
                            "type": "archon:channeling",
                            "block": "minecraft:emerald_ore",
                            "result": {
                              "item": "minecraft:emerald",
                              "count": 2
                            },
                            "manaCost": 45
                          });
event.remove({id: 'archon:channeling/pixie_leaves'})
event.custom(
  {
    "type": "archon:channeling",
    "tag": "minecraft:leaves",
    "result": {
      "item": "archon:pixie_leaves",
      "count": 1
    },
    "manaCost": 30
  });

event.replaceInput({id: "archon:ender_blade"}, "minecraft:ender_pearl", "fwaystones:pocket_wormhole")
event.replaceInput({id: "archon:void_scepter"}, "minecraft:ender_eye", "archon:ender_blade")

})
