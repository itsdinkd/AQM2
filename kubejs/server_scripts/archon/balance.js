onEvent('recipes', event=> {
    event.remove({id: 'archon:channeling/diamond'})
    event.custom(
        {
            "type": "archon:channeling",
            "tag": "c:diamond_ores",
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
                "tag": "c:redstone_ores",
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
                    "tag": "c:sand",
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
                        "tag": "c:iron_ores",
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
                            "tag": "c:emerald_ores",
                            "result": {
                              "item": "minecraft:emerald",
                              "count": 2
                            },
                            "manaCost": 45
                          });
      
})
