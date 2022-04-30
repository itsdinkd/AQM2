onEvent('entity.spawned', event => {
	if (event.entity.type == 'mobz:toad') {
		event.cancel();
	}
});