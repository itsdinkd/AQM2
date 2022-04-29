// Another Quality Modpack 2
// Bewitchment - Oil Crafting

onEvent('recipes', function(event) {
	event.remove({output: "bewitchment:heaven_extract" })
	event.custom({
  "type": "bewitchment:oil_recipe",
  "ingredients": [
	{
	  "item": "bewitchment:juniper_bark"
	},
	{
	  "item": "magicfungi:impetus_essence"
	},
	{
	  "item": "bewitchment:mandrake_root"
	}
  ],
  "result": {
	"item": "bewitchment:heaven_extract"
  },
  "color": 16777215
});
});

