### Another Quality Modpack v1.5.1


_Fabric Loader 0.14.18_  _[Mod Changes](https://github.com/itsdinkd/AQM2/blob/1.19.2/changelogs/changelog_mods_1.5.1.md)_ | _[Modlist](https://github.com/itsdinkd/AQM2/blob/1.19.2/changelogs/modlist_1.5.1.md)_

## ADDITIONS
- Powah (Better Energy Generation)
- Companion Bats (Spawn a bat companion and give him a class to do things like attack your mobs with certain skills)
- Lootr (Replaces MyLoot chests)
- Configured Data Fixer (Used to switch every MyLoot block into Lootr blocks. Now you can update and not have any chests missing.)
- Chefs Delight (Add-on for the Farmer's Delight mod. Adds 2 new professions to villagers. Cook and Chef.  To turn a villager into a Cook, you need a Skillet. The Cook trades simple food. To turn a villager into a Chef, you need a Cooking Pot. The Chef trades advanced foods.)
- BlameMod (Helps debugging)
- Added custom spawns into every better temple / pyramid
- Extra Thicc Packets
- Soulsweaponry adds new Trick weapons. press B while they're in hand to transform the weapon into another. Several trick weapons added. Adds Draupinir spear which can be thrown infinitely. Adds Darkin Scythe, a weapon that collects souls and distinguishes them between
Blue and Red based on whether they're ranged, hostile or non-hostile. When reaching 100% soul count, the weapon transforms into either the prime Darkin Scythe or the Shadow AssassinScyth.  The prime Darkin Scythe has the Omnivamp ability, making it heal the user post hit or on ability hit as long as it is not on cooldown. The Shadow Assassin Scythe gains the Shadow Step ability, granting the user bonus damage and movement speed post hit for a few seconds before going on cooldown.

## FIXED
- Crash that occurred with doom mobs and other mobs that use GeckoLib, caused by Chirpy's Wildlife. Removed Chirpy's Wildlife.  
- Rare Crash that occurred with Spectrum
- Critical AE2 Dupe Bug
- over 20 AE2 fixes
- Supplementary server crash due to bug
- Xaeros crashes
- Mine Cells server crash related to particles
- Traveler Backpack fixed memory slots not accepting items with different durability value
- Bug where enchants on Freyr Sword were lost

## CHANGED
- Villager Trade Cycling has been re-enabled. Mainly I enabled this to reduce performance issues when players create multiple villagers to get what they want ie; librarian.
- Cave mapping is more impactful and shows better details via Minimap / Worldmap
- Removed Emojiful due to impact on performance when typing commands that require a item name
- Mine Cells nerfed a few mobs that dashed, adds new weapons including Broadsword (Slow, hard hitting), Frost Blast (Freezes enemies in front of you), Phaser (Teleports you behind an enemy), Balanced Blade (Deals more damage with each consecutive attack), Crowbar (Destroys doors), Nutcracker (Deals crit to frozen and stunned enemies), adds status effects. The Vine Rune (Obtained in Promenande dimension/underground dungeon) is now required to enter the crypt (portal has been moved to another room), and new advancements.
- Tweaked dungeons arise structures to be less spread out
- Travelers Backpacks greatly reduces backpack on mob chance
- Increased Capybara spawn weight
- Soulsweaponry changes; The Old Champion gains more and more resistant against the player if the player is using the same weapon. This is where the new Trick Weapon comes into play, or just you having several different weapons. When the damage is being reduced, the hurt sound will change to hitting something
metal like. (Trick Weapons work great here to swiftly change between weapons to refresh the damage reduction!) It also has new attacks which are listed in this mods wiki. FRenzied Shade also has unique attacks and will split in 5 summoning 4 new decoys that have 1/4 life of the original + less damage.
- Changed Negative EPIC Tiered values to positive values
- Increased chances to get spoorn weapon attributes (Fire, poison, life leach, etc) by 500-1000% (it was way too low before)
- Buffed even more souls weaponry weapons
- re-enabled HP bars
- Re-enabled lithiums AI Pathing mixin... hopefully no crashes.

## REMOVED
- MyLoot (great mod however there are some issues that exist when used in this pack. Lootr will replace it.)
- mAmbience (Causes crashes and performance issues)
- Chirpys Wildlife (Removed until author fixes geckolib dependency)
- Just Enough Calculation
- Emojiful (Caused performance issues)
- Witcher Origin (This mod caused crashes + performance spikes)
- More Axolotl Variants Mod (Attempt to reduce spawning pool allowing other mobs to spawn. This mod is not needed)
- XL Packets
- VillagerConfig (Trade lock removed)
---


### Another Quality Modpack v1.5


_Fabric Loader 0.14.18_  _[Mod Changes](https://github.com/itsdinkd/AQM2/blob/1.19.2/changelogs/changelog_mods_1.5.md)_ | _[Modlist](https://github.com/itsdinkd/AQM2/blob/1.19.2/changelogs/modlist_1.5.md)_

## ADDITIONS
- New dimension from MineCells; Promenade of the Condemned. Prison now has a barrier wall in spawn room and the crypt portal room will lead to the new dimension. Adds 3 new mobs, 6 new blocks
- New boss from Archon mod; Inigo. It drops a charred eye which can be used to craft a new armor called Infernal Coat. Press '.' keybind to activate the ability (changeable in keybinds). Adds Hasten enchantment. adds compatibility from Bewitchment and Hexcasting channeling. Adds spell power crit chance and damage compatibility
- YoFPS Shader (For low end computers to improve performance and FPS)
- Solas Shader (Beautiful illumination and adds colored lighting)

## FIXED
- Create fixes several crashes including ones with Modern Dynamic, Deployers, and more.
- Duping xp nuggets via dank storage
- Advanced Reborn fixes renaming machine, and a few other small fixes
- Brewin and Chewin is now compat with REI  
- AQM items are now fire resistant to make indestructible
- Soulsweapons Verglas nad Moonstone are now fire resistant
- BOMD Gauntlet and Obsilidith will now have its gems and moonstone generate in the chest instead of on the ground (the explosion destroyed them)
- Wrong MinePops (Somehow CF launcher added the Forge mod, not Fabric)
- Modern Industrialization Quarrys will now show available ore for drills. issue was due to the output recipe requiring Modern Industrialization ores, but some were disabled. they've mostly been removed from the recipe, and the ones that have tech reborn variants (For the most part) the quarry will now have a chance to generate them
- Toms Storage now works with Tall Mode for terminal UI
- MI pipes not being movable with AE2 Spatial IO, animated textures, incorrect tags on dye recipes generation
- Guard Villager Armor Duping, also preventing swords being placed in item frames. fixes HitResult bug
- MCSA shift clicking armor crash

## CHANGED
- Switched CheckOffline to false for server starter to prevent any conflictions with firewall blocking the script offline checker
- Immersive Aircraft now has better fueling system. Also accepts gobber foo as a fuel type, otherwise you would use blaze powder
- ME Requestor adds new status for missing ingredients and adds ability to copy-paste settings with a memory card
- Removed a compat recipe from Indrev/Mi for Quarry to receive nikolite ore from a cable
- Removed advanced reborns solar generators since they... do not work 
- Updated AstraLex, BSL, Complementary, Rethinking Voxels, 
---


### Another Quality Modpack v1.4.4hf


_Fabric Loader 0.14.18_  _[Mod Changes](https://github.com/itsdinkd/AQM2/blob/1.19.2/changelogs/changelog_mods_1.4.4hf.md)_ | _[Modlist](https://github.com/itsdinkd/AQM2/blob/1.19.2/changelogs/modlist_1.4.4hf.md)_

## FIXED
- Conduit GUI Dark Enchanting
- Visiting End causing crash (was fixed in 1.4.3hf but somehow reverted in 1.4.4)
- Hexal mixin error
- Repurposed Structures invalid structure warning fixed in ancient cities
- Step height not scaling correctly
---



### Another Quality Modpack v1.4.4


_Fabric Loader 0.14.18_  _[Modlist](https://github.com/itsdinkd/AQM2/blob/1.19.2/changelogs/modlist_1.4.4.md)_

## CHANGED
- Reworked MEGA Crafting Unit recipe to use stock AE2 crafting units
- Bridging Mod is removed because we already have the reach around mod.. doh
- Re-enabled Indrev Steel equipment recipes so you can now craft modular armor
- Disabled another lithium mixin as it caused Watchdog fluid crashes. alloc.chunk_ticking

## FIXED
- Tiered screen crash
- Calibrator Expert Accessor recipe
- EmoteCraft bug with lib
- no quest editing via keyboard shortcuts when not in edit mode
- Several bug fixes from Hexal including wisp casting in other dimensions, and a dupe bug
- Unlimited quest shop rewards without consuming payment
---
