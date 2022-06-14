// Another Quality Modpack 2 //
///////////////////////////////

onEvent('entity.spawned', event => {
	if (event.entity.type == "twilightforest:minoshroom" || event.entity.type == "twilightforest:minotaur" || event.entity.type == 'mobz:toad' || event.entity.type == 'mobz:toad_giant' ) {
		event.cancel();
	}
});