// Another Quality Modpack 2

const indrevArmor = [
"modular_armor_chest",
"modular_armor_legs",
"modular_armor_helmet",
"modular_armor_boots"
]


// var getNum = Math.floor(Math.random() * 2 + 2);
ServerEvents.recipes(event => {


// Pulverizing
// event.custom({
//     "type": "indrev:pulverize",
//     "ingredients": {
//       "tag": "c:manganese_ores",
//       "count": 1
//     },
//     "output": {
//       "item": "mythicmetals:raw_manganese",
//       "count": 2
//     },
//     "processTime": 200
// });


//Recycler
event.custom({
  "type": "indrev:recycle",
  "ingredients": [
    {
      "tag": "nourish:vegetables",
      "count": 1
    }
  ],
  "output": {
    "item": "indrev:biomass",
    "count": 2
  },
  "processTime": 170
  });

event.custom({
  "type": "indrev:recycle",
  "ingredients": [
    {
      "tag": "nourish:protein",
      "count": 1
    }
  ],
  "output": {
    "item": "indrev:biomass",
    "count": 2
  },
  "processTime": 220
  });

  event.custom({
    "type": "indrev:recycle",
    "ingredients": [
      {
        "item": "aqm2:copper_coin",
        "count": 999
      }
    ],
    "output": {
      "item": "aqm2:silver_coin",
      "count": 1
    },
    "processTime": 170
    });

    event.custom({
      "type": "indrev:recycle",
      "ingredients": [
        {
          "item": "aqm2:silver_coin",
          "count": 999
        }
      ],
      "output": {
        "item": "aqm2:gold_coin",
        "count": 1
      },
      "processTime": 170
      });

// Modular Armor
indrevArmor.forEach(function(item,i) {
  event.replaceInput({
  output: 'indrev:' + item },
  'indrev:battery',
  'better_batpack:batpack4')
})

event.replaceInput({
  id: "indrev:shaped/compressor_mk1" },
  'techreborn:copper_plate',
  'techreborn:iron_plate')


// Mining Drill
  event.remove({id: 'indrev:shaped/mining_drill_mk4'});
  event.shaped('indrev:mining_drill_mk4', ["ada","lcl","lbu"],
  {
    a: 'indrev:enriched_nikolite_ingot',
    d: 'indrev:netherite_drill_head',
    c: 'indrev:circuit_mk4',
    l: 'techreborn:tungstensteel_plate',
    b: 'better_batpack:batpack16',
    u: 'modern_industrialization:turbo_upgrade'
  })

  event.remove({id: 'indrev:shaped/mining_drill_mk3'});
  event.shaped('indrev:mining_drill_mk3', ["ada","lcl","lbu"],
  {
    a: 'indrev:enriched_nikolite_dust',
    d: 'indrev:diamond_drill_head',
    c: 'indrev:circuit_mk3',
    l: 'techreborn:hot_tungstensteel_ingot',
    b: 'better_batpack:batpack4',
    u: 'modern_industrialization:advanced_upgrade'
  })

  event.remove({id: 'indrev:shaped/mining_drill_mk2'});
  event.shaped('indrev:mining_drill_mk2', ["ada","lcl","lbu"],
  {
    a: 'indrev:nikolite_ingot',
    d: 'indrev:iron_drill_head',
    c: 'indrev:circuit_mk2',
    l: 'techreborn:electrum_plate',
    b: 'indrev:battery',
    u: 'modern_industrialization:turbo_upgrade'
  })

  event.remove({id: 'indrev:shaped/mining_drill_mk1'});
  event.shaped('indrev:mining_drill_mk1', ["ada","lcl","lbu"],
  {
    a: 'indrev:nikolite_dust',
    d: 'indrev:stone_drill_head',
    c: 'indrev:circuit_mk1',
    l: 'techreborn:bronze_plate',
    b: 'indrev:battery',
    u: 'modern_industrialization:large_motor'
  })

  event.replaceInput({
    id: 'indrev:shaped/gamer_axe'},
    'indrev:battery',
    'techreborn:lithium_ion_batpack')

});