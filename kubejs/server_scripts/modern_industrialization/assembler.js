// Another Quality Modpack 2 //
///////////////////////////////

// Assembler Recipes
ServerEvents.recipes(event => {
  event.remove({output: "gobber2:dragon_star"})
  event.custom(
  {
    "type": "modern_industrialization:assembler",
    "id": "aqm2:dragonstar",
    "eu": 16,
    "duration": 400,
    "item_inputs": [
      {
        "item" : "gobber2:gobber2_ingot_end",
        "amount": 5
      },
      {
        "item": "minecraft:dragon_breath",
        "amount": 4
      },
      {
        "item" : "minecraft:dragon_head",
        "amount": 1
      }
    ],

    "fluid_inputs": {
      "fluid" : "kibe:liquid_xp",
      "amount" : 7500
    },
    "item_outputs": [
      {
        "item": "gobber2:dragon_star",
        "amount": 1
      }
    ]
  });

  event.custom(
  {
    "type": "modern_industrialization:assembler",
    "id": "aqm2:cursedgem",
    "eu": 32,
    "duration": 1000,
    "item_inputs": [
      {
        "item" : "aqm2:corrupted_emerald",
        "amount": 1
      },
      {
        "item": "aqm2:demon_pearl",
        "amount": 1
      },
      {
        "item" : "aqm2:star_of_icon",
        "amount": 1
      }
    ],
    "fluid_inputs": {
      "fluid" : "modern_industrialization:uu_matter",
      "amount" : 3000
    },
    "item_outputs": [
      {
        "item": "aqm2:cursed_gem",
        "amount": 1
      }
    ]
  });

  event.custom(
    {
      "type": "modern_industrialization:assembler",
      "id": "aqm2:cursedgem",
      "eu": 32,
      "duration": 750,
      "item_inputs": [
        {
          "item" : "soulsweapons:lord_soul_white",
          "amount": 1
        },
        {
          "item": "soulsweapons:lord_soul_red",
          "amount": 1
        },
        {
          "item" : "soulsweapons:lord_soul_dark",
          "amount": 1
        },
        {
          "item" : "soulsweapons:lord_soul_rose",
          "amount": 1
        },
        {
          "item" : "soulsweapons:lord_soul_purple",
          "amount": 1
        },
        {
          "item" : "soulsweapons:lord_soul_void",
          "amount": 1
        }
      ],
      "fluid_inputs": {
        "fluid" : "modern_industrialization:uu_matter",
        "amount" : 1000
      },
      "item_outputs": [
        {
          "item": "aqm2:lord_soul_ultimate",
          "amount": 1
        }
      ]
    });
});