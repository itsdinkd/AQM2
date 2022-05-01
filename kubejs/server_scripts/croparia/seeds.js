// Another Quality Modpack 2 //
///////////////////////////////

  onEvent("recipes", function(event) {

      var cropariaColors = ["black", "blue", "brown", "cyan", "gray", "green", "light_blue", "light_gray", "lime", "magenta", "orange", "pink", "purple", "red", "white", "yellow"];

      var cropariaMiscItems = [
      "elemental_fire_potion", "elemental_water_potion", "elemental_time", "elemental_earth_potion", "elemental_air_potion", "elemental_stone", "earth_shard", "air_shard", "fire_shard", "water_shard",
      "jar", "cage", "depth_generator", "mob_farm", "solar_panel", "wind_generator", "seed_recycler", "magic_rope", "soul_dagger", "soul_spawner", "soul_in_jar", "deepslate_elematilius_ore", "elematilius_ore"
      ];

      var cropariaSeeds = ["blaze", "dragon", "diamond", "emerald", "ender", "eye", "foot", "ghast", "goat", "goldenapple", "lead2", "magma", "nautilus", "netherite", "phantom", "totem", "quartz", "redstone", "scute", "sea", "shard", "crystal", "shell", "star", "wither", "xp"];

      var cropariaMats = [
          "gold",
          "iron",
          "stone",
          "netherite",
          "obsidian",
          "renforced",
          "diamond"
      ];

      var cropariaTools = [
          "pickaxe",
          "sword",
          "axe",
          "shovel",
          "hoe",
          "helmet",
          "chestplate",
          "leggings",
          "boots"
      ];

      event.remove({output: "croparia:ritual_stand"});
      event.remove({output: "croparia:infusor"});
      event.remove({output: "croparia:potion_water"});
      event.remove({output: "croparia:potion_fire"});
      event.remove({output: "croparia:potion_earth"});
      event.remove({output: "croparia:potion_air"});

      cropariaColors.forEach(function (item) {
          event.replaceInput({id:"croparia:greenhouse_" + item}, "minecraft:glowstone_dust", "gobber2:gobber2_glob")
      });
      event.replaceInput({id:"croparia:greenhouse"}, "minecraft:glowstone_dust", "gobber2:gobber2_glob")

      cropariaMiscItems.forEach(function (item) {
          event.remove({output: "croparia:" + item});
      });

      cropariaMats.forEach(function (item) {
          event.remove({output: "croparia:" + item + "_knife"});
          event.remove({output: "croparia:" + item + "_multitool"});
      });
      event.remove({output: "croparia:wood_multitool"});

      cropariaTools.forEach(function (item) {
          event.remove({output: "croparia:renforced_" + item});
          event.remove({output: "croparia:obsidian_" + item});
      });

      cropariaSeeds.forEach(function (item) {
          event.remove({output: "croparia:seed_crop_" + item});
          event.remove({output: "croparia:fruit_" + item});
      });

      event.remove({ output: "croparia:seed_crop_copper" });
      event.shaped("croparia:seed_crop_copper", ["isi","sps", "isi"],
        {
          i: "#c:seeds",
          s: "minecraft:copper_ingot",
          p: "croparia:croparia2"
        });


  // Assembly recipe for Croparia Collector - Expensive
    event.custom(
    {
      "type": "modern_industrialization:assembler",
      "id": "aqm2:croparia_collector",
      "eu": 8,
      "duration": 300,
      "item_inputs": [
        {
          "item": "croparia:croparia3",
          "amount": 2
        },
        {
          "item": "gobber2:gobber2_ingot_nether",
          "amount": 3
        },
        {
          "item": "techreborn:grinder",
          "amount": 1
        },
        {
          "item": "modern_industrialization:turbo_upgrade",
          "amount": 1
        },
        {
          "item": "botania:elementium_ingot",
          "amount": 1
        }
      ],

      "fluid_inputs": {
        "fluid": "techreborn:nitrogen",
        "amount" : 100
      },
      "item_outputs": [
        {
          "item": "croparia:collector",
          "amount": 1
        }
      ]
    });

      event.shaped("croparia:accelerator", ["ccc", "AtA", " g "],
        {
          c: "croparia:croparia2",
          A: "mythicmetals:adamantite_block",
          t: "croparia:collector",
          g: "gobber2:gobber2_ingot_end"
        });

      event.shaped("croparia:rf_meter", ["ccc", " w ", " m "],
        {
          c: "croparia:croparia",
          m: "additionaladditions:depth_meter",
          w: "modern_industrialization:aluminum_wire"
        });

      event.remove({ id: "croparia:battery" });
      event.shaped("croparia:battery", [" a ", "c c", " w "],
        {
          a: "modern_industrialization:battery_alloy_plate",
          c: "croparia:croparia3",
          w: "techreborn:lithium_ion_battery"
        });
      event.remove({ id: 'croparia:crop_generator'})
      event.shaped("croparia:crop_generator", ["c  ", "cgw", "c  "],
        {
          c: "croparia:croparia4",
          w: "croparia:wire",
          g: "extragenerators:enchanted_generator"
        });

      event.remove({ output:"croparia:wire"})
      event.shaped("croparia:wire", [" c "," q "," c "],
      {
          c: "minecraft:copper_ingot",
          q: "minecraft:quartz"
      });

      event.remove({ output:"croparia:insulated_wire"})
      event.shaped("croparia:insulated_wire", ["c  ", "w  "],
      {
          c: "croparia:rubber",
          w: "croparia:wire"
      });

      event.replaceInput({id:"croparia:rain_panel"}, "croparia:water_shard", "techreborn:basic_solar_panel")
  });