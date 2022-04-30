onEvent('tags.items', event => {
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
	event.remove('c:aluminum_dusts', 'agape_space:aluminum_ingot');
	catalystBlacklist.forEach(function(item) { 
	event.add('things:hardening_catalyst_blacklist', item)
});
});