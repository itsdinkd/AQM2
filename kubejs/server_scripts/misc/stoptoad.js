// Another Quality Modpack 2 //
///////////////////////////////

onEvent('entity.spawned', event => {
	if (event.entity.type == 'mobz:toad' || event.entity.type == 'mobz:toad_giant' ) {
		event.cancel();
	}
});