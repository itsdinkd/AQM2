// Another Quality Modpack 2 //
///////////////////////////////
const arRemove = [
'advanced_reborn:crafting/advanced_forge_hammer',
'advanced_reborn:crafting/advanced_forge_hammer_2',
'advanced_reborn:crafting/bomb/dynamite',
'advanced_reborn:crafting/bomb/industrial_sticky_dynamite_from_slime',
'advanced_reborn:crafting/bomb/industrial_sticky_dynamite_from_slime',
'advanced_reborn:crafting/bomb/industrial_tnt2',
'advanced_reborn:crafting/bomb/industrial_tnt2',
'advanced_reborn:crafting/bomb/sticky_dynamite_from_slime',
'advanced_reborn:crafting/bomb/sticky_dynamite_from_slime',
'advanced_reborn:crafting/duct_tape_from_slimeball',
'advanced_reborn:crafting/forge_hammer',
'advanced_reborn:crafting/forge_hammer_2',
'advanced_reborn:crafting/plates/copper_plate',
'advanced_reborn:crafting/plates/gold_plate',
'advanced_reborn:crafting/plates/iron_plate',
'advanced_reborn:crafting/plates/lead_plate',
'advanced_reborn:crafting/plates/silver_plate',
'advanced_reborn:crafting/plates/tin_plate',
];

const arRemoveOutput = [
'advanced_reborn:teleporter',
'advanced_reborn:freq_trans',
"advanced_reborn:ray_generator",
"advanced_reborn:ray_generator_2",
"advanced_reborn:ray_generator_3",
"advanced_reborn:ray_generator_4",
"advanced_reborn:ray_generator_5",
"advanced_reborn:ray_generator_6",
"advanced_reborn:ray_generator_7",
"advanced_reborn:ray_generator_8",
"advanced_reborn:ray_generator_9",
"advanced_reborn:ray_generator_10",
]
onEvent('recipes', event => {

  arRemove.forEach(function(item,index) {
    event.remove({id: item})
  });

// remove generators
  arRemoveOutput.forEach(function(item,index) {
    event.remove({output: item})
  });


event.replaceInput({
  id: 'advanced_reborn:crafting/nano_helmet'},
  'minecraft:glass',
  'gearreborn:nv_goggles'
)

// event.shaped('advanced_reborn:crafting/generator/ray_generator_10', ['q1q', '2x2', 'q1q'],
// {
//   q: 'modern_industrialization:quantum_upgrade'
// })

})