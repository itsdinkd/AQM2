/////////////////////////////////////////////////////////////////////////////////////////
// Another Quality Modpack 2 -- Server Instructions                                    //
// Discord: https://discord.gg/6MdUmwPXgE                                              //
// Shameless donate plug: https://www.paypal.com/donate?hosted_button_id=7R6UYF6EYT9KN //
/////////////////////////////////////////////////////////////////////////////////////////

NOTE: Back up your /world, always before updating.

Remember when updating; always delete the following folders from your actual server; /KubeJS, /mods, /configs
!You will then take the folders from this server pack and move to your server, this way you get rid of anything the update removed. 


Server Recommendations----------
Recommended Difficulty: HARD   -
Recommended Minimum Ram: 4gb   -
Recommended Maximum Ram: 6-8gb -
--------------------------------


Common Issues ----------------------------

Cannot start server locally (only if you want to host server on your computer) - if the start script doesn't download server.jar for you, download it and put it in the same folder as start scripts https://launcher.mojang.com/v1/objects/c8f83c5655308435b3dcf03c06d9fe8740a77469/server.jar
-------------------------------------------


Sections -----------------------------------------------------------
	i. Creating New World (Changing Seed)                           -
	ii. Setting Up Server Locally                                   -
	iii. Setting Up Server for Server Host/Dedicated                -
	IV. Setting up Ram                                              -
	V. https://discord.gg/6MdUmwPXgE                                -
                                                                    -
	New: You should now be able to change seed via normal methods   -
---------------------------------------------------------------------

Discord (AQM2 Support) ------------------------
https://discord.gg/TmqVme7Pb5                 -
-----------------------------------------------


///////////////////////////
// i. Creating New World //
///////////////////////////

For a server, you should be able to change seed via server.properties file. If this does not work, see below. 
NOTE: there is a issue with spawn chunks generating a completely different seed causing ugliness. If this occurs, generate your new world, stop server, delete files in world/region, turn server back on.

BACK UP SEED CHANGE INSTRUCTIONS (due to terralith)
If you are creating a new world, and you want to use a different seed (I picked a pretty good one for default)

Read the below sections, and then after launching serverstart, exit it when it starts to show typical minecraft server console stuff

1. Browse to newly placed kubejs\data\minecraft\dimension\overworld.json
2. open in text editor like Notepad++ or Sublime
3. Scroll to the bottom, change the "Seed" numbers to what you want
4. Save
5. Make sure world folder is empty as you need a new world
5. Run start.ps1 (or start your hosted server)



/////////////////////////////////////////////
// ii. How To Setup Server and Run locally //
/////////////////////////////////////////////

1. If you don't have it, INSTALL Java 17 (Need to install, not unzip)
WINDOWS: https://github.com/adoptium/temurin17-binaries/releases/download/jdk-17.0.1%2B12/OpenJDK17U-jdk_x64_windows_hotspot_17.0.1_12.msi
LINUX/MAC: https://adoptium.net/releases.html (Make sure 17 is toggled, and download and install it for your linux distro or mac that you use )

2a. Run start.ps1 (for windows)

2b. Run start.sh (for linux/mac)

3. Everything will download and initialize by itself. the EULA agreement will appear, you must type TRUE to continue once it does

4. Success. Server started. You will run Step 2 any time you want to launch your server


FOR MODPACK UPDATES: Make sure you continue deleting the mods folder, and kubejs folder before launching start to receive the latest updates. 



///////////////////////////////////////////////////////////////////
// iii. How to Setup and Launch Server from dedicated/vps server //
///////////////////////////////////////////////////////////////////

1. Follow steps 1-3 above

2. Move everything that was downloaded into your server like how you normally would

3. Thar jar file to launch your server is fabric-server-launch.jar, set your server to use this to launch it.

4. Success.


For future updates; Make sure you continue deleting the mods folder, and kubejs folder before migrating everything serverstart downloaded into your server root folder.




Need help? Visit our discord https://discord.gg/k88uKwNe6h


///////////////////////////////////////////////////////////////////
// iv. Allocating Ram to your Server //
///////////////////////////////////////////////////////////////////

1. Open server-starter-config.yaml

2. Scroll to the bottom until you see maxRam and minRam

3. change the # to how many gigabytes you want to allocate to your server. 

4. If you want 8 gb of ram it should look like this

			maxRam: 8G

			minRam: 8G

5. Save, Launch. 