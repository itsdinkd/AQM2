// Another Quality Modpack 2

const greenhouseColorsPlacement =[
  "white",
  "magenta",
  "orange",
  "light_blue",
  "yellow",
  "green",
  "pink",
  "gray",
  "lime",
  "blue",
  "light_gray",
  "cyan",
  "purple",
  "brown",
  "red",
  "black"
];

onEvent('block.place', event => {

  greenhouseColorsPlacement.forEach(function(item,index) {
      if (event.block.id == 'croparia:greenhouse_' + item) {
      event.cancel()
    }
  })

  if (event.block.id == 'croparia:greenhouse') {
    event.cancel()
  }

})