// Another Quality Modpack 2 //
///////////////////////////////

priority: 100
// Wandering Collector blacklist
	const blacklistTrader = [
		"bosses_of_mass_destruction:ancient_anima",
		"bosses_of_mass_destruction:void_thorn",
		"bosses_of_mass_destruction:blazing_eye",
		"bosses_of_mass_destruction:obsidian_heart",
		"aqm2:cursed_gem",
		"aqm2:corrupted_emerald",
		"aqm2:star_of_icon",
		"aqm2:ultimate_ingot",
		"aqm2:demon_pearl",
		"aqm2:lord_soul_ultimate",
		"kibe:angel_ring",
		"soulsweapons:lord_soul_white",
		"soulsweapons:lord_soul_red",
		"soulsweapons:lord_soul_dark",
		"soulsweapons:lord_soul_rose",
		"soulsweapons:lord_soul_purple",
		"soulsweapons:lord_soul_void",
		"gobber2:dragon_star",
		"gobber2:gobber2_ingot",
		"gobber2:gobber2_ingot_nether",
		"gobber2:gobber2_ingot_end",
		"gobber2:gobber2_glob",
		"gobber2:gobber2_glob_end",
		"gobber2:gobber2_glob_nether",
		"gobber2:gobber2_globette_end",
		"gobber2:gobber2_globette_nether",
		"gobber2:gobber2_globette",
		"adventurez:stone_golem_heart",
		"adventurez:prime_eye",
		"techreborn:interdimensional_su",
		"techreborn:nak_coolant_cell_360k",
		"spectrum:refined_azurite",
		"spectrum:neolith",
		"botania:gaia_ingot",
		"bewitchment:heaven_extract",
		"modern_industrialization:quantum_upgrade",
		"techreborn:uu_matter",
		"ae2:cell_component_64k",
		"mobz:boss_ingot",
		"minecraft:command_block",
		"modern_industrialization:quantum_circuit"
	];

	const soulsweaponsMatBosses = [
		'doom:motherdemon',
		'doom:gladiator',
		'doom:iconofsin',
		'doom:arch_maykr', 
		"adventurez:void_shadow", 
		"soulsweapons:returning_knight", 
		"soulsweapons:accursed_lord_boss", 
		"soulsweapons:chaos_monarch", 
		"soulsweapons:night_shade",
		"bosses_of_mass_destruction:void_blossom",
		"bosses_of_mass_destruction:lich",
	];

	const SimplyRareSwords = [
		"simplyswords:watcher_claymore",
		"simplyswords:brimstone_claymore",
		"simplyswords:storms_edge",
		"simplyswords:stormbringer",
		"simplyswords:bramblethorn",
		"simplyswords:watching_warglaive",
		"simplyswords:toxic_longsword",
		"simplyswords:emberblade",
		"simplyswords:frostfall",
		"simplyswords:soulpyre",
		"simplyswords:molten_edge",
		"simplyswords:livyatan",
		"simplyswords:icewhisper",
		"simplyswords:arcanethyst",
		"simplyswords:thunderbrand",
		"simplyswords:hearthflame",
		"simplyswords:twisted_blade",
		"simplyswords:soulrender",
		"simplyswords:soulkeeper",
		"simplyswords:soulstealer",
		"simplyswords:mjolnir",
		"simplyswords:slumbering_lichblade",
		"simplyswords:waking_lichblade",
		"simplyswords:awakened_lichblade",
		"simplyswords:shadowsting",
		"simplyswords:dormant_relic",
		"simplyswords:tainted_relic",
		"simplyswords:righteous_relic",
		"simplyswords:sunfire",
		"simplyswords:harbinger"
	];

// TieredZ Blacklist

	const tieredZBlacklist = []

