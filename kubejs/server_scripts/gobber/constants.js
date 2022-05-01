// Another Quality Modpack 2 //
///////////////////////////////

// itemtype, input, output, count, power = 5, time = 200
onEvent('recipes', event => {
const trGrinder = function(event, input, output, c, p, t) {
  event.custom({
    "type": "techreborn:grinder",
    "power": p,
    "time": t,
    "ingredients": [{ "item": input }],
    "results": [{ "item": output, "count": c }]
  });
};

  event.remove({input: "gobber2:gobber2_ore" });
  trGrinder(event, 'gobber2:gobber2_ore', 'gobber2:gobber2_globette', 2, 5, 260 )

  event.remove({input: "gobber2:gobber2_ore_deepslate" });
  trGrinder(event, 'gobber2:gobber2_ore_deepslate', 'gobber2:gobber2_globette', 2, 5, 260 )

  event.remove({input: "gobber2:gobber2_ore_nether" });
  trGrinder(event, 'gobber2:gobber2_ore_nether', 'gobber2:gobber2_globette_nether', 2, 6, 260 )

    event.remove({input: "gobber2:gobber2_ore_end" });
  trGrinder(event, 'gobber2:gobber2_ore_end', 'gobber2:gobber2_globette_end', 2, 7, 260 )

})