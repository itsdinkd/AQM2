// Another Quality Modpack 2 //
///////////////////////////////

// Macerator Recipes
ServerEvents.recipes(event => {
  event.custom(
  {
    "type": "modern_industrialization:macerator",
    "id": "aqm2:redstone_crushed_dust",
    "eu": 2,
    "duration": 100,
    "item_inputs": {
      "tag": "c:redstone_ores",
      "amount": 1
    },
    "item_outputs": {
      "item": "modern_industrialization:redstone_crushed_dust",
      "amount": 6
    }
  });
});