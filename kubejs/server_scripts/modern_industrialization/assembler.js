// Another Quality Modpack 2
// Assembler Recipes
onEvent('recipes', event => {
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
        "item" : "kubejs:corrupted_emerald",
        "amount": 1
      },
      {
        "item": "kubejs:demon_pearl",
        "amount": 1
      },
      {
        "item" : "kubejs:star_of_icon",
        "amount": 1
      }
    ],

    "fluid_inputs": {
      "fluid" : "modern_industrialization:uu_matter",
      "amount" : 30
    },
    "item_outputs": [
      {
        "item": "kubejs:cursed_gem",
        "amount": 1
      }
    ]
  });
});