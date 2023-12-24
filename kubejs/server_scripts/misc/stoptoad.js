// Another Quality Modpack 2 //
///////////////////////////////
const disabledMobSpawns = [
	"artifacts:mimic",
	"twilightforest:minoshroom",
	"twilightforest:minotaur",
	"mobz:toad",
	"mobz:toad_giant",
	"mobz:wasp",
	"creeperoverhaul:ocean_creeper",
	"crittersandcompanions:otter",
	"galosphere:spectre"
]
EntityEvents.spawned( event => {
	disabledMobSpawns.forEach((mob,i) => {
		if (event.entity.type == mob) { 
			event.cancel();
		}
	})
	// if (event.entity.type == "bewitchment:hellhound" || event.entity.type == "bewitchment:werewolf" || event.entity.type == "artifacts:mimic" || event.entity.type == "twilightforest:minoshroom" || event.entity.type == "twilightforest:minotaur" || event.entity.type == 'mobz:toad' || event.entity.type == 'mobz:toad_giant' ) {
	// 	event.cancel();
	// }
}); 