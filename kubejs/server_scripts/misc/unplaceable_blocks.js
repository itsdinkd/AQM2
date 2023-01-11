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

BlockEvents.placed( event => {

  greenhouseColorsPlacement.forEach(function(item,index) {
      if (event.block.id == 'croparia:greenhouse_' + item) {
      event.cancel()
      Utils.server.runCommand(`tell @a You cannot place Greenhouses!`)
    }
  })

  if (event.block.id == 'croparia:greenhouse') {
    event.cancel()
    Utils.server.runCommand(`tell @a You cannot place Greenhouses!`)
  }

  // if (event.block.id == "twilightforest:uncrafting_table") {
  //   event.cancel()
  // }

})