// Hardened Catalyst

	const catalystBlacklist = [
	'bewitchment:death_protection_poppet',
	'doom:axe_marauder_open',
	'doom:bfg_eternal',
	'doom:bfg9000',
	'doom:rocketlauncher',
	'doom:sentinelhammer',
	'doom:darklordcrucible',
	'doom:cruciblesword',
	'mcdar:wind_horn',
	'mcdar:iron_hide_amulet',
	'mcdar:ghost_cloak',
	'mcdar:death_cap_mushroom',
	'mcdar:boots_of_swiftness',
	'mcdar:wonderful_wheat',
	'mcdar:tasty_bone',
	'mcdar:buzzy_nest',
	"mcdar:love_medallion",
	'mcdar:satchel_of_elements',
	'mcdar:updraft_tome',
	'bewitchment:protection_poppet',
	'bewitchment:voodoo_poppet',
	'bewitchment:voodoo_protection_poppet',
	'bewitchment:mending_poppet',
	'bewitchment:curse_poppet',
	'bewitchment:vampiric_poppet',
	'bewitchment:judgment_poppet',
	'bewitchment:fatigue_poppet',
	'#modern_industrialization:replicator_blacklist',
	'#aqm2:weapons/rare'
	];

	const nonMoveable = [
		"bosses_of_mass_destruction:void_blossom_block",
		"minecraft:spawner"
	]

	const BlacklistTravelersBackpack = [
		"inmis:baby_backpack",
		"inmis:frayed_backpack",
		"inmis:ender_pouch",
		"inmis:endless_backpack",
		"inmis:gilded_backpack",
		"inmis:gilded_backpack",
		"inmis:bejeweled_backpack",
		"inmis:plated_backpack",
		"inmis:plated_backpack",
		"inmis:blazing_backpack",
		"inmis:withered_backpack"
	];

	const Twigs = [
		"rocks:oak_stick",
		"rocks:birch_stick",
		"rocks:acacia_stick",
		"rocks:jungle_stick",
		"rocks:warped_stick",
		"rocks:spruce_stick",
		"rocks:crimson_stick",
		"rocks:dark_oak_stick",
		"twigs:twig"
	];

	const Rocks = [
		"rocks:rock",
		"rocks:sand_rock",
		"rocks:gravel_rock",
		"rocks:diorite_rock",
		"rocks:granite_rock",
		"rocks:andesite_rock",
		"rocks:red_sand_rock",
		"rocks:end_stone_rock",
		"rocks:soul_soil_rock",
		"rocks:netherrack_rock",
		"twigs:pebble"
	];

// Item Tags
ServerEvents.tags('item', event => {

	SimplyRareSwords.forEach(function (item, index) {
		event.add('aqm2:weapons/rare', item)
	});

	Rocks.forEach(function (item, index) {
		event.add('aqm2:material/rocks', item)
	});
	
	Twigs.forEach(function (item, index) {
		event.add('aqm2:material/twigs', item)
	});

	catalystBlacklist.forEach(function(item) { 
		event.add('things:hardening_catalyst_blacklist', item)
    });	

	blacklistTrader.forEach(function (item,index) {
		event.add('wandering_collector:deny', item)
	});

	BlacklistTravelersBackpack.forEach(function (item,i) {
		event.add("travelersbackpack:blacklisted_items", item)
	});

	// soulsweaponsMatBosses.forEach(item => {
	// 	event.add('aqm:bosses/soulweapoons', item)
	// })
	//"soulsweapons:dar"
// Misc

	// event.add('c:rods/iron', 'c:iron_rods') Removed until we use Create Additions again
	event.add('c:wrenches', 'advanced_reborn:config_wrench');
	event.add('c:wrenches','techreborn:wrench');
	event.add('minecraft:coals', 'modern_industrialization:lignite_coal');
	event.add("yigd:soulbound_blacklist", /^travelersbackpack:.*/);
	// event.add("aqm2:butterflies/cotton_balls", /^lilwings:.*_cotton_ball/)
	// event.add("aqm2:butterflies/elytra", /^lilwings:.*_elytra/)
	// event.add("aqm2:butterflies/wings", /^lilwings:.*_wings/)
	event.add('things:hardening_catalyst_blacklist', /^spectrum:.*/);
	event.add('things:hardening_catalyst_blacklist', /^artifacts:.*/);
	event.add('things:hardening_catalyst_blacklist', /^kibe:.*/);
	event.add('things:hardening_catalyst_blacklist', /^conjuring:.*/);
	event.add('things:hardening_catalyst_blacklist', /^soulweapons:.*/);
	event.add('c:rubies', 'betternether:nether_ruby');
	event.add('c:silver_ingots', 'galosphere:silver_ingot');
	event.add('c:silver_nuggets', 'galosphere:silver_nugget');
	event.add('c:silver_blocks', 'galosphere:silver_block');
	event.add('c:raw_silver_blocks', 'galosphere:raw_silver_block');
	event.add('c:silver_ores', 'galosphere:silver_ore');
	event.add('c:raw_silver_ores', 'galosphere:raw_silver');
	event.add('c:silver_ores', 'galosphere:deepslate_silver_ore');
	event.add('c:ruby_ores', 'betternether:nether_ruby_ore');
	
// Remove
	// event.remove('c:aluminum_dusts', 'agape_space:aluminum_ingot');
	

});

// Block Tags
ServerEvents.tags('block', event => {
	event.add('c:redstone_ores','minecraft:redstone_ore')
	event.add('c:redstone_ores','minecraft:deepslate_redstone_ore')
	event.add('c:emerald_ores','minecraft:emerald_ore')
	event.add('c:emerald_ores','minecraft:deepslate_emerald_ore')
	event.add('c:diamond_ores','minecraft:diamond_ore')
	event.add('c:diamond_ores','minecraft:deepslate_diamond_ore')
	event.add('c:ruby_ores', 'betternether:nether_ruby_ore')
	
	Twigs.forEach(function (item, index) {
		event.add('aqm2:material/twigs', item)
	})

	nonMoveable.forEach(function (item, i) {
		event.add("create:non_movable", item)
	})
	// alwaysSoulbound.forEach((item,index) => {
	// 	event.add('yigd:soulbound_item', item)
	// })
});