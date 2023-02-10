// Another Quality Modpack 2 //
///////////////////////////////
const disabledMobSpawns = [
	"bewitchment:hellhound",
	"bewitchment:werewolf",
	"artifacts:mimic",
	"twilightforest:minoshroom",
	"twilightforest:minotaur",
]
EntityEvents.spawned( event => {
	if (event.entity.type == "bewitchment:hellhound" || event.entity.type == "bewitchment:werewolf" || event.entity.type == "artifacts:mimic" || event.entity.type == "twilightforest:minoshroom" || event.entity.type == "twilightforest:minotaur" || event.entity.type == 'mobz:toad' || event.entity.type == 'mobz:toad_giant' ) {
		event.cancel();
	}
}); 