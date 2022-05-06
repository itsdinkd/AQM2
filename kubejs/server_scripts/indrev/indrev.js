// Another Quality Modpack 2

const indrevArmor = [
"modular_armor_chest",
"modular_armor_legs",
"modular_armor_helmet",
"modular_armor_boots"
]


// var getNum = Math.floor(Math.random() * 2 + 2);
onEvent('recipes', (event) => {

//Recycler
event.custom({
  "type": "indrev:recycle",
  "ingredients": [
    {
      "tag": "nourish:vegetable",
      "count": 2
    }
  ],
  "output": {
    "item": "indrev:biomass",
    "count": 1
  },
  "processTime": 170
  });

event.custom({
  "type": "indrev:recycle",
  "ingredients": [
    {
      "tag": "nourish:protein",
      "count": 2
    }
  ],
  "output": {
    "item": "indrev:biomass",
    "count": 1
  },
  "processTime": 220
  });


// Modular Armor
indrevArmor.forEach(function(item,i) {
  event.replaceInput({
  output: 'indrev:' + item },
  'indrev:battery',
  'better_batpack:batpack4')
})

// Mining Drill
  event.replaceInput({
  id: 'indrev:shaped/mining_drill_mk4'},
  'indrev:battery',
  'better_batpack:batpack4')

  event.replaceInput({
  id: 'indrev:shaped/gamer_axe'},
  'indrev:battery',
  'techreborn:lithium_ion_batpack')

});