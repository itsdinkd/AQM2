// Another Quality Modpack 2 //
///////////////////////////////

priority: 100
// Wandering Collector blacklist
	const blacklistTrader = [
		"bosses_of_mass_destruction:ancient_anima",
		"bosses_of_mass_destruction:void_thorn",
		"bosses_of_mass_destruction:blazing_eye",
		"bosses_of_mass_destruction:obsidian_heart",
		"kubejs:cursed_gem",
		"kubejs:corrupted_emerald",
		"kubejs:star_of_icon",
		"kubejs:ultimate_ingot",
		"kubejs:demon_pearl",
		"kibe:angel_ring",
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

	const SimplyRareSwords = [
		"simplyswords:runic_katana",
		"simplyswords:runic_sai",
		"simplyswords:runic_rapier",
		"simplyswords:runic_twinblade",
		"simplyswords:runic_glaive",
		"simplyswords:runic_longsword",
		"simplyswords:runic_spear",
		"simplyswords:runic_cutlass",
		"simplyswords:runic_claymore",
		"simplyswords:watcher_claymore",
		"simplyswords:watching_warglaive",
		"simplyswords:toxic_longsword",
		"simplyswords:stormbringer",
		"simplyswords:bramblethorn",
		"simplyswords:brimstone_claymore",
		"simplyswords:storms_edge",
		"simplyswords:sword_on_a_stick",
		"simplyswords:bramblethorn",
		"simplyswords:hearthflame",
		"simplyswords:emberblade",
		"simplyswords:mjolnir",
		"simplyswords:twisted_blade",
		"simplyswords:soulkeeper",
		"simplyswords:soulstealer",
		"simplyswords:frostfall",
		"simplyswords:soulpyre",
		"simplyswords:runic_tablet",
		"simplyswords:molten_edge",
		"simplyswords:livyatan",
		"simplyswords:soulrender"
	]

// Fish

	const originFish =[
	"#minecraft:fishes",
	"#c:cooked_fish",
	"#fabric:raw_fishes",
	"#fabric:raw_fish"
	]


// Berries

	const originBerries = [
	"#c:fruits/blackberries",
	"#c:fruits/blueberries",
	"#c:fruits/cranberries",
	"#c:fruits/dragonfruits",
	"#c:fruits/elderberries",
	"#c:fruits/pineapples",
	"#c:fruits/raspberries",
	"#c:fruits/strawberries"
]

// Meats

	const originMeats =[
	"#forge:raw_meats",
	"#c:cooked_meat"
	]

// TieredZ Blacklist

	const tieredZBlacklist = []

// Hardened Catalyst

	const catalystBlacklist = [
	'bewitchment:death_protection_poppet',
	'doom:axe_marauder_open',
	'doom:bfg_eternal',
	'doom:bfg9000',
	'doom:rocketlauncher',
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
	'bewitchment:fatigue_poppet'
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
	]
// Item Tags
ServerEvents.tags('item', event => {

	SimplyRareSwords.forEach(function (item, index) {
		event.add('aqm2:weapons/rare', item)
	})
	originFish.forEach(function (item, index) {
		event.add('grounded_origins:penguin/seafood', item)
		event.add('origins:meat', item)
		event.add('libra:meat', item)
	})

	originBerries.forEach(function (item, index) {
		event.add('grounded_origins:deer/berry_foods', item)
	})

	originMeats.forEach(function (item, index) {
		event.add('libra:meat', item)
		event.add('origins:meat', item)
	})

	catalystBlacklist.forEach(function(item) { 
		event.add('things:hardening_catalyst_blacklist', item)
    });	

	blacklistTrader.forEach(function (item,index) {
		event.add('wandering_collector:deny', item)
	})

	BlacklistTravelersBackpack.forEach(function (item,i) {
		event.add("travelersbackpack:blacklisted_items", item)
	})

// Misc
	event.add('c:wrenches', 'advanced_reborn:config_wrench')
	event.add('c:wrenches','techreborn:wrench')
	event.add('minecraft:coals', 'modern_industrialization:lignite_coal')
	event.add("yigd:soulbound_blacklist", /^travelersbackpack:.*/)
	event.add('c:rubies', 'betternether:nether_ruby')
	event.add('c:silver_ingots', 'galosphere:silver_ingot')
	event.add('c:silver_nuggets', 'galosphere:silver_nugget')
	event.add('c:silver_blocks', 'galosphere:silver_block')
	event.add('c:raw_silver_blocks', 'galosphere:raw_silver_block')
	event.add('c:silver_ores', 'galosphere:silver_ore')
	event.add('c:raw_silver_ores', 'galosphere:raw_silver')
	event.add('c:silver_ores', 'galosphere:deepslate_silver_ore')
	event.add('c:ruby_ores', 'betternether:nether_ruby_ore')

	// event.add('grounded_origins:moth/fibrous_foods', '#fabric:grain')
	// event.add('grounded_origins:moth/fibrous_foods', '#minecraft:fox_food')
	// event.add('grounded_origins:moth/fibrous_foods', '#c:fruits')
	
// Remove
	event.remove('nourish:vegetables', "croptopia:beef_stew")
	event.remove('nourish:vegetables', "croptopia:beef_stir_fry")
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

	// alwaysSoulbound.forEach((item,index) => {
	// 	event.add('yigd:soulbound_item', item)
	// })
});