// Another Quality Modpack 2 //
///////////////////////////////
const calciteRem = [
'polished_calcite',
'calcite_wall',
'calcite_stairs',
'polished_basalt'
];

const basaltRem = [
'smooth_basalt_brick_stairs',
'smooth_basalt_brick_wall'
];

const remAllThese = [
'blockus:polished_basalt_bricks'
];

onEvent('recipes', event => {
  calciteRem.forEach(function(item, index) {
    event.remove({output: 'consistencyplus:' + item})
    event.remove({output: 'twigs:' + item})
  });

  basaltRem.forEach(function(item, index) {
    event.remove({output: 'twigs:' + item})
  });
  remAllThese.forEach(function(item, index) {
    event.remove({output: item})
  });

// Smooth Calcite Consistency + - Interferes with Spectrum Calcite
event.remove({output:'consistency_plus:smooth_calcite'})
});